export const VideoType={
          VIDEO_TYPE_NONE:0
,VIDEO_TYPE_H264:1
,VIDEO_TYPE_H265:2

      };
export const VideoTypeMap={
        [VideoType.VIDEO_TYPE_NONE]:'PLACEHOLDER',[VideoType.VIDEO_TYPE_H264]:'H.264压缩编码视频数据',[VideoType.VIDEO_TYPE_H265]:'H.265压缩编码视频数据'
      };
export const VideoTypeList=[
        {label:'PLACEHOLDER',value:VideoType.VIDEO_TYPE_NONE},{label:'H.264压缩编码视频数据',value:VideoType.VIDEO_TYPE_H264},{label:'H.265压缩编码视频数据',value:VideoType.VIDEO_TYPE_H265}
      ];
export default {VideoType,VideoTypeMap,VideoTypeList}