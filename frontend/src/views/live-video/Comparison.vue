<template>
  <el-scrollbar class="dumu-comp-list">
    <div v-for="(x, i) in dataList" :key="i" class="img-pk-cell">
      <div class="img-pk-wrap">
        <div class="img-pk">
          <img
            :src="IMAGE_BASE_PATH + x.pic"
            style="width: 100%; height: 100%"
          />
        </div>
        <el-image
          class="img-pk"
          :key="x.path"
          :src="IMAGE_BASE_PATH + x.path"
          style="width: 102px; height: 102px"
          fit="cover"
        ></el-image>
        <div class="img-pk-icon">vs</div>
      </div>
      <h4 class="img-pk-title">相似度：{{ x.similarity }}%</h4>
      <div class="img-pk-name">
        {{ x.name }}
        <a
          class="pk-detail-btn"
          href="javascript:void(0)"
          @click="detailShow(x)"
          >详情</a
        >
      </div>
      <span class="img-pk-time">{{ x.timestamp }}</span>
    </div>
    <ComparisonDialog :visible="visible" :cap="cap" @close="close" />
  </el-scrollbar>
</template>
<script>
import moment from "moment";
import { IMAGE_BASE_PATH } from "@/utils";
import ComparisonDialog from "./ComparisonDialog";

export default {
  components: {
    ComparisonDialog,
  },
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      IMAGE_BASE_PATH,
      visible: false,
      cap: {
        channel: 1,
        channelName: "",
        time: (this.time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")),
      },
    };
  },
  methods: {
    detailShow(cap) {
      this.visible = true;
      this.cap = cap;
      //console.log(cap);
    },
    close() {
      this.visible = false;
    },
  },
};
</script>
<style lang="scss">
.dumu-comp-list {
  height: calc(100% - 20px);
  // border:1px solid red;
  // overflow: auto;

  .pk-detail-btn {
    color: #007aff;
    font-size: 14px;
    margin-left: 8px;
  }
  .el-scrollbar__bar.is-vertical {
    display: none;
  }
  .el-scrollbar__bar.is-horizontal {
    display: none;
  }
  .img-pk-wrap {
    overflow: auto;
    position: relative;
    // border:3px solid blue;
  }
  .img-pk-time {
    color: #9493a8;
    display: block;
    font-size: 14px;
    line-height: 26px;
    margin-top: 5px;
    margin: 0 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #37373f;
  }
  .img-pk-name {
    color: #fff;
    font-size: 14px;
    margin-top: 3px;
    line-height: 20px;
  }
  .img-pk-cell {
    // border: 1px solid red;
    overflow: auto;
    text-align: center;

    & + .img-pk-cell {
      padding-top: 12px;
    }
  }
  .img-pk-title {
    font-size: 16px;
    color: #47cc74;
    line-height: 40px;
    text-align: center;
    // border: 2px solid green;
    margin: 0;
  }
  .img-pk-icon {
    // border:1px solid red;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #47cc74;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-18px, -50%);
    font-size: 15px;
    text-align: center;
    line-height: 32px;
    color: #fff;
  }

  .img-pk {
    width: 102px;
    height: 102px;
    // border:1px solid red;
    float: left;
    margin-left: 12px;
    border-radius: 3px;
    // background: #aaa;
    background: transparent;
    & + .img-pk {
      margin-left: 18px;
    }
  }
}
</style>

