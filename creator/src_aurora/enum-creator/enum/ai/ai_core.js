export const AIObjectType={
          UNKNOWN:0
,ALL:1
,PERSON:2
,VEHICLE:3
,NON_MOTOR_VEHICLE:4
,FIREWORK:5

      };
export const AIObjectTypeMap={
        [AIObjectType.UNKNOWN]:'未知类型',[AIObjectType.ALL]:'全部类型',[AIObjectType.PERSON]:'人员',[AIObjectType.VEHICLE]:'机动车',[AIObjectType.NON_MOTOR_VEHICLE]:'非机动车',[AIObjectType.FIREWORK]:'烟火检测'
      };
export const AIObjectTypeList=[
        {label:'未知类型',value:AIObjectType.UNKNOWN},{label:'全部类型',value:AIObjectType.ALL},{label:'人员',value:AIObjectType.PERSON},{label:'机动车',value:AIObjectType.VEHICLE},{label:'非机动车',value:AIObjectType.NON_MOTOR_VEHICLE},{label:'烟火检测',value:AIObjectType.FIREWORK}
      ];
export default {AIObjectType,AIObjectTypeMap,AIObjectTypeList}