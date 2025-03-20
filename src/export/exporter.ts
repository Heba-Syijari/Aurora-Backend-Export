import { Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { FRONTEND_API_HOST_URL } from "../config";
import { IData } from "../types";
import { zipDirectory } from "../utils/archive";
import { execCommand } from "../utils/exec";

export class Exporter {
  private readonly projectFolderName: string;
  private readonly projectFolderPath: string;
  private readonly jsonFilePath: string;
  private readonly generatedDirPath: string;
  private readonly outputFilePath: string;

  constructor(private readonly data: IData) {
    const { project } = this.data;

    this.projectFolderName = `${project.id}_${Date.now()}`;
    this.projectFolderPath = path.resolve(this.projectFolderName);
    this.jsonFilePath = path.join(this.projectFolderPath, "src/data/data.json");
    this.generatedDirPath = path.join(this.projectFolderPath, "out");
    this.outputFilePath = path.resolve(
      `output/project_${this.projectFolderName}.zip`
    );
  }

  public async export() {
    await this.makeACopyForTheProject();
    console.log(`A copy for [${this.data.project.id}] is created`);

    await this.storeProjectDataInJSONFile();
    console.log(`JSON file for [${this.data.project.id}] is created`);

    await this.buildProject();
    console.log(`The build for [${this.data.project.id}] is done`);

    await this.compressProjectGeneratedFiles();
    console.log(`Files compression for [${this.data.project.id}] is done`);
  }

  private async makeACopyForTheProject(): Promise<void> {
    const name = this.projectFolderName;
    const command = [
      `tar -C frontend -cf ${name}.tar --exclude=node_modules .`,
      `mkdir ${name} && tar -xf ${name}.tar -C ${name}`,
      `rm -rf ${name}.tar`,
    ].join(" && ");

    await execCommand(command);

    this.createSymlinkForNodeModules();
  }

  private createSymlinkForNodeModules(): Promise<void> {
    const target = path.resolve("frontend", "node_modules");
    const destination = path.join(this.projectFolderPath, "node_modules");

    const type = process.platform === "win32" ? "junction" : "dir";

    return new Promise((resolve, reject) => {
      fs.symlink(target, destination, type, (error) => {
        if (error) {
          reject(error.message);
        } else {
          resolve();
        }
      });
    });
  }

  private storeProjectDataInJSONFile(): Promise<void> {
    return new Promise((resolve, reject) => {
      const json = JSON.stringify(this.data);
      fs.writeFile(this.jsonFilePath, json, "utf8", (error) => {
        if (error) {
          reject(error.message);
        } else {
          resolve();
        }
      });
    });
  }

  private async buildProject(): Promise<void> {
    const command = this.getBuildProjectCommand(this.data.project.id);

    await execCommand(command);
  }

  private getBuildProjectCommand(projectId: string): string {
    const cdCommand = `cd ${this.projectFolderName}`;

    if (process.platform === "win32") {
      return [
        cdCommand,
        `set "NEXT_PUBLIC_PROJECT_ID=${projectId}"`,
        `set "NEXT_PUBLIC_RESTFUL_HOST_API=${FRONTEND_API_HOST_URL}"`,
        "npm run build",
      ].join(" && ");
    }

    const nextBuildCommands = [
      `NEXT_PUBLIC_PROJECT_ID=${projectId}`,
      `NEXT_PUBLIC_RESTFUL_HOST_API=${FRONTEND_API_HOST_URL}`,
      "npm run build",
    ].join(" ");

    return `${cdCommand} && ${nextBuildCommands}`;
  }
  private async compressProjectGeneratedFiles(): Promise<void> {
    if (!fs.existsSync(this.generatedDirPath)) {
      console.log(`The directory to compress does not exist.`);
      throw new Error("The directory to compress does not exist.");
    }

    const files = fs.readdirSync(this.generatedDirPath);
    if (files.length === 0) {
      console.log(`The directory is empty. Nothing to compress.`);
      throw new Error("The directory is empty. Nothing to compress.");
    }

    try {
      await zipDirectory(this.generatedDirPath, this.outputFilePath);
    } catch (error) {
      console.error("Error compressing files:", error);
      throw new Error("Failed to compress files.");
    }
  }

  public async writeFileStream(destination: Response) {
    const stat = fs.statSync(this.outputFilePath);

    destination.writeHead(200, {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="output.zip"',
      "Content-Length": stat.size,
    });

    const readStream = fs.createReadStream(this.outputFilePath);

    readStream.on("error", (error) => {
      console.error("Error reading file:", error);
      destination.writeHead(500, { "Content-Type": "text/plain" });
      destination.end("Internal Server Error");
    });
    readStream.pipe(destination);
  }

  public async cleanup() {
    console.log("Cleaning up...");

    const projectFolderPath = this.projectFolderPath;
    const zipFilePath = this.outputFilePath;

    const command = `rm -rf ${projectFolderPath} ${zipFilePath}`;

    await execCommand(command);

    console.log("Cleanup is done");
  }

  getProjectData(): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonFilePath, (error, data) => {
        if (error) {
          reject(error.message);
        } else {
          resolve(JSON.parse(data.toString()));
        }
      });
    });
  }
}
