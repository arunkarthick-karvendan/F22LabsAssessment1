import { promises as fs } from "fs";
import { FileResult } from "./Interface";

class FileService {
  constructor(private paths: string[]) {}

  private async simulateDelay(): Promise<void>{
    const delay = Math.floor(Math.random() * 300) + 200;
    return new Promise((res) => setTimeout(res, delay))
  }

  private async processFile(path: string) {
    try {
      const content = await fs.readFile(path, "utf-8");
      let parsed: any;

      try {
        parsed = JSON.parse(content);
      } catch (err) {
        return {
          path,
          success: false,
          error: "Invalid JSON",
        };
      }

      parsed.processedAt = new Date().toISOString();

      await this.simulateDelay();

      return {
        path,
        success: true,
        data: parsed,
      };
    } catch (error: any) {
      return {
        path,
        success: false,
        error: error.message,
      };
    }
  }

  public async processFiles(): Promise<FileResult[] | any> {
    const tasks: any = this.paths.map((path) => {
      this.processFile(path);
      return Promise.all(tasks);
    });
  }
}

(async () => {
  const processer = new FileService([
    "file1.json",
    "file2.json",
    "invalid.json",
  ]);
  const results = await processer.processFiles();
  console.log("Async Process File Results:", results);
})();
