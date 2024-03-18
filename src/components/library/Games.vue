<template>
  <v-container>
    <v-row>
      <v-col
        v-for="game in games"
        :key="game.id"
        cols="12"
        sm="6"
        md="4"
      >
        <Game
          :value="game"
          :understate="!game.installed"
          dense
          static
          showAction
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useLibraryStore } from '@/stores/library'
  import { storeToRefs } from 'pinia'

  const { games } = storeToRefs(useLibraryStore());
</script>

<style scoped>
.v-sheet {
  cursor: pointer;
}
</style>
