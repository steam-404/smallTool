<!--author:steam-404-->
<!--QQ信息查询-->
<script>
import axios from "axios";
import {ElMessage} from "element-plus";

export default {
    data() {
        return {
            Account: '',
            url: 'https://api.uomg.com/api/qq.info',
            qqAccount: '',
            headPicture: '',
            Lvzuan: '',
            userName: '',
            show: false
        }
    },
    methods: {
        SearchMessage() {
            this.show = true
            axios.post(this.url + '?qq=' + this.Account, {}).then(response => {
                //qq号
                this.qqAccount = response.data.qq
                //头像
                this.headPicture = response.data.qlogo
                //绿钻信息
                this.Lvzuan = response.data.lvzuan
                //昵称
                this.userName = response.data.name
                //错误信息
                if (response.data.msg != null) {
                    ElMessage({type: 'warning', message: response.data.msg})
                }
                console.log(response)
            }).catch(error => {
                console.log(error)

            })
        },
        clear() {
            this.Account = ''
        }
    },
    watch: {
        Account() {
            // this.SearchMessage()
        }
    }
}
</script>
<template>
    <div id="search">
        <el-input placeholder="请输入QQ号" v-model="Account"></el-input>
        <el-button id="search" type="primary" @click="SearchMessage">搜索</el-button>
        <el-button id="clear" type="danger" @click="clear">清空</el-button>
    </div>
    <div id="response" v-show="show">
        <!--        需要渲染的数据-->
        <img v-bind:src="headPicture" alt="图片加载中...">
        <h4>QQ:&nbsp;&nbsp;&nbsp;{{ qqAccount }}</h4>
        <h4>昵称:&nbsp;&nbsp;&nbsp;{{ userName }}</h4>
        <h4>绿钻等级:{{ Lvzuan.level }}</h4>
    </div>
</template>
<style>
#search #search {
    float: left;
}

#search #clear {
    float: right;
}

#response {
    margin-top: 10vh;
}
</style>