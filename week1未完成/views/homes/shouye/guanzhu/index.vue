<template>

    <div class="first">
        
         <div v-for="item in list" :key="item.id" class="box" v-on:click="geter(item)"> 
             <p>{{item.name}}</p>
             <p>{{item.detail}}</p>
             <p>{{item.pinlun}}</p>
             <p>{{item.zanton}}</p>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import "../../../../mock/mock"
export default {
    name:"guanzhu",
    data() {
        return {
           list:[]
        }
    },
    methods: {
       geter(item){
            this.$router.push({path:"/detail",query:{item:item}})
            console.log(item)
       }    
   },
    created(){
        axios.get("/api/list").then((res)=>{
            this.list=res.data
        })
    }
   
}
</script>
<style scoped lang="scss">
    .box{
        width: 100%;
        height: 80px;
        margin-top: 10px;
        border-bottom: 1px solid #000;
    }
</style>