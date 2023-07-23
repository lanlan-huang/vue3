<template>
  <div id="app">
    <CheckEditor v-model="checked" v-model:text.trim="title" />
  </div>
</template>

<script>
import CheckEditor from './components/CheckEditor.vue';
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
  data() {
    return {
      checked: true,
      title: 'xiaomi',
    }
  }
}
</script>

<style></style>