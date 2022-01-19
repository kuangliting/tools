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

      };
export const DeviceOperationMap={
        [DeviceOperation.DEVICE_OPERATE_ADD]:'新增',[DeviceOperation.DEVICE_OPERATE_EDIT]:'编辑',[DeviceOperation.DEVICE_OPERATE_DELETE]:'删除'
      };
export const DeviceOperationList=[
        {label:'新增',value:DeviceOperation.DEVICE_OPERATE_ADD},{label:'编辑',value:DeviceOperation.DEVICE_OPERATE_EDIT},{label:'删除',value:DeviceOperation.DEVICE_OPERATE_DELETE}
      ];
export const StreamSelection={
          STREAM_TYPE_VIDEO_NONE:0
,STREAM_TYPE_VIDEO_FIRST:1
,STREAM_TYPE_VIDEO_SECOND:2

      };
export const StreamSelectionMap={
        [StreamSelection.STREAM_TYPE_VIDEO_NONE]:'PLACEHOLDER',[StreamSelection.STREAM_TYPE_VIDEO_FIRST]:'主码流',[StreamSelection.STREAM_TYPE_VIDEO_SECOND]:'辅码流'
      };
export const StreamSelectionList=[
        {label:'PLACEHOLDER',value:StreamSelection.STREAM_TYPE_VIDEO_NONE},{label:'主码流',value:StreamSelection.STREAM_TYPE_VIDEO_FIRST},{label:'辅码流',value:StreamSelection.STREAM_TYPE_VIDEO_SECOND}
      ];
export const StreamType={
          STREAM_TYPE_NONE:0
,STREAM_TYPE_VIDEO_ONLY:1
,STREAM_TYPE_VIDEO_AND_AUDIO:2

      };
export const StreamTypeMap={
        [StreamType.STREAM_TYPE_NONE]:'PLACEHOLDER',[StreamType.STREAM_TYPE_VIDEO_ONLY]:'纯视频',[StreamType.STREAM_TYPE_VIDEO_AND_AUDIO]:'视频和音频'
      };
export const StreamTypeList=[
        {label:'PLACEHOLDER',value:StreamType.STREAM_TYPE_NONE},{label:'纯视频',value:StreamType.STREAM_TYPE_VIDEO_ONLY},{label:'视频和音频',value:StreamType.STREAM_TYPE_VIDEO_AND_AUDIO}
      ];
export const VideoResolution={
          VIDEO_RES_NONE:0
,VIDEO_RES_4096_2160:1
,VIDEO_RES_3840_2160:2
,VIDEO_RES_2560_1440:3
,VIDEO_RES_1920_1080:4
,VIDEO_RES_1280_720:5

      };
export const VideoResolutionMap={
        [VideoResolution.VIDEO_RES_NONE]:'PLACEHOLDER',[VideoResolution.VIDEO_RES_4096_2160]:'4096*2160',[VideoResolution.VIDEO_RES_3840_2160]:'3840*2160',[VideoResolution.VIDEO_RES_2560_1440]:'2560*1440',[VideoResolution.VIDEO_RES_1920_1080]:'1920*1080',[VideoResolution.VIDEO_RES_1280_720]:'1280*720'
      };
export const VideoResolutionList=[
        {label:'PLACEHOLDER',value:VideoResolution.VIDEO_RES_NONE},{label:'4096*2160',value:VideoResolution.VIDEO_RES_4096_2160},{label:'3840*2160',value:VideoResolution.VIDEO_RES_3840_2160},{label:'2560*1440',value:VideoResolution.VIDEO_RES_2560_1440},{label:'1920*1080',value:VideoResolution.VIDEO_RES_1920_1080},{label:'1280*720',value:VideoResolution.VIDEO_RES_1280_720}
      ];
export const VideoStreamBitRateType={
          VIDEO_STREAM_BITRATE_NONE:0
,VIDEO_STREAM_BITRATE_CBR:1
,VIDEO_STREAM_BITRATE_VBR:2

      };
export const VideoStreamBitRateTypeMap={
        [VideoStreamBitRateType.VIDEO_STREAM_BITRATE_NONE]:'PLACEHOLDER',[VideoStreamBitRateType.VIDEO_STREAM_BITRATE_CBR]:'CBR',[VideoStreamBitRateType.VIDEO_STREAM_BITRATE_VBR]:'VBR'
      };
export const VideoStreamBitRateTypeList=[
        {label:'PLACEHOLDER',value:VideoStreamBitRateType.VIDEO_STREAM_BITRATE_NONE},{label:'CBR',value:VideoStreamBitRateType.VIDEO_STREAM_BITRATE_CBR},{label:'VBR',value:VideoStreamBitRateType.VIDEO_STREAM_BITRATE_VBR}
      ];
