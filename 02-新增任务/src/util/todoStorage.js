const LOCAL_KEY = 'todomvc';
/**
 * 生成一个随机id 时间戳+四位随机数
 */
export function generateId() {
    return Date.now() + Math.random().toString(16).slice(2,4);
}
/**
 * 获取所有的任务
 */
export function fetch() {
    const resultArr = localStorage.getItem(LOCAL_KEY);
    if (resultArr) {
        // 通过 JSON.parse() 方法将 resultArr 变量中的数据解析为 JavaScript 对象或数组。这是因为本地存储中的数据通常以字符串的形式保存，而在使用之前需要将其转换为 JavaScript 对象或数组。
        return JSON.parse(resultArr);
    }
    // 否则
    return [];
}

/**
 * 保存任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}