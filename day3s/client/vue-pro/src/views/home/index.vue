<template>
    <div>
        <input type="text" v-model="val"/> <button>搜索</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            val:"",
            navdata:[
                {
                    title:"全部",
                    type:"all"
                },
                {
                    title:"云进货商",
                    type:"all"
                },
                 {
                    title:"全部",
                    type:"all"
                },
                 {
                    title:"全部",
                    type:"all"
                },
            ]
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

</style>