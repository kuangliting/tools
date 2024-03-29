export const NetworkMode={
          NETWORK_MODE_STATIC:0
,NETWORK_MODE_DHCP:1

      };
export const NetworkModeMap={
        [NetworkMode.NETWORK_MODE_STATIC]:'静态',[NetworkMode.NETWORK_MODE_DHCP]:'DHCP'
      };
export const NetworkModeList=[
        {label:'静态',value:NetworkMode.NETWORK_MODE_STATIC},{label:'DHCP',value:NetworkMode.NETWORK_MODE_DHCP}
      ];
export const IpProtocolVersion={
          PROTOCOL_VERSION_4:0
,PROTOCOL_VERSION_6:1

      };
export const IpProtocolVersionMap={
        [IpProtocolVersion.PROTOCOL_VERSION_4]:'IPV4',[IpProtocolVersion.PROTOCOL_VERSION_6]:'IPV6'
      };
export const IpProtocolVersionList=[
        {label:'IPV4',value:IpProtocolVersion.PROTOCOL_VERSION_4},{label:'IPV6',value:IpProtocolVersion.PROTOCOL_VERSION_6}
      ];
export const MeridiemFlag={
          MER_FLAG_AM:0
,MER_FLAG_PM:1

      };
export const MeridiemFlagMap={
        [MeridiemFlag.MER_FLAG_AM]:'AM',[MeridiemFlag.MER_FLAG_PM]:'PM'
      };
export const MeridiemFlagList=[
        {label:'AM',value:MeridiemFlag.MER_FLAG_AM},{label:'PM',value:MeridiemFlag.MER_FLAG_PM}
      ];
export const TimeFormat={
          TIME_FORMAT_12:0
,TIME_FORMAT_24:1

      };
export const TimeFormatMap={
        [TimeFormat.TIME_FORMAT_12]:'12小时制',[TimeFormat.TIME_FORMAT_24]:'24小时制'
      };
export const TimeFormatList=[
        {label:'12小时制',value:TimeFormat.TIME_FORMAT_12},{label:'24小时制',value:TimeFormat.TIME_FORMAT_24}
      ];
export const TimeZone={
          TIME_ZONE_112:0
,TIME_ZONE_111:1
,TIME_ZONE_110:2
,TIME_ZONE_109:3
,TIME_ZONE_108:4
,TIME_ZONE_107:5
,TIME_ZONE_106:6
,TIME_ZONE_105:7
,TIME_ZONE_104:8
,TIME_ZONE_103:9
,TIME_ZONE_102:10
,TIME_ZONE_101:11
,TIME_ZONE_01:12
,TIME_ZONE_02:13
,TIME_ZONE_03:14
,TIME_ZONE_04:15
,TIME_ZONE_05:16
,TIME_ZONE_06:17
,TIME_ZONE_07:18
,TIME_ZONE_08:19
,TIME_ZONE_09:20
,TIME_ZONE_10:21
,TIME_ZONE_11:22
,TIME_ZONE_12:23

      };
export const TimeZoneMap={
        [TimeZone.TIME_ZONE_112]:'GMT112:00',[TimeZone.TIME_ZONE_111]:'GMT111:00',[TimeZone.TIME_ZONE_110]:'GMT110:00',[TimeZone.TIME_ZONE_109]:'GMT109:00',[TimeZone.TIME_ZONE_108]:'GMT108:00',[TimeZone.TIME_ZONE_107]:'GMT107:00',[TimeZone.TIME_ZONE_106]:'GMT106:00',[TimeZone.TIME_ZONE_105]:'GMT105:00',[TimeZone.TIME_ZONE_104]:'GMT104:00',[TimeZone.TIME_ZONE_103]:'GMT103:00',[TimeZone.TIME_ZONE_102]:'GMT102:00',[TimeZone.TIME_ZONE_101]:'GMT101:00',[TimeZone.TIME_ZONE_01]:'GMT01:00',[TimeZone.TIME_ZONE_02]:'GMT02:00',[TimeZone.TIME_ZONE_03]:'GMT03:00',[TimeZone.TIME_ZONE_04]:'GMT04:00',[TimeZone.TIME_ZONE_05]:'GMT05:00',[TimeZone.TIME_ZONE_06]:'GMT06:00',[TimeZone.TIME_ZONE_07]:'GMT07:00',[TimeZone.TIME_ZONE_08]:'GMT08:00',[TimeZone.TIME_ZONE_09]:'GMT09:00',[TimeZone.TIME_ZONE_10]:'GMT10:00',[TimeZone.TIME_ZONE_11]:'GMT11:00',[TimeZone.TIME_ZONE_12]:'GMT12:00'
      };
