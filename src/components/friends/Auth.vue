<template>
  <div class="py-2 ">
    <LoggedIn v-if="authStore.loggedIn" />
    <LoggedOut v-else />
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore()
</script>
