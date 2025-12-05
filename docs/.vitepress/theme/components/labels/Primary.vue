<template>
  <span class="mk-label primary">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Primary'
}
</script>

<style scoped>

.mk-label.primary {
  background-color: #137CBD;
}

</style>