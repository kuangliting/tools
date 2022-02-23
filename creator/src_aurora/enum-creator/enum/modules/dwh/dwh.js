export const RecordType={
          ALARM:0
,RECORD:1

      };
export const RecordTypeMap={
        [RecordType.ALARM]:'事件中心',[RecordType.RECORD]:'记录中心'
      };
export const RecordTypeList=[
        {label:'事件中心',value:RecordType.ALARM},{label:'记录中心',value:RecordType.RECORD}
      ];
export default {RecordType,RecordTypeMap,RecordTypeList}