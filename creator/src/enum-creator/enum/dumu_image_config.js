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
export const ExposureTime={
          EXP_TIME_1_OVER_25:0
,EXP_TIME_1_OVER_50:1
,EXP_TIME_1_OVER_75:2
,EXP_TIME_1_OVER_100:3
,EXP_TIME_1_OVER_125:4
,EXP_TIME_1_OVER_150:5
,EXP_TIME_1_OVER_175:6
,EXP_TIME_1_OVER_200:7
,EXP_TIME_1_OVER_225:8
,EXP_TIME_1_OVER_250:9
,EXP_TIME_1_OVER_300:10
,EXP_TIME_1_OVER_400:11
,EXP_TIME_1_OVER_500:12
,EXP_TIME_1_OVER_750:13
,EXP_TIME_1_OVER_1000:14
,EXP_TIME_1_OVER_2000:15
,EXP_TIME_1_OVER_4000:16
,EXP_TIME_1_OVER_10000:17
,EXP_TIME_1_OVER_100000:18

      };
export const ExposureTimeMap={
        [ExposureTime.EXP_TIME_1_OVER_25]:'1/25',[ExposureTime.EXP_TIME_1_OVER_50]:'1/50',[ExposureTime.EXP_TIME_1_OVER_75]:'1/75',[ExposureTime.EXP_TIME_1_OVER_100]:'1/100',[ExposureTime.EXP_TIME_1_OVER_125]:'1/125',[ExposureTime.EXP_TIME_1_OVER_150]:'1/150',[ExposureTime.EXP_TIME_1_OVER_175]:'1/175',[ExposureTime.EXP_TIME_1_OVER_200]:'1/200',[ExposureTime.EXP_TIME_1_OVER_225]:'1/225',[ExposureTime.EXP_TIME_1_OVER_250]:'1/250',[ExposureTime.EXP_TIME_1_OVER_300]:'1/300',[ExposureTime.EXP_TIME_1_OVER_400]:'1/400',[ExposureTime.EXP_TIME_1_OVER_500]:'1/500',[ExposureTime.EXP_TIME_1_OVER_750]:'1/750',[ExposureTime.EXP_TIME_1_OVER_1000]:'1/1000',[ExposureTime.EXP_TIME_1_OVER_2000]:'1/2000',[ExposureTime.EXP_TIME_1_OVER_4000]:'1/4000',[ExposureTime.EXP_TIME_1_OVER_10000]:'1/10000',[ExposureTime.EXP_TIME_1_OVER_100000]:'1/100000'
      };
export const ExposureTimeList=[
        {label:'1/25',value:ExposureTime.EXP_TIME_1_OVER_25},{label:'1/50',value:ExposureTime.EXP_TIME_1_OVER_50},{label:'1/75',value:ExposureTime.EXP_TIME_1_OVER_75},{label:'1/100',value:ExposureTime.EXP_TIME_1_OVER_100},{label:'1/125',value:ExposureTime.EXP_TIME_1_OVER_125},{label:'1/150',value:ExposureTime.EXP_TIME_1_OVER_150},{label:'1/175',value:ExposureTime.EXP_TIME_1_OVER_175},{label:'1/200',value:ExposureTime.EXP_TIME_1_OVER_200},{label:'1/225',value:ExposureTime.EXP_TIME_1_OVER_225},{label:'1/250',value:ExposureTime.EXP_TIME_1_OVER_250},{label:'1/300',value:ExposureTime.EXP_TIME_1_OVER_300},{label:'1/400',value:ExposureTime.EXP_TIME_1_OVER_400},{label:'1/500',value:ExposureTime.EXP_TIME_1_OVER_500},{label:'1/750',value:ExposureTime.EXP_TIME_1_OVER_750},{label:'1/1000',value:ExposureTime.EXP_TIME_1_OVER_1000},{label:'1/2000',value:ExposureTime.EXP_TIME_1_OVER_2000},{label:'1/4000',value:ExposureTime.EXP_TIME_1_OVER_4000},{label:'1/10000',value:ExposureTime.EXP_TIME_1_OVER_10000},{label:'1/100000',value:ExposureTime.EXP_TIME_1_OVER_100000}
      ];
