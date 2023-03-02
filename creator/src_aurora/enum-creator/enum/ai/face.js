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
export default {Gender,GenderMap,GenderList}