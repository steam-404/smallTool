import {createApp} from 'vue'
import App from './App.vue'



// Element-UI
import element from 'element-plus'
import 'element-plus/dist/index.css'

//router路由
import router from '@/router/index'

const app = createApp(App)
app.use(element)
app.use(router)
app.mount('#app')
