<template>
  <v-navigation-drawer
    :model-value="model"
    color="grey-darken-3"
    v-if="drawer"
    :style="styles"
    disable-resize-watcher
    position="fixed"
    touchless
    width="400"
  >
    <template v-if="model">
      <v-row
        align="center"
        class="pa-6 mx-0"
      >
        Queue
        <v-spacer />

        <v-btn
          class="ma-0"
          variant="plain"
          icon
          @click="setDrawer(false)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>

      <v-divider class="mx-3" />

      <v-list v-if="downloads.length" class="pa-6 mx-0">
        <v-list-item
          v-for="(download, i) in downloads"
          :key="i"
          :title="download?.name"
          subtitle="Downloading"
          :prepend-avatar="getImgUrl(`../../assets/games/astras/avatar.png`)"
        >
          <v-list-item-action>
            <v-progress-circular
              indeterminate
              width="2"
              size="48"
            >
              <span>27%</span>
            </v-progress-circular>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <div
        v-else
        class="pa-6"
      >
        There is nothing here
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

  import { useDisplay } from "vuetify";
  import { useDownloadsStore } from "@/stores/downloads";
  import { useGamesStore } from "@/stores/games";
  import { storeToRefs } from 'pinia';

  const { lgAndUp } = useDisplay();
  const { setDrawer } = useDownloadsStore();
  const { downloading, drawer } = storeToRefs(useDownloadsStore());
  const { parsedGames } = storeToRefs(useGamesStore());
  const downloads = computed(() => {
    return downloading.value.map((download) => {
      return parsedGames.value.find(game => game.id === download.id)
    })
  })
  const model = computed({
    get:() => {
      return drawer.value
    },
    set:(value: boolean) => {
      setDrawer(value)
    }
  })
  const styles = computed(() => {
    const styles: { left: number | string } = { left: '200px' }

    if(!lgAndUp) styles.left = 0 
    return styles
  })

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href;
</script>
