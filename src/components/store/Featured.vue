<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(feature, i) in featured"
        :key="i"
        cols="12"
        md="4"
      >
        <Game
          :value="feature"
          dense
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useGamesStore } from '@/stores/games'
  import { storeToRefs } from 'pinia'

  const { featured } = storeToRefs(useGamesStore())
</script>
