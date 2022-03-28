<template>
  <div class="btn">
    <slot></slot> 
    <!-- slot是组件标签内容的出口组件 -->
  </div>
</template>

<script>
export default {
    name:"MyButton"
}
</script>

<style scoped>
.btn{
  background: red;
}
</style>