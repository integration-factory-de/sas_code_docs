<template>
  <span class="mk-label context-prop">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'ContextProp'
}
</script>

<style scoped>

.mk-label.context-prop {
  font-family: monospace;
  background-color: #0F9960;
}

</style>