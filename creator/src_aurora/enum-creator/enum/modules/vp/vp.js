export const ScreenSplitType={
          SCREEN_SPLIT_TYPE_ONE:0
,SCREEN_SPLIT_TYPE_FOUR:1
,SCREEN_SPLIT_TYPE_NINE:2
,SCREEN_SPLIT_TYPE_SIXTEEN:3

      };
export const ScreenSplitTypeMap={
        [ScreenSplitType.SCREEN_SPLIT_TYPE_ONE]:'一分屏',[ScreenSplitType.SCREEN_SPLIT_TYPE_FOUR]:'四分屏',[ScreenSplitType.SCREEN_SPLIT_TYPE_NINE]:'九分屏',[ScreenSplitType.SCREEN_SPLIT_TYPE_SIXTEEN]:'十六分屏'
      };
export const ScreenSplitTypeList=[
        {label:'一分屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_ONE},{label:'四分屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_FOUR},{label:'九分屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_NINE},{label:'十六分屏',value:ScreenSplitType.SCREEN_SPLIT_TYPE_SIXTEEN}
      ];
export default {ScreenSplitType,ScreenSplitTypeMap,ScreenSplitTypeList}