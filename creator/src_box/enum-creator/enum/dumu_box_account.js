export const LoginType={
          PASSWORD:0
,REMINDER:1

      };
export const LoginTypeMap={
        [LoginType.PASSWORD]:'账号密码登录',[LoginType.REMINDER]:'密保问题登录'
      };
export const LoginTypeList=[
        {label:'账号密码登录',value:LoginType.PASSWORD},{label:'密保问题登录',value:LoginType.REMINDER}
      ];
export const SetupType={
          PASSWORD_ONLY:0
,PASSWORD_AND_REMINDER:1

      };
export const SetupTypeMap={
        [SetupType.PASSWORD_ONLY]:'仅设置密码',[SetupType.PASSWORD_AND_REMINDER]:'设置密码和密保问答'
      };
export const SetupTypeList=[
        {label:'仅设置密码',value:SetupType.PASSWORD_ONLY},{label:'设置密码和密保问答',value:SetupType.PASSWORD_AND_REMINDER}
      ];
export default {LoginType,LoginTypeMap,LoginTypeList,SetupType,SetupTypeMap,SetupTypeList}