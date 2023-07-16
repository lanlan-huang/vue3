import { ref} from "vue";
import {generateId} from "../util/todoStorage";
export default function useNewTodo(todosRef) {
    const newTodoRef = ref(""); //新增任务的标题
    // 新增一个任务
    const addTodo = () => {
        // 新增一个任务
        const value = newTodoRef.value && newTodoRef.value.trim();
        console.log(value,'1111');
        if (!value) {
            return;
        }
        // 生成一个任务，并将其加入到任务列表中
        const todo = {
            id: generateId(),
            title: value,
            completed: false, //任务是否完成
        }
        todosRef.value.push(todo);
        newTodoRef.value ="";
    }
    return {
        newTodoRef,
        addTodo,
    }
}