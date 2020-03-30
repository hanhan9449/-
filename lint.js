#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var target = process.argv[2];
fs.readFile(target, function (err, data) {
    handleError(err);
    var result = data
        .toString()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/ *[.!?] */g, ".\n");
    fs.writeFile(target, result, function () {
        console.log("Convert " + path.basename(target) + " okay");
    });
});
function handleError(err) {
    if (err) {
        console.error(err);
    }
}
