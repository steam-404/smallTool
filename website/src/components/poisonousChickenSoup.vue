<!--author:steam-404-->
<!--毒鸡汤-->
<template>
    <p>每日一份毒鸡汤，清醒你的人生</p>
    <p>{{note}}</p>
    <div id="icon" @click="sb">
        <el-icon><Refresh /></el-icon>
    </div>
</template>

<script>
import axios from 'axios'
import {Refresh} from "@element-plus/icons-vue";
export default {
    name: "poisonousChickenSoup",
    components: {Refresh},
    data(){
        return{
            url:'https://v.api.aa1.cn/api/api-wenan-dujitang/index.php?aa1=json',
            note:'',
            idNote:''
        }
    },
    mounted() {
        this.sb()
    },
    methods:{
        sb(){
            axios.get(this.url,{

            }).then(response=>{
                this.note=response.data[0].dujitang
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
#icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 20vh;
    text-align: center;
    background-color: #67c23a;
}
</style>