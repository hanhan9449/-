#!/usr/bin/env node
import { read, write } from "./utils";

export const FILE_PATH = process.argv[2];

function main(filePath: string) {
  const data = read(filePath);
  const convertedData = convert(data);
  write(filePath, convertedData);
}

main(FILE_PATH);

export function convert(str: String) {
  let result = str
    .trim()
    .replace(/\s+/g, " ")
    .replace(/ *, */g, ", ")
    .replace(/ *([.!?]) */g, "$1\n");
  return result;
}
