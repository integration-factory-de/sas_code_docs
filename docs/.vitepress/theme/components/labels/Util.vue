<template>
  <span class="mk-label util">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Util'
}
</script>

<style scoped>

.mk-label.util {
  font-family: monospace;
  background-color: #5C7080;
}

</style>