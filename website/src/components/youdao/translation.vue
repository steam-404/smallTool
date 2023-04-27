<!--author:steam-404-->
<!--文本翻译-->
<template>
  <p>文本翻译</p>
  <el-input placeholder="请输入文本" v-model="text"></el-input>
    <el-select>领域
        <el-option value="general">默认</el-option>
        <el-option value="">计算机</el-option>
        <el-option value="general">医学</el-option>
        <el-option value="general">金融经济</el-option>
    </el-select>
  <el-button type="success">翻译</el-button>
  <el-input v-model="translationText"></el-input>
</template>

<script>
import axios from 'axios'
export default {
    name: "translation",
    data(){
        return{
            url:'https://openapi.youdao.com/api',
            text:'',
            translationText:'',
            field:''
        }
    },
    methods:{
        translation(){
            axios.post(

            ).then(response=>{
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>