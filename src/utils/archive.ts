import fs from "fs";
import archiver from "archiver";

/**
 * @param {string} sourceDir: /some/folder/to/compress
 * @param {string} outPath: /path/to/created.zip
 */
export function zipDirectory(
  sourceDir: string,
  outPath: string
): Promise<void> {
  const archive = archiver("zip");
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on("error", (err) => reject(err))
      .pipe(stream);

    stream.on("close", () => resolve());
    archive.finalize();
  });
}
