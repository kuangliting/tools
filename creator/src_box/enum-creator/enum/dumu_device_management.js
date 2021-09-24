export const ImportDeviceType={
          DEVICE_TYPE_IPC:0
,DEVICE_TYPE_PIC:1

      };
export const ImportDeviceTypeMap={
        [ImportDeviceType.DEVICE_TYPE_IPC]:'网络摄像头',[ImportDeviceType.DEVICE_TYPE_PIC]:'图片流'
      };
export const ImportDeviceTypeList=[
        {label:'网络摄像头',value:ImportDeviceType.DEVICE_TYPE_IPC},{label:'图片流',value:ImportDeviceType.DEVICE_TYPE_PIC}
      ];
export const DeviceWorkStatus={
          DEVICE_STATUS_NONE:0
,DEVICE_STATUS_OFFLINE:1
,DEVICE_STATUS_ONLINE:2

      };
export const DeviceWorkStatusMap={
        [DeviceWorkStatus.DEVICE_STATUS_NONE]:'无状态',[DeviceWorkStatus.DEVICE_STATUS_OFFLINE]:'离线',[DeviceWorkStatus.DEVICE_STATUS_ONLINE]:'在线'
      };
export const DeviceWorkStatusList=[
        {label:'无状态',value:DeviceWorkStatus.DEVICE_STATUS_NONE},{label:'离线',value:DeviceWorkStatus.DEVICE_STATUS_OFFLINE},{label:'在线',value:DeviceWorkStatus.DEVICE_STATUS_ONLINE}
      ];
export const DeviceServiceMode={
          DEVICE_SERVICE_MODE_NONE:0
,DEVICE_SERVICE_MODE_VIDEO:1
,DEVICE_SERVICE_MODE_PIC:2

      };
export const DeviceServiceModeMap={
        [DeviceServiceMode.DEVICE_SERVICE_MODE_NONE]:'无模式',[DeviceServiceMode.DEVICE_SERVICE_MODE_VIDEO]:'视频模式',[DeviceServiceMode.DEVICE_SERVICE_MODE_PIC]:'图片模式'
      };
export const DeviceServiceModeList=[
        {label:'无模式',value:DeviceServiceMode.DEVICE_SERVICE_MODE_NONE},{label:'视频模式',value:DeviceServiceMode.DEVICE_SERVICE_MODE_VIDEO},{label:'图片模式',value:DeviceServiceMode.DEVICE_SERVICE_MODE_PIC}
      ];
export const DeviceAccessProtocol={
          DEVICE_ACCESS_PROTOCOL_RTSP:0
,DEVICE_ACCESS_PROTOCOL_ONVIF:1
,DEVICE_ACCESS_PROTOCOL_GAT1400:2
,DEVICE_ACCESS_PROTOCOL_GB28181:3

      };
export const DeviceAccessProtocolMap={
        [DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_RTSP]:'RTSP',[DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_ONVIF]:'ONVIF',[DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GAT1400]:'GAT1400',[DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GB28181]:'GB28181'
      };
export const DeviceAccessProtocolList=[
        {label:'RTSP',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_RTSP},{label:'ONVIF',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_ONVIF},{label:'GAT1400',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GAT1400},{label:'GB28181',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GB28181}
      ];
export const DeviceCaptureStrategy={
          DEVICE_CAPTURE_STRATEGY_FAST:0
,DEVICE_CAPTURE_STRATEGY_LEAVING:1
,DEVICE_CAPTURE_STRATEGY_GAP:2

      };
export const DeviceCaptureStrategyMap={
        [DeviceCaptureStrategy.DEVICE_CAPTURE_STRATEGY_FAST]:'快速抓拍',[DeviceCaptureStrategy.DEVICE_CAPTURE_STRATEGY_LEAVING]:'离开后抓拍',[DeviceCaptureStrategy.DEVICE_CAPTURE_STRATEGY_GAP]:'间隔抓拍'
      };
