//author:steam-404
import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";

import QQMessage from '@/components/QQ/QQMessage.vue'
import QQGrade from '@/components/QQ/QQGrade.vue'
import QQGame from '@/components/QQ/QQGame.vue'
import QQDialogue from "@/components/QQ/QQDialogue.vue";
import QQAddGroup from '@/components/QQ/QQAddGroup.vue'
import visitorMessage from "@/components/visitorMessage.vue";
import ICP from '@/components/ICP.vue'
import websiteTitle from "@/components/website/websiteTitle.vue";
import websiteLogo from "@/components/website/websiteLogo.vue";
import QrCodeAnalysis from "@/components/QrCode/QrCode-analysis.vue";
import QrCodeGenerate from "@/components/QrCode/QrCode-generate.vue";
import baiduRecord from '@/components/baiduRecord.vue'
import RandomComment from '@/components/music163/RandomComment.vue'
import RandomSong from '@/components/music163/RandomSong.vue'

const routes = [
    {path: '/'},
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
    {path: '/RandomSong',component: RandomSong}
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router