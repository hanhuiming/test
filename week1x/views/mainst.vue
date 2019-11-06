<template>
  <div class="wrap">
     <div> <router-view></router-view></div>
    
     <footer>
        <router-link tag="span" to="/mains/home">首页</router-link>
        <router-link tag="span" to="/mains/idea">想法</router-link>
        <router-link tag="span" to="/mains/edu">大学</router-link>
        <router-link tag="span" to="/mains/message">消息</router-link>
        <router-link tag="span" to="/mains/my">我的</router-link>
     </footer>
  </div>
</template>

<script>

export default {
  name: 'main',
 
}
</script>


<style lang="scss" scoped>
.wrap{
    height: 100%;
    display: flex;
    flex-direction: column;
    &>div{
        flex: 1;
        overflow: auto;
    }
}
footer{
    height: 1rem;
    font-size: .4rem;
    border-top: 1px solid #666;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
        height: 100%;
        width: 20%;
        text-align: center;
        line-height: 1rem;
    }
    span.router-link-active{
        color: palevioletred;
    }
}
</style>
