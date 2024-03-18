<template>
  <v-card elevation="6" color="grey-darken-3">
    <v-card-title>
      <div>
        <h2
          class="text-h6 font-weight-regular py-4"
          v-text="value.title"
        />

        <v-row
          align="center"
          class="text-grey-lighten-1 mx-0 pb-6"
        >
          <v-avatar
            class="mr-2"
            color="grey-darken-1"
            size="22"
          >
            <v-icon
              size="15"
              color="grey-lighten-1"
              @click="() => {}"
            >
              mdi-pencil
            </v-icon>
          </v-avatar>

          <span
            class="v-card--article__author"
            v-text="value.author"
          />

          &nbsp;•&nbsp;

          <span v-text="value.ago" />
        </v-row>
      </div>
    </v-card-title>

    <RouterLink :to="`/article/${value.slug}`">
      <v-img
        :src="getImgUrl(`../../assets/${value.img}`)"
        height="400"
        cover
      />
    </RouterLink>
  </v-card>
</template>

<script setup lang="ts">
  interface Props {
    value: any
  }
  withDefaults(defineProps<Props>(), {
    value: () => ({})
  })

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href;
</script>
