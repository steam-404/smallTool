<script>

</script>
<template>
    <div id="main">
        <el-container>
            <el-aside>
                <router-link to="/"><p>steam-404</p></router-link>
                <router-link to="/QQMessage"><p>QQ信息查询</p></router-link>
                <router-link to="/QQGrade"><p>QQ等级加速</p></router-link>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<style>
#main p{
    color: green;
}
</style>