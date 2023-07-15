<template>
  <p>
    <button @click="handleIncrease">count: {{ count }}</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods:{
    handleIncrease(){
      console.log(this);
      this.count++;
    }
  }
}
</script>

<style></style>