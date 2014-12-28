var fs = require('fs'),
buffer = fs.readFileSync(process.argv[2]),
str = buffer.toString(),
lineCount = str.split('\n').length-1;
console.log(lineCount);