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
export default {TimeFormat,TimeFormatMap,TimeFormatList,TimeZone,TimeZoneMap,TimeZoneList,NtpSwitch,NtpSwitchMap,NtpSwitchList}