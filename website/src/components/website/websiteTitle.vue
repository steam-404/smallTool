<!--author:steam-404-->
<!--获取网站标题-->
<template>
  <el-input placeholder="请输入url" v-model="website" @keydown.enter="foundTitle"></el-input>
    <el-button type="success" @click="foundTitle">查询</el-button>
  <div id="response" v-show="show">
      <h4>标题:&nbsp;&nbsp;&nbsp;{{websiteTitle}}</h4>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "websiteTitle",
    data(){
        return{
            url:'https://api.uomg.com/api/get.title',
            website:'',
            websiteTitle:'',
            show:false
        }
    },
    methods:{
        foundTitle(){
            axios.post(this.url+'?url='+this.website,{

            }).then(response=>{
                this.show=true
                this.websiteTitle=response.data.msg
            }).catch(error=>{

            })
        }
    }
}
</script>

<style scoped>

</style>