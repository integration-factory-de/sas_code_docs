<template>
  <span class="mk-label instance-property">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Property'
}
</script>

<style scoped>

.mk-label.instance-property {
  font-family: monospace;
  background-color: #137CBD;
}

</style>