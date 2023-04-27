import {createApp} from 'vue'
import App from './App.vue'

// Element-UI
import element from 'element-plus'
import 'element-plus/dist/index.css'

//router路由
import router from '@/router/index'

//element图标
import *as ElementPlusIconsVue from '@element-plus/icons-vue'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
const app = createApp(App)
app.use(element)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ArcoVue)
app.mount('#app')
