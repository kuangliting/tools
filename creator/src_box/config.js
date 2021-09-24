let Path = require("path");
let distDir = 'C:/code/box_web';
module.exports = {
    sourceDir: "C:/code/baidu/personal-code/protobuf-box",
    webProtoFile: "./proto_js/webproto.js",
    sourceFiles: [{
        dir: "./protobuf/config",
        isAll: true,
    }],
    targetDir: distDir,
    distProtoDir: Path.resolve(distDir, "./src/views/create-code/proto"),
    distWebProtoFile: Path.resolve(distDir, "./public/webproto.js"),
    ditEnumPath: Path.resolve(distDir, "./src/utils/enum_new"),
}