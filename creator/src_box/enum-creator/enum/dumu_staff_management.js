export const FileType={
          ZIP:0
,FOLDER:1
,FILE:2

      };
export const FileTypeMap={
        [FileType.ZIP]:'压缩包',[FileType.FOLDER]:'文件夹',[FileType.FILE]:'文件'
      };
export const FileTypeList=[
        {label:'压缩包',value:FileType.ZIP},{label:'文件夹',value:FileType.FOLDER},{label:'文件',value:FileType.FILE}
      ];
export const FileOpType={
          IMPORT:0
,EXPORT:1
,DOWNLOAD:2
,QUERY:3
,CANCEL:4
,PAUSE:5
,CONTINUE:6
,UPLOAD:7

      };
export const FileOpTypeMap={
        [FileOpType.IMPORT]:'导入',[FileOpType.EXPORT]:'导出',[FileOpType.DOWNLOAD]:'下载',[FileOpType.QUERY]:'查询',[FileOpType.CANCEL]:'取消',[FileOpType.PAUSE]:'暂停',[FileOpType.CONTINUE]:'继续',[FileOpType.UPLOAD]:'上传'
      };
export const FileOpTypeList=[
        {label:'导入',value:FileOpType.IMPORT},{label:'导出',value:FileOpType.EXPORT},{label:'下载',value:FileOpType.DOWNLOAD},{label:'查询',value:FileOpType.QUERY},{label:'取消',value:FileOpType.CANCEL},{label:'暂停',value:FileOpType.PAUSE},{label:'继续',value:FileOpType.CONTINUE},{label:'上传',value:FileOpType.UPLOAD}
      ];
export const StaffInfoChangeType={
          ADD:0
,UPDATE:1
,DELETE:2
,CLEAR:3

      };
export const StaffInfoChangeTypeMap={
        [StaffInfoChangeType.ADD]:'新增',[StaffInfoChangeType.UPDATE]:'更新',[StaffInfoChangeType.DELETE]:'删除',[StaffInfoChangeType.CLEAR]:'清空'
      };
export const StaffInfoChangeTypeList=[
        {label:'新增',value:StaffInfoChangeType.ADD},{label:'更新',value:StaffInfoChangeType.UPDATE},{label:'删除',value:StaffInfoChangeType.DELETE},{label:'清空',value:StaffInfoChangeType.CLEAR}
      ];
export default {FileType,FileTypeMap,FileTypeList,FileOpType,FileOpTypeMap,FileOpTypeList,StaffInfoChangeType,StaffInfoChangeTypeMap,StaffInfoChangeTypeList}