<!--author:steam-404-->
<!--qq强制加群-->
<template>
    <div>
        <el-input placeholder="输入群号" v-model="qid" @keyup.enter="go"></el-input>
        <el-button id="join" type="primary" @click="go">加入</el-button>
        <el-button id="clear" type="danger" @click="clear">清空</el-button>
    </div>
</template>

<script>
export default {
    name: "QQAddGroup",
    data() {
        return {
            qid: '',
            url: 'https://api.uomg.com/api/qq.joingroup',
            href:''
        }
    },
    methods:{
        go() {
            this.href += this.url + '?qid=' + this.qid;
            window.open(this.href)
        },
        clear() {
            this.qid = ''
        }
    }
}
</script>

<style scoped>
#join{
    float: left;
}
#clear{
    float: right;
}
</style>