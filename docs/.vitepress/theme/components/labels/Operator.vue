<template>
  <span class="mk-label operator">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Operator'
}
</script>

<style scoped>

.mk-label.operator {
  font-family: monospace;
  background-color: #00B3A4;
}

</style>