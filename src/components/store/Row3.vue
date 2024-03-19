<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-row>
        <v-col cols="12">
          <game :value="leftTop" />
        </v-col>
        <v-col cols="12">
          <game :value="leftBottom" />
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <game
        :value="right"
        prominent
        tall
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

  const right = computed(() => {
    return props.value[2]
  })
  const leftBottom = computed(() => {
    return props.value[1]
  })
  const leftTop = computed(() => {
    return props.value[0]
  })
</script>
