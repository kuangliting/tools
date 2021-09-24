const args = require('minimist')(process.argv.slice(2))
const fs2 = require('fs-extra')
let fs = require('fs');
const path = require('path')
const chalk = require('chalk')
const semver = require('semver')
//const currentVersion = require('../package.json').version;

const {
    ditEnumPath,
    sourceDir,
    sourceFiles
} = require("../config");

const creator = require("./create");
//console.log(sourceDir, sourceFiles);

let source = path.resolve(sourceDir);
sourceFiles.forEach(cfg => {
    if (cfg.isAll) {
        let dir = path.resolve(sourceDir, cfg.dir);
        let files = fs.readdirSync(dir);
        files.forEach((x) => {
            // console.log('有' + x + '这个文件');
            creator(dir, x);
        })
    }
})

fs2.copySync(path.resolve(__dirname, "enum"), ditEnumPath);