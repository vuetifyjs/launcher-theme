<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <Game
        :value="left"
        tall
        prominent
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-row>
        <v-col cols="12">
          <Game :value="rightTop" />
        </v-col>
        <v-col cols="12">
          <Game :value="rightBottom" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
 interface Props {
    value: Array<any>
  }
  
  const props = withDefaults(defineProps<Props>(), {
    value: () => ([])
  })

  const left = computed(() => {
    return props.value[0]
  })
  const rightBottom = computed(() => {
    return props.value[2]
  })
  const rightTop = computed(() => {
    return props.value[1]
  })
</script>
