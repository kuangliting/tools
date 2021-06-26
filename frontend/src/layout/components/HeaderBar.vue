<template>
  <div class="dumu-headbar" :class="{ 'is-sp': isPreview }">
    <el-dialog
      title="修改密码"
      :visible="dialogVisible"
      :show-close="!dialogLoading"
      @close="closeDialog"
      width="400px"
      destroy-on-close
    >
      <el-form
        class="header-change-pwd-form"
        label-position="right"
        label-width="84px"
      >
        <el-form-item ref="password" label="新密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item ref="confirm" label="确认密码">
          <el-input v-model="form.confirm" type="password" />
        </el-form-item>
        <el-form-item class="description">
            * 密码长度5-15位，且仅由字母、数字和英文下划线组成（字母区分大小写）
        </el-form-item>
        <el-form-item style="margin-top: 12px">
          <el-button
            @click="dialogVisible = false"
            :disabled="dialogLoading"
            style="width: 90px"
            >取消</el-button
          >
          <el-button
            type="primary"
            @click="handleResetAccountRequest"
            :loading="dialogLoading"
            style="width: 90px"
            >提交</el-button
          >
        </el-form-item>
        <el-form-item ref="message" />
      </el-form>
    </el-dialog>
    <div class="right-menu">
      <!-- <template v-if="device !== 'mobile'">
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
      </template> -->
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <i class="el-icon-s-custom" />
          <span class="dumu-avatar-name">{{ userName }}</span>
          <!-- <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu :class="{ 'is-sp': isPreview }">
          <el-dropdown-item @click.native="showDialog">
            <span>修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            <span>退出登陆</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
// import Hamburger from "@/components/Hamburger";
// import Screenfull from "@/components/Screenfull";
import { getPageMixin } from "@/utils/mixins";
//import { md5 } from "@/utils/crypto";

export default {
 // mixins: [getPageMixin()],
  computed: {
    ...mapGetters(["sidebar", "avatar", "device"]),
    isPreview() {
      return this.$route.path === "/live-video";
    },
  },
  data() {
    return {
      userName: "admin",
      dialogVisible: false,
      dialogLoading: false,
      form: {
        password: "",
        confirm: "",
      },
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
      this.dialogLoading = false
      this.form = {
        password: "",
        confirm: "",
      }
    },
    closeDialog() {
      this.dialogVisible = false
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    logout() {
      window.localStorage.removeItem("x-token");
      this.$router.push("/login");
    },
    validate() {
      let isOK = true;
      if (!this.form.password) {
        this.$refs.password.validateState = "error";
        this.$refs.password.validateMessage = "请输入新密码";
        isOK = false;
      } else if (!new RegExp("^[a-zA-Z0-9_]{5,15}$").test(this.form.password)) {
        this.$refs.password.validateState = "error";
        this.$refs.password.validateMessage = "密码不符合要求";
        isOK = false;
      } else {
        this.$refs.password.clearValidate();
      }
      if (!this.form.confirm) {
        this.$refs.confirm.validateState = "error";
        this.$refs.confirm.validateMessage = "请输入确认密码";
        isOK = false;
      } else if (this.form.confirm !== this.form.password) {
        this.$refs.confirm.validateState = "error";
        this.$refs.confirm.validateMessage = "密码与确认密码不一致";
        isOK = false;
      } else {
        this.$refs.confirm.clearValidate();
      }
      return isOK;
    },
    handleResetAccountRequest() {
      if(this.validate()) {
        this.dialogLoading = true;
        this.$refs.message.clearValidate()
        const webAction = new __PROTOBUF__.WebAction();
        const setupAccount = new __PROTOBUF__.SetupAccount();
        const setupType = __PROTOBUF__.SetupType.PASSWORD_ONLY;
        const userInfo = new __PROTOBUF__.AccountInfo();
        // userInfo.setMd5Key(md5('admin'));
        // userInfo.setMd5Value(md5(this.form.password));
        // webAction.setSetupAccount(setupAccount);
        // setupAccount.setSetupType(setupType);
        // setupAccount.setTaskId("::SetupAccount::Password");
        // setupAccount.setUserInfo(userInfo);
        // console.log(webAction.toObject());
        // this.send(webAction);
      }
    },
    handleResetAccountResponse(data) {
      console.log(data);
      if (data.result.status === 0) {
        this.dialogVisible = false
      } else {
        this.$refs.message.validateState = 'error'
        this.$refs.message.validateMessage = data.result.info
      }
      this.dialogLoading = false;
    },
    getActionResult(result) {
      if (!result) return;
      if (result.setupAccountResult && result.setupAccountResult.taskId === "::SetupAccount::Password")
        this.handleResetAccountResponse(result.setupAccountResult);
    },
  }
};
</script>

<style lang="scss" >
$backcolor: #202025;
$bordercolor: #28282c;
.el-dropdown-menu {
  $backcolor: #4a4a4f;
  $bordercolor: #595861;
  &.is-sp {
    background-color: $backcolor;
    border-color: $bordercolor;
    .el-dropdown-menu__item {
      background-color: $backcolor;
      color: #ddd;
    }
    .popper__arrow {
      border-bottom-color: $bordercolor;
    }
    .popper__arrow::after {
      border-bottom-color: $backcolor;
    }
  }
}
.dumu-headbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  &.is-sp {
    background: $backcolor;
    box-shadow: 0 1px 4px rgba(211, 219, 226, 0.1);
    // border-bottom-color:$bordercolor;
    .avatar-wrapper {
      color: #aaa;
    }
  }

  .el-dialog__body {
    padding: 24px;
    padding-bottom: 0px;
  }

  .header-change-pwd-form {
    .description {
      .el-form-item__content {
        text-align: left;
        font-size: 12px;
        line-height: 20px;
        color: #9493A8;
      }
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 25px;
      user-select: none;

      .avatar-wrapper {
        margin-top: 6px;
        position: relative;
        // border:2px solid red;
        .dumu-avatar-name {
          margin: 0 6px;
        }
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 60px;
          border-radius: 10px;
        }

        // .el-icon-caret-bottom {
        //   cursor: pointer;
        //   position: absolute;
        //   right: -20px;
        //   top: 25px;
        //   font-size: 12px;
        // }
      }
    }
  }
}
</style>
