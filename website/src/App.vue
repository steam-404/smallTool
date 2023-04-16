<script>

</script>
<template>
    <div id="main">
        <el-container>
            <el-aside>
                <router-link to="/"><p>steam-404</p></router-link>
                <router-link to="/QQMessage"><p>QQ信息查询</p></router-link>
                <router-link to="/QQGrade"><p>QQ等级加速</p></router-link>
                <router-link to="/QQGame"><p>QQ游戏加速</p></router-link>
                <router-link to="/QQDialogue"><p>QQ强制对话</p></router-link>
                <router-link to="/QQAddGroup"><p>QQ强制加群</p></router-link>
                <router-link to="/visitorMessage"><p>获取访客信息</p></router-link>
                <router-link to="/ICP"><p>ICP备案查询</p></router-link>
                <router-link to="/websiteTitle"><p>获取网站标题</p></router-link>
                <router-link to="/websiteLogo"><p>获取网站logo</p></router-link>
                <router-link to="/QrCodeAnalysis"><p>二维码解析</p></router-link>
                <router-link to="/QrCodeGenerate"><p>二维码生成</p></router-link>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<style>
#main p {
    color: green;
}
</style>
