const fs = require("fs");
const fs2 = require("fs-extra");
const path = require("path");
const entryConfig = require("./config");
const {
  sourceDir,
  distProtoDir
} = entryConfig;
const baseUrl = path.resolve(sourceDir, './protobuf');
let config = {
  distDir:path.resolve(__dirname, './dist'),
  distFile: path.resolve(__dirname, './dist/action.js'),
  entry: {
    action: {
      index: path.resolve(sourceDir, './protobuf/web/action/dumu_web_action.proto'),
    },
  },
}

function run(index, distUrl) {
  let sumMessage = 0;
  let buildMap = {};
  let globalObj = {};
  let parentMap = {};
  if (fs.existsSync(distUrl)) {
    fs.writeFileSync(distUrl, '')
  }  

  const originalType = ['uint32', 'int32', 'float', 'string', 'bool'];

  // function url2name(url) {
  //   url = url.slice(0, url.indexOf("."));
  //   return url.replace(/\/([a-z])/g, function (a, b) {
  //     return b.toUpperCase();
  //   })
  // }

  function build(url) {
    if (buildMap[url]) {
      return;
      //return buildMap[url];
    }
    let result = '';
    // if (dumuulist.indexOf(url) !== -1) {
    //   result = fs.readFileSync(path.resolve(dumuUrl, url), {
    //     encoding: 'utf-8'
    //   });
    // } else {
    // }
    result = fs.readFileSync(path.resolve(baseUrl, url), {
      encoding: 'utf-8'
    });

    result = result.replace(/option .*/g, "");
    let importFiles = [];

    result = result.replace(/import "(.*)";/g, function (a, b) {
      importFiles.push(b);
      return ""
    });

    // let opeofExp = /oneof (\w*)\s\{([\n\s\S]*?)\}/g;
    // let repeatExp = /repeat (\w*)\s\{([\n\s\S]*?)\}/g;
    // let enumExp = /enum (\w*)\s\{([\n\s\S]*?)\}/g;
    //console.log(result);

    var CommentPatt = /\/\*\*[.\S\s\n]+?\*\//mg;

    result = result.replace(CommentPatt, function (a, b, c) {
      return "";
    })

    //console.log(result);

    result = result.replace(/oneof\s+action\s+\{([\n\s\S]*?)\}/g, function (a, b, c) {
      // console.log(b);
      return b;
    })

    //console.log(result);
    const innerRexp = /\{([\n\s]*?enum.+\{[\n\s\S]*?\})/g;
    result = result.replace(innerRexp, function (a, b, c) {
      return "";
    })
    // var patt = /(.+)\n?/mg;
    // var r = "";
    // let count = 0;

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
          if (type === 'repeated') {
            type = propName;
            propName = first[2] ? first[2].trim() : "";
            propObj[propName] = {
              type,
              desc,
              isArray: true
            }
          } else {
            propObj[propName] = {
              type,
              desc,
              isArray: false
            }
          }
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

    importFiles.forEach(m => {
      build(m);
    });
    buildMap[url] = true;
  }
  build(index);
  //console.log("Object.keys(globalObj).length===sumMessage", Object.keys(globalObj).length, sumMessage);
  let bf = `export default `
  fs.appendFileSync(distUrl, bf + JSON.stringify(globalObj) + ";");
  //return build;
}

 

if (!fs.existsSync(config.distDir)) {
  fs.mkdirSync(config.distDir)
}
Object.keys(config.entry).forEach(d => {
 let obj = config.entry[d];
 // let dist = `${config.dist}/${d}.js`;
  run(obj.index, config.distFile);
})

fs2.copySync(config.distFile,path.resolve(__dirname,distProtoDir,"action.js"));




 