"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
function read(path) {
    var result = fs_1.readFileSync(path);
    return result.toString();
}
exports.read = read;
function write(path, str) {
    fs_1.writeFile(path, str, function (err) {
        handleError(err);
        console.log("Convert " + path_1.basename(path) + " okay");
    });
}
exports.write = write;
function handleError(err) {
    if (err) {
        console.error(err);
    }
}