export const EncodeType={
          ENCODE_TYPE_NONE:0
,ENCODE_TYPE_H264:1
,ENCODE_TYPE_H265:2
,ENCODE_TYPE_MJPG:3

      };
export const EncodeTypeMap={
        [EncodeType.ENCODE_TYPE_NONE]:'PLACEHOLDER',[EncodeType.ENCODE_TYPE_H264]:'H.264',[EncodeType.ENCODE_TYPE_H265]:'H.265',[EncodeType.ENCODE_TYPE_MJPG]:'MJPG'
      };
export const EncodeTypeList=[
        {label:'PLACEHOLDER',value:EncodeType.ENCODE_TYPE_NONE},{label:'H.264',value:EncodeType.ENCODE_TYPE_H264},{label:'H.265',value:EncodeType.ENCODE_TYPE_H265},{label:'MJPG',value:EncodeType.ENCODE_TYPE_MJPG}
      ];
export const ConstantBitRateLevel={
          CBR_NONE:0
,CBR_256KBPS:1
,CBR_512KBPS:2
,CBR_1024KBPS:3
,CBR_2048KBPS:4
,CBR_3072KBPS:5
,CBR_4096KBPS:6
,CBR_6144KBPS:7
,CBR_8192KBPS:8
,CBR_12288KBPS:9
,CBR_16384KBPS:10

      };
export const ConstantBitRateLevelMap={
        [ConstantBitRateLevel.CBR_NONE]:'PLACEHOLDER',[ConstantBitRateLevel.CBR_256KBPS]:'256Kbps',[ConstantBitRateLevel.CBR_512KBPS]:'512Kbps',[ConstantBitRateLevel.CBR_1024KBPS]:'1024Kbps',[ConstantBitRateLevel.CBR_2048KBPS]:'2048Kbps',[ConstantBitRateLevel.CBR_3072KBPS]:'3072Kbps',[ConstantBitRateLevel.CBR_4096KBPS]:'4096Kbps',[ConstantBitRateLevel.CBR_6144KBPS]:'6144Kbps',[ConstantBitRateLevel.CBR_8192KBPS]:'8192Kbps',[ConstantBitRateLevel.CBR_12288KBPS]:'12288Kbps',[ConstantBitRateLevel.CBR_16384KBPS]:'16384Kbps'
      };
export const ConstantBitRateLevelList=[
        {label:'PLACEHOLDER',value:ConstantBitRateLevel.CBR_NONE},{label:'256Kbps',value:ConstantBitRateLevel.CBR_256KBPS},{label:'512Kbps',value:ConstantBitRateLevel.CBR_512KBPS},{label:'1024Kbps',value:ConstantBitRateLevel.CBR_1024KBPS},{label:'2048Kbps',value:ConstantBitRateLevel.CBR_2048KBPS},{label:'3072Kbps',value:ConstantBitRateLevel.CBR_3072KBPS},{label:'4096Kbps',value:ConstantBitRateLevel.CBR_4096KBPS},{label:'6144Kbps',value:ConstantBitRateLevel.CBR_6144KBPS},{label:'8192Kbps',value:ConstantBitRateLevel.CBR_8192KBPS},{label:'12288Kbps',value:ConstantBitRateLevel.CBR_12288KBPS},{label:'16384Kbps',value:ConstantBitRateLevel.CBR_16384KBPS}
      ];
export const AudioType={
          AUDIO_TYPE_NONE:0
,AUDIO_TYPE_AAC:1
,AUDIO_TYPE_G711A:2
,AUDIO_TYPE_G711U:3

      };
export const AudioTypeMap={
        [AudioType.AUDIO_TYPE_NONE]:'PLACEHOLDER',[AudioType.AUDIO_TYPE_AAC]:'AAC',[AudioType.AUDIO_TYPE_G711A]:'G711A',[AudioType.AUDIO_TYPE_G711U]:'G711U'
      };
export const AudioTypeList=[
        {label:'PLACEHOLDER',value:AudioType.AUDIO_TYPE_NONE},{label:'AAC',value:AudioType.AUDIO_TYPE_AAC},{label:'G711A',value:AudioType.AUDIO_TYPE_G711A},{label:'G711U',value:AudioType.AUDIO_TYPE_G711U}
      ];
