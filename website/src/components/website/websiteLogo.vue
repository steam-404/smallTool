<!--author:steam-404-->
<!--获取网站favicon.ico-->
<template>
    <el-input placeholder="请输入url" v-model="website" @keydown.enter="foundIcon"></el-input>
    <el-button type="success" @click="foundIcon">查询</el-button>
    <div id="response" v-show="show">
        <img v-bind:src="picture" alt="">
    </div>
</template>

<script>
export default {
    name: "websiteLogo",
    data() {
        return {
            url: 'https://api.uomg.com/api/get.favicon?url=',
            show: false,
            picture: '',
            website: ''
        }
    },
    methods: {
        foundIcon() {
            this.picture = this.url += this.website;
            this.show=true
        }
    }
}
</script>

<style scoped>

</style>