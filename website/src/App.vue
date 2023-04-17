<script>
export default {
    data() {
        return {
            span: 'auto'
        }
    }
}
</script>
<template>
    <div id="main">
        <el-row :gutter="20">
            <router-link to="/steam_404">steam-404</router-link>
            <router-link to="/linuo">linuo</router-link>
            <br>
            <el-col v-model:span="span">
                <router-link to="/QQMessage">QQ信息查询</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/QQGrade">QQ等级加速</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/QQGame">QQ游戏加速</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/QQDialogue">QQ强制对话</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/QQAddGroup">QQ强制加群</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/visitorMessage">获取访客信息</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/ICP">ICP备案查询</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/websiteTitle">获取网站标题</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/websiteLogo">获取网站logo</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/QrCodeAnalysis">二维码解析</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/QrCodeGenerate">二维码生成</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/baiduRecord">百度收录查询</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/RandomComment">网易云随机热门评论</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/RandomSong">网易云随机歌曲</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/PortraitScreenImages">随机竖屏图像</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/LandscapeScreenImages">随机横屏图像</router-link>
            </el-col>
            <el-col v-model:span="span">
                <router-link to="/RandomHeadImages">随机头像</router-link>
            </el-col>
        </el-row>
        <hr>
        <router-view></router-view>
    </div>
</template>
<style scoped>
#main p {
    color: green;
}
</style>
