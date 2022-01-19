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

function dirCreator(dir) {
    let files = fs.readdirSync(dir);
    // console.log(files);
    // console.log(dir);
    //console.log("fs.statSync(item).isDirectory()", fs.statSync(files[0]).isDirectory())
    files.forEach((item) => {
        let fullItem = path.resolve(dir, item)
        //console.log(fs.statSync(fullItem).isDirectory())
        if (fs.statSync(fullItem).isDirectory()) {
            //console.log("999999999999999999")
            dirCreator(fullItem)
        } else {
            console.log("\n--------------begin-----creator-------------------")
            creator(dir, item);
        }
        //console.log(fs.statSync(item).isDirectory())
    });
}

sourceFiles.forEach(cfg => {
    if (cfg.isAll) {
        let dir = path.resolve(sourceDir, cfg.dir);
        console.log("\n\n****************begin***dirCreator****************************")
        dirCreator(dir)
    }
})

fs2.emptyDirSync(ditEnumPath);
fs2.copySync(path.resolve(__dirname, "enum"), ditEnumPath);