export const TimeZoneList=[
        {label:'GMT112:00',value:TimeZone.TIME_ZONE_112},{label:'GMT111:00',value:TimeZone.TIME_ZONE_111},{label:'GMT110:00',value:TimeZone.TIME_ZONE_110},{label:'GMT109:00',value:TimeZone.TIME_ZONE_109},{label:'GMT108:00',value:TimeZone.TIME_ZONE_108},{label:'GMT107:00',value:TimeZone.TIME_ZONE_107},{label:'GMT106:00',value:TimeZone.TIME_ZONE_106},{label:'GMT105:00',value:TimeZone.TIME_ZONE_105},{label:'GMT104:00',value:TimeZone.TIME_ZONE_104},{label:'GMT103:00',value:TimeZone.TIME_ZONE_103},{label:'GMT102:00',value:TimeZone.TIME_ZONE_102},{label:'GMT101:00',value:TimeZone.TIME_ZONE_101},{label:'GMT01:00',value:TimeZone.TIME_ZONE_01},{label:'GMT02:00',value:TimeZone.TIME_ZONE_02},{label:'GMT03:00',value:TimeZone.TIME_ZONE_03},{label:'GMT04:00',value:TimeZone.TIME_ZONE_04},{label:'GMT05:00',value:TimeZone.TIME_ZONE_05},{label:'GMT06:00',value:TimeZone.TIME_ZONE_06},{label:'GMT07:00',value:TimeZone.TIME_ZONE_07},{label:'GMT08:00',value:TimeZone.TIME_ZONE_08},{label:'GMT09:00',value:TimeZone.TIME_ZONE_09},{label:'GMT10:00',value:TimeZone.TIME_ZONE_10},{label:'GMT11:00',value:TimeZone.TIME_ZONE_11},{label:'GMT12:00',value:TimeZone.TIME_ZONE_12}
      ];
export const NtpSwitch={
          NTP_SWITCH_DISENABLE:0
,NTP_SWITCH_ENABLE:1

      };
export const NtpSwitchMap={
        [NtpSwitch.NTP_SWITCH_DISENABLE]:'不启用',[NtpSwitch.NTP_SWITCH_ENABLE]:'启用'
      };
export const NtpSwitchList=[
        {label:'不启用',value:NtpSwitch.NTP_SWITCH_DISENABLE},{label:'启用',value:NtpSwitch.NTP_SWITCH_ENABLE}
      ];
export const RebootTimeType={
          TIME_TYPE_NONE:0
,TIME_TYPE_WEEK:1
,TIME_TYPE_MONTH:2

      };
export const RebootTimeTypeMap={
        [RebootTimeType.TIME_TYPE_NONE]:'无',[RebootTimeType.TIME_TYPE_WEEK]:'每周',[RebootTimeType.TIME_TYPE_MONTH]:'每月'
      };
export const RebootTimeTypeList=[
        {label:'无',value:RebootTimeType.TIME_TYPE_NONE},{label:'每周',value:RebootTimeType.TIME_TYPE_WEEK},{label:'每月',value:RebootTimeType.TIME_TYPE_MONTH}
      ];
export const LogExportTime={
          NEAR_ONE_DAY:0
,NEAR_TWO_DAY:1
,NEAR_THREE_DAY:2
,NEAR_FOUR_DAY:3
,NEAR_FIVE_DAY:4
,NEAR_SIX_DAY:5
,NEAR_SEVEN_DAY:6

      };
