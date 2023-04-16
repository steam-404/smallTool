<!--author:steam-404-->
<!--ICP备案查询-->
<template>
    <el-input v-model="Domain" placeholder="Please input" @keydown.enter="query">
        <template #prepend>https://</template>
    </el-input>
    <el-button type="success" @click="query">查询</el-button>
    <div v-show="message">
        <h4>域名:&nbsp;&nbsp;&nbsp;{{Domain}}</h4>
        <h4>icp信息:&nbsp;&nbsp;&nbsp;{{icp}}</h4>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ICP",
    data(){
        return{
            url:'https://api.uomg.com/api/icp',
            Domain:'',
            icp:'',
            message:false
        }
    },
    methods:{
        query(){
            axios.post(this.url+'?domain='+this.Domain,{

            }).then(response=>{
                this.message=true
                this.icp=response.data.icp
            }).catch(error=>{

            })

        }
    }
}
</script>

<style scoped>

</style>