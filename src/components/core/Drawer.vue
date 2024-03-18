<template>
  <v-navigation-drawer
    :model-value="computedDrawer"
    color="grey-darken-4"
    floating
    width="200"
  >
    <v-list color="transparent">
      <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
          title="Vuetify"
          class="mb-4"
        >
      </v-list-item>

      <template v-for="(item, _i) in items" :key="`tile-${_i}`">
        <v-list-item
          v-if="!item.spacer"
          :to="item.to"
          :value="item.value"
          color="grey"
          exact
          @click="item.click"          
          :title="item.text"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>

        <div
          v-else
          class="my-auto"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app';
  import { useDownloadsStore } from '@/stores/downloads';
  import { storeToRefs } from 'pinia';
  import { useDisplay } from 'vuetify';

  const { setDrawer } = useAppStore();
  const { drawer } = storeToRefs(useAppStore());
  const downloadStore = useDownloadsStore();
  const { smAndDown } = useDisplay();

  const computedDrawer = computed ({
    get:() => {
      return drawer.value
    },
    set:(val) => {
      return setDrawer(val)
    }
  })
  const items = computed(() => {
    return [
      {
        icon: 'mdi-home-variant',
        text: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-fire',
        text: 'Store',
        to: '/store',
      },
      {
        icon: 'mdi-view-grid',
        text: 'Library',
        to: '/library',
      },
      { spacer: true },
      {
        icon: 'mdi-download',
        text: 'Downloads',
        value: drawer,
        click: () => {
          smAndDown && downloadStore.setDrawer(false)
          downloadStore.toggleDrawer()
        },
      },
      {
        icon: 'mdi-cog',
        text: 'Settings',
        to: '/settings',
      },
    ]
  })
</script>
