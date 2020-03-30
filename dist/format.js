#!/usr/bin/env node
'use strict'
exports.__esModule = true
var utils_1 = require('../src/utils')
exports.FILE_PATH = process.argv[2]
function main (filePath) {
  var data = utils_1.read(filePath)
  var convertedData = convert(data)
  utils_1.write(filePath, convertedData)
}
main(exports.FILE_PATH)
function convert (str) {
  var result = str
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/ *, */g, ', ')
    .replace(/ *([.!?]) */g, '$1\n')
  return result
}
exports.convert = convert
