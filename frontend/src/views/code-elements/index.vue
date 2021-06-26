<template>
  <div class="dumu-full-page" >
    <div class="dumu-page-title">{{ this.$route.meta.title }}</div>

    <div class="dumu-full-page-w">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        class="dumu-table dumu-full-table"
        style="min-width: 800px"
        v-loading="isLoading"
      >
        <el-table-column type="selection" width="85"> </el-table-column>
        <el-table-column prop="pageName" label="页面名称" width="120">
        </el-table-column>
        <el-table-column prop="icon" label="图标"> </el-table-column>
        <el-table-column prop="code" label="代码" width="120">
        </el-table-column>
        <el-table-column prop="detailLink" label="页面详细定义" width="120">
        </el-table-column>
        <el-table-column prop="routerName" label="路径" width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>