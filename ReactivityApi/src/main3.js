import {ref,reactive, watchEffect} from "vue";

const state = reactive({a:1,b:2,v:3});
const count = ref(0);

watchEffect(() =>{
    console.log(state.a,count.value);
})

state.a++;
state.b++;
count.value++;
