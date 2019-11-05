<template>
    <div class="header">
        <div id="therr-router">
            <router-link to="/homes/shouye/guanzhu">关注</router-link>
            <router-link to="/homes/shouye/hot">热门</router-link>
            <router-link to="/homes/shouye/tuijie">推介</router-link>
            </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    #therr-router{
        width: 100%;
        height: 40px;
        display: flex;
        text-align: center;
        line-height: 40px;
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