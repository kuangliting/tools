const compressing = require("compressing");
const path = require("path");

//console.log(compressing);
//压缩

compressing.zip.compressDir(path.resolve(__dirname,"../build"),path.resolve(__dirname,"../release/build.zip"))
.then(() => {
    console.log('zip','success');
})
.catch(err => {
    console.error('zip',err);
});