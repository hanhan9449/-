#! /usr/bin/env node
const fs = require('fs')
const path = require('path')

let target = process.argv[2]

// fs.readFile(target, removeSpace)
console.log(target);


function mixRemoveAndSplit(err, data) {
    
}
function removeSpace(err, data) {
    handleError(err)
    console.log(data);
    
}
function entireToSentence(err, data) {
    handleError(err)
}
function handleError(err) {
    if (err) {
        console.error(err);
    }
}
