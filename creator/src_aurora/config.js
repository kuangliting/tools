let Path = require("path");
let distDir = 'C:/code/baidu/personal-code/aurora_web';
module.exports = {
    sourceDir: "C:/code/baidu/AIPD/edgeflow/proto",
    webProtoFile: "./build_js/webproto.js",
    sourceFiles: [{
        dir: "./ai",
        isAll: true,
    },{
        dir: "./core",
        isAll: true,
    },{
        dir: "./modules",
        isAll: true,
    }],
    targetDir: distDir,
    distProtoDir: Path.resolve(distDir, "./src/views/create-code/proto"),
    distWebProtoFile: Path.resolve(distDir, "./public/webproto.js"),
    ditEnumPath: Path.resolve(distDir, "./src/utils/enum"),
}