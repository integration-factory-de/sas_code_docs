<template>
  <span class="mk-label variable">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Variable'
}
</script>

<style scoped>

.mk-label.variable {
  font-family: monospace;
  background-color: #BF8C0A;
}

</style>