export const LogExportTimeMap={
        [LogExportTime.NEAR_ONE_DAY]:'近1天',[LogExportTime.NEAR_TWO_DAY]:'近2天',[LogExportTime.NEAR_THREE_DAY]:'近3天',[LogExportTime.NEAR_FOUR_DAY]:'近4天',[LogExportTime.NEAR_FIVE_DAY]:'近5天',[LogExportTime.NEAR_SIX_DAY]:'近6天',[LogExportTime.NEAR_SEVEN_DAY]:'近7天'
      };
export const LogExportTimeList=[
        {label:'近1天',value:LogExportTime.NEAR_ONE_DAY},{label:'近2天',value:LogExportTime.NEAR_TWO_DAY},{label:'近3天',value:LogExportTime.NEAR_THREE_DAY},{label:'近4天',value:LogExportTime.NEAR_FOUR_DAY},{label:'近5天',value:LogExportTime.NEAR_FIVE_DAY},{label:'近6天',value:LogExportTime.NEAR_SIX_DAY},{label:'近7天',value:LogExportTime.NEAR_SEVEN_DAY}
      ];
export const UploadDataType={
          FACE_IMAGE_HAVE_RECOG:0
,FACE_IMAGE_NO_RECOG:1
,ELEC_FENCE_HAVE_RECOG:2
,ELEC_FENCE_NO_RECOG:3

      };
export const UploadDataTypeMap={
        [UploadDataType.FACE_IMAGE_HAVE_RECOG]:'有识别结果人像图',[UploadDataType.FACE_IMAGE_NO_RECOG]:'无识别结果人像图',[UploadDataType.ELEC_FENCE_HAVE_RECOG]:'有识别结果电子围栏抓拍图',[UploadDataType.ELEC_FENCE_NO_RECOG]:'无识别结果电子围栏抓拍图'
      };
export const UploadDataTypeList=[
        {label:'有识别结果人像图',value:UploadDataType.FACE_IMAGE_HAVE_RECOG},{label:'无识别结果人像图',value:UploadDataType.FACE_IMAGE_NO_RECOG},{label:'有识别结果电子围栏抓拍图',value:UploadDataType.ELEC_FENCE_HAVE_RECOG},{label:'无识别结果电子围栏抓拍图',value:UploadDataType.ELEC_FENCE_NO_RECOG}
      ];
export const ReceiveServiceType={
          SERVICE_TYPE_HTTP:0
,SERVICE_TYPE_FTP:1
,SERVICE_TYPE_WEBSOCKET:2
,SERVICE_TYPE_GAT1400:3

      };
export const ReceiveServiceTypeMap={
        [ReceiveServiceType.SERVICE_TYPE_HTTP]:'Http服务',[ReceiveServiceType.SERVICE_TYPE_FTP]:'FTP服务',[ReceiveServiceType.SERVICE_TYPE_WEBSOCKET]:'websocket',[ReceiveServiceType.SERVICE_TYPE_GAT1400]:'GA/T1400'
      };
export const ReceiveServiceTypeList=[
        {label:'Http服务',value:ReceiveServiceType.SERVICE_TYPE_HTTP},{label:'FTP服务',value:ReceiveServiceType.SERVICE_TYPE_FTP},{label:'websocket',value:ReceiveServiceType.SERVICE_TYPE_WEBSOCKET},{label:'GA/T1400',value:ReceiveServiceType.SERVICE_TYPE_GAT1400}
      ];
export const UpgradeStatus={
          UPGRADE_IDLE:0
,UPGRADE_START:1
,UPGRADE_RUN:2
,UPGRADE_SUCCESS:3
,UPGRADE_FAILURE:4
,UPGRADE_DOWNLOAD:5
,UPGRADE_DONE:6
,UPGRADE_SUBPROCESS:7
,UPGRADE_PROGRESS:8

      };
export const UpgradeStatusMap={
        [UpgradeStatus.UPGRADE_IDLE]:'空闲',[UpgradeStatus.UPGRADE_START]:'开始',[UpgradeStatus.UPGRADE_RUN]:'处理中',[UpgradeStatus.UPGRADE_SUCCESS]:'成功',[UpgradeStatus.UPGRADE_FAILURE]:'失败',[UpgradeStatus.UPGRADE_DOWNLOAD]:'下载',[UpgradeStatus.UPGRADE_DONE]:'完成'
      };
