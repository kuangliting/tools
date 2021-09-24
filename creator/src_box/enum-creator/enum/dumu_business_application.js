export const LinkageDeviceType={
          LOCAL_RELAY:0
,GPIO_DEVICE:1
,NETWORK_RELAY:2

      };
export const LinkageDeviceTypeMap={
        [LinkageDeviceType.LOCAL_RELAY]:'本地继电器',[LinkageDeviceType.GPIO_DEVICE]:'GPIO',[LinkageDeviceType.NETWORK_RELAY]:'网络继电器'
      };
export const LinkageDeviceTypeList=[
        {label:'本地继电器',value:LinkageDeviceType.LOCAL_RELAY},{label:'GPIO',value:LinkageDeviceType.GPIO_DEVICE},{label:'网络继电器',value:LinkageDeviceType.NETWORK_RELAY}
      ];
export const NetRelayModel={
          TCP_KP_C1:0
,TCP_KP_C2:1

      };
export const NetRelayModelMap={
        [NetRelayModel.TCP_KP_C1]:'TCP-KP-C1',[NetRelayModel.TCP_KP_C2]:'TCP-KP-C2'
      };
export const NetRelayModelList=[
        {label:'TCP-KP-C1',value:NetRelayModel.TCP_KP_C1},{label:'TCP-KP-C2',value:NetRelayModel.TCP_KP_C2}
      ];
export const LinkageRuleType={
          RULE_WHITE_LIST_CMP_SUCCESS:0
,RULE_BLACK_LIST_CMP_SUCCESS:1
,RULE_WHITE_LIST_CMP_FAILED:2
,RULE_FACE_CAPTURE:3
,RULE_ELECTRONIC_FENCE:4

      };
export const LinkageRuleTypeMap={
        [LinkageRuleType.RULE_WHITE_LIST_CMP_SUCCESS]:'白名单比对成功',[LinkageRuleType.RULE_BLACK_LIST_CMP_SUCCESS]:'黑名单比对成功',[LinkageRuleType.RULE_WHITE_LIST_CMP_FAILED]:'白名单比对失败',[LinkageRuleType.RULE_FACE_CAPTURE]:'人脸抓拍',[LinkageRuleType.RULE_ELECTRONIC_FENCE]:'电子围栏'
      };
export const LinkageRuleTypeList=[
        {label:'白名单比对成功',value:LinkageRuleType.RULE_WHITE_LIST_CMP_SUCCESS},{label:'黑名单比对成功',value:LinkageRuleType.RULE_BLACK_LIST_CMP_SUCCESS},{label:'白名单比对失败',value:LinkageRuleType.RULE_WHITE_LIST_CMP_FAILED},{label:'人脸抓拍',value:LinkageRuleType.RULE_FACE_CAPTURE},{label:'电子围栏',value:LinkageRuleType.RULE_ELECTRONIC_FENCE}
      ];
export const ControlType={
          NORMAL_CLOSE:0
,NORMAL_OPEN:1

      };
export const ControlTypeMap={
        [ControlType.NORMAL_CLOSE]:'常闭',[ControlType.NORMAL_OPEN]:'常开'
      };
export const ControlTypeList=[
        {label:'常闭',value:ControlType.NORMAL_CLOSE},{label:'常开',value:ControlType.NORMAL_OPEN}
      ];
export const SignalType={
          HIGH_LEVEL:0
,LOW_LEVEL:1

      };
export const SignalTypeMap={
        [SignalType.HIGH_LEVEL]:'高电平',[SignalType.LOW_LEVEL]:'低电平'
      };
export const SignalTypeList=[
        {label:'高电平',value:SignalType.HIGH_LEVEL},{label:'低电平',value:SignalType.LOW_LEVEL}
      ];
export default {LinkageDeviceType,LinkageDeviceTypeMap,LinkageDeviceTypeList,NetRelayModel,NetRelayModelMap,NetRelayModelList,LinkageRuleType,LinkageRuleTypeMap,LinkageRuleTypeList,ControlType,ControlTypeMap,ControlTypeList,SignalType,SignalTypeMap,SignalTypeList}