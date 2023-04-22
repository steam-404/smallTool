//author:steam-404
import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";

import steam_404 from '@/components/author/steam-404.vue'
// 作者信息:steam-404
import linuo from '@/components/author/linuo.vue'
// 作者信息:linuo
import QQMessage from '@/components/QQ/QQMessage.vue'
// QQ用户信息查询
import QQGrade from '@/components/QQ/QQGrade.vue'
// QQ等级查询
import QQGame from '@/components/QQ/QQGame.vue'
// QQ游戏加速
import QQDialogue from "@/components/QQ/QQDialogue.vue";
// QQ强制对话
import QQAddGroup from '@/components/QQ/QQAddGroup.vue'
// QQ添加群聊
import visitorMessage from "@/components/visitorMessage.vue";
// 访问者信息
import ICP from '@/components/ICP.vue'
// ICP备案查询
import websiteTitle from "@/components/website/websiteTitle.vue";
// 网站标题查询
import websiteLogo from "@/components/website/websiteLogo.vue";
// 网站logo查询
import QrCodeAnalysis from "@/components/QrCode/QrCode-analysis.vue";
// 二维码解析
import QrCodeGenerate from "@/components/QrCode/QrCode-generate.vue";
// 二维码生成
import baiduRecord from '@/components/baiduRecord.vue'
// 百度收录查询
import RandomComment from '@/components/music163/RandomComment.vue'
// 网易云热门评论
import RandomSong from '@/components/music163/RandomSong.vue'
// 网易云随机歌曲
import PortraitScreenImages from '@/components/randomImages/PortraitScreenImages.vue'
// 随机竖屏照片
import LandscapeScreenImages from '@/components/randomImages/LandscapeScreenImages.vue'
// 随机横屏照片
import RandomHeadImages from '@/components/randomImages/RandomHeadImages.vue'
// 随机头像
import BuyerImages from '@/components/taobao/BuyerImages.vue'
// 淘宝买家秀图片
import baiduSearchImages from '@/components/images/baiduSearchImages.vue'
// 百度搜图

const routes = [
    {path: '/steam_404',component: steam_404},
    {path: '/linuo',component: linuo},
    {path: '/QQMessage', component:QQMessage},
    {path: '/QQGrade', component: QQGrade},
    {path: '/QQGame', component: QQGame},
    {path: '/QQDialogue', component: QQDialogue},
    {path: '/QQAddGroup', component: QQAddGroup},
    {path: '/visitorMessage', component: visitorMessage},
    {path: '/ICP', component: ICP},
    {path: '/websiteTitle', component: websiteTitle},
    {path: '/websiteLogo', component: websiteLogo},
    {path: '/QrCodeAnalysis',component: QrCodeAnalysis},
    {path: '/QrCodeGenerate',component: QrCodeGenerate},
    {path: '/baiduRecord',component: baiduRecord},
    {path: '/RandomComment',component: RandomComment},
    {path: '/RandomSong',component: RandomSong},
    {path: '/PortraitScreenImages',component: PortraitScreenImages},
    {path: '/LandscapeScreenImages',component: LandscapeScreenImages},
    {path: '/RandomHeadImages',component: RandomHeadImages},
    {path: '/BuyerImages',component: BuyerImages},
    {path: '/baiduSearchImages',component: baiduSearchImages}
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router