export const UpgradeStatusList=[
        {label:'空闲',value:UpgradeStatus.UPGRADE_IDLE},{label:'开始',value:UpgradeStatus.UPGRADE_START},{label:'处理中',value:UpgradeStatus.UPGRADE_RUN},{label:'成功',value:UpgradeStatus.UPGRADE_SUCCESS},{label:'失败',value:UpgradeStatus.UPGRADE_FAILURE},{label:'下载',value:UpgradeStatus.UPGRADE_DOWNLOAD},{label:'完成',value:UpgradeStatus.UPGRADE_DONE}
      ];
export const LogoType={
          LOGO_TYPE_DEFAULT:0
,LOGO_TYPE_CUSTOM:1
,LOGO_TYPE_BIG:2
,LOGO_TYPE_SMALL:3

      };
export const LogoTypeMap={
        [LogoType.LOGO_TYPE_DEFAULT]:'默认LOGO类型',[LogoType.LOGO_TYPE_CUSTOM]:'用户自定义LOGO类型',[LogoType.LOGO_TYPE_BIG]:'大LOGO',[LogoType.LOGO_TYPE_SMALL]:'小LOGO'
      };
export const LogoTypeList=[
        {label:'默认LOGO类型',value:LogoType.LOGO_TYPE_DEFAULT},{label:'用户自定义LOGO类型',value:LogoType.LOGO_TYPE_CUSTOM},{label:'大LOGO',value:LogoType.LOGO_TYPE_BIG},{label:'小LOGO',value:LogoType.LOGO_TYPE_SMALL}
      ];
export const AccessMode={
          ACCESS_MODE_STAND_ALONE:0
,ACCESS_MODE_PUBLIC_CLOUD:1
,ACCESS_MODE_PRIVATIZATION:2

      };
export const AccessModeMap={
        [AccessMode.ACCESS_MODE_STAND_ALONE]:'单机模式',[AccessMode.ACCESS_MODE_PUBLIC_CLOUD]:'乘风公有云',[AccessMode.ACCESS_MODE_PRIVATIZATION]:'乘风私有化'
      };
export const AccessModeList=[
        {label:'单机模式',value:AccessMode.ACCESS_MODE_STAND_ALONE},{label:'乘风公有云',value:AccessMode.ACCESS_MODE_PUBLIC_CLOUD},{label:'乘风私有化',value:AccessMode.ACCESS_MODE_PRIVATIZATION}
      ];
export const StorageStrategy={
          STORAGE_STRATEGY_FULL_COVER:0
,STORAGE_STRATEGY_FULL_STOP:1

      };
export const StorageStrategyMap={
        [StorageStrategy.STORAGE_STRATEGY_FULL_COVER]:'满覆盖',[StorageStrategy.STORAGE_STRATEGY_FULL_STOP]:'满即停'
      };
export const StorageStrategyList=[
        {label:'满覆盖',value:StorageStrategy.STORAGE_STRATEGY_FULL_COVER},{label:'满即停',value:StorageStrategy.STORAGE_STRATEGY_FULL_STOP}
      ];
export const DeviceInfoType={
          DEVICE_INFO_NAME:0
,DEVICE_STORAGE_STRATEGY:1
,DEVICE_INFO_ALL:256

      };
export const DeviceInfoTypeMap={
        [DeviceInfoType.DEVICE_INFO_NAME]:'设备名称',[DeviceInfoType.DEVICE_STORAGE_STRATEGY]:'设备存储策略',[DeviceInfoType.DEVICE_INFO_ALL]:'所有信息'
      };
export const DeviceInfoTypeList=[
        {label:'设备名称',value:DeviceInfoType.DEVICE_INFO_NAME},{label:'设备存储策略',value:DeviceInfoType.DEVICE_STORAGE_STRATEGY},{label:'所有信息',value:DeviceInfoType.DEVICE_INFO_ALL}
      ];
