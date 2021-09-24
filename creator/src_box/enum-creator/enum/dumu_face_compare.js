export const FaceCompareType={
          ONE_VS_ONE:0
,ONE_VS_MANY:1
,FEATURE_EXTRACT:2

      };
export const FaceCompareTypeMap={
        [FaceCompareType.ONE_VS_ONE]:'一对一比对',[FaceCompareType.ONE_VS_MANY]:'一对多比对',[FaceCompareType.FEATURE_EXTRACT]:'提取特征'
      };
export const FaceCompareTypeList=[
        {label:'一对一比对',value:FaceCompareType.ONE_VS_ONE},{label:'一对多比对',value:FaceCompareType.ONE_VS_MANY},{label:'提取特征',value:FaceCompareType.FEATURE_EXTRACT}
      ];
export default {FaceCompareType,FaceCompareTypeMap,FaceCompareTypeList}