<template>
  <v-container>
    <v-row>
      <v-col
        v-for="game in games"
        :key="game.id"
        cols="12"
        md="4"
        sm="6"
      >
        <Game
          :understate="!game.installed"
          :value="game"
          dense
          show-action
          static
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useLibraryStore } from '@/stores/library'
  import { storeToRefs } from 'pinia'

  const { games } = storeToRefs(useLibraryStore())
</script>

<style scoped>
.v-sheet {
  cursor: pointer;
}
</style>
