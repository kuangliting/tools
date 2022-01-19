let fs = require('fs');
let files = fs.readdirSync(".");
console.log(files);
files.forEach(item=>{
    console.log(fs.statSync(item).isDirectory())
})