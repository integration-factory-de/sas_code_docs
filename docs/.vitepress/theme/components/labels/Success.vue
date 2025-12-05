<template>
  <span class="mk-label success">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Success'
}
</script>

<style scoped>

.mk-label.success {
  background-color: #0F9960;
}

</style>