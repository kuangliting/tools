<template>
  <el-dialog
    :close-on-click-modal="false"
    title="抓拍详情"
    width="400px"
    :visible.sync="visible"
    :before-close="close"
    class="video-dlg-detail"
  >
    <div class="detail-container" v-if="isVideoPage">
      <div class="img-wrap">
        <img
          :src="IMAGE_BASE_PATH + cap.pic"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="d-line">通道号：{{ getChannelId(cap) }}</div>
      <div class="d-line">通道名称：{{ cap.channelName }}</div>
      <div class="d-line">抓拍时间：{{ cap.timestamp }}</div>
    </div>
    <div class="detail-container" v-else>
      <div class="img-wrap">
        <img :src="cap.pic" style="width: 100%; height: 100%" />
      </div>
      <div class="d-line">通道号：{{getChannelId(cap) }}</div>
      <div class="d-line">通道名称：{{ cap.channelName }}</div>
      <div class="d-line">抓拍时间：{{ cap.captureTime }}</div>
    </div>
  </el-dialog>
</template>
 
<script>
import { IMAGE_BASE_PATH, getChannelId, getChannelAlias } from "@/utils";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    cap: {
      type: Object,
      default: {},
    },
    isVideoPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return { IMAGE_BASE_PATH };
  },
  methods: {
    getChannelId,
    getChannelAlias,
    close() {
      this.$emit("close");
    },
  },
};
</script>
