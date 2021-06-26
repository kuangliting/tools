<template>
  <div class="dumu-page roi-page">
    <div class="dumu-page-title">{{ this.$route.meta.title }}</div>
    <div class="dumu-page-container">
      <div class="dumu-main-panel">
        <div class="video-wrap">
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

          <canvas
            :width="oneWidth"
            :height="oneHeight"
            id="canvas"
            @mousedown="downAction"
            @mousemove="moveAction"
            @mouseup="upAction"
          />

          <!-- <div class="rect-layer"> -->
            <div
              v-for="(a, i) in rectList"
              :key="i"
              class="rect-box"
              :style="a.style"
            >
              <el-button
                icon="el-icon-delete"
                @click="remove(i)"
                circle
              ></el-button>
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.roi-page {
  .dumu-page-container {
    padding: 0;
  }
  .dumu-main-panel {
    width: 100%;
    height: 100%;
    border: 0px solid blue;
    text-align: center;
    &::before {
      height: 100%;
      content: "";
      width: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .rect-box {
      position: absolute;
      border: 2px solid  rgba(255,0,0,.4);
    }
  .rect-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  canvas {
    border: 0px solid red;
    position: absolute;
    top: 0;
    left: 0;
  }
  .video-wrap {
    // position: absolute;
    // border: 1px solid green;
    // top: 10px;
    // left: 10px;
    // right: 10px;
    // bottom: 10px;
    display: inline-block;
    position: relative;
    border: 0px solid green;
    vertical-align: middle;
    // clip-path: circle(20% at 200px 200px);
    // clip-path: polygon(10% 0,50% 20%,0 30%);
    // background: rgba(255,0,0,.2);
  }
}
</style>
<script>
import { useVideo } from "../live-video/util";
import { getHeightMixin } from "../live-video/mixin";
//console.log(getHeightMixin);
let ctx = null;
const common = window.__COMMON__;
let r = null;
let ws = null;
//console.log(common);
let recordUse = null;
const protobuf = window.__PROTOBUF__;
let outMX = 0,outMY = 0;

export default {
  mixins: [getHeightMixin(150, "oneHeight", 260, "oneWidth")],
  data() {
    return {
      startPoint: {},
      started: false,
      src: null,
      list: [],
      rectList: [],
      max:4,
    };
  },
  mounted() {
    this.openVideo();
    let canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
  },
  methods: {
    remove(i) {
      // console.log(this.rectList.indexOf(a));
      this.rectList.splice(i, 1);
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
    moveDraw(x, y, isStop) {
      let { layerX, layerY } = this.startPoint;
      let mX = x - layerX;
      let mY = y - layerY;
      //ctx.clearRect(0, 0, this.oneWidth, this.oneHeight);
      ctx.clearRect(layerX, layerY, mX, mY);
      if (!isStop) {
        ctx.fillRect(layerX, layerY, mX, mY);
        ctx.strokeRect(layerX, layerY, mX, mY);
      } else {
        // ctx.clearRect(layerX, layerY, mX, mY);
        ctx.clearRect(0, 0, this.oneWidth, this.oneHeight);
        let obj = {
          left: layerX,
          top: layerY,
          width: mX,
          height: mY,
          style: {
            // left: `${layerX*100 / this.oneWidth}%`,
            // top: `${layerY*100 / this.oneHeight}%`,
            // width: `${mX*100 / this.oneWidth}%`,
            // height: `${mY*100 / this.oneHeight}%`,
            left: `${(layerX * 100) / this.oneWidth}%`,
            top: `${(layerY * 100) / this.oneHeight}%`,
            width: `${(mX * 100) / this.oneWidth}%`,
            height: `${(mY * 100) / this.oneHeight}%`,
          },
        };
        console.log(obj);
        this.rectList.push(obj);
      }

      // outMX = mX;
      // outMY = mY;
    },
    draw() {
      ctx.fillRect(10, 10, 300, 200);
      ctx.strokeRect(10, 10, 300, 200);
    },
    downAction(e) {
      // console.log("e=====");
      // console.log(e);
      let { layerX, layerY } = e;
      this.startPoint = { layerX, layerY };
      this.started = true;
      ctx.fillStyle = "rgba(0,0,0,.05)";
      ctx.strokeStyle = "rgba(0,0,0,.15)";
    },
    moveAction(e) {
      // console.log("move e=====");
      // console.log(e);
      if (this.started) {
        let { layerX, layerY } = e;
        this.moveDraw(layerX, layerY);
      }
    },
    upAction(e) {
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.strokeStyle = "#333";
      let { layerX, layerY } = e;
      this.moveDraw(layerX, layerY, true);
      this.started = false;

      // console.log("up e=====");
      // console.log(e);
    },
  },
};
</script>
