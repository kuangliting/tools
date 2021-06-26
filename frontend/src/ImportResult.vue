<template>
  <div class="import-result-panel" v-show="pageShow">
    <el-dialog
      :title="isPicked ? '' : title"
      v-if="importResultShow"
      visible
      :close-on-click-modal="false"
      :before-close="close"
      class="dumu-update-dialog"
      :class="{ 'is-picked': isPicked }"
      :width="isPicked ? '40px' : '350px'"
      :modal="false"
      top="0"
    >
      <div v-if="!isPicked">
        <div class="msg-tip">
          成功{{ taskTypeName
          }}<span style="color: #67c23a">{{
            importResultData.currentItem - importResultData.errDetailList.length
          }}</span
          >条记录，失败<span style="color: #dd6161">{{
            importResultData.errDetailList.length
          }}</span
          >条记录
          <span></span>
        </div>
        <div class="detail-list" :style="style">
          <span style="color: #898989; font-size: 12px">失败记录如下:</span>
          <div
            v-for="d in importResultData.errDetailList"
            :key="d.index"
            style="margin-top: 6px"
          >
            <span class="err-span">NO.{{ d.index }}</span
            ><span class="err-span">{{ d.item }}</span
            ><span class="err-span">{{ d.errMsg }}</span>
          </div>
        </div>
        <div
          class="import-result-toggle"
          v-show="importResultData.errDetailList.length"
        >
          <i
            :class="{
              'el-icon-arrow-down': isOpen,
              'el-icon-arrow-up': !isOpen,
            }"
            @click="toggle"
          ></i>
        </div>

        <div style="margin-bottom: 5px">
          <el-progress :percentage="progress" :status="status"></el-progress>
        </div>
      </div>

      <div v-else class="progress-wrap">{{ progress }}%</div>
      <div class="import-pickup-toggle">
        <i
          :class="{
            'el-icon-right': !isPicked,
            'el-icon-back': isPicked,
          }"
          @click="togglePicked"
        ></i>
      </div>
      <!-- <span slot="footer" class="dialog-footer" style="text-align: center">
        <el-button size="medium" @click="close">取消</el-button>
        <el-button size="medium" type="primary" @click="edit">保存</el-button>
      </span> -->
    </el-dialog>

    <el-dialog
      :title="'取消批量' + taskTypeName"
      :visible.sync="cancelShow"
      :close-on-click-modal="false"
      :before-close="closeCancel"
      :width="'380px'"
    >
      <div style="text-align: center; display: block; margin-bottom: 20px">
        <span>关闭将取消批量{{ taskTypeName }}，确认关闭吗？</span>
      </div>
      <span slot="footer" class="dialog-footer" style="text-align: center">
        <el-button size="small" @click="closeCancel">取消</el-button>
        <el-button size="small" type="primary" @click="confirmCancel"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss">
