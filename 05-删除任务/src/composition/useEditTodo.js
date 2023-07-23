import {
    ref,computed
} from "vue"
export default function useEditTodo(todosRef) {
    const editingTodoRef = ref(null); //当前正在修改哪一个todo
    let originTitle = null; //缓存编辑之前的title值,用于取消编辑

    // 鼠标左键双击
    const editTodo = (todo) => {
        originTitle = todo.title;
        editingTodoRef.value = todo;;
    }
    // 完成编辑
    const doneEdit = (todo) => {
        editingTodoRef.value = null;
        // 如果保存时内容为空则删除
        const title = todo.title && todo.title.trim();
       if(title){
        todo.title = title;
       }else {
        // 删除
        const index = todosRef.value.indexOf(todo);
        console.log(index,'index');
        if(index >= 0) {
            todosRef.value.splice(index,1);
            console.log()
        }
       }
    }
    // 取消编辑
    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    }
    // 全部完成：已完成及为true页面的下拉箭头为深色
    const allDoneRef = computed(() => {
        const val = todosRef.value.filter((it) => !it.completed).length === 0;
        return val;
    })
    // 全选完成或全选未完成.参数checked为true或者false
    function setAllChecked(checked) {
        todosRef.value.forEach((todo) => {
            todo.completed = checked;
        })
    }

    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef,
        setAllChecked
    }
}
