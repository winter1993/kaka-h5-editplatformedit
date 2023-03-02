import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { plugin, defaultConfig } from '@formkit/vue'
import { zh } from '@formkit/i18n'
//显示的设置域名，来与iframe交互获取页面
document.domain = 'localhost'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
app.use(plugin, defaultConfig({theme: 'genesis',locales:{zh},locale: 'zh',}))
app.mount('#app')
