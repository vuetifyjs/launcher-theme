<template>
  <v-list-item
    prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
    subtitle="zeroskillz"
    title="John Leider"
  >
    <template #append>
      <v-btn
        icon
        @click="authStore.logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore()
</script>
