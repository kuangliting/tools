const fs = require("fs");
const fs2 = require("fs-extra");
const path = require("path");
const entryConfig = require("./config");
const {
  sourceDir,
  distProtoDir
} = entryConfig;
const baseUrl = path.resolve(sourceDir);
let config = {
  distDir: path.resolve(__dirname, './dist'),
  distFile: path.resolve(__dirname, './dist/action.js'),
  entry: {
    modules: path.resolve(sourceDir, './modules'),
  },
}

// /\*\*((\n)(.+))+\*/
class ProtoToJsBuilder {
  constructor() {
    this.entryPath = config.entry.modules;
    this.sum = 0;
    this.modules = {};
    this.modulesMap = {};
    this.using;
    this.run();
  }
  run() {
    this.dirCreator(this.entryPath);
  }
  dirCreator(entryPath) {
    let files = fs.readdirSync(entryPath);
    files.forEach((item) => {
      let fullItem = path.resolve(entryPath, item)
      if (fs.statSync(fullItem).isDirectory()) {
        //console.log("999999999999999999")
        this.dirCreator(fullItem)
      } else {
        //console.log("\n--------------begin-----creator-------------------")
        //creator(dir, item);
        this.parseProto(entryPath, item);
        //console.log(entryPath, item)
      }
      //console.log(fs.statSync(item).isDirectory())
    });
  }
  parseProto(dir, item) {
    if (this.sum > 2) {
      return;
    }
    this.sum++;
    let fileStr = fs.readFileSync(path.resolve(dir, item), {
      encoding: 'utf-8'
    });
    //fileStr = this.removeAnnotation(fileStr);
    // fileStr = this.parsePackage(fileStr);
    fileStr = this.parseImport(fileStr);
    //console.log(fileStr)
  }
  addMoudles(moduleName, name, definedObj) {
    if (!this.modules.hasOwnProperty(moduleName)) {
      this.modules[moduleName] = Object.create(null);
      this.modules[moduleName].name = moduleName;
      this.using = moduleName;
    }
    if (arguments.length > 1) {
      this.modules[moduleName][name] = definedObj;
    }
  }
  addImports(imports) {
    this.modules[moduleName].imports = imports;
  }
  removeAnnotation(fstr) {
    let annotationExp = /\/\*\*(\n|.|\r)+?\*\//gm
    return fstr.replace(annotationExp, function () {
      //console.log("0000000000000000000");
      return ""
    })
  }
  parsePackage(fstr) {
    let packageExp = /\s*package\s*((\.|\w)+);/;
    let addMoudles = this.addMoudles.bind(this);
    return fstr.replace(packageExp, function (all, pck) {
      let name = pck.trim().slice(pck.lastIndexOf(".") + 1);
      addMoudles(name);
      //console.log(arguments);
      return ""
    })
  }
  parseImport(fstr) {
    let importExp = /\s*import\s+"((\/|\w|\.)+)"/;
    let importList = [];
    fstr = fstr.replace(importExp, function (all, name) {
      //let name = pck.trim().slice(pck.lastIndexOf(".") + 1);
      console.log(name);
      importList.push(importList);
      //addMoudles(name);
      //console.log(arguments);
      return ""
    })
    this.addImports(importList);
    return fstr
  }
  parseEnum(fstr) {
    let enumExp = /enum\s+(\w+)\s*\{([\n\s\S]*?)\}/g;
    let enumlist = [];
    fstr = fstr.replace(enumExp, function (a, b, c) {
      let name = b.trim();
      enumlist.push(name);
      return "";
    })

  }
  parseMessage(fstr) {
    let enumExp = /enum\s+(\w+)\s*\{([\n\s\S]*?)\}/g;
    let messageMap = {};
    fstr = fstr.replace(enumExp, function (a, b, c) {
      let name = b.trim();
      enumlist.push(name);
      return "";
    })

  }
}

new ProtoToJsBuilder();