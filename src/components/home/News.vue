<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list-subheader class="px-0">
          News
        </v-list-subheader>
      </v-col>
      <v-col
        v-for="article in articles"
        :key="article.slug"
        cols="12"
      >
        <ArticleCard :value="article" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useHomeStore } from '@/stores/home';

  const { articles } = useHomeStore();
</script>
