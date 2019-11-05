<template>
  <div id="app">
    <div id="router">
      <!-- <router-link to="/home">Home</router-link> |
      <router-link to="/detail">detail</router-link> -->
      <!-- <router-link to="/homes/shouye">首页</router-link>
      <router-link to="/homes/xiangfa">想法</router-link>
      <router-link to="/homes/daxue">大学</router-link>
      <router-link to="/homes/xiaoxi">消息</router-link>
      <router-link to="/homes/wode">我的</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
  } 
}
</style>
