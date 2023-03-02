export const FireWorkType={
          FIRE:0
,SMOKE:1

      };
export const FireWorkTypeMap={
        [FireWorkType.FIRE]:'火',[FireWorkType.SMOKE]:'烟'
      };
export const FireWorkTypeList=[
        {label:'火',value:FireWorkType.FIRE},{label:'烟',value:FireWorkType.SMOKE}
      ];
export default {FireWorkType,FireWorkTypeMap,FireWorkTypeList}