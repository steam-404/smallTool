//author:steam-404
import {createRouter} from "vue-router";
import {createWebHashHistory} from "vue-router";

import QQMessage from '@/components/QQ/QQMessage.vue'
import QQGrade from '@/components/QQ/QQGrade.vue'

const routes = [
    {
        path: '/'
    },
    {
        path: '/QQMessage',
        component:QQMessage
    },
    {
        path: '/QQGrade',
        component: QQGrade
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router