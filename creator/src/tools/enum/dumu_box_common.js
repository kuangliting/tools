export const ImgFileType={
          JPG_TYPE:0
,PNG_TYPE:1
,BMP_TYPE:2
,INVALID_TYPE:3

      };
export const ImgFileTypeMap={
        [ImgFileType.JPG_TYPE]:'JPG 文件',[ImgFileType.PNG_TYPE]:'PNG 文件',[ImgFileType.BMP_TYPE]:'BMP 文件',[ImgFileType.INVALID_TYPE]:'非法图像文件'
      };
export const ImgFileTypeList=[
        {label:'JPG 文件',value:ImgFileType.JPG_TYPE},{label:'PNG 文件',value:ImgFileType.PNG_TYPE},{label:'BMP 文件',value:ImgFileType.BMP_TYPE},{label:'非法图像文件',value:ImgFileType.INVALID_TYPE}
      ];
export const Gender={
          FEMALE:0
,MALE:1
,NONE:2

      };
export const GenderMap={
        [Gender.FEMALE]:'女性',[Gender.MALE]:'男性',[Gender.NONE]:'未设置'
      };
export const GenderList=[
        {label:'女性',value:Gender.FEMALE},{label:'男性',value:Gender.MALE},{label:'未设置',value:Gender.NONE}
      ];
export const GlassType={
          NO_GLASSES:0
,ORDINARY_GLASSES:1
,SUN_GLASSES:2

      };
export const GlassTypeMap={
        [GlassType.NO_GLASSES]:'无眼镜',[GlassType.ORDINARY_GLASSES]:'普通眼镜',[GlassType.SUN_GLASSES]:'太阳眼镜'
      };
export const GlassTypeList=[
        {label:'无眼镜',value:GlassType.NO_GLASSES},{label:'普通眼镜',value:GlassType.ORDINARY_GLASSES},{label:'太阳眼镜',value:GlassType.SUN_GLASSES}
      ];
export const StaffType={
          STAFF_LIST_TYPE_WHITE:0
,STAFF_LIST_TYPE_BLACK:1
,STAFF_LIST_TYPE_INVAILID:2

      };
export const StaffTypeMap={
        [StaffType.STAFF_LIST_TYPE_WHITE]:'白名单',[StaffType.STAFF_LIST_TYPE_BLACK]:'黑名单',[StaffType.STAFF_LIST_TYPE_INVAILID]:'无效类型'
      };
export const StaffTypeList=[
        {label:'白名单',value:StaffType.STAFF_LIST_TYPE_WHITE},{label:'黑名单',value:StaffType.STAFF_LIST_TYPE_BLACK},{label:'无效类型',value:StaffType.STAFF_LIST_TYPE_INVAILID}
      ];
export const ScreenSplitType={
          SCREEN_SPLIT_TYPE_ONE:0
,SCREEN_SPLIT_TYPE_FOUR:1
,SCREEN_SPLIT_TYPE_FULL:2

      };
export const ScreenSplitTypeMap={
        [ScreenSplitType.SCREEN_SPLIT_TYPE_ONE]:'一分屏',[ScreenSplitType.SCREEN_SPLIT_TYPE_FOUR]:'四分屏',[ScreenSplitType.SCREEN_SPLIT_TYPE_FULL]:'全屏'
      };
