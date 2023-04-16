<!--author:steam-404-->
<!--qq强制对话-->
<template>
    <p>强制对话,兼容TIM</p>
    <div id="search">
        <el-input placeholder="QQ账号" v-model="QQ"></el-input>
        <el-button id="search" type="primary" @click="go">走你</el-button>
        <el-button id="clear" type="danger" @click="clear">清空</el-button>
    </div>
    <h4>无法跳转时请尝试更新或清理后台</h4>
</template>

<script>
export default {
    name: "QQDialogue",
    data() {
        return {
            url: 'https://api.uomg.com/api/qq.talk',
            QQ: '',
            href: '',
        }
    },
    methods: {
        go() {
            this.href += this.url + '?qq=' + this.QQ;
            window.open(this.href)
        },
        clear() {
            this.QQ = ''
        }
    },
}
</script>

<style scoped>
#search {
    float: left;
}

#clear {
    float: right;
}

a {
    color: green;
}
</style>