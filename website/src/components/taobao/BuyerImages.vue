<!--author:steam-404-->
<!--淘宝买家秀图片-->
<template>
    <div id="body">
        <p>淘宝买家秀图片</p>
        <el-button @click="startUrl1">开始获取(胖次猫)</el-button>
        <el-button @click="stopUrl1">清理(胖次猫)</el-button>
        <br>
        <el-button @click="startUrl2">开始获取(七了个三)</el-button>
        <el-button @click="stopUrl2">清理(七了个三)</el-button>
        <div id="content">
            <img v-bind:src="image1_1" alt="loading...">
            <img v-bind:src="image1_2" alt="loading...">
            <img v-bind:src="image1_3" alt="loading...">
            <img v-bind:src="image2_1" alt="loading...">
            <img v-bind:src="image2_2" alt="loading...">
            <img v-bind:src="image2_3" alt="loading...">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "BuyerImages",
    data() {
        return {
            url1: 'https://api.uomg.com/api/rand.img3?sort=胖次猫&format=json',
            url2: 'https://api.uomg.com/api/rand.img3?sort=七了个三&format=json',
            timer: false,
            image1_1: '',
            image1_2: '',
            image1_3: '',
            image2_1: '',
            image2_2: '',
            image2_3: '',
        }
    },
    methods: {
        startUrl1() {
            axios.post(this.url1, {}).then(response => {
                this.image1_1 += response.data.imgurl
            }).catch(error => {
            })
            axios.post(this.url1, {}).then(response => {
                this.image1_2 += response.data.imgurl
            }).catch(error => {
            })
            axios.post(this.url1, {}).then(response => {
                this.image1_3 += response.data.imgurl
            }).catch(error => {
            })
        },
        stopUrl1() {
            this.image1_1=null
            this.image1_2=null
            this.image1_3=null
        },
        startUrl2() {
            axios.post(this.url2, {}).then(response => {
                this.image2_1 += response.data.imgurl
            }).catch(error => {
            })
            axios.post(this.url2, {}).then(response => {
                this.image2_2 += response.data.imgurl
            }).catch(error => {
            })
            axios.post(this.url2, {}).then(response => {
                this.image2_3 += response.data.imgurl
            }).catch(error => {
            })
        },
        stopUrl2() {
            this.image2_1=null
            this.image2_2=null
            this.image2_3=null
        }
    }
}
</script>

<style scoped>
img {
    width: 50vh;
    height: 50vh;
}
</style>