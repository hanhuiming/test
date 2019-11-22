import React,{Component} from "react"


import Home from "../components/home/index"
import Fenlei from "../components/fen/index"
import Detail from "../components/detail/index"
import Vip from "../components/vip/index"
import Gwc from "../components/gouwuche/index"
import My from "../components/wode/index"

export default{
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/fenlei",
            component:Fenlei
        },
        {
            path:"/detail",
            component:Detail
        },
        {
            path:"/vip",
            component:Vip
        },
        {
            path:"/gouwuche",
            component:Gwc
        },
        {
            path:"/my",
            component:My
        }
    ]
}