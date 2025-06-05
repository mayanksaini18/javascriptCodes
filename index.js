
const fs = require('fs');

let fileContent = fs.readFileSync('a.txt', 'utf8');
console.log(fileContent);
