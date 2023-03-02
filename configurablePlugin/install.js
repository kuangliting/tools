import getParsedConfig from "./default";
export let _Vue

export function install (Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true
  _Vue = Vue

//   const isDef = v => v !== undefined
//   const registerInstance = (vm, callVal) => {
//     let i = vm.$options._parentVnode
//     if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
//       i(vm, callVal)
//     }
//   }

const config = getParsedConfig();
const {modules,pages,elements}=config;
//console.log(config)
Object.defineProperty(Vue.prototype, '$$modules', {
    get () { return {...modules} }
  })
Object.defineProperty(Vue.prototype, '$$pages', {
    get () { return {...pages} }
  })

//console.log(Vue.prototype)
Vue.directive("contain", {
    bind: function(el,binding,vm){
        const $route = vm.$route||vm.context.$route;
        const path= $route.path;
        const support=elements[path][binding.value];
        console.log("binding====",binding)
        console.log(binding.value+" ====",support)
        if(support===false){//必须使用===false验证
            el.style.display="none";
            // el.style.position='absolute';
            // el.style.zIndex=-1;
        }
        console.dir(el,binding)
        // //el.style;
        // if(binding.value){
        //     //el.style.display="none"
        // }else{

        // }
    },
})


  //Vue.mixin({
    // beforeCreate () {
    //   if (isDef(this.$options.router)) {
    //     this._routerRoot = this
    //     this._router = this.$options.router
    //     this._router.init(this)
    //     Vue.util.defineReactive(this, '_route', this._router.history.current)
    //   } else {
    //     this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
    //   }
    //   registerInstance(this, this)
    // },
    // destroyed () {
    //   registerInstance(this)
    // }
  //})

//   Object.defineProperty(Vue.prototype, '$router', {
//     get () { return this._routerRoot._router }
//   })

//   Object.defineProperty(Vue.prototype, '$route', {
//     get () { return this._routerRoot._route }
//   })

  //const strats = Vue.config.optionMergeStrategies
  //use the same hook merging strategy for route hooks
  //strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
