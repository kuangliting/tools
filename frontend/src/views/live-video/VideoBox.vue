<template>
  <div class="du-video-wrap">
    <div class="du-video-box" :class="{ isFullscreen: isFullscreen }">
      <div
        class="v-one"
        v-loading="isLoading"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <video
          class="video"
          :src="src"
          ref="video"
          id="srcvideo"
          :height="oneHeight"
          :width="oneWidth"
          muted
          autoPlay
        ></video>
        <!-- <video
          class="video"
          src="idg_record.mp4"
          id="srcvideo"
          :height="oneHeight"
          :width="oneWidth"
          muted
          autoPlay
        ></video> -->
        <div class="mouse-switch-area">
          <div class="full-video-area">
            <div class="video-area-icon" @click="switchFullScreen()">
              <svg-icon
                :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
              />
            </div>
          </div>
        </div>
        <div class="record-layer" v-show="isRecording===true">
          <span class="recoding-tip">正在录制视频...</span>
        </div>
        <div class="du-video-control" v-show="!isFullscreen">
          <div style="text-align: left; padding-left: 60px">
            <el-button
              class="vd-btn"
              size="small"
              @click="capture"
              type="primary"
              >视频抓拍</el-button
            >
            <el-button
              class="vd-btn"
              size="small"
              @click="record"
              type="primary"
              >{{recordTxt}}</el-button
            >
          </div>

          <div style="margin-top: 23px">
            <div class="du-vd-item">
              <label class="du-vd-label">变倍</label>
              <div class="du-vd-slider">
                <el-slider v-model="vd.bb"> </el-slider>
              </div>
            </div>
            <div class="du-vd-item">
              <label class="du-vd-label">调焦</label>
              <div class="du-vd-slider">
                <el-slider v-model="vd.tj"> </el-slider>
              </div>
            </div>
            <div class="du-vd-item">
              <label class="du-vd-label">光圈</label>
              <div class="du-vd-slider">
                <el-slider v-model="vd.gq"> </el-slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVideo, record } from "./util";
import { getHeightMixin } from "./mixin";
import screenfull from "screenfull";
import "./style.scss";
import moment from "moment";
const common = window.__COMMON__;
let r = null;
let ws = null;
//console.log(common);
let recordUse = null;
const protobuf = window.__PROTOBUF__;

export default {
 // mixins: [getHeightMixin(85, "oneHeight", 520, "oneWidth")],
  mixins: [getHeightMixin(85, "oneHeight", 520, "oneWidth")],
  data() {
    return {
      vd: { bb: 30, tj: 60, gq: 45 },
      src: "",
      status: "pending",
    //  one: { height: 645, width: 800 },
      isLoading: false,
      isFullscreen: false,
      hasFullopen: false,
      value: 50,
      isRecording: -1,
    };
  },
  computed: {
    recordTxt() {
      if (this.isRecording === -1) {
        return "视频录制";
      } else if (this.isRecording === true) {
        return "停止录制";
      } else {
        return "录制完成";
      }
    },
  },
  mounted() {
    this.openVideo();
  },

  beforeDestroy() {
    URL.revokeObjectURL(this.src);
    if (ws) {
      ws.close();
      ws = null;
    }
    localStorage.removeItem("src");
  },
  methods: {
    record() {
      if (this.isRecording !== true) {
        this.isRecording = true;
        //recordUse = getRecord().call(this)
        recordUse = record.call(this, this.$refs["video"]);
      } else {
        if (recordUse && recordUse.end) {
          recordUse.end();
          this.$message.success("视频录制完成");
        } else {
          this.$message.error("视频录制失败");
        }
        recordUse = null;
        this.isRecording = false;
        setTimeout(() => {
          this.isRecording = -1;
        }, 5000);
      }
    },
    switchFullScreen() {
      console.log("视频切换");
      if (!screenfull.enabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      } else {
        screenfull.toggle();
        this.isFullscreen = !screenfull.isFullscreen;
        // if (this.isFullscreen) {

        // } else {
        //   screenfull.toggle();
        //   this.isFullscreen = !screenfull.isFullscreen;
        // }
      }
    },
    capture() {
      const videoEl = document.getElementById("srcvideo");
      videoEl.setAttribute("crossOrigin", "anonymous");
      const canvasEl = document.createElement("canvas");
      canvasEl.width = videoEl.clientWidth;
      canvasEl.height = videoEl.clientHeight;
      const ctx = canvasEl.getContext("2d");
      ctx.drawImage(videoEl, 0, 0, videoEl.clientWidth, videoEl.clientHeight);
      var a = document.createElement("a");
      const d = new Date();
      a.download = "capture" + moment(d).format("YYYYMMDDHHmmss") + ".jpg";
      a.href = canvasEl.toDataURL("image/jpg");
      a.click();
      a = null;
    },
    openVideo() {
      r = useVideo();
      //console.log(common.videoUrl);
      ws = new WebSocket(common.videoUrl, "lws-video");
      // let videoUrl = "ws://192.168.1.89:17681/";
      // ws = new WebSocket(videoUrl, "lws-video");

      ws.binaryType = "arraybuffer";
      ws.addEventListener("open", () => {
        this.status = "open";
      });
      ws.addEventListener("error", (err) => {
        console.log(err);
        //this.status = "error";
      });
      ws.addEventListener("close", () => {
        this.status = "close";
      });
      ws.addEventListener("message", (event) => r.onMessage(event));
      this.src = r.src;
      //console.log(r.src);
      this.$nextTick(() => {
        r.videoRef.current = this.$refs["rgbVideoEl"];
      });
    },
    reload() {
      this.src = null;
      r = null;
      ws.close();
    },
  },
};
</script>
 

