<template>
  <div class="tab-bar-item" @click="isclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    link: String
  },
  data() {
    return{
      isActive:false
    }
  },
  methods: {
    isclick(){
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>

</style>