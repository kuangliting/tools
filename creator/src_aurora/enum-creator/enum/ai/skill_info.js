export const SkillType={
          ALL_SKILLTYPE:0
,BASIC:1
,BUSINESS:2

      };
export const SkillTypeMap={
        [SkillType.ALL_SKILLTYPE]:'所有技能类型, 包括基础技能和业务技能',[SkillType.BASIC]:'基础技能, 包括人机非检测、人员检测、人像检测',[SkillType.BUSINESS]:'业务技能, 包括烟火检测、安全帽检测等'
      };
export const SkillTypeList=[
        {label:'所有技能类型, 包括基础技能和业务技能',value:SkillType.ALL_SKILLTYPE},{label:'基础技能, 包括人机非检测、人员检测、人像检测',value:SkillType.BASIC},{label:'业务技能, 包括烟火检测、安全帽检测等',value:SkillType.BUSINESS}
      ];
export const SkillWorkStatus={
          NORMAL:0
,VERSION_MISMATCH:1

      };
export const SkillWorkStatusMap={
        [SkillWorkStatus.NORMAL]:'技能运行正常',[SkillWorkStatus.VERSION_MISMATCH]:'技能版本与系统软件版本不匹配'
      };
export const SkillWorkStatusList=[
        {label:'技能运行正常',value:SkillWorkStatus.NORMAL},{label:'技能版本与系统软件版本不匹配',value:SkillWorkStatus.VERSION_MISMATCH}
      ];
export default {SkillType,SkillTypeMap,SkillTypeList,SkillWorkStatus,SkillWorkStatusMap,SkillWorkStatusList}