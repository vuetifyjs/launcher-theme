<template>
  <v-app-bar
    v-if="mdAndDown"
    :order="0"
    color="transparent"
    flat
  >
    <v-app-bar-nav-icon @click="toggleDrawer()" />
  </v-app-bar>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { useAppStore } from '@/stores/app'

  const { mdAndDown } = useDisplay()
  const { toggleDrawer } = useAppStore()

</script>
