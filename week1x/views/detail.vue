<template>
  <div class="about">
      <h1>{{info.title}}</h1>
     
      <img :src="info.banner" alt="">
      <div class="description">{{info.description}}</div>
       <p class="time">{{info.time}}</p>
      <p class="old">{{`${info.favor}赞同，${info.comment}评论`}}</p>
  </div>
</template>
<script>
import axios from "axios"
export default {
   data(){
     return {
       info:{}
     }
   },
   async created(){
     let id=this.$route.params.id
     let data=await axios.get(`/api/detail?id=${id}`)
     this.info=data.data
     console.log(this.info)
   }
}
</script>
<style lang="scss" scope>
    .about{
      width: 100%;
      height: 100%;
      h1{
        width: 100%;
        height: 40px;
        font-size: 20px;
        text-align: center;
      }
      img{
        width: 100%;
        height: 200px;
      }
      .description{
        font-size: 14px;
      }
      .time{
        font-size: 10px;
        margin-top: 10px;
        color: #ccc;
      }
      .old{
        font-size: 20px;
      }
    }
</style>