import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/router/permission'

import App from './App.vue'
import router from './router'

import loadSvg from '@/icons'

import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
loadSvg(app)

app.mount('#app')
