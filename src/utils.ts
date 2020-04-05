import { writeFile, readFileSync } from "fs";
import { basename } from "path";

function read(path: string): string {
  let result = readFileSync(path);
  return result.toString();
}

function write(path: string, str: string): void {
  writeFile(path, str, err => {
    handleError(err);
    console.log(`Convert ${basename(path)} okay`);
  });
}
function handleError(err: null | Error) {
  if (err) {
    console.error(err);
  }
}

export { read, write };
