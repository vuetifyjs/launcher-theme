<template>
  <v-btn
    color="secondary"
    location="bottom right"
    position="fixed"
    size="large"
    style="z-index: 9; margin: 10px;"
    icon
    @click="toggleDrawer()"
  >
    <v-icon>mdi-account-multiple</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
  import { useFriendsStore } from '@/stores/friends'

  const { toggleDrawer } = useFriendsStore()

</script>