export const AudioSampleRate={
          AUDIO_SAMPLE_RATE_NONE:0
,AUDIO_SAMPLE_RATE_8KHZ:1
,AUDIO_SAMPLE_RATE_16KHZ:2
,AUDIO_SAMPLE_RATE_32KHZ:3
,AUDIO_SAMPLE_RATE_48KHZ:4

      };
export const AudioSampleRateMap={
        [AudioSampleRate.AUDIO_SAMPLE_RATE_NONE]:'PLACEHOLDER',[AudioSampleRate.AUDIO_SAMPLE_RATE_8KHZ]:'8KHz',[AudioSampleRate.AUDIO_SAMPLE_RATE_16KHZ]:'16KHz',[AudioSampleRate.AUDIO_SAMPLE_RATE_32KHZ]:'32KHz',[AudioSampleRate.AUDIO_SAMPLE_RATE_48KHZ]:'48KHz'
      };
export const AudioSampleRateList=[
        {label:'PLACEHOLDER',value:AudioSampleRate.AUDIO_SAMPLE_RATE_NONE},{label:'8KHz',value:AudioSampleRate.AUDIO_SAMPLE_RATE_8KHZ},{label:'16KHz',value:AudioSampleRate.AUDIO_SAMPLE_RATE_16KHZ},{label:'32KHz',value:AudioSampleRate.AUDIO_SAMPLE_RATE_32KHZ},{label:'48KHz',value:AudioSampleRate.AUDIO_SAMPLE_RATE_48KHZ}
      ];
export const AudioInputSourceType={
          AUDIO_SOURCE_TYPE_LINEIN:0
,AUDIO_SOURCE_TYPE_MIC:1

      };
export const AudioInputSourceTypeMap={
        [AudioInputSourceType.AUDIO_SOURCE_TYPE_LINEIN]:'LineIn',[AudioInputSourceType.AUDIO_SOURCE_TYPE_MIC]:'MIC'
      };
export const AudioInputSourceTypeList=[
        {label:'LineIn',value:AudioInputSourceType.AUDIO_SOURCE_TYPE_LINEIN},{label:'MIC',value:AudioInputSourceType.AUDIO_SOURCE_TYPE_MIC}
      ];
export const OSD_Font_Color={
          OSD_COLOR_RED:0
,OSD_COLOR_WHITE:1
,OSD_COLOR_BLUE:2
,OSD_COLOR_GREEN:3
,OSD_COLOR_YELLOW:4

      };
export const OSD_Font_ColorMap={
        [OSD_Font_Color.OSD_COLOR_RED]:'红色',[OSD_Font_Color.OSD_COLOR_WHITE]:'白色',[OSD_Font_Color.OSD_COLOR_BLUE]:'蓝色',[OSD_Font_Color.OSD_COLOR_GREEN]:'绿色',[OSD_Font_Color.OSD_COLOR_YELLOW]:'黄色'
      };
export const OSD_Font_ColorList=[
        {label:'红色',value:OSD_Font_Color.OSD_COLOR_RED},{label:'白色',value:OSD_Font_Color.OSD_COLOR_WHITE},{label:'蓝色',value:OSD_Font_Color.OSD_COLOR_BLUE},{label:'绿色',value:OSD_Font_Color.OSD_COLOR_GREEN},{label:'黄色',value:OSD_Font_Color.OSD_COLOR_YELLOW}
      ];
export default {ImportDeviceType,ImportDeviceTypeMap,ImportDeviceTypeList,DeviceWorkStatus,DeviceWorkStatusMap,DeviceWorkStatusList,DeviceServiceMode,DeviceServiceModeMap,DeviceServiceModeList,DeviceAccessProtocol,DeviceAccessProtocolMap,DeviceAccessProtocolList,DeviceCaptureStrategy,DeviceCaptureStrategyMap,DeviceCaptureStrategyList,FaceQualityRequire,FaceQualityRequireMap,FaceQualityRequireList,DeviceOperation,DeviceOperationMap,DeviceOperationList,StreamSelection,StreamSelectionMap,StreamSelectionList,StreamType,StreamTypeMap,StreamTypeList,VideoResolution,VideoResolutionMap,VideoResolutionList,VideoStreamBitRateType,VideoStreamBitRateTypeMap,VideoStreamBitRateTypeList,EncodeType,EncodeTypeMap,EncodeTypeList,ConstantBitRateLevel,ConstantBitRateLevelMap,ConstantBitRateLevelList,AudioType,AudioTypeMap,AudioTypeList,AudioSampleRate,AudioSampleRateMap,AudioSampleRateList,AudioInputSourceType,AudioInputSourceTypeMap,AudioInputSourceTypeList,OSD_Font_Color,OSD_Font_ColorMap,OSD_Font_ColorList}