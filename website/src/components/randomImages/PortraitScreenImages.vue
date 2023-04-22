<!--author:steam-404-->
<!--随机竖屏照片-->
<template>
    <p>随机竖屏照片</p>
    <el-radio-group v-model="type" size="large">
        <el-radio-button label="美女" @click="woman"/>
        <el-radio-button label="二次元" @click="quadraticElement"/>
        <el-radio-button label="腿控" @click="leg"/>
    </el-radio-group>
    <el-button type="success" @click="get()">让我康康</el-button>
    <br>
    <p>短时间内请求次数过多会被封禁ip</p>
    <hr>
    <img v-bind:src="getPicture" alt="">
</template>

<script>
import axios from 'axios'

export default {
    name: "PortraitScreenImages",
    data() {
        return {
            url: 'https://api.uomg.com/api/rand.img2',
            type: null,
            getPicture: '',
            show:false
        }
    },
    methods: {
        woman() {
            this.type = '美女';
            this.get()
        },
        quadraticElement() {
            this.type = '二次元';
            this.get()
        },
        leg(){
          this.type='腿控'
        },
        get() {
            if (this.type == null) {
                axios.post(this.url + '?format=json', {}).then(response => {
                    this.getPicture = response.data.imgurl
                    this.type=null
                }).catch(error => {
                    console.log(error)
                })
            } else {
                axios.post(this.url + '?sort=' + this.type + '&format=json', {}).then(response => {
                    this.getPicture = response.data.imgurl
                    this.type=null
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style scoped>

</style>