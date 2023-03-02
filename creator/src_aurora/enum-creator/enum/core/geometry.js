export const FilterType={
          FT_ANALYSIS:0
,FT_SHIELD:1
,FT_CROSSLINE:2

      };
export const FilterTypeMap={
        [FilterType.FT_ANALYSIS]:'分析',[FilterType.FT_SHIELD]:'屏蔽',[FilterType.FT_CROSSLINE]:'越线'
      };
export const FilterTypeList=[
        {label:'分析',value:FilterType.FT_ANALYSIS},{label:'屏蔽',value:FilterType.FT_SHIELD},{label:'越线',value:FilterType.FT_CROSSLINE}
      ];
export default {FilterType,FilterTypeMap,FilterTypeList}