export const AIObjectType = {
  UNKNOWN: 0,
  ALL: 1,
  FACE: 2,
  VEHICLE: 3,
  NON_VEHICLE: 4,
  FIREWORK: 5,
  HEAD_SHOULDER: 6,
  BODY: 7,
  PLATE: 8,
  OBJECT_STATISTICS: 9,
  MAX_OBJECT_TYPE: 10,
};
export const AIObjectTypeMap = {
  [AIObjectType.UNKNOWN]: "未知类型",
  [AIObjectType.ALL]: "全部类型",
  [AIObjectType.FACE]: "人员",
  [AIObjectType.VEHICLE]: "机动车",
  [AIObjectType.NON_VEHICLE]: "非机动车",
  [AIObjectType.FIREWORK]: "烟火检测",
  [AIObjectType.HEAD_SHOULDER]: "头肩检测",
  [AIObjectType.BODY]: "人体",
  [AIObjectType.PLATE]: "车牌",
  [AIObjectType.OBJECT_STATISTICS]: "目标统计信息",
  [AIObjectType.MAX_OBJECT_TYPE]:
    "以后扩展目标类型,请在此类型之前添加并修改该类型对应的值!!!",
};
export const AIObjectTypeList = [
  { label: "未知类型", value: AIObjectType.UNKNOWN },
  { label: "全部类型", value: AIObjectType.ALL },
  { label: "人员", value: AIObjectType.FACE },
  { label: "机动车", value: AIObjectType.VEHICLE },
  { label: "非机动车", value: AIObjectType.NON_VEHICLE },
  { label: "烟火检测", value: AIObjectType.FIREWORK },
  { label: "头肩检测", value: AIObjectType.HEAD_SHOULDER },
  { label: "人体", value: AIObjectType.BODY },
  { label: "车牌", value: AIObjectType.PLATE },
  { label: "目标统计信息", value: AIObjectType.OBJECT_STATISTICS },
  {
    label: "以后扩展目标类型,请在此类型之前添加并修改该类型对应的值!!!",
    value: AIObjectType.MAX_OBJECT_TYPE,
  },
];
export default { AIObjectType, AIObjectTypeMap, AIObjectTypeList };
