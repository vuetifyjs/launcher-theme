<template>
  <v-container class="pt-0">
    <GameGroup
      v-for="(group, i) in groups"
      :key="i"
      :value="group"
    />
  </v-container>
</template>

<script setup lang="ts">
  import { useGamesStore } from '@/stores/games'
  import { storeToRefs } from 'pinia'

  interface Props {
    order?: Array<{
      component: string
      count: number
    }>
  }

  const { parsedGames } = storeToRefs(useGamesStore())
  const props = withDefaults(defineProps<Props>(), {
    order: () => ([
      { component: 'Row1', count: 1 },
      { component: 'Row2', count: 3 },
      { component: 'Row3', count: 3 },
      { component: 'Row2', count: 3 },
      { component: 'Row3', count: 3 },
      { component: 'Row4', count: 4 },
    ]),
  })
  const groups = computed(() => {
    const games = parsedGames.value.slice(3)
    const groups = []

    for (const order of props.order) {
      if (
        groups.length === games.length || !games.length
      ) break

      const group = games.splice(0, order.count)

      groups.push({
        ...order,
        group,
      })
    }
    console.log('groups:', groups)
    return groups
  })

</script>
