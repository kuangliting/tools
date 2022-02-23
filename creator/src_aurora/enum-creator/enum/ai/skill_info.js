export const SkillType={
          BASIC:0
,BUSINESS:1

      };
export const SkillTypeMap={
        [SkillType.BASIC]:'基础技能, 包括人机非检测、人员检测、人像检测',[SkillType.BUSINESS]:'业务技能, 包括烟火检测、安全帽检测等'
      };
export const SkillTypeList=[
        {label:'基础技能, 包括人机非检测、人员检测、人像检测',value:SkillType.BASIC},{label:'业务技能, 包括烟火检测、安全帽检测等',value:SkillType.BUSINESS}
      ];
export default {SkillType,SkillTypeMap,SkillTypeList}