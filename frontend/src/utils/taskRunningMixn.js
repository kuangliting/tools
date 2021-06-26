import {
  FileOpType,
  FileType
} from "@/utils/enum/staff_management";
const protobuf = window.__PROTOBUF__;
export default {
  data() {
    return {
      taskRunning: true,
    };
  },
  methods: {
    ifHasTaskHandler(result){
        let fileOpResult = result.fileOpResult;
        if (fileOpResult && fileOpResult.result) {
          //console.log("fileOpResult",fileOpResult);
           if (fileOpResult.opType === FileOpType.QUERY) {
             if( fileOpResult.result.status === 0){
                 this.taskRunning= false;
             }else{
                 this.$message.warning(fileOpResult.result.info)
             }
           }
        }
    },
    getTaskStatus() {
      const ImportOrExportFile = new protobuf.baidu.dumu.ImportOrExportFile();
      ImportOrExportFile.setOpType(FileOpType.QUERY);
      const all_action = new protobuf.baidu.dumu.WebAction();
      all_action.setFileOp(ImportOrExportFile);
      return all_action;
    }
  }
}
