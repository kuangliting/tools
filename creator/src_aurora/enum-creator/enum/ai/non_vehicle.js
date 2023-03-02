export const NonVehicleType={
          UNKNOWN_NON_VEHICLE_TYPE:0
,TRICYCLE:1
,MOTORCYCLE:2
,E_MOTORCYCLE:3
,BICYCLE:4
,E_BICYCLE:5
,C_BICYCLE:6
,TROLLY:7

      };
export const NonVehicleTypeMap={
        [NonVehicleType.UNKNOWN_NON_VEHICLE_TYPE]:'未知车型',[NonVehicleType.TRICYCLE]:'三轮车',[NonVehicleType.MOTORCYCLE]:'摩托车',[NonVehicleType.E_MOTORCYCLE]:'电动摩托车',[NonVehicleType.BICYCLE]:'自行车',[NonVehicleType.E_BICYCLE]:'电动自行车',[NonVehicleType.C_BICYCLE]:'儿童自行车',[NonVehicleType.TROLLY]:'手推车'
      };
export const NonVehicleTypeList=[
        {label:'未知车型',value:NonVehicleType.UNKNOWN_NON_VEHICLE_TYPE},{label:'三轮车',value:NonVehicleType.TRICYCLE},{label:'摩托车',value:NonVehicleType.MOTORCYCLE},{label:'电动摩托车',value:NonVehicleType.E_MOTORCYCLE},{label:'自行车',value:NonVehicleType.BICYCLE},{label:'电动自行车',value:NonVehicleType.E_BICYCLE},{label:'儿童自行车',value:NonVehicleType.C_BICYCLE},{label:'手推车',value:NonVehicleType.TROLLY}
      ];
export default {NonVehicleType,NonVehicleTypeMap,NonVehicleTypeList}