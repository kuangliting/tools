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
const runIfNotDry = isDryRun ? dryRun : run
//const getPkgRoot = pkg => path.resolve(__dirname, '../packages/' + pkg)
const step = msg => console.log(chalk.cyan(msg))

async function main() {
  let targetVersion = args._[0]

  if (!targetVersion) {
    // no explicit version, offer suggestions
    const {
      release
    } = await prompt({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: versionIncrements.map(i => `${i} (${inc(i)})`).concat(['custom'])
    })

    if (release === 'custom') {
      targetVersion = (await prompt({
        type: 'input',
        name: 'version',
        message: 'Input custom version',
        initial: currentVersion
      })).version
    } else {
      targetVersion = release.match(/\((.*)\)/)[1]
    }
  }

  // const {
  //   temp
  // } = await prompt({
  //   type: 'select',
  //   name: 'release type',
  //   message: 'Is temperature measurement supported',
  //   choices: templist.map(i => `${i} (${inc(i)})`)
  // })

  if (!semver.valid(targetVersion)) {
    throw new Error(`invalid target version: ${targetVersion}`)
  }

  const {
    yes
  } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `Releasing v${targetVersion}. Confirm?`
  })

  if (!yes) {
    return
  }
  step('\nBuilding code...')
  await run(`yarn`, ['build:prod'])

  step('\nUpdating cross dependencies...')
  updateVersions(targetVersion)

  step('\nCompressing build...')
  await compressBuild(targetVersion)
  await writeVersion(path.resolve(__dirname, '.'), targetVersion);

  const {
    stdout
  } = await run('git', ['diff'], {
    stdio: 'pipe'
  })
  if (stdout) {
    step('\npull codes...')
    await runIfNotDry('git', ['pull'])

    step('\nCommitting changes...')
    await runIfNotDry('git', ['add', '-A'])
    await runIfNotDry('git', ['commit', '-m', `release: v${targetVersion}`])
  } else {
    console.log('No changes to commit.')
  }

  // push to GitHub
  step('\nPushing to GitHub...')
  await runIfNotDry('git', ['tag', `v${targetVersion}`])
  await runIfNotDry('git', ['push', 'origin', `refs/tags/v${targetVersion}`])
  await runIfNotDry('git', ['push'])
  step('\nPushing to release branch...')
  await releaseDist(targetVersion);

  if (isDryRun) {
    console.log(`\nDry run finished - run git diff to see package changes.`)
  }
}

async function releaseDist(targetVersion) {
  const  distPath =  require('./dist-path.js').distPath;

  await runIfNotDry('git', ['pull'], {
    stdio: 'pipe',
    cwd: distPath
  })

  let str = `#pragma once
  #define WEB_VERSION "${targetVersion}"`;
  fs.writeFile(distPath + '/web_version.h', str, function (error) {
    if (error) {
      console.log('写入失败')
    }
  })
  updatePackage(path.resolve(distPath, 'build'), targetVersion)

  try {
    await fs2.emptydir(path.resolve(distPath, 'build'));
    await fs2.copy(path.resolve(__dirname, '../build'), path.resolve(distPath, 'build'))
  } catch (err) {
    console.error(err)
  }

  await runIfNotDry('node', [path.resolve(distPath,'release.js'), targetVersion], {
    stdio: 'pipe',
    cwd: distPath
  })
}


function updateVersions(version) {
  // update root package.json
  updatePackage(path.resolve(__dirname, '.'), version)
}

function updatePackage(pkgRoot, version) {
  const pkgPath = path.resolve(pkgRoot, '../package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
}
async function writeVersion(pkgRoot, targetVersion) {
  let str = `#define WEB_VERSION "${targetVersion}"`;
  fs.writeFile(path.resolve(pkgRoot, '../web_version.h'), str, function (error) {
    if (error) {
      console.log('写入失败');
    }
  })
}

async function compressBuild(targetVersion) {
  fs2.removeSync(path.resolve(__dirname, "../release"))
  fs2.ensureDirSync(path.resolve(__dirname, "../release"));
  await compressing.zip.compressDir(
    path.resolve(__dirname, "../build"), 
    path.resolve(__dirname, `../release/build${targetVersion}.zip`),
  )
}

main().catch(err => {
  console.error(err)
})
