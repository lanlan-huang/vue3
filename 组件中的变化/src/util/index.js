// defineAsyncComponent:异步组件
import {
    defineAsyncComponent,
    h
} from "vue";
import Loading from "../components/Loading.vue"
import Error from "../components/Error.vue"

// nprogress组件使用
import "nprogress/nprogress.css";
import NProgress from 'nprogress';
NProgress.configure({
    trickleSpeed:50,
    showSpinner:false
})


export function delay(duration) {
    if (!duration) {
        duration = random(1000, 5000);
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}


export function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// 得到一个异步加载页面
export function getAsyncPage(path) {
    return defineAsyncComponent({
        loader: async () => {
            NProgress.start(); //开始进度条
            //用于实现本地的异步加载效果
            await delay();
            /* @vite-ignore */
            const comp =  import(path);
            NProgress.done(); //进度条完成
            return comp;
        },
        loadingComponent: Loading, //当Promise时在pending状态时使用
    });
}

// 得到一个异步加载组件
export function getAsyncComponent(path) {
    return defineAsyncComponent({
        loader: async () => {
            //用于实现本地的异步加载效果
            await delay();
            if (Math.random() < 0.5) {
                throw new TypeError();
            }
            /* @vite-ignore */
            return import(path);
        },
        loadingComponent: Loading, //组件还未加载时调用
        errorComponent: { //组件报错时使用
            render() {
                return h(Error, '出错了！！！')
            }
        },

    })
}