<template>
  <span class="mk-label violet-prop">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'VioletProp'
}
</script>

<style scoped>

.mk-label.violet-prop {
  font-family: monospace;
  background-color: #634DBF;
}

</style>