export const DayNightModeSwitch={
          DAY_NIGHT_MODE_NONE:0
,DAY_NIGHT_MODE_AUTO:1
,DAY_NIGHT_MODE_MANUAL_DAY:2
,DAY_NIGHT_MODE_MANUAL_NIGHT:3

      };
export const DayNightModeSwitchMap={
        [DayNightModeSwitch.DAY_NIGHT_MODE_NONE]:'无状态',[DayNightModeSwitch.DAY_NIGHT_MODE_AUTO]:'自动',[DayNightModeSwitch.DAY_NIGHT_MODE_MANUAL_DAY]:'白天',[DayNightModeSwitch.DAY_NIGHT_MODE_MANUAL_NIGHT]:'夜晚'
      };
export const DayNightModeSwitchList=[
        {label:'无状态',value:DayNightModeSwitch.DAY_NIGHT_MODE_NONE},{label:'自动',value:DayNightModeSwitch.DAY_NIGHT_MODE_AUTO},{label:'白天',value:DayNightModeSwitch.DAY_NIGHT_MODE_MANUAL_DAY},{label:'夜晚',value:DayNightModeSwitch.DAY_NIGHT_MODE_MANUAL_NIGHT}
      ];
export const ExposureMode={
          AUTO_EXPOSURE_MODE:0
,MANUAL_EXPOSURE_MODE:1

      };
export const ExposureModeMap={
        [ExposureMode.AUTO_EXPOSURE_MODE]:'自动曝光',[ExposureMode.MANUAL_EXPOSURE_MODE]:'手动曝光'
      };
export const ExposureModeList=[
        {label:'自动曝光',value:ExposureMode.AUTO_EXPOSURE_MODE},{label:'手动曝光',value:ExposureMode.MANUAL_EXPOSURE_MODE}
      ];
export const WhiteBalanceMode={
          AUTO_WHITE_BALANCE:0
,AUTO_WHTIE_BALANCE_FIXED_SENCE:1
,MANUAL_WHITE_BALANCE_CLOUDY:2
,MANUAL_WHITE_BALANCE_SUNLIGHT:3
,MANUAL_WHITE_BALANCE_FLUORESCENT:4
,MANUAL_WHITE_BALANCE_INCANDESCENT:5

      };
export const WhiteBalanceModeMap={
        [WhiteBalanceMode.AUTO_WHITE_BALANCE]:'自动白平衡',[WhiteBalanceMode.AUTO_WHTIE_BALANCE_FIXED_SENCE]:'场景固定模式',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_CLOUDY]:'阴天多云(7000K)',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_SUNLIGHT]:'白天阳光(5000K)',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_FLUORESCENT]:'白光灯(4000K)',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_INCANDESCENT]:'钨丝灯(2500K)'
      };
export const WhiteBalanceModeList=[
        {label:'自动白平衡',value:WhiteBalanceMode.AUTO_WHITE_BALANCE},{label:'场景固定模式',value:WhiteBalanceMode.AUTO_WHTIE_BALANCE_FIXED_SENCE},{label:'阴天多云(7000K)',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_CLOUDY},{label:'白天阳光(5000K)',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_SUNLIGHT},{label:'白光灯(4000K)',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_FLUORESCENT},{label:'钨丝灯(2500K)',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_INCANDESCENT}
      ];
export const BackLightCompensation={
          BACK_LIGHT_COMP_MODE_OFF:0
,BACK_LIGHT_COMP_MODE_ON:1

      };
export const BackLightCompensationMap={
        [BackLightCompensation.BACK_LIGHT_COMP_MODE_OFF]:'背光补偿关',[BackLightCompensation.BACK_LIGHT_COMP_MODE_ON]:'背光补偿开'
      };
export const BackLightCompensationList=[
        {label:'背光补偿关',value:BackLightCompensation.BACK_LIGHT_COMP_MODE_OFF},{label:'背光补偿开',value:BackLightCompensation.BACK_LIGHT_COMP_MODE_ON}
      ];
export const DeFogMode={
          DE_FOG_MODE_OFF:0
,DE_FOG_MODE_ON:1

      };
export const DeFogModeMap={
        [DeFogMode.DE_FOG_MODE_OFF]:'去雾关',[DeFogMode.DE_FOG_MODE_ON]:'去雾开'
      };
export const DeFogModeList=[
        {label:'去雾关',value:DeFogMode.DE_FOG_MODE_OFF},{label:'去雾开',value:DeFogMode.DE_FOG_MODE_ON}
      ];
export const HDRMode={
          HDR_MODE_OFF:0
,HDR_MODE_ON:1

      };
export const HDRModeMap={
        [HDRMode.HDR_MODE_OFF]:'HDR关',[HDRMode.HDR_MODE_ON]:'HDR开'
      };
export const HDRModeList=[
        {label:'HDR关',value:HDRMode.HDR_MODE_OFF},{label:'HDR开',value:HDRMode.HDR_MODE_ON}
      ];
export const StrongLightSurpression={
          STRONG_LIGHT_SURPRESSION_OFF:0
,STRONG_LIGHT_SURPRESSION_ON:1

      };
export const StrongLightSurpressionMap={
        [StrongLightSurpression.STRONG_LIGHT_SURPRESSION_OFF]:'强光抑制关',[StrongLightSurpression.STRONG_LIGHT_SURPRESSION_ON]:'强光抑制开'
      };
export const StrongLightSurpressionList=[
        {label:'强光抑制关',value:StrongLightSurpression.STRONG_LIGHT_SURPRESSION_OFF},{label:'强光抑制开',value:StrongLightSurpression.STRONG_LIGHT_SURPRESSION_ON}
      ];
