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
//console.log(compressing);
//压缩
const preId =
  args.preid ||
  (semver.prerelease(currentVersion) && semver.prerelease(currentVersion)[0])
const isDryRun = args.dry

const versionIncrements = [
  'patch',
  'minor',
  'major',
]
const templist = [
  'no temperature',
  'temperature',
  'both',
]

const inc = i => semver.inc(currentVersion, i, preId);
const bin = name => path.resolve(__dirname, '../node_modules/.bin/' + name)
const run = (bin, args, opts = {}) =>
  execa(bin, args, {
    stdio: 'inherit',
    ...opts
  })
const dryRun = (bin, args, opts = {}) =>
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`), opts)

//  console.log("isDryRun = ",isDryRun);
const runIfNotDry = isDryRun ? dryRun : run
//const getPkgRoot = pkg => path.resolve(__dirname, '../packages/' + pkg)
//const step = msg => console.log(chalk.cyan(msg))

async function main() {

  // const {stdout} = await execa('echo', ['unicorns']);
  // console.log(stdout);
  const {
    spawn
  } = require('child_process');
  const ls = spawn('ls', ['-lh', '/usr']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

}

main().catch(err => {
  console.error(err)
})
