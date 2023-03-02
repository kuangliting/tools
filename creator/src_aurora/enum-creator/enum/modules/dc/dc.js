export const DataStorageStrategy={
          DATA_STORAGE_STRATEGY_FULL_COVER:0
,DATA_STORAGE_STRATEGY_FULL_STOP:1

      };
export const DataStorageStrategyMap={
        [DataStorageStrategy.DATA_STORAGE_STRATEGY_FULL_COVER]:'满覆盖',[DataStorageStrategy.DATA_STORAGE_STRATEGY_FULL_STOP]:'满即停'
      };
export const DataStorageStrategyList=[
        {label:'满覆盖',value:DataStorageStrategy.DATA_STORAGE_STRATEGY_FULL_COVER},{label:'满即停',value:DataStorageStrategy.DATA_STORAGE_STRATEGY_FULL_STOP}
      ];
export const ServerStatus={
          SERVER_STATUS_NONE:0
,SERVER_STATUS_OFFLINE:1
,SERVER_STATUS_ONLINE:2

      };
export const ServerStatusMap={
        [ServerStatus.SERVER_STATUS_NONE]:'无状态',[ServerStatus.SERVER_STATUS_OFFLINE]:'离线',[ServerStatus.SERVER_STATUS_ONLINE]:'在线'
      };
export const ServerStatusList=[
        {label:'无状态',value:ServerStatus.SERVER_STATUS_NONE},{label:'离线',value:ServerStatus.SERVER_STATUS_OFFLINE},{label:'在线',value:ServerStatus.SERVER_STATUS_ONLINE}
      ];
export const DataUploadServiceSatutus={
          DATA_UPLOAD_SERVICE_STATUS_IDLE:0
,DATA_UPLOAD_SERVICE_STATUS_START:1
,DATA_UPLOAD_SERVICE_STATUS_RUN:2
,DATA_UPLOAD_SERVICE_STATUS_SUCCESS:3
,DATA_UPLOAD_SERVICE_STATUS_OFF:4

      };
export const DataUploadServiceSatutusMap={
        [DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_IDLE]:'未上传',[DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_START]:'开始',[DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_RUN]:'上传中',[DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_SUCCESS]:'成功',[DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_OFF]:'上传失败'
      };
export const DataUploadServiceSatutusList=[
        {label:'未上传',value:DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_IDLE},{label:'开始',value:DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_START},{label:'上传中',value:DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_RUN},{label:'成功',value:DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_SUCCESS},{label:'上传失败',value:DataUploadServiceSatutus.DATA_UPLOAD_SERVICE_STATUS_OFF}
      ];
export default {DataStorageStrategy,DataStorageStrategyMap,DataStorageStrategyList,ServerStatus,ServerStatusMap,ServerStatusList,DataUploadServiceSatutus,DataUploadServiceSatutusMap,DataUploadServiceSatutusList}