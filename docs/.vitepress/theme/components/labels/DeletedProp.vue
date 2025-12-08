<template>
  <span class="mk-label deleted-prop">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'DeletedProp'
}
</script>

<style scoped>

.mk-label.deleted-prop {
  font-family: monospace;
  background-color: #DB3737;
}

</style>