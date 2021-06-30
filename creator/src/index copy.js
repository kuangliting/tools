const fs = require("fs");
const path = require("path");
const baseUrl = path.resolve(__dirname, '../protobuf');
const dumuUrl=path.resolve(__dirname, '../protobuf-dumu/protobuf');
let dumuulist=["common/dumu_common.proto","config/dumu_saas_config.proto","action/dumu_saas_action.proto","dumu_service/status/dumu_service_status.proto"];
//dumuulist=[];
//const index = 'web/web.proto';
//let index = "web/action/dumu_web_action.proto";
//let dist = "../z-build/action2.js";

let config = {
  dist: "../z-build/proto",
  entry: {
    common: {
      index: "common/dumu_common.proto",
    },
    // config: {
    //   index: "config/dumu_config.proto",
    // },
    action: {
      index: "web/action/dumu_web_action.proto",
    },
    // info: {
    //   index: "web/status/dumu_web_info.proto",
    // }
  },
}

function run(index, dist) {
  let sumMessage = 0;
  let buildMap = {};
  let globalObj = {};
  let parentMap = {};
  let distUrl = path.resolve(baseUrl, dist);
  fs.writeFileSync(distUrl, '')
  const originalType = ['uint32', 'int32', 'float', 'string', 'bool'];

  function url2name(url) {
    url = url.slice(0, url.indexOf("."));
    return url.replace(/\/([a-z])/g, function (a, b) {
      return b.toUpperCase();
    })
  }

  function build(url) {
    if (buildMap[url]) {
      return;
      //return buildMap[url];
    }
    let result='';
    if(dumuulist.indexOf(url)!==-1){
      result= fs.readFileSync(path.resolve(dumuUrl, url), {
        encoding: 'utf-8'
      });
    }else{
      result= fs.readFileSync(path.resolve(baseUrl, url), {
        encoding: 'utf-8'
      });
    }
    
    result = result.replace(/option .*/g, "");
    let importFiles = [];

    result = result.replace(/import "(.*)";/g, function (a, b) {
      importFiles.push(b);
      return ""
    });

    // let opeofExp = /oneof (\w*)\s\{([\n\s\S]*?)\}/g;
    // let repeatExp = /repeat (\w*)\s\{([\n\s\S]*?)\}/g;
    // let enumExp = /enum (\w*)\s\{([\n\s\S]*?)\}/g;

    result.replace(/message (\w*)\s\{([\n\s\S]*?)\}/g, function (a, b, c) {
      let obj = {
        name: b.trim(),
        list: [],
        hasDesc: false,
      }
      let messageName = b.trim();
      if (!parentMap[messageName]) {
        parentMap[messageName] = [];
      }

      let propObj = {
        __parentType: parentMap[messageName],
      };
      c = c.trim()
      // if (c.indexOf("oneof ") !== -1) {
      //   console.log(c.indexOf("oneof "));
      //   console.log(c);
      //   console.log("---------------")
      // }

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
          let first = key.split(" ");
          let type = first[0].trim();
          //console.log(first)
          if (originalType.indexOf(type) === -1) {
            if (parentMap[type]) {
              parentMap[type].push(messageName)
            } else {
              parentMap[type] = [messageName]
            }
          }
          if (messageName === 'Rectf') {
            console.log(type, first);
          }
          let propName = first[1] ? first[1].trim() : "";
          propObj[propName] = {
            type,
            desc,
          }
          // propObj[type] = {
          //   propName: first[1] ? first[1].trim() : "",
          //   //value,
          //   desc,
          // }
        }
      })
      sumMessage++;
      if (globalObj[messageName]) {
        console.log("repeat", messageName);
      }
      globalObj[messageName] = propObj;
      if (messageName === 'Rectf') {
        console.log(propObj);
      }
      //dataList.message[messageName] = messageObj;
    })

    // let bf = `let ${url2name(url)} = `
    // fs.appendFileSync(distUrl, bf + JSON.stringify(dataList) + ";");

    importFiles.forEach(m => {
      build(m);
    });
    buildMap[url] = true;
    //return dataList;
  }
  //let r = build(index);
  build(index);

  //console.log("Object.keys(globalObj).length===sumMessage", Object.keys(globalObj).length, sumMessage);

  let bf = `export default `
  fs.appendFileSync(distUrl, bf + JSON.stringify(globalObj) + ";");

  // return build;
}

let distPath = path.resolve(baseUrl, config.dist);

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath)
}
Object.keys(config.entry).forEach(d => {
  let obj = config.entry[d];
  let dist = `${config.dist}/${d}.js`;
  run(obj.index, dist);
})