export const ScreenSplitTypeList=[
        {label:'一分屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_ONE},{label:'四分屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_FOUR},{label:'全屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_FULL}
      ];
export const StreamStatus={
          STREAM_STATUS_NONE:0
,STREAM_STATUS_LOADING_FAILED:1
,STREAM_STATUS_LOADING:2
,STREAM_STATUS_PLAYING:3

      };
export const StreamStatusMap={
        [StreamStatus.STREAM_STATUS_NONE]:'暂无视频',[StreamStatus.STREAM_STATUS_LOADING_FAILED]:'加载失败',[StreamStatus.STREAM_STATUS_LOADING]:'加载中',[StreamStatus.STREAM_STATUS_PLAYING]:'播放展示状态'
      };
export const StreamStatusList=[
        {label:'暂无视频',value:StreamStatus.STREAM_STATUS_NONE},{label:'加载失败',value:StreamStatus.STREAM_STATUS_LOADING_FAILED},{label:'加载中',value:StreamStatus.STREAM_STATUS_LOADING},{label:'播放展示状态',value:StreamStatus.STREAM_STATUS_PLAYING}
      ];
export const StaffLabelType={
          INPUT_BOX:0
,COMBO_BOX:1

      };
export const StaffLabelTypeMap={
        [StaffLabelType.INPUT_BOX]:'输入框',[StaffLabelType.COMBO_BOX]:'下拉框'
      };
export const StaffLabelTypeList=[
        {label:'输入框',value:StaffLabelType.INPUT_BOX},{label:'下拉框',value:StaffLabelType.COMBO_BOX}
      ];
export const ErrorCode={
          STATUS_SUCCESS:0
,STATUS_SEND_SUCCESS:1000
,STATUS_ERR_MEMORY_ALLOC_FAILED:1001
,STATUS_ERR_INVALID_PARAM:1002
,STATUS_ERR_FILE_NOT_EXIST:1003
,STATUS_ERR_FILE_OPEN_FAILED:1004
,STATUS_ERR_FILE_DELETE_FAILED:1005
,STATUS_ERR_FILE_WRITE_FAILED:1006
,STATUS_ERR_FILE_READ_FAILED:1007
,STATUS_ERR_NOT_A_DIRECTORY:1008
,STATUS_ERR_DB_ID_ALREADY_EXIST:2001
,STATUS_ERR_DB_CREATE_DB_FAILED:2002
,STATUS_ERR_DB_CREATE_TABLE_FAILED:2003
,STATUS_ERR_DB_INSERT_RECORD_FAILED:2004
,STATUS_ERR_DB_QUERY_RECORD_FAILED:2005
,STATUS_ERR_DB_MODIFY_RECORD_FAILED:2006
,STATUS_ERR_DB_DELETE_RECORD_FAILED:2007
,STATUS_ERR_DB_POOLNAME_ALREADY_EXIST:2008
,STATUS_ERR_DB_DROP_TABLE_FAILED:2009
,STATUS_ERR_DB_TABLE_NOT_EXIST:2010
,STATUS_ERR_DB_NOT_EXIST:2011
,STATUS_ERR_DB_CLEAR_DATA_FAILED:2012
,STATUS_ERR_DB_RECORD_EXCEED_LIMITS:2013
,STATUS_ERR_DB_INVALID_TABLE_NAME_OR_TYPE:2014
,STATUS_ERR_DB_TABLE_RECORD_EXCEED_LIMITS:2015
,STATUS_ERR_REGISTER_UNSUPPORTED_IMG_TYPE:3001
,STATUS_ERR_REGISTER_LACK_OF_NECESSORY_INFO:3002
,STATUS_ERR_REGISTER_NO_FACE_DETECTED:3003
,STATUS_ERR_REGISTER_TOO_MANY_FACE_DETECTED:3004
,STATUS_ERR_REGISTER_FACE_LOW_QUALITY:3005
,STATUS_ERR_REGISTER_FACE_NO_LANDMARKS:3006
,STATUS_ERR_REGISTER_FACE_NO_FEATURES:3007
,STATUS_ERR_REGISTER_FAILED:3008
,STATUS_ERR_REGISTER_IMG_OVER_SIZE:3009
,STATUS_ERR_TASK_NO_RESULT:4001
,STATUS_ERR_TASK_RUNTIME_FAILED:4002
,STATUS_ERR_TASK_KILLED:4003
,STATUS_ERR_TASK_TIMEOUT:4004
,STATUS_ERR_TASK_NOT_EXIST:4005
,STATUS_ERR_TASK_PENDING:4006
,STATUS_ERR_TASK_SUBMIT_FAILED:4007
,STATUS_ERR_NETWORK_ERROR:5001
,STATUS_ERR_NETWORK_TIME_OUT:5002
,STATUS_ERR_NETWORK_FILE_NOT_RECEIVED:5003
,STATUS_ERR_NETWORK_FILE_INCOMPLETE:5004
,STATUS_ERR_NETWORK_UNEXPECTED_FILE_TYPE:5005

      };
export const ErrorCodeMap={
        
      };
export const ErrorCodeList=[
        
      ];
export const RecogType={
          ANY_TYPE:0
,WHITELIST_ONLY:1
,BLACKLIST_ONLY:2
,NOT_RECOGNIZED:3

      };
export const RecogTypeMap={
        [RecogType.ANY_TYPE]:'全部',[RecogType.WHITELIST_ONLY]:'白名单',[RecogType.BLACKLIST_ONLY]:'黑名单',[RecogType.NOT_RECOGNIZED]:'陌生人'
      };
export const RecogTypeList=[
        {label:'全部',value:RecogType.ANY_TYPE},{label:'白名单',value:RecogType.WHITELIST_ONLY},{label:'黑名单',value:RecogType.BLACKLIST_ONLY},{label:'陌生人',value:RecogType.NOT_RECOGNIZED}
      ];
