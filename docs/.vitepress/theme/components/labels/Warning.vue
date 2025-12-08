<template>
  <span class="mk-label warning">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Warning'
}
</script>

<style scoped>

.mk-label.warning {
  background-color: #D9822B;
}

</style>