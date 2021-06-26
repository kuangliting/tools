let tempStr=`
<div class="dumu-page">
<div class="dumu-page-title">{{ this.$route.meta.title }}</div>
<div class="dumu-page-container page-cnt">
  <div class="">
    <el-form
      class=""
      :rules="rules"
      ref="form"
      size="small"
      :model="form"
      label-width="130px"
      :disabled="disabled"
    >
      <el-form-item label="码流类型：" prop="a">
        <el-select v-model="form.a" placeholder="请选择码流类型">
          <el-option
            v-for="item in StreamSelectionList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="视频类型：" prop="b">
        <el-select v-model="form.b" placeholder="请选择视频类型">
          <el-option
            v-for="item in [
              { label: '视频流', value: 1 },
              { label: '复合流', value: 2 },
            ]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="I帧间隔：" prop="screenTimeout">
        <el-input-number
          v-model="form.inner"
          :min="0"
          :max="60"
          label="请输入正确的I帧间隔"
        ></el-input-number>
        <span class="dumu-part-tip">[0~60]帧</span>
      </el-form-item>

      <el-form-item label="分辨率：" prop="c">
        <el-select v-model="form.c" placeholder="请选择分辨率">
          <el-option
            v-for="item in [
              { label: '1280*720', value: 1 },
              { label: '1920*1080', value: 2 },
            ]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="码率类型：" prop="d">
        <el-select v-model="form.d" placeholder="请选择码率类型">
          <el-option
            v-for="item in [
              { label: '定码率', value: 1 },
              { label: '变码率', value: 2 },
            ]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    
      
      <el-form-item label="码率：" prop="g">
        <el-select v-model="form.g" placeholder="请选择码率">
          <el-option
            v-for="item in [
              256, 512, 1024, 2048, 3072, 4096, 6144, 8192, 12288, 16384,
            ]"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</div>`