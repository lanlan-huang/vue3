// 生命周期函数在vue3不再是配置式的，而是一个普通函数
import {
    computed,
    onMounted,
    onUnmounted,
    ref
} from "vue";
import {
    filter
} from "../util/todoStorage";

const validHash = ['all', 'active', 'completed']
export default function useFilter(todosRef) {
    const visibilityRef = ref("all") // 筛选条件

    // 根据哈希值取得筛选条件
    const onHashChange = () => {
        // 通过调用 replace(/#\/?/, "")，我们使用正则表达式将 # 或 #/ 替换为空字符串，从而得到去除 # 或 #/ 的结果。
        const hash = location.hash.replace(/#\/?/, "");
        if (validHash.includes(hash)) {
            // 存在的
            visibilityRef.value = hash;
        } else {
            location.hash = '';
            visibilityRef.value = 'all';
        }
    }

    // 1. 组件挂载完成的生命周期函数
    onMounted(() => {
        // hashchange: 此方法是用于监听hash的变化
        return window.addEventListener('hashchange', onHashChange);
    });
    // 2. 组件销毁过后的生命周期函数
    onUnmounted(() => {
        window.removeEventListener("hashchange", onHashChange);
    });

    // 根据筛选条件去筛选列表任务，进而计算出应该展示的任务列表
    const filteredTodosRef = computed(() => {
        return filter(todosRef.value, visibilityRef.value);
    })

    // 计算出未完成的数量：用于页面左下角的待完成的数量
    const remainingRef = computed(() => {
        return filter(todosRef.value, 'active').length;
    })

    // 计算已完成的数量：用于页面判断是否展示右下角的 Clear completed按钮
    const completedRef = computed(() => {
        return filter(todosRef.value, 'completed').length;
    })

    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }
}