export const DeviceCaptureStrategyList=[
        {label:'快速抓拍',value:DeviceCaptureStrategy.DEVICE_CAPTURE_STRATEGY_FAST},{label:'离开后抓拍',value:DeviceCaptureStrategy.DEVICE_CAPTURE_STRATEGY_LEAVING},{label:'间隔抓拍',value:DeviceCaptureStrategy.DEVICE_CAPTURE_STRATEGY_GAP}
      ];
export const FaceQualityRequire={
          FACE_QUALITY_REQUIRE_STANDARD:0
,FACE_QUALITY_REQUIRE_LOOSE:1
,FACE_QUALITY_REQUIRE_STRICT:2
,FACE_QUALITY_REQUIRE_CUSTOM:3

      };
export const FaceQualityRequireMap={
        [FaceQualityRequire.FACE_QUALITY_REQUIRE_STANDARD]:'标准要求',[FaceQualityRequire.FACE_QUALITY_REQUIRE_LOOSE]:'宽松要求',[FaceQualityRequire.FACE_QUALITY_REQUIRE_STRICT]:'严格要求',[FaceQualityRequire.FACE_QUALITY_REQUIRE_CUSTOM]:'自定义要求'
      };
export const FaceQualityRequireList=[
        {label:'标准要求',value:FaceQualityRequire.FACE_QUALITY_REQUIRE_STANDARD},{label:'宽松要求',value:FaceQualityRequire.FACE_QUALITY_REQUIRE_LOOSE},{label:'严格要求',value:FaceQualityRequire.FACE_QUALITY_REQUIRE_STRICT},{label:'自定义要求',value:FaceQualityRequire.FACE_QUALITY_REQUIRE_CUSTOM}
      ];
export const DeviceOperation={
          DEVICE_OPERATE_ADD:0
,DEVICE_OPERATE_EDIT:1
,DEVICE_OPERATE_DELETE:2
,DEVICE_OPERATE_ENABLE:3

      };
export const DeviceOperationMap={
        [DeviceOperation.DEVICE_OPERATE_ADD]:'新增',[DeviceOperation.DEVICE_OPERATE_EDIT]:'编辑',[DeviceOperation.DEVICE_OPERATE_DELETE]:'删除',[DeviceOperation.DEVICE_OPERATE_ENABLE]:'使能'
      };
export const DeviceOperationList=[
        {label:'新增',value:DeviceOperation.DEVICE_OPERATE_ADD},{label:'编辑',value:DeviceOperation.DEVICE_OPERATE_EDIT},{label:'删除',value:DeviceOperation.DEVICE_OPERATE_DELETE},{label:'使能',value:DeviceOperation.DEVICE_OPERATE_ENABLE}
      ];
export const FilterType={
          FT_SHIED:0
,FT_INTEREST:1

      };
export const FilterTypeMap={
        [FilterType.FT_SHIED]:'object in this type of area will be removed',[FilterType.FT_INTEREST]:'object in this type of area will be captured.'
      };
export const FilterTypeList=[
        {label:'object in this type of area will be removed',value:FilterType.FT_SHIED},{label:'object in this type of area will be captured.',value:FilterType.FT_INTEREST}
      ];
export default {ImportDeviceType,ImportDeviceTypeMap,ImportDeviceTypeList,DeviceWorkStatus,DeviceWorkStatusMap,DeviceWorkStatusList,DeviceServiceMode,DeviceServiceModeMap,DeviceServiceModeList,DeviceAccessProtocol,DeviceAccessProtocolMap,DeviceAccessProtocolList,DeviceCaptureStrategy,DeviceCaptureStrategyMap,DeviceCaptureStrategyList,FaceQualityRequire,FaceQualityRequireMap,FaceQualityRequireList,DeviceOperation,DeviceOperationMap,DeviceOperationList,FilterType,FilterTypeMap,FilterTypeList}