<!--author:steam-404-->
<!--判断百度是否收录-->
<template>
    <p>查询是否被百度收录</p>
    <el-input placeholder="请输入网址" v-model="website" @keydown.enter="Record"></el-input>
    <el-button id="success" type="success" @click="Record">查询</el-button>
    <el-button id="warning" type="warning" @click="clear">清理</el-button>
    <div v-show="show">
        <h4>url:&nbsp;&nbsp;&nbsp;{{website}}</h4>
        {{msg}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "baiduRecord",
    data() {
        return {
            url: 'https://api.uomg.com/api/collect.baidu',
            website: '',
            show: false,
            msg:''
        }
    },
    methods: {
        Record() {
            axios.post(this.url + '?url=' + this.website, {
            }).then(response => {
                this.show=true
                this.msg=response.data.msg
            }).catch(error => {
                console.log(error)
            })
        },
        clear() {
            this.website = ''
        }
    }
}
</script>

<style scoped>
#success {
    float: left;
}

#warning {
    float: right;
}
</style>