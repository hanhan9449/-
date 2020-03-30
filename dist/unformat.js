#!/usr/bin/env node
'use strict'
exports.__esModule = true
var utils_1 = require('../src/utils')
var FILE_PATH = process.argv[2]
function main (filePath) {
  var data = utils_1.read(filePath)
  var convertedData = convert(data)
  utils_1.write(filePath, convertedData)
}
function convert (str) {
  return str.replace(/\n/g, ' ')
}
main(FILE_PATH)
