import { defineStore } from 'pinia'
import { useGamesStore } from './games'

interface State {
  installed: number[];
  gamesId: number[];
}

export const useLibraryStore = defineStore('library', {
  state: (): State => ({
    installed: [2, 9],
    gamesId: [2, 4, 7, 9, 10],
  }),
  getters: {
    games (state) {
      const games = []
      const installed = state.installed
      const gamesStore = useGamesStore()
      for (const game of gamesStore.parsedGames) {
        if (!state.gamesId.includes(game.id)) continue

        games.push({
          ...game,
          installed: installed.includes(game.id),
        })
      }

      return games.sort((a, b) => {
        if (!a.installed) return 1
        if (!b.installed) return -1
        return 0
      })
    },
  },
  actions: {
    setInstalled (value: number[]) {
      this.installed = value
    },
  },
})
