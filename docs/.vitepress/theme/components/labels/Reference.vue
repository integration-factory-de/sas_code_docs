<template>
  <span class="mk-label reference">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Reference'
}
</script>

<style scoped>

.mk-label.reference {
  font-family: monospace;
  background-color: #8F398F;
}

</style>