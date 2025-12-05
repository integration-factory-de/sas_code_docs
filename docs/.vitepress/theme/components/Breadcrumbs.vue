<template>
  <div class="mk-breadcrumb">
    <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <template v-if="breadcrumb.link">
        <a :href="breadcrumb.link">{{ breadcrumb.title }}</a>
      </template>
      <template v-else>
        <span class="mk-breadcrumb-current">{{ breadcrumb.title }}</span>
      </template>
      <span v-if="index < breadcrumbs.length - 1">></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

.mk-breadcumb {
  margin-bottom: 15px;
}

.mk-breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.mk-breadcrumb a {
  text-decoration: none;
  white-space: nowrap;
  color: #3f83e9;
}

.mk-breadcrumb span {
  margin: 0 0.5em;
  white-space: nowrap;
}

.mk-breadcrumb-current {
  margin: 0 0 !important;
}

.mk-breadcrumb a:hover {
  text-decoration: underline;
}
</style>