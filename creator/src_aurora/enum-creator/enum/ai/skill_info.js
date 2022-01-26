export const SkillType = {
      BASIC: 0,
      BUSINESS: 1

};
export const SkillTypeMap = {
      [SkillType.BASIC]: '基础技能',
      [SkillType.BUSINESS]: '业务技能'
};
export const SkillTypeList = [{
      label: '基础技能',
      value: SkillType.BASIC
}, {
      label: '业务技能',
      value: SkillType.BUSINESS
}];
export default {
      SkillType,
      SkillTypeMap,
      SkillTypeList
}