export const WhiteBalanceMode={
          AUTO_WHITE_BALANCE:0
,AUTO_WHTIE_BALANCE_FIXED_SENCE:1
,MANUAL_WHITE_BALANCE_CLOUDY:2
,MANUAL_WHITE_BALANCE_SUNLIGHT:3
,MANUAL_WHITE_BALANCE_INCANDESCENT:4
,MANUAL_WHITE_BALANCE_FLUORESCENT:5

      };
export const WhiteBalanceModeMap={
        [WhiteBalanceMode.AUTO_WHITE_BALANCE]:'自动',[WhiteBalanceMode.AUTO_WHTIE_BALANCE_FIXED_SENCE]:'锁定白平衡',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_CLOUDY]:'阴天',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_SUNLIGHT]:'晴天',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_INCANDESCENT]:'白炽灯',[WhiteBalanceMode.MANUAL_WHITE_BALANCE_FLUORESCENT]:'暖光灯'
      };
export const WhiteBalanceModeList=[
        {label:'自动',value:WhiteBalanceMode.AUTO_WHITE_BALANCE},{label:'锁定白平衡',value:WhiteBalanceMode.AUTO_WHTIE_BALANCE_FIXED_SENCE},{label:'阴天',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_CLOUDY},{label:'晴天',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_SUNLIGHT},{label:'白炽灯',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_INCANDESCENT},{label:'暖光灯',value:WhiteBalanceMode.MANUAL_WHITE_BALANCE_FLUORESCENT}
      ];
export const BackLightCompensation={
          BACK_LIGHT_COMP_MODE_OFF:0
,BACK_LIGHT_COMP_MODE_ON:1

      };
export const BackLightCompensationMap={
        [BackLightCompensation.BACK_LIGHT_COMP_MODE_OFF]:'关闭',[BackLightCompensation.BACK_LIGHT_COMP_MODE_ON]:'开启'
      };
export const BackLightCompensationList=[
        {label:'关闭',value:BackLightCompensation.BACK_LIGHT_COMP_MODE_OFF},{label:'开启',value:BackLightCompensation.BACK_LIGHT_COMP_MODE_ON}
      ];
export const DeFogMode={
          DE_FOG_MODE_OFF:0
,DE_FOG_MODE_ON:1

      };
export const DeFogModeMap={
        [DeFogMode.DE_FOG_MODE_OFF]:'关闭',[DeFogMode.DE_FOG_MODE_ON]:'开启'
      };
export const DeFogModeList=[
        {label:'关闭',value:DeFogMode.DE_FOG_MODE_OFF},{label:'开启',value:DeFogMode.DE_FOG_MODE_ON}
      ];
export const HDRMode={
          HDR_MODE_OFF:0
,HDR_MODE_ON:1

      };
export const HDRModeMap={
        [HDRMode.HDR_MODE_OFF]:'关闭',[HDRMode.HDR_MODE_ON]:'开启'
      };
export const HDRModeList=[
        {label:'关闭',value:HDRMode.HDR_MODE_OFF},{label:'开启',value:HDRMode.HDR_MODE_ON}
      ];
export const StrongLightSurpression={
          STRONG_LIGHT_SURPRESSION_OFF:0
,STRONG_LIGHT_SURPRESSION_ON:1

      };
export const StrongLightSurpressionMap={
        [StrongLightSurpression.STRONG_LIGHT_SURPRESSION_OFF]:'关闭',[StrongLightSurpression.STRONG_LIGHT_SURPRESSION_ON]:'开启'
      };
export const StrongLightSurpressionList=[
        {label:'关闭',value:StrongLightSurpression.STRONG_LIGHT_SURPRESSION_OFF},{label:'开启',value:StrongLightSurpression.STRONG_LIGHT_SURPRESSION_ON}
      ];
export default {DayNightModeSwitch,DayNightModeSwitchMap,DayNightModeSwitchList,ExposureMode,ExposureModeMap,ExposureModeList,ExposureTime,ExposureTimeMap,ExposureTimeList,WhiteBalanceMode,WhiteBalanceModeMap,WhiteBalanceModeList,BackLightCompensation,BackLightCompensationMap,BackLightCompensationList,DeFogMode,DeFogModeMap,DeFogModeList,HDRMode,HDRModeMap,HDRModeList,StrongLightSurpression,StrongLightSurpressionMap,StrongLightSurpressionList}