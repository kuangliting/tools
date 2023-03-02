export const RecordType={
          DATA_CENTER:0
,ALARM_CENTER:1
,RECORD_CENTER:2

      };
export const RecordTypeMap={
        [RecordType.DATA_CENTER]:'数据中心, 包括事件中心和记录中心',[RecordType.ALARM_CENTER]:'事件中心',[RecordType.RECORD_CENTER]:'记录中心'
      };
export const RecordTypeList=[
        {label:'数据中心, 包括事件中心和记录中心',value:RecordType.DATA_CENTER},{label:'事件中心',value:RecordType.ALARM_CENTER},{label:'记录中心',value:RecordType.RECORD_CENTER}
      ];
export default {RecordType,RecordTypeMap,RecordTypeList}