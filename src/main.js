import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Antd, {
    message
} from 'ant-design-vue'
//接口地址
import interfaces from './api/interface'
//提示信息
import promptMsg from './utils/promptMsg'
import './assets/styles/table.scss'
//引入ant-design-vue
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.config.productionTip = false
//设置全局信息,主要针对请求响应拦截时,不使用统一弹出错误信息,对message进行销毁
Vue.prototype.$msg = message;
// router.beforeEach((to, from, next) => {

//     //获取用户登录成功后储存的登录标志
//     let getFlag = localStorage.getItem("Flag");

//     //如果登录标志存在且为isLogin，即用户已登录
//     if(getFlag === "isLogin"){

//       //设置vuex登录状态为已登录
//       store.state.isLogin = true
//       next()
//       //如果已登录，还想想进入登录注册界面，则定向回首页
//       if (!to.meta.isLogin) {
//         next({
//           path: '/home'
//         })
//       }
//     //如果登录标志不存在，即未登录
//     }else{
//       //用户想进入需要登录的页面，则定向回登录界面
//       if(to.meta.isLogin){
//         next({
//           path: '/login',
//         })
//       //用户进入无需登录的界面，则跳转继续
//       }else{
//         next()
//       }

//     }

//   });
// let baseUrl = "";
// switch (process.env.VUE_APP_CURENV) {
//     case "development":
//         baseUrl = "http://app-t.xxxxxxxxx80"; //开发
//         break;
//     case "test":
//         baseUrl = "https://app-t.xxxxxxxxx.com"; //测试
//         break;
//     case "production":
//         baseUrl = "https://app-t.xxxxxxxxx.com"; //生产环境url
//         break;
// }
// let http = axios.create({
//     baseURL: baseUrl
// })
//安装axios
// console.log(process.env.NODE_ENV)
Vue.prototype.$http = axios;
Vue.prototype.$interfaces = interfaces;
Vue.prototype.$promptMsg = promptMsg;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')