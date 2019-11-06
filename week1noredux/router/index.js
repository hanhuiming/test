import Vue from 'vue'
import VueRouter from 'vue-router'

import Mainst from "../views/mainst.vue"
import Detail from "../views/detail.vue"


import Mains from "../views/mains/home.vue"
import Edu from "../views/mains/edu.vue"
import Idea from "../views/mains/idea.vue"
import Message from "../views/mains/message.vue"
import My from "../views/mains/my.vue"


import Type from '../views/mains/home/type.vue'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect: '/main/home/attention'
    },
    {
      path: '/detail/:id?',
      component:Detail
    },
  {
    path: '/mainst',
    component: Mainst,
    children:[
      {
        path:"/mains/home",
        component:Mains,
        children:[
           {
             path: '/main/home/:type?',
             component: Type
           },
        ]
      },
        {
        path:"/mains/edu",
        component:Edu
      },
        {
        path:"/mains/idea",
        component:Idea
      },
        {
        path:"/mains/message",
        component:Message
      },
      {
        path:"/mains/my",
        component:My
      }
    ]
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
