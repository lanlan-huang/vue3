import { getAsyncPage } from "../util"
// 异步加载页面
const Home = getAsyncPage("../views/Home.vue");
const About = getAsyncPage("../views/About.vue");
export default [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]