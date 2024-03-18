<template>
  <v-sheet
    :color="'secondary'"
    class="transition-swing"
    height="64"
    tile
  >
    <v-row
      align="center"
      justify="center"
      class="fill-height flex-nowrap"
    >
      <v-col
        cols="auto"
        class="pa-0 text-center text-overline"
      >
        Verifying {{ status }}%
      </v-col>

      <v-col
        cols="6"
        class="px-3"
      >
        <v-progress-linear
          :model-value="status"
        />
      </v-col>

      <v-icon @click="resetVerify">
        mdi-close
      </v-icon>

      <v-divider
        class="mx-2"
        inset
        vertical
      />

      <v-icon
        v-if="!paused"
        @click="pauseVerify"
      >
        mdi-pause
      </v-icon>
      <v-icon
        v-else
        @click="startVerify"
      >
        mdi-play
      </v-icon>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
  import { useVerifyStore } from '@/stores/verify'
  import { storeToRefs } from 'pinia';

  const { paused, status } = storeToRefs(useVerifyStore());
  const { setCancelled, reset } = useVerifyStore()

  interface Props {
    value: Object
  }

  withDefaults(defineProps<Props>(), {
    value: () => ({})
  })

  // const resolve = ref(undefined)

  const pauseVerify = async () => {
    // const pause = new Promise((resolve) => {
    //   resolve.value = resolve
    // })

    // setPaused(pause)
  }
  const resetVerify = () => {
    setCancelled(true)
    
    setTimeout(reset, 300)
  }
  const startVerify = () => {
    // resolve.value && resolve()
    // setPaused(false)
  }
</script>
