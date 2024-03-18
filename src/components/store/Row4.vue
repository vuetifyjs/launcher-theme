<template>
  <v-row>
    <v-col
      v-for="(game, i) in value"
      :key="i"
      cols="12"
      md="6"
    >
      <Game :value="game" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  interface Props {
    value: Array<any>
  }
  
  withDefaults(defineProps<Props>(), {
    value: () => ([])
  })
</script>