export const FilterType={
          FT_SHIED:0
,FT_INTEREST:1

      };
export const FilterTypeMap={
        [FilterType.FT_SHIED]:'object in this type of area will be removed',[FilterType.FT_INTEREST]:'object in this type of area will be captured.'
      };
export const FilterTypeList=[
        {label:'object in this type of area will be removed',value:FilterType.FT_SHIED},{label:'object in this type of area will be captured.',value:FilterType.FT_INTEREST}
      ];
export default {FilterType,FilterTypeMap,FilterTypeList}