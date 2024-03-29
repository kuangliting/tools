export const Gender={
          NONE:0
,FEMALE:1
,MALE:2

      };
export const GenderMap={
        [Gender.NONE]:'未设置',[Gender.FEMALE]:'女性',[Gender.MALE]:'男性'
      };
export const GenderList=[
        {label:'未设置',value:Gender.NONE},{label:'女性',value:Gender.FEMALE},{label:'男性',value:Gender.MALE}
      ];
export const GlassType={
          NO_GLASSES:0
,ORDINARY_GLASSES:1
,SUN_GLASSES:2

      };
export const GlassTypeMap={
        [GlassType.NO_GLASSES]:'无眼镜',[GlassType.ORDINARY_GLASSES]:'普通眼镜',[GlassType.SUN_GLASSES]:'太阳眼镜'
      };
export const GlassTypeList=[
        {label:'无眼镜',value:GlassType.NO_GLASSES},{label:'普通眼镜',value:GlassType.ORDINARY_GLASSES},{label:'太阳眼镜',value:GlassType.SUN_GLASSES}
      ];
export default {Gender,GenderMap,GenderList,GlassType,GlassTypeMap,GlassTypeList}