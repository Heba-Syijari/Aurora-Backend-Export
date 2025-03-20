import bodyParser from "body-parser";
import express, { Application } from "express";
import { routes } from "./routes";

export class App {
  private static _instance: App;
  private app: Application;
  private port: number = 3001;

  private constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.loadRoutes();
  }

  static getInstance(): App {
    if (!this._instance) {
      this._instance = new App();
    }

    return this._instance;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json({ limit: "2mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));
  }

  private loadRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Welcome to Canva Blocks website exporter");
    });

    routes.forEach((route) => {
      this.app.use(route.instance);
    });
  }

  run() {
    this.app.listen(this.port, () => {
      console.log(`Running on http://localhost:${this.port}`);
    });
  }
}
