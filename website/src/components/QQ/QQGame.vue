<!--author:steam-404-->
<!--QQ游戏加速-->
<template>
    <p>手Q游戏一键加速0.2天活跃度</p>
    <div id="search">
        <el-input placeholder="QQ账号" v-model="QQ"></el-input>
        <el-input placeholder="sKey" v-model="sKey"></el-input>
        <el-input placeholder="pt4_token" v-model="pt4_token"></el-input>
        <el-button id="search" type="primary" @click="SearchQQGrade">乐迪,加速~~~</el-button>
        <el-button id="clear" type="danger" @click="clear">清空</el-button>
    </div>
</template>

<script>
import axios from 'axios'
import {ElMessage} from "element-plus";

export default {
    name: "QQGrade",
    data() {
        return {
            url: 'https://api.uomg.com/api/qq.game',
            QQ: '',
            sKey: '',
            pt4_token: ''
        }
    },
    methods: {
        SearchQQGrade() {
            this.url += '?qq=' + this.QQ + '&skey=' + this.sKey + '&pt4_token=' + this.pt4_token
            axios.post(this.url, {})
                .then(response => {
                    ElMessage({type: 'success', msg: response.data.msg})
                }).catch(error => {
                ElMessage({type: 'warning', msg: '修改失败'})
            })
        },
        clear() {
            this.uin = ''
            this.superKey = ''
            this.superToken = ''
        }
    }
}
</script>

<style scoped>
#search {
    float: left;
}

#clear {
    float: right;
}
</style>