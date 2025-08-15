<template>
  <Row1 v-if="value.component == 'Row1'" :value="value.group" />
  <Row2 v-if="value.component == 'Row2'" :value="value.group" />
  <Row3 v-if="value.component == 'Row3'" :value="value.group" />
  <Row4 v-if="value.component == 'Row4'" :value="value.group" />
</template>

<script setup lang="ts">
  interface Props {
    value: any
  }

  withDefaults(defineProps<Props>(), {
    value: () => ({}),
  })
</script>
