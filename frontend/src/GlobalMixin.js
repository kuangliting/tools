 // export const FileOpType = {
 //   IMPORT: 0,
 //   EXPORT: 1,
 //   DOWNLOAD: 2,
 //   QUERY: 3,
 //   CANCEL: 4,
 //   PAUSE: 5,
 //   CONTINUE: 6,
 //   UPLOAD: 7
 // };

 import ImportResult from "./ImportResult";
 import {
   getPageMixin
 } from "@/utils/mixins";
 import {
   downloadFile
 } from "@/utils/index"
 import {
   FileOpType,
   FileType
 } from "@/utils/enum/staff_management";
 const protobuf = window.__PROTOBUF__;

 export default {
   mixins: [getPageMixin()],
   components: {
     ImportResult
   },
   data() {
     return {
       importResultData: {
         errDetailList: [],
         taskStatus: 1,
         currentItem: 0
       },
       importResultShow: false,
     };
   },
  //  computed: {
  //    routerShow() {
  //      console(this.$router.path);
  //      this.$router.path
  //      return this.sd;
  //    },
  //  },
   methods: {
     closeImport() {
       this.importResultShow = false;
       console.log("set importResultShow close")
     },
     importSendCancel(taskId) {
      //  console.log("取消任务obj.taskId");
      //  console.log(taskId);
       const ImportOrExportFile = new protobuf.baidu.dumu.ImportOrExportFile();
       ImportOrExportFile.setOpType(FileOpType.CANCEL);
       ImportOrExportFile.setTaskId(taskId);
       const all_action = new protobuf.baidu.dumu.WebAction();
       all_action.setFileOp(ImportOrExportFile);
       this.send(all_action);
     },
     getActionResult(result) {
       // console.log("批量 result");
       // console.log(result);
       let fileOpResult = result.fileOpResult;
       if (fileOpResult && fileOpResult.result) {
         if (fileOpResult.opType !== FileOpType.QUERY) {
           //status=4003表示用户取消成功
           if (
             fileOpResult.result.status === 0 ||
             fileOpResult.result.status === 4003
           ) {
             if (!this.importResultShow) {
               this.importResultShow = true;
               console.log("set importResultShow true")
             }
             if (fileOpResult.taskManage) {
               this.importResultData = fileOpResult.taskManage;
               this.importResultData.opType = fileOpResult.opType;
               if (
                 fileOpResult.opType === FileOpType.EXPORT &&
                 fileOpResult.taskManage.taskStatus === 4
               ) {
                 downloadFile(fileOpResult.taskManage.taskTarget);
               }
               if(fileOpResult.opType === FileOpType.IMPORT&&
                fileOpResult.taskManage.taskStatus === 4){

               }
             }
             //console.log(fileOpResult);
           } else {
             this.$message.error(fileOpResult.result.info);
           }
         }
       }
     },

   },
 };
