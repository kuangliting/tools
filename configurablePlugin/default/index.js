import { ScopeType,ValueType,Symbol,DefaultValue } from "./enum";
import data from "./data";
import knowledge from "./knowledge";

const login = {
    value : DefaultValue[ScopeType.PAGE],
    scope:ScopeType.PAGE,
    desc : "登录页面",
    path:"/",
    children:{
        left:{
            value: ValueType.HYBRID,
            scope: ScopeType.ELEMNET,
            desc : "左边模块",
            children:{
                title:{
                    value: ValueType.OFF,
                    scope: ScopeType.ELEMNET,
                    desc : "登录页标题",
                },
                image:{
                    value: ValueType.ON,
                    scope: ScopeType.ELEMNET,
                    desc : "登录页图片",
                },
            }
        }
    }
}

const all = {
    data,
    knowledge,
    login,
}
console.log(all)

export const scopeTypeSaveNameMap = {
    [ScopeType.MODULE]:'modules',
    [ScopeType.PAGE]:'pages',
    [ScopeType.ELEMNET]:'elements',
}
const result = {
    [scopeTypeSaveNameMap[ScopeType.MODULE]]:{},
    [scopeTypeSaveNameMap[ScopeType.PAGE]]:{},
    [scopeTypeSaveNameMap[ScopeType.ELEMNET]]:{},
}

function mergeValueToBoolean(value, parentValue){
    if(parentValue!== ValueType.HYBRID){
        return parentValue!== ValueType.OFF
    }else{
        return value!== ValueType.OFF;
    }
}

function formateConfigData(configObj,parent){
    for(let key in configObj){
        const cfg = configObj[key];
        const {scope,value,children} =cfg;
        const originalPath=cfg.path
        let path = originalPath;
        const savedName = scopeTypeSaveNameMap[scope];
        const saveObj = result[savedName];
        const parentKey = parent&&parent.key;
        const parentValue = parent ? parent.value || ValueType.HYBRID :  ValueType.HYBRID;
        if(saveObj){
           if(parent && scope===parent.scope && parentKey){//表示属于同种裁剪范围，需要合并计算key
              key=parentKey+Symbol+key;
           }
           if(scope===ScopeType.MODULE){
            saveObj[key]= mergeValueToBoolean(value,parentValue);
            path = key;
           }else if(scope===ScopeType.PAGE){
            //saveObj[key]= mergeValueToBoolean(value,parentValue);
            path = parent && parent.path;
            if(!path){
                path="no_module"
            }
            saveObj[path] ? saveObj[path][key]= mergeValueToBoolean(value,parentValue) :saveObj[path]={[key]:mergeValueToBoolean(value,parentValue)}

           }else if(scope===ScopeType.ELEMNET) {
            //console.log(path)
            if(parent&&parent.scope===ScopeType.PAGE){
                path=parent.originalPath;
            }else{
                path = parent && parent.path;
            }
            if(!path){
                path= "no_page"
            }

             saveObj[path] ? saveObj[path][key]= mergeValueToBoolean(value,parentValue) :saveObj[path]={[key]:mergeValueToBoolean(value,parentValue)}

           }
        }
        if(children){
            if(parent && parent.value!=ValueType.HYBRID){
                formateConfigData(children,{scope,value:parent.value,key,path,originalPath})
            }else{
                formateConfigData(children,{scope,value,key,path,originalPath})
            }
        }
    }
}

export default (paramCfg)=>{
    formateConfigData(paramCfg||all)
    console.log(result)
    return result;
}

