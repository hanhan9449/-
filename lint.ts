#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

const target = process.argv[2];

fs.readFile(target, (err, data) => {
  handleError(err);
  const result = data
    .toString()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/ *[.!?] */g, ".\n");
  fs.writeFile(target, result, () => {
    console.log(`Convert ${path.basename(target)} okay`);
  });
});

function handleError(err: Error) {
  if (err) {
    console.error(err);
  }
}
