<template>
  <p>
    <button @click="countRef++">count: {{ countRef }}</button>
    <button @click="handleIncrease">count: {{ countRef }}</button>
  </p>
</template>

<script>
// ref用于创建一个响应式数据
import { ref } from "vue";


export default {
  setup() {
    // 1. console.log('在所有的声明周期钩子函数之前调用')
    //2.  console.log(this); setup函数里面的this为undefined
    let countRef = ref(0); //会返回一个响应式的数字

    // 3. 在setup中，count时一个对象
    //    实际代理中count是一个count.value
    const handleIncrease = () => {
      countRef.value++;
    }
    // 新增

    // 修改

    // 删除

    // 4. 需要将使用到的东西return给模板和其它的组件
    return {
      countRef,
      handleIncrease,
    }

  }
}
</script>

<style></style>