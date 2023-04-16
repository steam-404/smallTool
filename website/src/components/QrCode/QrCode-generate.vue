<!--author:steam-404-->
<!--二维码生成-->
<template>
    <p>二维码生成</p>
    <el-input v-model="website" placeholder="请输入内容" @keydown.enter="generate">
    </el-input>
    <div id="show" v-show="show">
        <el-image v-bind:src="TwoDimensionalCode"></el-image>
    </div>
    <br>
    <el-button id="generate" type="success" @click="generate">生成</el-button>
</template>

<script>
export default {
    name: "QrCode-generate",
    data() {
        return {
            show: false,
            url: 'https://api.uomg.com/api/qrcode',
            website: '',
            TwoDimensionalCode: ''
        }
    },
    methods:{
        generate(){
            this.show=true
            this.TwoDimensionalCode=this.url+='?url='+this.website
            console.log(this.TwoDimensionalCode)
        }
    }
}
</script>

<style scoped>
el-button{
    margin: 3vh;
    text-align: center;
    width: auto;
    height: 20vh;
}
</style>