<template>
  <div class="dumu-page">
    <div class="dumu-page-title">{{ this.$route.meta.title }}</div>
    <div class="dumu-page-container">
      <div class="">
        <el-form
          class=""
          :rules="rules"
          ref="form"
          size="small"
          :model="device"
          label-width="130px"
          :disabled="disabled"
        >
          <el-form-item label="音频编码：" prop="a">
            <el-select v-model="device.a" placeholder="请选择音频编码">
              <el-option
                v-for="item in [
                  'G.722.1',
                  'G.711ulaw',
                  'G.711alaw',
                  'G.726',
                  'PCM',
                ]"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="音频输入：" prop="b">
            <el-input v-model="device.b" placeholder="请采样率" />
          </el-form-item>

          <el-form-item label="采样率：" prop="cc">
            <el-select v-model="device.c" placeholder="请选择采样率">
              <el-option
                v-for="item in ['16kHZ', '32kHZ', '48kHZ']"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="音频码率：" prop="c">
            <el-select v-model="device.c" placeholder="请选择音频码率">
              <el-option
                v-for="item in [
                  '32kbps',
                  '40 kbps',
                  '48 kbps',
                  '56 kbps',
                  '64 kbps',
                  '80 kbps',
                  '96 kbps',
                  '112 kbps',
                  '128 kbps',
                  '144 kbps',
                  '160 kbps',
                ]"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="输入音量：" prop="screenTimeout">
            <el-input-number
              v-model="device.inner"
              :min="0"
              :max="100"
              label="请输入正确的输入音量"
            ></el-input-number>
            <span class="dumu-part-tip">[0~100]</span>
          </el-form-item>

          <!-- 7、 环境噪音过滤：开启、关闭 -->
          <el-form-item>
            <el-button type="primary" @click="save">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <!-- <div class="dumu-page">
    <el-scrollbar class="dumu-page-scorll">
    </el-scrollbar>
  </div> -->
</template>
<style lang='scss'>
 
</style>
<script>
function ipValidator(rule, value, callback) {
  const pattern =
    /([0,1]?\d{1,2}|2([0-4][0-9]|5[0-5]))(\.([0,1]?\d{1,2}|2([0-4][0-9]|5[0-5]))){3}/;
  const t = {
    ipAddr: "IP地址",
    netmask: "子网掩码",
    gateway: "网关",
  };
  if (!value || pattern.test(value)) {
    callback();
  } else {
    callback(new Error(t[this.field] + "格式不正确"));
  }
}
export default {
  data() {
    return {
      device: {},
      disabled: false,
      rules: {
        ipVersion: [
          {
            messgae: "不能为空",
            trigger: "blur",
            required: true,
          },
        ],
        mode: [
          {
            trigger: "blur",
            messgae: "不能为空",
            required: true,
          },
        ],
        ipAddr: [
          {
            trigger: "blur",
            validator: ipValidator,
          },
        ],
        netmask: [
          {
            trigger: "blur",
            validator: ipValidator,
          },
        ],
        gateway: [
          {
            trigger: "blur",
            validator: ipValidator,
          },
        ],
      },
    };
  },
  computed: {},
  methods: {
    save() {},
  },
};
</script>