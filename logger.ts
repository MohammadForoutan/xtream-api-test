import fs from "node:fs";
import path from "node:path";

type LogOptions = {
  inConsole: boolean;
};

export class Logger {
  private logFile: string;

  constructor() {
    const logsDir = path.join(process.cwd(), "logs");

    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    this.logFile = path.join(
      logsDir,
      `${new Date().toISOString().replace(/:/g, "-")}.log`
    );
  }

  log(message: any, opt: LogOptions = { inConsole: true }): void {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${JSON.stringify(message)}\n`;

    fs.appendFile(this.logFile, logMessage, (err) => {
      if (err) {
        console.error("Error writing to log file", err);
      }
    });

    if (opt.inConsole) {
      console.log(message);
    }
  }
}
