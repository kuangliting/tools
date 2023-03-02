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
export const TaskOpType={
          IMPORT:0
,EXPORT:1
,DOWNLOAD:2
,QUERY:3
,CANCEL:4
,PAUSE:5
,CONTINUE:6
,UPLOAD:7

      };
export const TaskOpTypeMap={
        [TaskOpType.IMPORT]:'导入',[TaskOpType.EXPORT]:'导出',[TaskOpType.DOWNLOAD]:'下载',[TaskOpType.QUERY]:'查询',[TaskOpType.CANCEL]:'取消',[TaskOpType.PAUSE]:'暂停',[TaskOpType.CONTINUE]:'继续',[TaskOpType.UPLOAD]:'上传'
      };
export const TaskOpTypeList=[
        {label:'导入',value:TaskOpType.IMPORT},{label:'导出',value:TaskOpType.EXPORT},{label:'下载',value:TaskOpType.DOWNLOAD},{label:'查询',value:TaskOpType.QUERY},{label:'取消',value:TaskOpType.CANCEL},{label:'暂停',value:TaskOpType.PAUSE},{label:'继续',value:TaskOpType.CONTINUE},{label:'上传',value:TaskOpType.UPLOAD}
      ];
export const TaskStatus={
          FREE:0
,PROCESSING:1
,PENDING:2
,CANCELED:3
,FINISHED:4
,FAILURE:5
,CANCELING:6
,ROLLBACK:7

      };
export const TaskStatusMap={
        [TaskStatus.FREE]:'空闲',[TaskStatus.PROCESSING]:'处理中',[TaskStatus.PENDING]:'暂停中',[TaskStatus.CANCELED]:'已取消',[TaskStatus.FINISHED]:'已完成',[TaskStatus.FAILURE]:'失败',[TaskStatus.CANCELING]:'取消中',[TaskStatus.ROLLBACK]:'回滚中'
      };
export const TaskStatusList=[
        {label:'空闲',value:TaskStatus.FREE},{label:'处理中',value:TaskStatus.PROCESSING},{label:'暂停中',value:TaskStatus.PENDING},{label:'已取消',value:TaskStatus.CANCELED},{label:'已完成',value:TaskStatus.FINISHED},{label:'失败',value:TaskStatus.FAILURE},{label:'取消中',value:TaskStatus.CANCELING},{label:'回滚中',value:TaskStatus.ROLLBACK}
      ];
export default {FileType,FileTypeMap,FileTypeList,TaskOpType,TaskOpTypeMap,TaskOpTypeList,TaskStatus,TaskStatusMap,TaskStatusList}