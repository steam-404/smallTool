<!--author:steam-404-->
<!--QQ等级查询-->
<template>
    <p>等级一键加速0.4天活跃度(运动,游戏)</p>
    <div id="search">
        <el-input placeholder="uin账号" v-model="uin"></el-input>
        <el-input placeholder="superKey" v-model="superKey"></el-input>
        <el-input placeholder="superToken" v-model="superToken"></el-input>
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
            url: 'https://api.uomg.com/api/qq.level',
            uin: '',
            superKey: '',
            superToken: ''
        }
    },
    methods: {
        SearchQQGrade() {
            this.url += '?uid=' + this.uin + '&superkey=' + this.superKey + '&supertoken=' + this.superToken
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