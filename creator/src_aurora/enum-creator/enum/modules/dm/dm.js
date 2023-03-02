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
          DEVICE_ACCESS_PROTOCOL_ONVIF:0
,DEVICE_ACCESS_PROTOCOL_RTSP:1
,DEVICE_ACCESS_PROTOCOL_GB28181:2
,DEVICE_ACCESS_PROTOCOL_GAT1400:3

      };
export const DeviceAccessProtocolMap={
        [DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_ONVIF]:'ONVIF',[DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_RTSP]:'RTSP',[DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GB28181]:'GB28181',[DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GAT1400]:'GAT1400'
      };
export const DeviceAccessProtocolList=[
        {label:'ONVIF',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_ONVIF},{label:'RTSP',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_RTSP},{label:'GB28181',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GB28181},{label:'GAT1400',value:DeviceAccessProtocol.DEVICE_ACCESS_PROTOCOL_GAT1400}
      ];
export const TransportProtocol={
          TRANSPORT_RROTOCOL_UDP:0
,TRANSPORT_PROTOCOL_TCP:1

      };
export const TransportProtocolMap={
        [TransportProtocol.TRANSPORT_RROTOCOL_UDP]:'UDP',[TransportProtocol.TRANSPORT_PROTOCOL_TCP]:'TCP'
      };
export const TransportProtocolList=[
        {label:'UDP',value:TransportProtocol.TRANSPORT_RROTOCOL_UDP},{label:'TCP',value:TransportProtocol.TRANSPORT_PROTOCOL_TCP}
      ];
export const ChannelType={
          ALL_CHANEL:0
,OCCUPIED_CHANNEL:1
,IDLE_CHANNEL:2

      };
export const ChannelTypeMap={
        [ChannelType.ALL_CHANEL]:'所有通道',[ChannelType.OCCUPIED_CHANNEL]:'被占用通道',[ChannelType.IDLE_CHANNEL]:'空闲通道'
      };
export const ChannelTypeList=[
        {label:'所有通道',value:ChannelType.ALL_CHANEL},{label:'被占用通道',value:ChannelType.OCCUPIED_CHANNEL},{label:'空闲通道',value:ChannelType.IDLE_CHANNEL}
      ];
export const DeviceType={
          DEVICE_IPC:0
,DEVICE_FILE:1

      };
export const DeviceTypeMap={
        [DeviceType.DEVICE_IPC]:'网络摄像头',[DeviceType.DEVICE_FILE]:'视频文件'
      };
export const DeviceTypeList=[
        {label:'网络摄像头',value:DeviceType.DEVICE_IPC},{label:'视频文件',value:DeviceType.DEVICE_FILE}
      ];
export default {DeviceWorkStatus,DeviceWorkStatusMap,DeviceWorkStatusList,DeviceServiceMode,DeviceServiceModeMap,DeviceServiceModeList,DeviceAccessProtocol,DeviceAccessProtocolMap,DeviceAccessProtocolList,TransportProtocol,TransportProtocolMap,TransportProtocolList,ChannelType,ChannelTypeMap,ChannelTypeList,DeviceType,DeviceTypeMap,DeviceTypeList}