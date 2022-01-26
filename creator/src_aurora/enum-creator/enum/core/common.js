export const ErrorCode={
          STATUS_SUCCESS:0
,STATUS_ERR_PARAM_INVALID:1

      };
export const ErrorCodeMap={
        [ErrorCode.STATUS_SUCCESS]:'成功',[ErrorCode.STATUS_ERR_PARAM_INVALID]:'无效参数'
      };
export const ErrorCodeList=[
        {label:'成功',value:ErrorCode.STATUS_SUCCESS},{label:'无效参数',value:ErrorCode.STATUS_ERR_PARAM_INVALID}
      ];
export default {ErrorCode,ErrorCodeMap,ErrorCodeList}