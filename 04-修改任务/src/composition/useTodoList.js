// watchEffect 函数用于创建一个响应式的副作用函数。它的作用是在其依赖的响应式数据发生变化时自动运行副作用函数。
import { ref,watchEffect } from "vue";
import * as todoStorage from "../util/todoStorage.js"
export default function useTodoList() {
    const todosRef = ref(todoStorage.fetch());
    window.todosRef = todosRef; //用于测试
    watchEffect(() => {
        todoStorage.save(todosRef.value); //当其依赖的响应式数据todoRef.value发生变化的就会执行save。
    })
    return{
        todosRef
    }
}