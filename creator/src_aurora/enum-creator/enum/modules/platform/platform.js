export const AccessMode={
          ACCESS_MODE_STAND_ALONE:0
,ACCESS_MODE_CHENG_FENG:1

      };
export const AccessModeMap={
        [AccessMode.ACCESS_MODE_STAND_ALONE]:'单机模式',[AccessMode.ACCESS_MODE_CHENG_FENG]:'乘风平台'
      };
export const AccessModeList=[
        {label:'单机模式',value:AccessMode.ACCESS_MODE_STAND_ALONE},{label:'乘风平台',value:AccessMode.ACCESS_MODE_CHENG_FENG}
      ];
export default {AccessMode,AccessModeMap,AccessModeList}