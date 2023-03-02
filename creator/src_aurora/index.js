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
  constructor(modules) {
    this.modules = modules;

    modules.forEach(m => {

      this.dirCreator(m);
    })
  }
  dirCreator(entryPath) {
    let code = ""
    let files = fs.readdirSync(entryPath);
    let distFileName = entryPath.slice(entryPath.lastIndexOf("\\") + 1) + ".js";
    let distPath = path.resolve(__dirname, "dist", distFileName);
    //console.log(distPath, distFileName)

    let r = "";
    let c = "";
    files.forEach((item) => {
      let fullItem = path.resolve(entryPath, item)
      if (fs.statSync(fullItem).isDirectory()) {
        this.dirCreator(fullItem)
      } else {
        const {
          rStr,
          codeStr
        } = this.parseProto(entryPath, item);
        r = r + rStr;
        c = c + codeStr;
      }
      //console.log(fs.statSync(item).isDirectory())
    });
    fs2.ensureFileSync(distPath);
    fs.writeFileSync(distPath, "");
    fs.appendFileSync(distPath, c + `return {
      ${r}
    }`);
  }
  parseProto(dir, item) {
    if (this.sum > 2) {
      return;
    }
    this.sum++;
    let fileStr = fs.readFileSync(path.resolve(dir, item), {
      encoding: 'utf-8'
    });
    fileStr = this.removeAnnotation(fileStr);
    return this.parseContent(fileStr)
    //console.log(fileStr)
  }
  removeAnnotation(fstr) {
    let annotationExp = /\/\*\*(\n|.|\r)+?\*\//gm
    return fstr.replace(annotationExp, function () {
      //console.log("0000000000000000000");
      return ""
    })
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
  parseFBig(str) {
    return str.replace(/(^|_)([a-z])/g, (a, b, c) => {
      return c.toUpperCase()
    });
  }
  parseBig(str) {
    return str.replace(/(_)([a-z])/g, (a, b, c) => {
      return c.toUpperCase()
    });
  }
  getResultCode(messageName, c) {
    let propList = [];
    c.trim().split('\n').forEach(line => {
      if (!line.trim()) {
        return;
      }
      let items = line.split(";");
      let v_k = items[0].split(" = ");
      let key = v_k[0].trim();
      if (key.indexOf("//") == -1) {
        let value = v_k[1];
        let desc = "";
        if (items.length > 1) {
          desc = items[1].replace("//", "").trim();
        }

        let first = key.split(" ");
        let type = first[0].trim();

        let propName = first[1] ? first[1].trim() : "";
        if (type === 'repeated') {
          type = propName;
          propName = first[2] ? first[2].trim() : "";
        }
        propList.push(propName);
      }
    })
    let inner = "";
    //console.log(propList);
    propList.forEach(p => {
      //console.log(inner);
      if (p === 'result' || p === '') {
        return
      }
      let str = `const ${this.parseBig(p)} = data.${this.parseBig(p)};`;
      //console.log(str);
      inner = inner + str + "\n";
      //inner = str+"\n";
    })
    console.log(inner);
    messageName = messageName.replace(/^([A-Z])/, function (a, b) {
      return b.toLowerCase(); //toLowerCase
    })

    return `
    ${messageName}:{
      success : data=>{
        ${inner}
      },
      popSuccess:true,
      popFail:true,
    },`
  }
  getMsgCode(messageName, c) {
    let str = `const ${messageName} = new $Proto.${messageName}();\n`;
    c = c.trim()
    c.trim().split('\n').forEach(line => {
      if (!line.trim()) {
        return;
      }
      let items = line.split(";");
      let v_k = items[0].split(" = ");
      let key = v_k[0].trim();
      if (key.indexOf("//") == -1) {
        let first = key.split(" ");
        let type = first[0].trim();

        let propName = first[1] ? first[1].trim() : "";
        if (type === 'repeated') {
          type = propName;
          propName = first[2] ? first[2].trim() : "";
          str = str + `${messageName}.set${this.parseFBig(propName)}List();\n`
        } else {
          str = str + `${messageName}.set${this.parseFBig(propName)}();\n`
        }
      }
    })
    str = str + `this.$actionSend("set${this.parseFBig(messageName)}",${messageName})\n`;
    return str;
  }
  parseContent(fstr) {
    let codeStr = "";
    let rStr = "";
    let enumExp = /message (\w*)\s\{([\n\s\S]*?)\}/g;
    fstr.replace(enumExp, (a, b, c) => {
      let messageName = b.trim();
      if (messageName.indexOf('Result') !== -1) {
        rStr = rStr + this.getResultCode(messageName.slice(0, -6), c) + "";
      } else {
        codeStr = codeStr + this.getMsgCode(messageName, c) + "\n";
      }
      return "";
    })
    return {
      codeStr,
      rStr
    };
  }
}

new ProtoToJsBuilder([
// path.resolve(sourceDir, './modules/pacm'), 
// path.resolve(sourceDir, './modules/dwh'), 
// path.resolve(sourceDir, './ai'),
// path.resolve(sourceDir, './modules/vp'),
// path.resolve(sourceDir, './modules/network'),
// path.resolve(sourceDir, './modules/dm'),
// path.resolve(sourceDir, './modules/sc'),
// path.resolve(sourceDir, './modules/thirdplatform'),
// path.resolve(sourceDir, './modules/dkm'),
// path.resolve(sourceDir, './modules/tm'),
// path.resolve(sourceDir, './modules/account'),
path.resolve(sourceDir, './modules/dc'),
]);