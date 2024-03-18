<template>
  <v-hover v-model="hover">
    <v-card
      class="v-card--game"
      elevation="6"
    >
      <RouterLink :to="`/store/games/${value.id}`">
        <v-img
          v-bind="$attrs"
          :height="height"
          :src="getImgUrl(`../assets/${value.bg}`)"
          style="border-radius: inherit;"
          cover
        >
          <v-row
            :style="styles"
            align="center"
            class="fill-height ma-0 transition-swing"
            justify="center"
          >
            <v-img
              :src="getImgUrl(`../assets/${value.logo}`)"
              :cover="false"
              max-width="180"
              style="z-index: -1;"
            />
          </v-row>
        </v-img>
      </RouterLink>
      <div v-if="showAction" >
        <InstallAction :value="value" v-if="!value.installed" />
        <VerifyAction :value="value" v-else-if="verifying === value.id" />
        <LaunchAction :value="value" v-else />
      </div>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
  import { useVerifyStore } from '@/stores/verify';
  import { storeToRefs } from 'pinia';

  interface Props {
    dense?: boolean
    prominent?: boolean
    showAction?: boolean
    static?: boolean
    tall?: boolean
    understate?: boolean
    value: any
  }
  
  const { verifying } = storeToRefs(useVerifyStore());
  const props = withDefaults(defineProps<Props>(), {
    dense: false,
    prominent: false,
    showAction: false,
    static: false,
    tall: false,
    understate: false,
    value: () => ({})
  })

  const hover = ref(false)
  const height = computed(() => {
    if (props.tall) return 524
    if (props.dense) return 150
    if (props.prominent) return 600
    return 250
  })
  const styles = computed(() => {
    let backgroundColor

    if (props.understate) {
      backgroundColor = 'rgba(117, 117, 117, .72)'
    } else if (!props.static && hover.value) {
      backgroundColor = 'rgba(255, 255, 255, .16)'
    }

    return {
      backgroundColor,
    }
  })

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href;
</script>
