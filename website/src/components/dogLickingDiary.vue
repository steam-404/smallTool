<!--author:steam-404-->
<!--舔狗日记-->
<template>
    <p>舔狗日记</p>
    <div>
        <p id="note"></p>
    </div>
    <div id="icon" @click="sb">
        <el-icon><Refresh /></el-icon>
    </div>
</template>

<script>
import axios from 'axios'
import {Refresh} from "@element-plus/icons-vue";

export default {
    name: "dogLickingDiary",
    components: {Refresh},
    data(){
        return{
            url:'https://v.api.aa1.cn/api/tiangou/index.php',
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
                this.note=response.data
                this.idNote=document.getElementById('note')
                this.idNote.innerHTML=response.data
                console.log(response.data)
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
p{
    color: #d817ff;
}
</style>