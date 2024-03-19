<template>
  <v-row>
    <v-col>
      <Game
        :value="game"
        prominent
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  interface Props {
    value: Array<any>
  }

  const props = withDefaults(defineProps<Props>(), {
    value: () => ([]),
  })

  const game = computed(() => {
    return props.value[0]
  })
</script>