export const HttpsOperate={
          HTTPS_OPEN:0
,HTTPS_CLOSE:1
,HTTPS_INSTALL:2

      };
export const HttpsOperateMap={
        [HttpsOperate.HTTPS_OPEN]:'开启HTTPS',[HttpsOperate.HTTPS_CLOSE]:'关闭HTTPS',[HttpsOperate.HTTPS_INSTALL]:'安装HTTPS证书'
      };
export const HttpsOperateList=[
        {label:'开启HTTPS',value:HttpsOperate.HTTPS_OPEN},{label:'关闭HTTPS',value:HttpsOperate.HTTPS_CLOSE},{label:'安装HTTPS证书',value:HttpsOperate.HTTPS_INSTALL}
      ];
export const Gat1400UploadDataType={
          FACE_IMAGE:0
,BODY_IMAGE:1

      };
export const Gat1400UploadDataTypeMap={
        [Gat1400UploadDataType.FACE_IMAGE]:'人脸',[Gat1400UploadDataType.BODY_IMAGE]:'人体'
      };
export const Gat1400UploadDataTypeList=[
        {label:'人脸',value:Gat1400UploadDataType.FACE_IMAGE},{label:'人体',value:Gat1400UploadDataType.BODY_IMAGE}
      ];
export const Gat1400RegisterStatus={
          GAT1400_REGISTER_NONE:0
,GAT1400_REGISTER_OK:1
,GAT1400_REGISTER_RUN:2

      };
export const Gat1400RegisterStatusMap={
        [Gat1400RegisterStatus.GAT1400_REGISTER_NONE]:'未注册',[Gat1400RegisterStatus.GAT1400_REGISTER_OK]:'已注册',[Gat1400RegisterStatus.GAT1400_REGISTER_RUN]:'注册中'
      };
export const Gat1400RegisterStatusList=[
        {label:'未注册',value:Gat1400RegisterStatus.GAT1400_REGISTER_NONE},{label:'已注册',value:Gat1400RegisterStatus.GAT1400_REGISTER_OK},{label:'注册中',value:Gat1400RegisterStatus.GAT1400_REGISTER_RUN}
      ];
export const Gat1400Operate={
          GAT1400_ENABLE:0
,GAT1400_EDIT:1

      };
export const Gat1400OperateMap={
        [Gat1400Operate.GAT1400_ENABLE]:'使能GAT1400接入',[Gat1400Operate.GAT1400_EDIT]:'编辑GAT1400接入'
      };
export const Gat1400OperateList=[
        {label:'使能GAT1400接入',value:Gat1400Operate.GAT1400_ENABLE},{label:'编辑GAT1400接入',value:Gat1400Operate.GAT1400_EDIT}
      ];
export default {NetworkMode,NetworkModeMap,NetworkModeList,IpProtocolVersion,IpProtocolVersionMap,IpProtocolVersionList,MeridiemFlag,MeridiemFlagMap,MeridiemFlagList,TimeFormat,TimeFormatMap,TimeFormatList,TimeZone,TimeZoneMap,TimeZoneList,NtpSwitch,NtpSwitchMap,NtpSwitchList,RebootTimeType,RebootTimeTypeMap,RebootTimeTypeList,LogExportTime,LogExportTimeMap,LogExportTimeList,UploadDataType,UploadDataTypeMap,UploadDataTypeList,ReceiveServiceType,ReceiveServiceTypeMap,ReceiveServiceTypeList,UpgradeStatus,UpgradeStatusMap,UpgradeStatusList,LogoType,LogoTypeMap,LogoTypeList,AccessMode,AccessModeMap,AccessModeList,StorageStrategy,StorageStrategyMap,StorageStrategyList,DeviceInfoType,DeviceInfoTypeMap,DeviceInfoTypeList,HttpsOperate,HttpsOperateMap,HttpsOperateList,Gat1400UploadDataType,Gat1400UploadDataTypeMap,Gat1400UploadDataTypeList,Gat1400RegisterStatus,Gat1400RegisterStatusMap,Gat1400RegisterStatusList,Gat1400Operate,Gat1400OperateMap,Gat1400OperateList}