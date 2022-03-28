//插件
// let myplugin = {
//     install(Vue) {
//         //把插件都挂载Vue的原型上
//         Vue.prototype.cuiplugin = function() {
//             //业务
//             console.log("yangtongtong");
//         }
//     }

// import Vue from "vue"

// }
// let myplugin = function() {
//     Vue.prototype.cuifn = function() {
//         console.log("====");
//     }
// }
//防抖插件
let myplugin = function(Vue) {
    Vue.prototype.debouncefn = function(fn, wait) {
        let timer = null
        return function() { //被封装后的心的业务函数
            clearTimeout(timer)
            timer = setTimeout(function() {
                fn() //fn 是业务函数
            }, wait)
        }
    }
}
export default myplugin