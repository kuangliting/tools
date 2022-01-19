export const ConfigOption={
          COFIG_OPTION_IP_PARAMS:0
,COFIG_OPTION_DNS_PARAMS:1
,COFIG_OPTION_ALL_PARAMS:2

      };
export const ConfigOptionMap={
        [ConfigOption.COFIG_OPTION_IP_PARAMS]:'配置IP',[ConfigOption.COFIG_OPTION_DNS_PARAMS]:'配置DNS',[ConfigOption.COFIG_OPTION_ALL_PARAMS]:'配置所有网络参数'
      };
export const ConfigOptionList=[
        {label:'配置IP',value:ConfigOption.COFIG_OPTION_IP_PARAMS},{label:'配置DNS',value:ConfigOption.COFIG_OPTION_DNS_PARAMS},{label:'配置所有网络参数',value:ConfigOption.COFIG_OPTION_ALL_PARAMS}
      ];
export default {ConfigOption,ConfigOptionMap,ConfigOptionList}