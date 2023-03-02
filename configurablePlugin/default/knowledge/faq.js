import { ScopeType,ValueType,DefaultValue } from "../enum";

//问答对生产
const produce = {
    value: DefaultValue[ScopeType.PAGE],//ValueType.OFF,
    scope: ScopeType.PAGE,
    desc : "问答对生产",
    path:"/faqKnowledge/produce",
    children:{
        // hshs:{
        //     value: ValueType.OFF,
        //     scope: ScopeType.ELEMNET,
        //     desc : "某某按钮",
        // },
        // hshs2:{
        //     value: ValueType.ON,
        //     scope: ScopeType.ELEMNET,
        //     desc : "某某按钮2",
        // },
        // hshs3:{
        //     value: ValueType.OFF,
        //     scope: ScopeType.ELEMNET,
        //     desc : "某某按钮3",
        // }
    }
}

const result = {
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "干预问答对",
    path:"/faqKnowledge/produce",
    children:{}
}

const testModule = {
    alue: DefaultValue[ScopeType.MODULE],
    scope: ScopeType.MODULE,
    desc : "问答对生产pppp",
    children:{
        produce,
        result,
    }
}

export default {
    value: DefaultValue[ScopeType.MODULE],
    scope: ScopeType.MODULE,
    desc : "问答对生产",
    children:{
        //testModule,
        produce,
        result,
    }
}
