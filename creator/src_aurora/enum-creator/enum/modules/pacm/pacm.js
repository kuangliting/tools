export const InstallState={
          CREATING:0
,DOWNLOADING:1
,EXTRACTING:2
,INSTALLING:3
,INSTALLED:4
,CANCELLED:5
,FAILED:6

      };
export const InstallStateMap={
        
      };
export const InstallStateList=[
        
      ];
export const ActivateState={
          ACTIVATESTATE_ALL:0
,UNACTIVATED:1
,ACTIVATED:2
,EXPIRED:3

      };
export const ActivateStateMap={
        [ActivateState.ACTIVATESTATE_ALL]:'全部',[ActivateState.UNACTIVATED]:'已安装，未激活',[ActivateState.ACTIVATED]:'已安装，已激活',[ActivateState.EXPIRED]:'已安装，已过期'
      };
export const ActivateStateList=[
        {label:'全部',value:ActivateState.ACTIVATESTATE_ALL},{label:'已安装，未激活',value:ActivateState.UNACTIVATED},{label:'已安装，已激活',value:ActivateState.ACTIVATED},{label:'已安装，已过期',value:ActivateState.EXPIRED}
      ];
export const ConfigState={
          CONFIGSTATE_ALL:0
,UNCONFIGURE:1
,CONFIGURED:2

      };
export const ConfigStateMap={
        [ConfigState.CONFIGSTATE_ALL]:'获取所有状态',[ConfigState.UNCONFIGURE]:'未配置',[ConfigState.CONFIGURED]:'已配置'
      };
export const ConfigStateList=[
        {label:'获取所有状态',value:ConfigState.CONFIGSTATE_ALL},{label:'未配置',value:ConfigState.UNCONFIGURE},{label:'已配置',value:ConfigState.CONFIGURED}
      ];
export default {InstallState,InstallStateMap,InstallStateList,ActivateState,ActivateStateMap,ActivateStateList,ConfigState,ConfigStateMap,ConfigStateList}