.import-result-panel {
  .is-picked {
    .el-dialog__body {
      padding: 0;
    }
    .el-dialog__header {
      display: none;
    }
    .import-pickup-toggle {
      top: 14px;
      right: 12px;
    }
  }
  .import-pickup-toggle {
    position: absolute;
    top: 20px;
    right: 8px;
    font-size: 17px;
    cursor: pointer;
  }

  .progress-wrap {
    padding-top: 45px;
    padding-bottom: 10px;
    text-align: center;
  }
  // .fade-enter-active,
  // .fade-leave-active {
  //   transition: all 0.5s;
  // }
  // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   // opacity: 0;
  //   transform: scaleY(0);
  // }
  .detail-list {
    border-top: 1px solid #ddd;
    margin-bottom: 10px;
    font-size: 13px;
    padding-top: 15px;
    transition: all 0.5s ease;
    max-height: 250px;
    overflow: auto;
  }
  .msg-tip {
    transform: translate(-0px, -15px);
    font-size: 12px;
    color: #898989;
  }
  .err-span {
    font-size: 12px;
    margin-right: 15px;
    display: inline-block;
    &:first-child {
      width: 40px;
    }
  }
  .el-dialog__body {
    padding: 10px 20px;
  }
  .import-result-toggle {
    position: absolute;
    top: 20px;
    right: 60px;
    font-size: 17px;
    cursor: pointer;
  }
  .el-dialog__headerbtn {
    right: 34px;
  }

  .dumu-update-dialog {
    transition: all 1s;

    &.el-dialog__wrapper {
      position: static !important;
      z-index: 1;
    }
    .el-dialog__headerbtn {
      z-index: 100;
    }
    .el-dialog {
      position: absolute;
      bottom: 10px;
      right: 10px;
      left: auto;
      margin: 0 auto;
      background: #fff;
      z-index: 3000;
      box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
<script>
// const taskTitleMap = {
//   1: "中",
//   2: "中",
//   3: "取消",
//   4: "完成",
//   5: "错误",
// };
import { FileOpTypeMap } from "@/utils/enum/staff_management";
export default {
  props: {
    importResultData: {
      type: Object,
      default: { errDetailList: [], taskStatus: 1, currentItem: 0 },
    },
    importResultShow: { type: Boolean, default: false },
  },
  watch: {
    $route(val) {
      //console.log("$route  val")
      if (val.fullPath === "/live-video") {
        this.pageShow = false;
      } else {
        this.pageShow = true;
      }
    },
    "importResultData.taskStatus"(taskStatus) {
      // console.log("-===taskStatus=====");
      // console.log(taskStatus);
      if (taskStatus === 4) {
        this.status = "success";
        //   this.$message.success("人员批量添加成功");
      } else if (taskStatus === 3) {
        this.status = "warning";
        this.closeCancel();
        //   this.$message.success("人员批量添加取消成功");
      } else {
        this.status = null;
      }
    },
  },
  computed: {
    taskTypeName() {
      return FileOpTypeMap[this.importResultData.opType];
    },
    title() {
      let importResultData = this.importResultData;
      // let taskStatus = importResultData.taskStatus;
      return importResultData.taskName;
      // if (taskTitleMap[taskStatus]) {
      //   return importResultData.taskName + taskTitleMap[taskStatus];
      // } else {
      //   return importResultData.taskName;
      // }
      // if (importResultData.opType === 1) {
      //   return importResultData.taskName;
      // } else {
      //   if (taskStatus === 4) {
      //     return "人员批量添加完成";
      //   } else if (taskStatus === 3) {
      //     return "人员批量添加已取消";
      //   } else {
      //     return "人员批量添加中";
      //   }
      // }
    },
    style() {
      return {
        height: this.isOpen
          ? 30 + this.importResultData.errDetailList.length * 20.5 + "px"
          : "0px",
        transform: this.isOpen ? "scaleY(1)" : "scaleY(0)",
        opacity: this.isOpen ? 1 : 0,
        marginBottom: this.isOpen ? "10px" : "0",
        paddingTop: this.isOpen ? "15px" : "0",
      };
    },
    progress() {
      let { totalItems, currentItem } = this.importResultData;
      if (totalItems && currentItem) {
        return parseInt((currentItem * 100) / totalItems);
      } else {
        return 0;
      }
    },
  },
  data() {
    return {
      isOpen: false,
      status: null,
      cancelShow: false,
      pageShow: true,
      isPicked: false,
    };
  },
  methods: {
    togglePicked() {
      this.isPicked = !this.isPicked;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      let taskStatus = this.importResultData.taskStatus;
      console.log("taskStatus=", taskStatus);
      if (taskStatus === 6 || taskStatus === 7) {
        return;
      }
      if (taskStatus === 4 || taskStatus === 3 || taskStatus === 5) {
        this.$emit("closeImport");
      } else {
        this.cancelShow = true;
      }
    },
    closeCancel() {
      this.cancelShow = false;
    },
    confirmCancel() {
      this.closeCancel();
      console.log("this.importResultData.taskId");
      console.log(this.importResultData.taskId);
      this.$parent.importSendCancel(this.importResultData.taskId);
    },
  },
};
</script>