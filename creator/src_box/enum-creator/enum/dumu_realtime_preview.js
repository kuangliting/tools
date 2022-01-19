export const OsdType={
          FACE_RECT:0
,BODY_RECT:1

      };
export const OsdTypeMap={
        [OsdType.FACE_RECT]:'人脸框',[OsdType.BODY_RECT]:'人体框'
      };
export const OsdTypeList=[
        {label:'人脸框',value:OsdType.FACE_RECT},{label:'人体框',value:OsdType.BODY_RECT}
      ];
export default {OsdType,OsdTypeMap,OsdTypeList}