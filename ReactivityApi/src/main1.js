import { readonly, reactive } from "vue"
function useUser() {
    // 在这里补全函数
    const objUser = reactive({});
    const user = readonly(objUser);
    const setUserName = (name) => {
        objUser.name = name;
    }
    const setUserAge = (age) => {
        objUser.age = age;
    }
    return {
        user, // 这是一个只读的用户对象，响应式数据，默认为一个空对象
        setUserName, // 这是一个函数，传入用户姓名，用于修改用户的名称
        setUserAge, // 这是一个函数，传入用户年龄，用户修改用户的年龄
    }
}
const { user, setUserAge, setUserName } = useUser();
console.log(user);
setUserAge(10);
setUserName('aa');
console.log(user);