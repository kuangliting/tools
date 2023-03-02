export const SkillStatus={
          SKILL_STATUS_DISABLE:0
,SKILL_STATUS_ENABLE:1

      };
export const SkillStatusMap={
        [SkillStatus.SKILL_STATUS_DISABLE]:'暂停',[SkillStatus.SKILL_STATUS_ENABLE]:'启用'
      };
export const SkillStatusList=[
        {label:'暂停',value:SkillStatus.SKILL_STATUS_DISABLE},{label:'启用',value:SkillStatus.SKILL_STATUS_ENABLE}
      ];
export default {SkillStatus,SkillStatusMap,SkillStatusList}