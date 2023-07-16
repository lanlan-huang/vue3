<template>
    <h1>count:{{ countRef }}</h1>
    <p>
        <button @click="handleDecrease">count: {{ countRef }}</button>
        <button @click="handleIncrease">count: {{ countRef }}</button>
    </p>
</template>
  
<script>
// ref用于创建一个响应式数据
import { ref } from "vue";
// 5. 使用组合式api代码不会零散、杂乱
function useCount() {
    let countRef = ref(0);
    const handleIncrease = () => {
        countRef.value++;
    };
    const handleDecrease = () => {
        countRef.value--;
    }
    return {
        countRef,
        handleIncrease,
        handleDecrease
    }
}

export default {
    setup() {
        return {
            ...useCount(), // 解构赋值
        }

    }
}
</script>
  
<style></style>

