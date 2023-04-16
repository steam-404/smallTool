<!--author:steam-404-->
<!--获取访问者信息-->
<template>
  <el-button type="primary" @click="userMessage">点我获取信息</el-button>
  <div v-show="show">
      <h4>ip:&nbsp;&nbsp;&nbsp;{{ipAddress}}</h4>
      <h4>系统:&nbsp;&nbsp;&nbsp;{{system}}</h4>
      <h4>浏览器:&nbsp;&nbsp;&nbsp;{{brower}}</h4>
      <h4>事件:&nbsp;&nbsp;&nbsp;{{time}}</h4>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "visitorMessage",
    data(){
        return{
            show:false,
            url:'https://api.uomg.com/api/visitor.info?skey=steam-404',
            ipAddress:'',
            system:'',
            brower:'',
            time:''
        }
    },
    methods:{
        userMessage(){
            this.show=true
            axios.post(this.url,{},{
            }).then(response=>{
                console.log(response)
                this.ipAddress=response.data.ip
                this.system=response.data.system
                this.brower=response.data.browser
                this.time=response.data.time
            }).catch(error=>{

            })
        }
    }
}
</script>

<style scoped>

</style>