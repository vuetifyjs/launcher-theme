<template>
  <v-navigation-drawer
    :model-value="computedDrawer"
    color="grey-darken-4"
    width="200"
    floating
  >
    <v-list color="transparent">
      <v-list-item
        class="mb-4"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        title="Vuetify"
      />

      <template v-for="(item, _i) in items" :key="`tile-${_i}`">
        <v-list-item
          v-if="!item.spacer"
          :title="item.text"
          :to="item.to"
          :value="item.value"
          color="grey"
          exact
          @click="item.click"
        >
          <template #prepend>
            <v-icon :icon="item.icon" />
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
  import { useAppStore } from '@/stores/app'
  import { useDownloadsStore } from '@/stores/downloads'
  import { storeToRefs } from 'pinia'
  import { useDisplay } from 'vuetify'

  const { setDrawer } = useAppStore()
  const { drawer } = storeToRefs(useAppStore())
  const downloadStore = useDownloadsStore()
  const { smAndDown } = useDisplay()

  const computedDrawer = computed({
    get: () => {
      return drawer.value
    },
    set: val => {
      return setDrawer(val)
    },
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
