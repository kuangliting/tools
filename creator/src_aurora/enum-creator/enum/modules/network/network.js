export const NetworkMode={
          NETWORK_MODE_STATIC:0
,NETWORK_MODE_DHCP:1

      };
export const NetworkModeMap={
        [NetworkMode.NETWORK_MODE_STATIC]:'静态',[NetworkMode.NETWORK_MODE_DHCP]:'DHCP'
      };
export const NetworkModeList=[
        {label:'静态',value:NetworkMode.NETWORK_MODE_STATIC},{label:'DHCP',value:NetworkMode.NETWORK_MODE_DHCP}
      ];
export const IpProtocolVersion={
          PROTOCOL_VERSION_4:0
,PROTOCOL_VERSION_6:1

      };
export const IpProtocolVersionMap={
        [IpProtocolVersion.PROTOCOL_VERSION_4]:'IPV4',[IpProtocolVersion.PROTOCOL_VERSION_6]:'IPV6'
      };
export const IpProtocolVersionList=[
        {label:'IPV4',value:IpProtocolVersion.PROTOCOL_VERSION_4},{label:'IPV6',value:IpProtocolVersion.PROTOCOL_VERSION_6}
      ];
export default {NetworkMode,NetworkModeMap,NetworkModeList,IpProtocolVersion,IpProtocolVersionMap,IpProtocolVersionList}