<template>
  <div id="home">
    <h2>首页</h2>
    <h2>{{a_count}}</h2>
    <button @click="a_count++">+</button>
    <button @click="a_count--">-</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return{
        a_count:0
      }
    }
}
</script>

<style scoped>

</style>