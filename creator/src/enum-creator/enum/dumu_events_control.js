export const WeekDays={
          NONE:0
,MONDAY:1
,TUESDAY:2
,WENSDAY:3
,THURSDAY:4
,FRIDAY:5
,SATURDAY:6
,SUNDAY:7

      };
export const WeekDaysMap={
        [WeekDays.MONDAY]:'星期一',[WeekDays.TUESDAY]:'星期二',[WeekDays.WENSDAY]:'星期三',[WeekDays.THURSDAY]:'星期四',[WeekDays.FRIDAY]:'星期五',[WeekDays.SATURDAY]:'星期六',[WeekDays.SUNDAY]:'星期日'
      };
export const WeekDaysList=[
        {label:'星期一',value:WeekDays.MONDAY},{label:'星期二',value:WeekDays.TUESDAY},{label:'星期三',value:WeekDays.WENSDAY},{label:'星期四',value:WeekDays.THURSDAY},{label:'星期五',value:WeekDays.FRIDAY},{label:'星期六',value:WeekDays.SATURDAY},{label:'星期日',value:WeekDays.SUNDAY}
      ];
export const EventsOutput={
          ALARM_OUT:0
,EMAIL:1
,RECORD:2
,FTP:3

      };
export const EventsOutputMap={
        [EventsOutput.ALARM_OUT]:'报警输出',[EventsOutput.EMAIL]:'邮件',[EventsOutput.RECORD]:'录像',[EventsOutput.FTP]:'FTP'
      };
export const EventsOutputList=[
        {label:'报警输出',value:EventsOutput.ALARM_OUT},{label:'邮件',value:EventsOutput.EMAIL},{label:'录像',value:EventsOutput.RECORD},{label:'FTP',value:EventsOutput.FTP}
      ];
export const TheOtherExceptions={
          IP_CONFLICT:0
,STORAGE_EXCEPTION:1
,MISSING_NETWORK:2
,ILEGIAL_ACCESS:3

      };
export const TheOtherExceptionsMap={
        [TheOtherExceptions.IP_CONFLICT]:'IP冲突',[TheOtherExceptions.STORAGE_EXCEPTION]:'存储异常',[TheOtherExceptions.MISSING_NETWORK]:'断网异常',[TheOtherExceptions.ILEGIAL_ACCESS]:'非法访问'
      };
export const TheOtherExceptionsList=[
        {label:'IP冲突',value:TheOtherExceptions.IP_CONFLICT},{label:'存储异常',value:TheOtherExceptions.STORAGE_EXCEPTION},{label:'断网异常',value:TheOtherExceptions.MISSING_NETWORK},{label:'非法访问',value:TheOtherExceptions.ILEGIAL_ACCESS}
      ];
export default {WeekDays,WeekDaysMap,WeekDaysList,EventsOutput,EventsOutputMap,EventsOutputList,TheOtherExceptions,TheOtherExceptionsMap,TheOtherExceptionsList}