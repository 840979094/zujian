// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

Vue.config.productionTip = false

//使用路由中间件
Vue.use(Router)

import Index from './components/Index'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Admin from './components/admin/Admin'

//二级路由
import User from './components/admin/User'
import Category from './components/admin/Category'
import Content from './components/admin/Content'

//三级路由
import Html from './components/admin/Html'
import VuE from './components/admin/VuE'
import Js from './components/admin/Js'

//定义路由集合   切换到指定路由  显示指定组件
const routes = [          
  {path:'/',name:'indexLink',components:{
    default:Index,
    user:User,
    content:Content,
  }
  //路由独享守卫
  // beforeEnter: (to, from, next) => {
  //   console.log(to.path)
  // }
  },
  {path:'/admin',component:Admin,name:'adminLink',children:[
    {path:'/admin/user',component:User,name:'userLink'},
    {path:'/admin/category',component:Category,name:'categoryLink',children:[
      {path:'/html',component:Html,name:'htmlLink'},
      {path:'/vue',component:VuE,name:'vueLink'},
      {path:'/js',component:Js,name:'jsLink'},
    ],redirect:'/html'},
    {path:'/admin/content',component:Content,name:'contentLink'}
  ],redirect:'/admin/user'},
  {path:'/menu',component:Menu,name:'menuLink'},
  {path:'/about',component:About,name:'aboutLink'},
  {path:'/login',component:Login,name:'loginLink'},
  {path:'/register',component:Register,name:'registerLink'}, 
  {path:'*',redirect:'/login'},
  
]

//配置路由管理
const router = new Router({
  routes,
  mode:'history'
})

console.log(router);

//全局前置路由守卫     
// router.beforeEach(function(to,from,next){
//   //to   路由起点
//   //from 路由终点
//   if(to.path==='/login'||to.path==='/register'){
//     next();
//   }else{
//     alert('你还没有登录，请先登录');
//     next('/login');
//   }
//   console.log('before')
// })

//全局后置路由守卫
// router.afterEach(function(to,from){
//   //console.log('after');
//   alert('已经查询完routes数组');
// })


//使用路由中间件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>',
})
