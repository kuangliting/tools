import { ScopeType,ValueType,DefaultValue } from "../enum";

//数据接入页-功能配置
const resource = {
    value: DefaultValue[ScopeType.PAGE],//ValueType.ON,
    scope: ScopeType.PAGE,
    desc : "数据接入",
    path:"/data/resource",
    children:{
        table1:{
            value: ValueType.HYBRID,
            scope: ScopeType.ELEMNET,
            desc : "某某table",
            children:{
                btn1:{
                value: ValueType.ON,
                scope: ScopeType.ELEMNET,
                desc : "内部按钮1",
                },
                btn2:{
                    value: ValueType.OFF,
                    scope: ScopeType.ELEMNET,
                    desc : "内部按钮2",
                },
                region:{
                    value: ValueType.HYBRID,
                    scope: ScopeType.ELEMNET,
                    desc : "某区域",
                    children:{
                        btn1:{
                            value: ValueType.ON,
                            scope: ScopeType.ELEMNET,
                            desc : "内部按钮1",
                            },
                            btn2:{
                                value: ValueType.OFF,
                                scope: ScopeType.ELEMNET,
                                desc : "内部按钮2",
                            },
                    }

                }
            }
        },
        tab2:{
            value: ValueType.ON,
            scope: ScopeType.ELEMNET,
            desc : "某某按钮2",
        },
        tab3:{
            value: ValueType.OFF,
            scope: ScopeType.ELEMNET,
            desc : "某某按钮3",
        }
    }
}

//已接入数据统计-功能配置
const statistics = {
    value : DefaultValue[ScopeType.PAGE],
    scope:ScopeType.PAGE,
    desc : "已接入数据统计",
    path:"/data/statistics",
}

export default {
    value: DefaultValue[ScopeType.MODULE],// ValueType.ON,
    scope: ScopeType.MODULE,
    desc : "数据管理",
    children : {
        resource,
        statistics,
   }
};
