<template>
  <div class="mk-footer">
    © 2025 Dataciders GmbH. All Rights Reserved.
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style>

.mk-footer {
  margin-top: 15px;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-optical-sizing: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  text-size-adjust: 100%;
  color: rgba(60, 60, 67, 0.78);
}

.dark .mk-footer {
  color: rgba(235, 235, 245, 0.6);
}

</style>