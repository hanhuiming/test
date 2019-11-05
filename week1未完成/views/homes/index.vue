<template>
  <div class="footer">
     <div id="navs">
      <router-link to="/homes/shouye">首页</router-link>
      <router-link to="/homes/xiangfa">想法</router-link>
      <router-link to="/homes/daxue">大学</router-link>
      <router-link to="/homes/xiaoxi">消息</router-link>
      <router-link to="/homes/wode">我的</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
 
}
</script>

<style scoped lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
  #app{
      width: 100%;
      height: 100%;
      #nav{
        width: 100%;
        height: 100%;
      }
  }
}
  .footer{
       width: 100%;
       height: 100%;
       position: relative;
  }
    #navs{
      width: 100%;
      height: 40px;
      text-align: center;
      position: absolute;
      left: 0;
      bottom:0;
      line-height: 40px;
      display: flex;
      a{
        flex: 1;
        text-decoration: none;
        color: #000;
      }
      .router-link-active{
        background: skyblue
      }
    }

</style>
