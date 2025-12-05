<template>
  <span class="mk-label danger">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Danger'
}
</script>

<style scoped>

.mk-label.danger {
  background-color: #DB3737;
}

</style>