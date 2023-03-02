export const CredentialsType={
          ID_CARD:0
,DRIVING_LICENSE:1
,PASSPORT:2

      };
export const CredentialsTypeMap={
        [CredentialsType.ID_CARD]:'身份证',[CredentialsType.DRIVING_LICENSE]:'驾照',[CredentialsType.PASSPORT]:'护照'
      };
export const CredentialsTypeList=[
        {label:'身份证',value:CredentialsType.ID_CARD},{label:'驾照',value:CredentialsType.DRIVING_LICENSE},{label:'护照',value:CredentialsType.PASSPORT}
      ];
export const VehicleType={
          SEDAN:0
,HATCHBACK:1
,SUV:2
,MPV:3
,MINIBUS:4
,TRUCK:5

      };
export const VehicleTypeMap={
        [VehicleType.SEDAN]:'三厢轿车',[VehicleType.HATCHBACK]:'两厢轿车',[VehicleType.SUV]:'SUV',[VehicleType.MPV]:'MPV',[VehicleType.MINIBUS]:'面包车',[VehicleType.TRUCK]:'卡车'
      };
export const VehicleTypeList=[
        {label:'三厢轿车',value:VehicleType.SEDAN},{label:'两厢轿车',value:VehicleType.HATCHBACK},{label:'SUV',value:VehicleType.SUV},{label:'MPV',value:VehicleType.MPV},{label:'面包车',value:VehicleType.MINIBUS},{label:'卡车',value:VehicleType.TRUCK}
      ];
export const VehicleColor={
          BLACK:0
,WHITE:1
,GRAY:2
,RED:3
,GREEN:4
,BLUE:5
,BROWN:6
,YELLOW:7
,PURPLE:8
,PINK:9

      };
export const VehicleColorMap={
        [VehicleColor.BLACK]:'黑',[VehicleColor.WHITE]:'白',[VehicleColor.GRAY]:'灰',[VehicleColor.RED]:'红',[VehicleColor.GREEN]:'绿',[VehicleColor.BLUE]:'蓝',[VehicleColor.BROWN]:'棕',[VehicleColor.YELLOW]:'黄',[VehicleColor.PURPLE]:'紫',[VehicleColor.PINK]:'粉'
      };
export const VehicleColorList=[
        {label:'黑',value:VehicleColor.BLACK},{label:'白',value:VehicleColor.WHITE},{label:'灰',value:VehicleColor.GRAY},{label:'红',value:VehicleColor.RED},{label:'绿',value:VehicleColor.GREEN},{label:'蓝',value:VehicleColor.BLUE},{label:'棕',value:VehicleColor.BROWN},{label:'黄',value:VehicleColor.YELLOW},{label:'紫',value:VehicleColor.PURPLE},{label:'粉',value:VehicleColor.PINK}
      ];
export default {CredentialsType,CredentialsTypeMap,CredentialsTypeList,VehicleType,VehicleTypeMap,VehicleTypeList,VehicleColor,VehicleColorMap,VehicleColorList}