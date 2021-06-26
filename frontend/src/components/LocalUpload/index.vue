<template>
  <div class="f-img-pk-wrap" :class="{ error }">
    <div class="f-img-pk" :style="{ width: width, height: width }">
      <i class="el-icon-plus" :style="iconStyle"></i>
      <input
        type="file"
        ref="upload"
        :key="key + 'key'"
        @change="handleChange"
        accept="image/jpeg,image/png"
        class="f-img-pk-file"
      />
      <img
        v-show="photo.fileName"
        :src="`${photo.base64}`"
        class="f-img-pk-avatar"
      />
      <div
        class="close-img-layer"
        v-if="!disabled"
        v-show="photo.fileName"
        @click="remove"
      >
        <i class="el-icon-close img-close-icon" :style="iconStyle" />
      </div>
    </div>
    <span class="f-img-title" v-if="!disabled">{{ title }}</span>
  </div>
</template>
<script>
import { IMAGE_BASE_PATH } from "@/utils";

function getBase64(url) {
  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    //canvas.hidden = true;
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    // var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    // var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
  }
  return new Promise(function (resovle) {
    var image = new Image();
    image.crossOrigin = "";
    image.src = url;
    image.onload = function () {
      let base64 = getBase64Image(image);
      resovle(base64);
    };
  });
}

export default {
  props: {
    width: {
      type: String,
      default: "224px",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "请上传图片",
    },
  },
  data() {
    return {
      IMAGE_BASE_PATH,
      photo: { fileName: "", isPath: false, base64: "" },
      fileList: [],
      key: 1,
      error: false,
    };
  },
  computed: {
    iconStyle() {
      return {
        fontSize: parseInt(this.width) * 0.18 + "px",
      };
    },
  },
  methods: {
    setPhoto(base64, fileName = "ded.jpg", isPath = false) {
      this.photo.base64 = base64;
      this.photo.fileName = fileName;
      this.photo.isPath = isPath;
      this.error = false;
    },
    remove() {
      // this.photo.value="";
      // this.fileList=[];
      //this.photo = {base64:""};
      this.photo.base64 = "";
      this.photo.fileName = "";
      this.key++;
      this.$emit("remove");
      //console.log(this.photo);
    },
    handleChange(e) {
      if (e.target.files.length) {
        let file = e.target.files[0];
        console.log(file);
        if (file.size > 1024 * 1024) {
          this.$message.error("图片过大，无法上传");
          return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        let _this = this;
        reader.onload = function (e) {
          //console.log(_this);
          // console.log(_this.photo.base64)
          var image = new Image();
          image.onload = function () {
            var width = image.width;
            var height = image.height;
            //console.log(width,height);
            _this.photo.fileName = file.name;
            _this.photo.base64 = e.target.result;
            _this.$emit("change", { name: _this.name, photo: _this.photo });
          };
          image.src = e.target.result;
        };
      }
    },
  },
};
</script>
<style lang="scss">
.f-img-pk-wrap {
  display: inline-block;
  &.error {
    .f-img-title {
      color: red;
      // margin-top: 18px;
    }
    .f-img-pk {
      border-color: red;
    }
  }
  .f-img-pk {
    text-align: center;
    border: 1px solid #e8e7ed;
    margin-bottom: 10px;
    background: #f9fafc;
    position: relative;
    .el-icon-plus,
    .img-close-icon {
      vertical-align: middle;
      font-size: 32px;
      margin-top: 50%;
      transform: translateY(-50%);
      color: #999;
      border: 0px solid red;
    }
    .f-img-pk-file {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid red;
      opacity: 0;
      cursor: pointer;
    }
    .f-img-pk-avatar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .close-img-layer {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      text-align: center;
      cursor: pointer;
    }
    .img-hover-tip {
      font-size: 17px;
      font-weight: 600;
      text-align: center;
      color: #ddd;
      display: inline-block;
      margin-top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      .close-img-layer {
        display: block;
      }
      .img-close-icon {
        color: #ddd;
      }
    }
  }
  .f-img-title {
    font-size: 13px;
    display: block;
    color: #9493a8;
    // margin-top: 18px;
  }
}
</style>