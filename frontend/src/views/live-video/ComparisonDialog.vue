<template>
  <el-dialog
    :close-on-click-modal="false"
    title="比对详情"
    width="600px"
    :visible.sync="visible"
    :before-close="close"
    class="video-dlg-detail"
  >
    <div class="comp-d" v-if="isVideoPage">
      <div class="detail-container">
        <div class="img-wrap">
          <img
            :src="IMAGE_BASE_PATH + cap.pic"
            style="width: 100%; height: 100%"
          />
        </div>
        <span class="img-name">抓拍图片</span>
        <div class="d-line">通道号：{{ getChannelId(cap) }}</div>
        <div class="d-line">通道名称：{{ cap.channelName }}</div>
        <div class="d-line">抓拍时间：{{ cap.timestamp }}</div>
      </div>
      <div class="detail-container">
        <div class="img-wrap">
          <el-image
            :src="IMAGE_BASE_PATH + cap.path"
            style="width: 105px; height: 105px"
            fit="cover"
          ></el-image>
          <!-- <img
            :src="IMAGE_BASE_PATH + cap.path"
            style="width: 100%; height: 100%"
          /> -->
        </div>
        <span class="img-name">底库图片</span>
        <div class="d-line">所在组：{{ cap.staffPoolName }}</div>
        <div class="d-line">组类型：{{ StaffTypeMap[cap.staffType] }}</div>
        <div class="d-line">
          <span>{{ cap.name }}</span>
          <span>{{ cap.age }}岁</span>
          <span>{{ GenderMap[cap.gender] }}</span>
        </div>
      </div>
      <div class="detail-pk-mode">
        <div class="detail-pk-icon">vs</div>
        <div class="detail-pk-title">
          相似度：<span style="font-weight: 600">{{ cap.similarity }}</span
          >%
        </div>
      </div>
    </div>
    <div class="comp-d" v-else>
      <div class="detail-container">
        <div class="img-wrap">
          <img :src="cap.pic" style="width: 100%; height: 100%" />
        </div>
        <span class="img-name">抓拍图片</span>
        <div class="d-line">通道号：{{ getChannelId(cap) }}</div>
        <div class="d-line">通道名称：{{ cap.channelName }}</div>
        <div class="d-line">抓拍时间：{{ cap.captureTime }}</div>
      </div>
      <div class="detail-container">
        <div class="img-wrap">
           <el-image
            :src="cap.path"
            style="width: 105px; height: 105px"
            fit="cover"
          ></el-image>
          <!-- <img :src="cap.path" style="width: 100%; height: 100%" /> -->
        </div>
        <span class="img-name">底库图片</span>
        <div class="d-line">所在人员组：{{ cap.staffPoolName }}</div>
        <div class="d-line">组类型：{{ cap.staffType }}</div>
        <div class="d-line">
          <span>{{ cap.name }}</span>
          <span>{{ cap.age }}岁</span>
          <span>{{ GenderMap[cap.gender] }}</span>
        </div>
      </div>
      <div class="detail-pk-mode">
        <div class="detail-pk-icon">vs</div>
        <div class="detail-pk-title">
          相似度：<span style="font-weight: 600">{{ cap.similarity }}</span>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import moment from "moment";
import { StaffTypeMap, GenderMap } from "@/utils/enum/common";
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
    return {
      IMAGE_BASE_PATH,
      StaffTypeMap,
      GenderMap,
    };
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