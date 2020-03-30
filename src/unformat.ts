#!/usr/bin/env node
import { read, write } from "./utils";

const FILE_PATH = process.argv[2];
function main(filePath: string) {
  const data = read(filePath);
  const convertedData = convert(data);
  write(filePath, convertedData);
}
function convert(str: string): string {
  return str.replace(/\n/g, " ");
}
main(FILE_PATH);
