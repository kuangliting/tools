export const VehicleType={
          UNKNOWN_VEHICLE_TYPE:0
,CAR:1
,MEDIUM_BUS:2
,BUS:3
,MINIVAN:4
,TRUCK:5
,HEAVY_TRUCK:6

      };
export const VehicleTypeMap={
        [VehicleType.UNKNOWN_VEHICLE_TYPE]:'未知车型',[VehicleType.CAR]:'小汽车',[VehicleType.MEDIUM_BUS]:'中巴',[VehicleType.BUS]:'公共汽车',[VehicleType.MINIVAN]:'小型货车',[VehicleType.TRUCK]:'中型卡车',[VehicleType.HEAVY_TRUCK]:'重型卡车'
      };
export const VehicleTypeList=[
        {label:'未知车型',value:VehicleType.UNKNOWN_VEHICLE_TYPE},{label:'小汽车',value:VehicleType.CAR},{label:'中巴',value:VehicleType.MEDIUM_BUS},{label:'公共汽车',value:VehicleType.BUS},{label:'小型货车',value:VehicleType.MINIVAN},{label:'中型卡车',value:VehicleType.TRUCK},{label:'重型卡车',value:VehicleType.HEAVY_TRUCK}
      ];
export const VehicleColor={
          UNKNOWN_VEHICLE_COLOR:0
,BLUE:1
,YELLOW:2
,WHITE:3
,BLACK:4
,GREEN:5

      };
export const VehicleColorMap={
        [VehicleColor.UNKNOWN_VEHICLE_COLOR]:'未知颜色',[VehicleColor.BLUE]:'蓝色',[VehicleColor.YELLOW]:'黄色',[VehicleColor.WHITE]:'白色',[VehicleColor.BLACK]:'黑色',[VehicleColor.GREEN]:'绿色'
      };
export const VehicleColorList=[
        {label:'未知颜色',value:VehicleColor.UNKNOWN_VEHICLE_COLOR},{label:'蓝色',value:VehicleColor.BLUE},{label:'黄色',value:VehicleColor.YELLOW},{label:'白色',value:VehicleColor.WHITE},{label:'黑色',value:VehicleColor.BLACK},{label:'绿色',value:VehicleColor.GREEN}
      ];
export const VehicleBrand={
          UNKNOWN_VEHICLE_BRAND:0
,VOLKSWAGEN:1
,HONDA:2
,TOYOTA:3
,AUDI:4

      };
export const VehicleBrandMap={
        [VehicleBrand.UNKNOWN_VEHICLE_BRAND]:'未知品牌',[VehicleBrand.VOLKSWAGEN]:'大众',[VehicleBrand.HONDA]:'本田',[VehicleBrand.TOYOTA]:'丰田',[VehicleBrand.AUDI]:'奥迪'
      };
export const VehicleBrandList=[
        {label:'未知品牌',value:VehicleBrand.UNKNOWN_VEHICLE_BRAND},{label:'大众',value:VehicleBrand.VOLKSWAGEN},{label:'本田',value:VehicleBrand.HONDA},{label:'丰田',value:VehicleBrand.TOYOTA},{label:'奥迪',value:VehicleBrand.AUDI}
      ];
export const PlateType={
          UNKNOWN_PLATE_TYPE:0
,HK:1
,MO:2
,AMBASSADOR:3
,CONSUL:4
,XUE:5
,POLICE:6
,GUA:7
,CAR_NORMAL:8

      };
export const PlateTypeMap={
        [PlateType.UNKNOWN_PLATE_TYPE]:'未知类型',[PlateType.HK]:'港',[PlateType.MO]:'澳',[PlateType.AMBASSADOR]:'使',[PlateType.CONSUL]:'领',[PlateType.XUE]:'学',[PlateType.POLICE]:'警',[PlateType.GUA]:'挂',[PlateType.CAR_NORMAL]:'普通车牌'
      };
export const PlateTypeList=[
        {label:'未知类型',value:PlateType.UNKNOWN_PLATE_TYPE},{label:'港',value:PlateType.HK},{label:'澳',value:PlateType.MO},{label:'使',value:PlateType.AMBASSADOR},{label:'领',value:PlateType.CONSUL},{label:'学',value:PlateType.XUE},{label:'警',value:PlateType.POLICE},{label:'挂',value:PlateType.GUA},{label:'普通车牌',value:PlateType.CAR_NORMAL}
      ];
export const CredentialsType={
          UNKNOWN_CREDENTIALS_TYPE:0
,ID_CARD:1
,DRIVING_LICENSE:2

      };
export const CredentialsTypeMap={
        [CredentialsType.UNKNOWN_CREDENTIALS_TYPE]:'未知类型',[CredentialsType.ID_CARD]:'身份证',[CredentialsType.DRIVING_LICENSE]:'驾照'
      };
export const CredentialsTypeList=[
        {label:'未知类型',value:CredentialsType.UNKNOWN_CREDENTIALS_TYPE},{label:'身份证',value:CredentialsType.ID_CARD},{label:'驾照',value:CredentialsType.DRIVING_LICENSE}
      ];
export default {VehicleType,VehicleTypeMap,VehicleTypeList,VehicleColor,VehicleColorMap,VehicleColorList,VehicleBrand,VehicleBrandMap,VehicleBrandList,PlateType,PlateTypeMap,PlateTypeList,CredentialsType,CredentialsTypeMap,CredentialsTypeList}