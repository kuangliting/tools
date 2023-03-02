//裁剪范围类型
export const ScopeType = Object.freeze({
    MODULE:0,  //模块
    PAGE:1,   //页面
    ELEMNET:2,  //元素
    LOGIC:3  // 逻辑
})

//裁剪值类型
export const ValueType = Object.freeze({
    OFF:-1,  //自身及所有子功能都关闭
    HYBRID:0, //自身打开，子功能部分打开
    ON:1,  // 自身及所有子功能都打开
})

export const DefaultValue = Object.freeze({
    [ScopeType.MODULE]:ValueType.HYBRID, //模块默认值
    [ScopeType.PAGE]:ValueType.HYBRID,  //页面默认值
    [ScopeType.ELEMNET]:ValueType.ON,  //功能默认值
    [ScopeType.LOGIC]:ValueType.ON,  //功能默认值
})

export const Symbol="_"

export default {
    ScopeType,
    ValueType,
    DefaultValue,
    Symbol
}
