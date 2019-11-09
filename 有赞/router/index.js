import Vue from 'vue'
import VueRouter from 'vue-router'
// import Nprogress from 'nprogress';
// import 'nprogress/nprogress.css';
import Home from '../views/home/index.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Post from '../views/post.vue'


import Timeline from '../views/home/timeline'
import My from '../views/home/my'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/home/timeline"
  },
  {
    path: '/login',
    component:Login
  },
   {
    path: '/post',
    component:Post
  },
   {
    path: '/register',
    component:Register
  },
  {
    path: '/favor',
    component:null
  },
  {
    path: '/modify',
    component:null
  },
  {
    path: '/info',
    component:null
  },
  {
    path: '/home',
    component:Home,
    children:[
      {
        path:"/home/timeline",
        component:Timeline
      },
      {
        path:"/home/my",
        component:My
      }
    ]
  },
  {
    path:"/comment",
    component:null,
    children:[
      {
        path:"/comment/receive",
        component:null
      },
      {
        path:"/comment/send",
        component:null
      }
    ]
  }
  
]



// 添加导航守卫
// const whiteList = ['/login', '/register']
// router.beforeEach((to, from, next)=>{
//   Nprogress.start();
//   let isLogin = window.sessionStorage.getItem('isLogin');

//   if (!isLogin){
//     if (whiteList.indexOf(to.path) === -1){
//       Nprogress.done();
//       next('/login');
//     }else{
//       next();
//     }
//   }else{
//     next();
//   }
// })

// router.afterEach((to, from)=>{
//   Nprogress.done();
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
