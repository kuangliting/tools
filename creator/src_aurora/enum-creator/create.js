const fs = require("fs");
const fs2 = require('fs-extra')
const path = require("path");
const {
  sourceDir
} = require("../config");

module.exports = function creator(filePath, fileName) {
  let noContent = true;
  console.log("-----filePath, fileName----", filePath, fileName, "\n")
  let result = fs.readFileSync(path.resolve(filePath, fileName), {
    encoding: 'utf-8'
  });
  let all = [];
  let n = 0;
  let allexport = "export default {"
  result.replace(/enum (\w*)\s*\{([\n\s\S]*?)\}/g, function (a, b, c) {
    let obj = {
      name: b.trim(),
      list: [],
      hasDesc: false,
    }
    all.push(obj);
    n++;
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
          obj.hasDesc = true;
          desc = items[1].replace("//", "").trim();
        }
        if (value === '0' && desc === '未定义') {
          desc = "全部"
        }
        obj.list.push({
          key,
          value,
          desc
        })
      }
    })
  })

  if (all.length === 0) {
    return;
  } else {
    console.log("-----------all------------");
    console.log(all);
  }



  let allDefineContent = '';
  all.forEach(a => {
    let name = a.name;

    let defineConst = `export const ${name}={
          ${a.list.map(n=>{
              return n.key+":"+n.value+"\n"
          })}
      };\n`
    allDefineContent = allDefineContent + defineConst;
    // fs.appendFileSync(distPath, defineConst);
    if (a.hasDesc) {
      let filterList = a.list.filter(a => {
        return a.desc
      })
      let defineMap = `export const ${name}Map={
        ${filterList.map(n=>{
          if(n.desc){
            return `[${name}.${n.key}]:'${n.desc}'`
          }
        })}
      };\n`
      allDefineContent = allDefineContent + defineMap;
      //fs.appendFileSync(distPath, defineMap);
      let defineList = `export const ${name}List=[
        ${filterList.map(n=>{
          return `{label:'${n.desc||""}',value:${name}.${n.key}}`;
        })}
      ];\n`
      noContent = false;
      //fs.appendFileSync(distPath, defineList);
      allDefineContent = allDefineContent + defineList;
      allexport += name + ",";
      allexport += name + "Map,";
      allexport += name + "List,";
    }

    //console.log(defineConst)
  })


  if (allexport.slice(-1) !== "{") {
    allexport = allexport.slice(0, -1);
    allexport += "}";
  } else {
    allexport += "}";
  }

  if (!noContent) {
    let enumPath = path.resolve(__dirname, "enum");
    if (!fs.existsSync(enumPath)) {
      fs2.ensureDir(enumPath)
    }
    let paths = filePath.slice(sourceDir.length + 1);
    //console.dir(all[10]);
    let distPath = path.resolve(enumPath, paths, fileName.slice(0, -5) + "js");
    console.log("========distPath=========", distPath);
    if (fs.existsSync(distPath)) {
      fs.writeFileSync(distPath, '');
    } else {
      console.log("========paths=====", paths)
      console.log("-----创建相对文件夹---", paths.split(/\\/));
      let divide = enumPath;
      paths.split(/\\/).forEach(p => {
        divide = path.resolve(divide, p);
        if (!fs.existsSync(divide)) {
          fs2.ensureDir(divide)
        }
      })
      fs2.ensureFile(distPath)
    }

    fs.appendFileSync(distPath, allDefineContent + allexport);
    //  fs.appendFileSync(distPath, allexport);
  }
}