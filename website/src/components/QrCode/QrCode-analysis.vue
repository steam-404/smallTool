<!--author:steam-404-->
<!--二维码解析-->
<template>
  <p>二维码解析</p>
    <h4>输入二维码</h4>
  <el-input type="file" v-model="file"></el-input>
  <el-button @click="analysis">解析</el-button>
</template>

<script>
import axios from 'axios'
export default {
    name: "QrCode-analysis",
    data(){
        return{
            file:'',
            url:'https://api.uomg.com/api/qr.encode',
        }
    },
    methods:{
        analysis(){
            axios.post(this.url+"?url="+this.file,{

            }).then(response=>{
                console.log(response.data.msg)
            }).catch(error=>{

            })
        }
    }
}
</script>

<style scoped>

</style>