<template>
  <div class="dumu-preview">
    <VideoBox ref="VideoBox" />
  </div>
</template>
<script>
import VideoBox from "./VideoBox";
import { getPageMixin } from "@/utils/mixins";
import moment from "moment";
const protobuf = window.__PROTOBUF__;
 
export default {
  mixins: [getPageMixin()],
  components: {
    VideoBox,
  },
  data() {
    return {
      
    };
  },
  mounted() {
    // sumimg = 0;
  },
  methods: {
    // open() {
    // },
    getActionResult(result) {
      // console.log("------result------");
      // console.log(result);
    },
  },
};
</script>
<style lang="scss">
.dumu-preview {
  position: relative;
  height: 100%;
  .du-video-wrap {
    height: 100%;
  }
}
</style>
