// let fs = require('fs');
// let files = fs.readdirSync(".");
// console.log(files);
// files.forEach(item=>{
//     console.log(fs.statSync(item).isDirectory())
// })

console.log('ActivatePackageResult'.indexOf('Result'))

function parseFBig(str) {
    return str.replace(/(^|_)([a-z])/g, (a, b, c) => {
        return c.toUpperCase()
    });
}
function parseBig(str) {
    return str.replace(/(_)([a-z])/g, (a, b, c) => {
        return c.toUpperCase()
    });
}
function fsamll(str) {
    return str.replace(/^([A-Z])/, (a, b) => {
        return b.toLowerCase()
    });
}
console.log(parseFBig("hsh_dskdks_sjdjs"))
console.log(parseBig("hsh_dskdks_sjdjs"))
console.log(fsamll("UdkadJdad"))