<template>
    <div class="wrap" ref="wrap">
        <div>
            <ul v-for="(item) in list" :key="item.id">
                <div class="item">
                <p>
                    <span>{{item.title}}</span>
                    <span>{{item.description}}</span>
                </p>
                <img :src="item.banner" alt="">
                </div>
                <p>{{`${item.favor}赞同，${item.comment}评论`}}</p>
            </ul>
        </div> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            page: 1,
            pageSize: 10,
            type:"",
            list: []
        }
    },
   watch:{
        $route: function(){
            this.type = this.$route.params['type'];
            this.getData();
        }
    },
    methods: {
        
        async getData(){
           
            let data = await axios.get(`/api/list?type=${this.type}&page=${this.page}&pageSize=10`)
            if (this.page == 1){
                this.list = data.data;
            }else{
                if (data.data.length === 0){
                    alert('拉到底了');
                    // console.log("1122")
                }
                this.list = [...this.list, ...data.data];
            }
        }
    },
    mounted(){
        this.type = this.$route.params['type'];
        this.getData();
        // 添加滚动事件
        let ele = this.$refs.wrap;
        ele.onscroll = async (e)=>{
                console.log(e)
            if (this.isFetching){
                return;
            }
            
            let height = ele.offsetHeight,
                scrollTop = ele.scrollTop,
                childHeight = ele.children[0].offsetHeight;            

            if (height+scrollTop > childHeight-20){
                this.isFetching = true;
                this.page++;
                await this.getData();
                this.isFetching = false;
            }   
        }
    }
    
    //  async created(){
    //     let data = await axios.get(`/api/list?type=${this.$route.params['type']}&page=${this.page}&pageSize=10`)
    //     console.log('router...', data);
    //     this.list = data.data;
    // }
}
</script>
<style scoped lang="scss">
.wrap{
    background: #f4f4f4;
    overflow: auto;
}
ul{
    background: #fff;
    margin-top: .3rem;
    padding: 0 .4rem;
    font-size: .35rem;
}
.item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:nth-child(1){
        font-size: .42rem;
        padding-bottom: .2rem
    }
    span:nth-child(2){
        color: #666;
        overflow: hidden;
        text-overflow:ellipsis;//文本溢出显示省略号
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    img{
        width: 2rem;
    }
}
</style>