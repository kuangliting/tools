import { ScopeType,ValueType,DefaultValue } from "../enum";

const definition={
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "知识定义",
    path:"/graphKnowledge/definition",
    children:{}
}

const produce={
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "知识图谱生产",
    path:"/graphKnowledge/produce",
    children:{}
}

const result = {
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "干预知识图谱",
    path:"/graphKnowledge/result",
    children:{}
}

export default {
    value: DefaultValue[ScopeType.MODULE],
    scope: ScopeType.MODULE,
    desc : "全文检索",
    children:{
        definition,
        produce,
        result,
    }
}
