<template>
  <h2>vue3可以写多个根节点</h2>
  <div id="app">
    <div class="container">
      <div class="list">
        <strong>编辑：</strong>
        <div class="list">
          <CheckEditor v-for="item in producets" v-model="item.sell" v-model:text.trim="item.title" />
        </div>
      </div>
      <div class="list">
        <strong>销售中：</strong>
        <!-- 当使用`<template>`进行`v-for`循环时，需要把`key`值放到`<template>`中，而不是它的子元素中 -->
        <template v-for="(item, index) in sellingRef" :key="item.id">
          <div>
            <span>{{ index }}.</span>
            <strong>{{ item.title }}</strong>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CheckEditor from './components/CheckEditor.vue';
import { ref,computed } from "vue"
const defaultSells = [
  {
    id: '1',
    sell: true,
    title: 'iphone12'
  },
  { id: '2', sell: false, title: "xiaomi" },
  { id: '3', sell: false, title: "huawei" },
  { id: '4', sell: false, title: "hongmi" },
]
export default {
  components: {
    CheckEditor
  },
  setup() {
    const producetsRef = ref(defaultSells);
    const sellingRef = computed(() => producetsRef.value.filter((it) => it.sell))
    return {
      producets: producetsRef,
      sellingRef,
    }

  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;
}

.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}

strong {
  margin-right: 1em;
}
</style>