<template>
  <div class="du-capture-list">
    <div
      v-for="(x, i) in dataList"
      :key="i"
      @click="detailShow(x)"
      class="du-capture-cell"
    >
      <img :src="IMAGE_BASE_PATH + x.pic" style="width: 100%; height: 100%" />
    </div>
    <CaptureDialog :cap="cap" :visible="visible" @close="close" />
  </div>
</template>
<style lang="scss">
.du-capture-list {
  .du-capture-cell {
    width: 72px;
    height: 72px;
    background: #aaa;
    margin-left: 8px;
    border-radius: 3px;
    float: left;
    margin-bottom: 40px;
  }
}
</style>
<script>
import { IMAGE_BASE_PATH } from "@/utils";
import CaptureDialog from "./CaptureDialog";
export default {
  components: {
    CaptureDialog,
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
        // channel: 1,
        // channelName: "会议室262#8",
        // time: (this.time = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")),
      },
    };
  },
  // watch: {
  //   dataList(val) {
  //     //console.log(val[0]);
  //   },
  // },
  methods: {
    close() {
      this.visible = false;
    },
    detailShow(cap) {
      this.cap = cap;
      console.log(cap);
      this.visible = true;
    },
  },
};
</script>
