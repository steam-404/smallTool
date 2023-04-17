<!--author:steam-404-->
<template>
  <p>随机头像</p>
    <el-button type="success" @click="getMan()">获取(男)</el-button>
    <el-button type="success" @click="getMen()">获取(女)</el-button>
    <el-button type="success" @click="getAnimationMan()">获取动漫(男)</el-button>
    <el-button type="success" @click="getAnimationMen()">获取动漫(女)</el-button>
    <img v-bind:src="images" alt="">
</template>

<script>
import axios from 'axios'
export default {
    name: "RandomHeadImages",
    data(){
        return{
            urlMan:'https://api.uomg.com/api/rand.avatar?sort=男&format=json',
            urlMen:'https://api.uomg.com/api/rand.avatar?sort=女&format=json',
            urlAnimationMan:'https://api.uomg.com/api/rand.avatar?sort=动漫男&format=json',
            urlAnimationMen:'https://api.uomg.com/api/rand.avatar?sort=动漫女&format=json',
            images:''
        }
    },
    methods:{
        getMan(){
            axios.post(this.urlMan,{
            }).then(response=>{
                this.images=response.data.imgurl
            }).catch(error=>{
                console.log(error)
            })
        },
        getMen(){
            axios.post(this.urlMen,{
            }).then(response=>{
                this.images=response.data.imgurl
            }).catch(error=>{
                console.log(error)
            })
        },
        getAnimationMan(){
            axios.post(this.urlAnimationMan,{
            }).then(response=>{
                this.images=response.data.imgurl
            }).catch(error=>{
                console.log(error)
            })
        },
        getAnimationMen(){
            axios.post(this.urlAnimationMen,{
            }).then(response=>{
                this.images=response.data.imgurl
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>