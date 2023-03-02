import { ScopeType,ValueType ,DefaultValue} from "../enum";

const definition = {
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "全文索引定义",
    path:"/textKnowledge/textIndexDefinition",
    children:{}
}
const produce = {
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "全文索引生产",
    path:"/textKnowledge/produce",
    children:{}
}
const result = {
    value: DefaultValue[ScopeType.PAGE],
    scope: ScopeType.PAGE,
    desc : "全文索引生产",
    path:"/textKnowledge/result",
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
