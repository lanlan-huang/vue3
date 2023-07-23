<template>
    <div class="check-editor">
        <div class="check-editor-inner">
            <div class="checkbox" :class="{ checked: modelValue }" @click="handleChecked"></div>
            <input type="text" class="editor" :value="text" @input="handleTextChange" />
        </div>
    </div>
</template> 
<script>

export default {
    props: {
        modelValue: Boolean,
        text: String,
        textModifers: {
            default: () => ({}),
        }
    },
    setup(props, ctx) {
        //  setup 函数接收两个参数：props 和 context。
        // props 参数用于接收组件的属性，
        // 而 context 参数提供了一些与组件实例相关的上下文信息，如 attrs、slots、emit 等。
        const handleChecked = () => {
            // 触发事件
            console.log(!props.modelValue);
            ctx.emit("update:modelValue", !props.modelValue);
        };
        const handleTextChange = (e) => {
            console.log(props,'props');
            let value = e.target.value;
            // 处理父组件的trim修饰符
            if(props.textModifers && props.textModifers.trim){
                value = value.trim();
            }
            ctx.emit("update:text", value);
        }
        return {
            handleChecked,
            handleTextChange
        }
    },
}
</script>
 
<style>
.check-editor {
    cursor: pointer;
}

.check-editor-inner {
    display: flex;
    align-items: center;
}

.checkbox {
    width: 15px;
    height: 15px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    border-radius: 3px;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox:hover,
.checkbox.checked {
    border-color: #409eff;
}

.checkbox.checked::after {
    content: "";
    border-radius: 2px;
    width: 9px;
    height: 9px;
    background: #409eff;
}

.editor {
    border: none;
    outline: none;
    margin-left: 5px;
    border-bottom: 1px solid #dcdfe6;
    font-size: inherit;
}
</style>
  