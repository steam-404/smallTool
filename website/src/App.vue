<script>
import vant from "@/components/Vanta/vanta.vue";
import {defineComponent} from 'vue'

export default defineComponent({
    components: {
        vant
    },
    data() {
        return {}
    },
    methods: {
        switchBackground() {
            //     切换背景
        }
    }
})
</script>
<template>
    <vant></vant>
    <div id="main" @click="switchBackground">
        <el-row>
            <!--            <router-link to="/steam_404">steam-404</router-link>-->
            <!--            <router-link to="/linuo">linuo</router-link>-->
            <br>
            <router-link to="/QQMessage">QQ信息查询</router-link>
            <router-link to="/QQGrade">QQ等级加速</router-link>
            <router-link to="/QQGame">QQ游戏加速</router-link>
            <router-link to="/QQDialogue">QQ强制对话</router-link>
            <router-link to="/QQAddGroup">QQ强制加群</router-link>
            <router-link to="/visitorMessage">获取访客信息</router-link>
            <router-link to="/ICP">ICP备案查询</router-link>
            <router-link to="/websiteTitle">获取网站标题</router-link>
            <router-link to="/websiteLogo">获取网站logo</router-link>
            <router-link to="/QrCodeAnalysis">二维码解析</router-link>
            <router-link to="/QrCodeGenerate">二维码生成</router-link>
            <router-link to="/baiduRecord">百度收录查询</router-link>
            <router-link to="/RandomComment">网易云随机热门评论</router-link>
            <router-link to="/RandomSong">网易云随机歌曲</router-link>
            <router-link to="/PortraitScreenImages">随机竖屏图像</router-link>
            <router-link to="/LandscapeScreenImages">随机横屏图像</router-link>
            <router-link to="/RandomHeadImages">随机头像</router-link>
            <router-link to="/BuyerImages">淘宝买家随机图片</router-link>
            <router-link to="/baiduSearchImages">百度搜图</router-link>
            <router-link to="/translation">文本翻译</router-link>
            <router-link to="/dogLickingDiary">舔狗日记</router-link>
            <router-link to="/poisonousChickenSoup">毒鸡汤</router-link>
            <router-link to="/phoneNumberValuation">手机号码估值</router-link>
            <router-link to="/QQNumberValuation">QQ号码估值</router-link>
            <router-link to="/CarId">车牌号查询</router-link>
        </el-row>
    </div>

    <router-view></router-view>
</template>
<style scoped>
#main {
    display: flex;
    justify-content: space-around;
    align-content: space-around;
}

html, body {
    width: 100%;
    height: 100%;
}

a {
    color: blue;
    cursor: pointer;
    padding-left: 1vh;
    padding-right: 1vh;
}

a:link {
    color: #06F;
    text-decoration: none;
}

a:visited {
    color: #999;
    text-decoration: line-through;
}

a:hover {
    color: #F0F;
    text-decoration: underline;
}

a:active {
    color: #F0F;
}
</style>