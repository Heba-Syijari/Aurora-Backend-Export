import { exec } from "child_process";

export async function execCommand(command: string) {
  return new Promise((resolve, reject) => {
    const child = exec(command);

    child.on("error", (error) => {
      console.error("Error: ", error);
    });

    child.stderr?.on("data", (data) => {
      console.error(data);
    });

    child.stdout?.on("data", (data) => {
      console.log(data);
    });

    child.on("exit", (code) => {
      if (code !== 0) {
        reject("Command failed with exit code: " + code);
      } else {
        resolve("Command is done successfully");
      }
    });
  });
}
