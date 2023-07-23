import {createRouter,createWebHistory} from "vue-router"
import routes from "./routes"; //存放路由的文件

// 创建路由
export default createRouter({
    history:createWebHistory(), //相同于vue2的 mode:'history'
    routes,
})