// 使用具名导出createApp
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1.不存在构造函数Vue。
// 把根组件传给createApp并且挂载
// const app = createApp(App);
// 2. 通过实例对象使用插件
// app.use(xxx)
// app.mount("#app");


createApp(App).mount('#app');