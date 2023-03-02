
import faq from "./faq";
import graph from "./graph";
import text from "./text";
import { ScopeType,ValueType,DefaultValue} from "../enum";

export default {
    value: DefaultValue[ScopeType.MODULE],
    scope: ScopeType.MODULE,
    desc : "知识管理",
    children : {
       faq,
       graph,
       text,
   }
};
