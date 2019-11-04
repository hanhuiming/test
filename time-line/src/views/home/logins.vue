<template>
    <div class="warps">
        <div class="header">圈子登录</div>
        <div class="main">
            <form action="">
                <input type="text" placeholder="用户名"/><br>
                <input type="password" placeholder="密码登录"/><br>
                <button >登录</button>
                <a href="#">没有账号，快速注册</a>
            </form>
        </div>
        <div class="footer">
            <div class="therr_login">没有账号第三方登录</div>
            <div class="therr">
                <p><i class="iconfont iconwangluo"></i></p>
                <p><i class="iconfont iconwangluo"></i></p>
                <p><i class="iconfont iconwangluo"></i></p>
            </div>
           
        </div>
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
    .warps{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: .40rem;
         .header{
            width: 100%;
            height: 50px;
            background: #CCCCCC 100%;
            text-align: center;
            line-height: 50px;
            
        }
        .main{
            flex: 1;
            input{
                width: 95%;
                height: 0.9rem;
                margin: 15px 7px;
                outline: none;
                border: 0;
                border-radius: 5px;
                background: rgba(242, 242, 242, 1);
                text-indent: 0.5rem;
            }
            button{
                left:0.63rem;
                top:14.06rem;
                width: 100%;
                height: 1rem;
                line-height: 1.44px;
                background: rgba(247,105,104,1);
                color: rgba(255,255,255,1);
                font-size: 20px;
                text-align: center;
                font-family: Arial;
                outline: none;
            }
            a{
                color: #000;
                font-size: 10px;
                margin-top: 60px;
            }
        }
        .footer{
            width: 100%;
            height: 100px;
            font-size: .30rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            .therr_login{
                flex: 1;
            }
            .therr{
                flex: 1;
                display: flex;
                 p{
                    flex: 1;
                }
            }
           
        }
    }
   
</style>