<template>
  <div class="code-builder-c">
    <div class="code-search">
      <el-form ref="form" size="small" inline :model="form">
        <el-form-item label="活动区域" label-width="120px">
          <el-select v-model="form.type" placeholder="请选择活动区域">
            <el-option
              v-for="a in typelist"
              :label="a"
              :value="a"
              :key="a"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="message" label-width="120px">
          <el-autocomplete
            v-model.trim="form.message"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
            clearable
          ></el-autocomplete>
          <!-- <el-input v-model="form.message" @change=""></el-input> -->
        </el-form-item>
        <el-form-item style="margin-left: 10px">
          <!-- <el-button type="primary" @click="search">搜索</el-button> -->
          <!-- <el-button @click="reset">重置</el-button> -->
          <el-button type="primary" @click="createCode">代码生成</el-button>
          <!-- <el-button type="primary" @click="actionCreate"
            >action代码生成</el-button
          > -->
        </el-form-item>
      </el-form>
    </div>
    <div class="code-builder-container">
      <div class="table-wrap">
        <el-table
          :data="tableData"
          @selection-change="handleSelectionChange"
          height="100%"
          style="margin-left: 20px; margin-right: 40px"
          ><el-table-column type="expand">
            <template slot-scope="props">
              <el-form
                label-position="left"
                size="mini"
                class="demo-table-expand"
              >
                <el-form-item
                  style="display: block"
                  v-for="p in props.row.propList"
                  :key="p.propName"
                  :label="p.type + ' :'"
                >
                  <span>{{ p.propName }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="value" label="Message" width="200">
          </el-table-column>
          <el-table-column prop="__parentMessage" label="parentMessage">
          </el-table-column>
        </el-table>
      </div>
      <div class="code-show-wrap">
        <pre>
          {{ code }}
          </pre
        >
      </div>
    </div>
  </div>
</template>

<script>
import common from "./proto/common";
import config from "./proto/config";
import action from "./proto/action";
import info from "./proto/info";
let importObj = {
  common,
  config,
  action,
  info,
};
const primaryTypes = ["uint32", "int32", "float", "string", "bool"];
//console.log(action);
const proto = window.__PROTOBUF__;
//console.log(proto);
let messageMap = {};

export default {
  data() {
    return {
      typelist: ["action", "config", "info", "common"],
      // typelist:['action', 'config'],
      form: {
        type: "action",
      },
      tableData: [],
      selection: [],
      code: "",
    };
  },
  computed: {},
  mounted() {
    this.querySearch("");
  },
  methods: {
    handleSelectionChange(val) {
      this.selection = val;
    },
    reset() {
      this.form = {
        type: "action",
      };
    },
    querySearch(qstr, cb) {
      let resource = importObj[this.form.type];
      let keys = Object.keys(resource).map((k) => {
        // console.log(resource[k]);
        let msgObj = resource[k];
        let __parentMessage = [];
        let props = Object.keys(msgObj);
        let propList = [];
        for (let i = 0; i < props.length; i++) {
          let prop = props[i];
          if (prop === "__parentType") {
            __parentMessage = msgObj[prop];
          } else {
            propList.push({
              type: msgObj[prop].type,
              propName: prop,
            });
          }
        }
        messageMap[k] = { value: k, propList, __parentMessage };
        return messageMap[k];
      });
      //s console.log(messageMap);
      let results = keys;
      if (qstr) {
        //console.log("qstr", qstr);
        var reg = new RegExp(qstr, "i");
        results = keys.filter((key) => {
          return key.value.search(reg) !== -1;
        });
      }
      setTimeout(() => {
        cb && cb(results);
        //console.log(results);
        this.tableData = results;
      }, 500 * Math.random());
    },
    handleSelect(s) {
      //console.log(arguments);
    },
    search() {},
    createCode() {
      if (this.selection.length) {
        function tofunc(propname) {
          return (
            "set" +
            propname
              .replace(/_([a-z])/g, function (a, b) {
                return b.toUpperCase();
              })
              .replace(/(^[a-z])/g, function (a, b) {
                return b.toUpperCase();
              })
          );
        }
        let m = this.selection[0];
        // console.log(m);

        function create(m) {
          if (!m || !m.value) {
            return "";
          }
          let str = `
const ${m.value} = new protobuf.baidu.dumu.${m.value}();\n`;
          m.propList.forEach((p) => {
            //console.log(p.type);
            if (primaryTypes.indexOf(p.type) === -1) {
              str = create(messageMap[p.type]) + str;
              str = str + `${m.value}.${tofunc(p.propName)}(${p.type});\n`;
              // console.log("run---- ", str)
            } else {
              str = str + `${m.value}.${tofunc(p.propName)}();\n`;
            }
            //type propName
          });
          return str;
        }

        function createParent(message, formMessage) {
          let str = "";
          if (message === "WebAction") {
            str = `const all_action = new protobuf.baidu.dumu.WebAction();
all_action.setIpcAction(${formMessage});
const all_message = new protobuf.baidu.dumu.WebMessage();
all_message.setAction(all_action);
const bytes = all_message.serializeBinary();
socketRef.current.send(bytes);\n`;
          } else {
            if (!messageMap[message].propList.length) {
              return "";
            }
            str =
              str +
              `const ${message} = new protobuf.baidu.dumu.${message}();\n`;

            let flist = messageMap[message].propList.filter((p) => {
              console.log(p.type, formMessage);
              return p.type === formMessage;
            });
            // console.log("-------------flist--------------");
            // console.log(flist);
            if (flist.length > 0) {
              let f = flist[0];
              str = str + `${message}.${tofunc(f.propName)}(${formMessage});\n`;
            }

            str =
              str +
              createParent(messageMap[message].__parentMessage[0], message);
          }
          return str;
        }

        let code = create(m);
        //console.log("m------", m.__parentMessage);
        if (m.__parentMessage.length > 0) {
          code = code + createParent(m.value, m.__parentMessage[0]);
        }

        this.code = code;
      }
    },
    configCreate() {},
    actionCreate() {},
  },
};
</script>

<style lang="scss">
.code-builder-c {
  margin: 10px;
  position: relative;
  background: #fff;
  height: calc(100% - 20px);
  .code-builder-container {
    height: calc(100% - 70px);
  }
  .table-wrap {
    width: 55%;
    padding-right: 30px;
    border: 0px solid red;
    height: 100%;
    float: left;
  }
  .code-show-wrap {
    height: 90%;
    width: 44%;
    margin-top: 40px;
    float: right;
    overflow: auto;
    border-left: 1px solid #eee;
  }
  .code-search {
    padding-top: 20px;
    border-bottom: 1px solid #eee;
  }
  // .el-form-item {
  //   display: inline-block;
  // }
}
</style>
