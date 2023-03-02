const fs = require("fs");
const path = require("path");


module.exports = function creator(filePath, fileName) {
  let result = fs.readFileSync(path.resolve(filePath, fileName), {
    encoding: 'utf-8'
  });
  let all = [];
  let n = 0;
  let allexport = "export default {"
  result.replace(/enum (\w*)\s\{([\n\s\S]*?)\}/g, function (a, b, c) {
    if(b.trim().search(/ResultCode$/)!==-1){
      return;
    }
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

  //console.dir(all[10]);
  let distPath = path.resolve(__dirname, "enum", fileName.slice(0, -5) + "js");
  if (fs.existsSync(distPath)) {
    fs.writeFileSync(distPath, '');
  }
  

  all.forEach(a => {
    let name = a.name;

    let defineConst = `export const ${name}={
          ${a.list.map(n=>{
              return n.key+":"+n.value+"\n"
          })}
      };\n`
    fs.appendFileSync(distPath, defineConst);
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
      fs.appendFileSync(distPath, defineMap);
      let defineList = `export const ${name}List=[
        ${filterList.map(n=>{
          return `{label:'${n.desc||""}',value:${name}.${n.key}}`;
        })}
      ];\n`

      fs.appendFileSync(distPath, defineList);
      allexport += name + ",";
      allexport += name + "Map,";
      allexport += name + "List,";
    }
    
    //console.log(defineConst)
  })
  if (allexport.slice(-1) !== "{") {
    allexport = allexport.slice(0, -1);
  }
  allexport += "}";
  fs.appendFileSync(distPath, allexport);
}