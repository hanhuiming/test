import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Shouye from "../views/homes/shouye/index.vue"
import Daxue from "../views/homes/daxue/index.vue"
import Xiangfa from "../views/homes/xiangfa/index.vue"
import Xiaoxi from "../views/homes/xiaoxi/index.vue"
import Wode from "../views/homes/wode/index.vue"

import Guanzhu from "../views/homes/shouye/guanzhu/index.vue"
import Hot from "../views/homes/shouye/hot/index.vue"
import Tuijie from "../views/homes/shouye/tuijie/index.vue"
Vue.use(VueRouter)

const routes = [
   
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/homes/index.vue'),
    children:[
      {
         path: '/homes/shouye',
         component:Shouye,
         children:[
           {
              path: '/homes/shouye/guanzhu',
              component:Guanzhu,
           },
           {
            path: '/homes/shouye/hot',
            component:Hot,
           },
           {
            path: '/homes/shouye/tuijie',
            component:Tuijie,
           }
           
         ]
      },
      {
         path: '/homes/daxue',
       
         component: Daxue
      },
      {
         path: '/homes/xiangfa',
       
         component:Xiangfa
      },
      {
         path: '/homes/xiaoxi',
       
         component: Xiaoxi
      },
      {
         path: '/homes/wode',
         
         component:Wode
      }
    ]
  },

  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


