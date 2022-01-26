export const RecordType = {
      ALARM: 0,
      RECORD: 1

};
export const RecordTypeMap = {
      [RecordType.ALARM]: '表示事件中心',
      [RecordType.RECORD]: '表示记录中心'
};
export const RecordTypeList = [{
      label: '表示事件中心',
      value: RecordType.ALARM
}, {
      label: '表示记录中心',
      value: RecordType.RECORD
}];
export default {
      RecordType,
      RecordTypeMap,
      RecordTypeList
}