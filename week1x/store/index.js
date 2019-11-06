import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import createLogger from "vue/dist/logger"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    info:{}
  },
  mutations: {
    updateList(state,list){
      state.list=list
    }
  },
  actions: {
    async getList({state,commit},{type,page}){
      let data=await axios.get(`/api/list?type=${type}&page=${page}&pageSize=10`)
      if(page==1){
        commit("updateList",data.data)
      }else{
        if(data.data.length===0){
          alert("拉到底了")
        }
        commit("updateList",[...state.list,...data.data])
      }
    },
    async getDetail(){
    
    }
  },
  
  modules: {
  },
  plugins:[createLogger()]
})
