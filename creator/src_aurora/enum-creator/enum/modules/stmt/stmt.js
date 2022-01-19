export const RebootTimeType = {
      TIME_TYPE_NONE: 0,
      TIME_TYPE_WEEK: 1,
      TIME_TYPE_MONTH: 2
};
export const RebootTimeTypeMap = {
      [RebootTimeType.TIME_TYPE_NONE]: '无',
      [RebootTimeType.TIME_TYPE_WEEK]: '每周',
      [RebootTimeType.TIME_TYPE_MONTH]: '每月'
};
export const RebootTimeTypeList = [{
      label: '无',
      value: RebootTimeType.TIME_TYPE_NONE
}, {
      label: '每周',
      value: RebootTimeType.TIME_TYPE_WEEK
}, {
      label: '每月',
      value: RebootTimeType.TIME_TYPE_MONTH
}];
export const LogExportTime = {
      NEAR_ONE_DAY: 0,
      NEAR_TWO_DAY: 1,
      NEAR_THREE_DAY: 2,
      NEAR_FOUR_DAY: 3,
      NEAR_FIVE_DAY: 4,
      NEAR_SIX_DAY: 5,
      NEAR_SEVEN_DAY: 6

};
export const LogExportTimeMap = {
      [LogExportTime.NEAR_ONE_DAY]: '近1天',
      [LogExportTime.NEAR_TWO_DAY]: '近2天',
      [LogExportTime.NEAR_THREE_DAY]: '近3天',
      [LogExportTime.NEAR_FOUR_DAY]: '近4天',
      [LogExportTime.NEAR_FIVE_DAY]: '近5天',
      [LogExportTime.NEAR_SIX_DAY]: '近6天',
      [LogExportTime.NEAR_SEVEN_DAY]: '近7天'
};
export const LogExportTimeList = [{
      label: '近1天',
      value: LogExportTime.NEAR_ONE_DAY
}, {
      label: '近2天',
      value: LogExportTime.NEAR_TWO_DAY
}, {
      label: '近3天',
      value: LogExportTime.NEAR_THREE_DAY
}, {
      label: '近4天',
      value: LogExportTime.NEAR_FOUR_DAY
}, {
      label: '近5天',
      value: LogExportTime.NEAR_FIVE_DAY
}, {
      label: '近6天',
      value: LogExportTime.NEAR_SIX_DAY
}, {
      label: '近7天',
      value: LogExportTime.NEAR_SEVEN_DAY
}];
export const UpgradeStatus = {
      UPGRADE_IDLE: 0,
      UPGRADE_START: 1,
      UPGRADE_RUN: 2,
      UPGRADE_SUCCESS: 3,
      UPGRADE_FAILURE: 4,
      UPGRADE_DOWNLOAD: 5,
      UPGRADE_DONE: 6,
      UPGRADE_SUBPROCESS: 7,
      UPGRADE_PROGRESS: 8

};
export const UpgradeStatusMap = {
      [UpgradeStatus.UPGRADE_IDLE]: '空闲',
      [UpgradeStatus.UPGRADE_START]: '开始',
      [UpgradeStatus.UPGRADE_RUN]: '处理中',
      [UpgradeStatus.UPGRADE_SUCCESS]: '成功',
      [UpgradeStatus.UPGRADE_FAILURE]: '失败',
      [UpgradeStatus.UPGRADE_DOWNLOAD]: '下载',
      [UpgradeStatus.UPGRADE_DONE]: '完成'
};
export const UpgradeStatusList = [{
      label: '空闲',
      value: UpgradeStatus.UPGRADE_IDLE
}, {
      label: '开始',
      value: UpgradeStatus.UPGRADE_START
}, {
      label: '处理中',
      value: UpgradeStatus.UPGRADE_RUN
}, {
      label: '成功',
      value: UpgradeStatus.UPGRADE_SUCCESS
}, {
      label: '失败',
      value: UpgradeStatus.UPGRADE_FAILURE
}, {
      label: '下载',
      value: UpgradeStatus.UPGRADE_DOWNLOAD
}, {
      label: '完成',
      value: UpgradeStatus.UPGRADE_DONE
}];
export const LogoType = {
      LOGO_TYPE_DEFAULT: 0,
      LOGO_TYPE_CUSTOM: 1,
      LOGO_TYPE_BIG: 2,
      LOGO_TYPE_SMALL: 3

};
export const LogoTypeMap = {
      [LogoType.LOGO_TYPE_DEFAULT]: '默认LOGO类型',
      [LogoType.LOGO_TYPE_CUSTOM]: '用户自定义LOGO类型',
      [LogoType.LOGO_TYPE_BIG]: '大LOGO',
      [LogoType.LOGO_TYPE_SMALL]: '小LOGO'
};
export const LogoTypeList = [{
      label: '默认LOGO类型',
      value: LogoType.LOGO_TYPE_DEFAULT
}, {
      label: '用户自定义LOGO类型',
      value: LogoType.LOGO_TYPE_CUSTOM
}, {
      label: '大LOGO',
      value: LogoType.LOGO_TYPE_BIG
}, {
      label: '小LOGO',
      value: LogoType.LOGO_TYPE_SMALL
}];
export const StorageStrategy = {
      STORAGE_STRATEGY_FULL_COVER: 0,
      STORAGE_STRATEGY_FULL_STOP: 1

};
export const StorageStrategyMap = {
      [StorageStrategy.STORAGE_STRATEGY_FULL_COVER]: '满覆盖',
      [StorageStrategy.STORAGE_STRATEGY_FULL_STOP]: '满即停'
};
export const StorageStrategyList = [{
      label: '满覆盖',
      value: StorageStrategy.STORAGE_STRATEGY_FULL_COVER
}, {
      label: '满即停',
      value: StorageStrategy.STORAGE_STRATEGY_FULL_STOP
}];
export default {
      RebootTimeType,
      RebootTimeTypeMap,
      RebootTimeTypeList,
      LogExportTime,
      LogExportTimeMap,
      LogExportTimeList,
      UpgradeStatus,
      UpgradeStatusMap,
      UpgradeStatusList,
      LogoType,
      LogoTypeMap,
      LogoTypeList,
      StorageStrategy,
      StorageStrategyMap,
      StorageStrategyList
}