<!--author:steam-404-->
<!--百度搜图-->
<template>
    <p>百度搜图</p>
    <div>
        <el-input v-model="content" placeholder="请输入你想要的图片" @keydown.enter></el-input>
        <el-button @click="search" type="success">搜素</el-button>

        <img v-for="list in ImagesList" v-bind:src="list.hoverUrl" alt="">
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "baiduSearchImages",
    data(){
        return{
            url:'https://zj.v.api.aa1.cn/api/so-baidu-img/?msg=',
            content:'',
            ImagesList:''
        }
    },
    methods:{
        search(){
            axios.get(this.url+=this.content+'&page=1',{
            }).then(response=>{
                console.log(response)
                this.ImagesList=response.data.data
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>