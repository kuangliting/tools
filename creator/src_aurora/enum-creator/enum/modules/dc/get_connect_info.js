export const ConnectType={
          SERVER_TYPE:0
,BOS_TYPE:1

      };
export const ConnectTypeMap={
        [ConnectType.SERVER_TYPE]:'在线服务器',[ConnectType.BOS_TYPE]:'bos'
      };
export const ConnectTypeList=[
        {label:'在线服务器',value:ConnectType.SERVER_TYPE},{label:'bos',value:ConnectType.BOS_TYPE}
      ];
export default {ConnectType,ConnectTypeMap,ConnectTypeList}