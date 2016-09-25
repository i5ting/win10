#!/usr/bin/env node

var argv = process.argv;
argv.shift();

var a = argv[1];
var r = []

for (var i in a) {
  r.push(a[i] + '' + a[i])
}

console.log(r.join(''))