const args = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const fs2 = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const semver = require('semver')
const currentVersion = require('../package.json').version

const {
    prompt
} = require('enquirer')
const execa = require('execa')
const compressing = require("compressing");
const step = msg => console.log(chalk.cyan(msg));
//console.log(compressing);
const run = (bin, args, opts = {}) =>
    execa(bin, args, {
        stdio: 'inherit',
        ...opts
    })

async function updateGithub() {
    const config = require('./config.js');
    step('\npull proto codes...')
    await run('git', ['pull'], {
        stdio: 'pipe',
        cwd: config.sourceDir
    })

    const entryPath = path.resolve(config.sourceDir, config.webProtoFile)
    const distPath = config.distWebProtoFile
    //console.log(distPath);
    fs2.removeSync(distPath)
    fs2.copyFileSync(entryPath, distPath)
}

updateGithub().catch(err => {
    console.error(err)
});