<!--车牌号查询-->
<script>
import axios from 'axios'
export default ({
    data(){
        return{
            url:'https://v.api.aa1.cn/api/car-number-fl/index.php?num=陕A12345',
            CarId:'',
        }
    },
    method:{
        get(){
            axios.get(this.url,{
            }).then(response=>{
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
})
</script>

<template>
    <p>车牌号查询</p>
    <el-input v-model="CarId" placeholder="输入格式:陕A12345"></el-input>
    <el-button type="success" @click="get()">查询</el-button>
</template>

<style scoped>

</style>