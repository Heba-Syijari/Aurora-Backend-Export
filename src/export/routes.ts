import async from "async";
import Joi from "joi";
import { Router, RouterHandler } from "../routes/router";
import { Exporter } from "./exporter";
const router = new Router();

router.get("/export", (req, res) => {
  res.send("Hello from exporter route");
});

router.get("/project/:id", async (request, response) => {
  try {
    const exporter = new Exporter({
      project: { id: request.params.id },
      menus: [],
    });

    const project = await exporter.getProjectData();

    response.json(project);
  } catch (error) {
    response.json({ error });
  }
});

const exportMiddleware: RouterHandler = (request, response, next) => {
  const schema = Joi.object({
    data: Joi.required(),
  }).required();

  const { error } = schema.validate(request.body);

  if (!error) {
    next();
  } else {
    console.log({ error });
    response.status(400).json({ error: "Error occuered" });
  }
};

const queue = async.queue(
  async (task: { data: any; response: any }, callback: () => void) => {
    const { data, response } = task;

    const exporter = new Exporter(data);
    try {
      await exporter.export();
      exporter.writeFileStream(response);
    } catch (error) {
      response
        .status(500)
        .json({ error: "An error occurred during processing." });
    } finally {
      // await exporter.cleanup();
      callback();
    }
  },
  1
);

router.post("/export", exportMiddleware, (request, response) => {
  const { data } = request.body;
  queue.push({ data, response }, (err: any) => {
    if (err) {
      console.error(err);
      response.status(500).json({
        error: "An error occurred while adding the task to the queue.",
      });
    }
  });
});

export { router as exportRouter };
