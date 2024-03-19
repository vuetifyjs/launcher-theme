import { defineStore } from 'pinia'

interface State {
  drawer: any;
  friends: any[];
}

export const useFriendsStore = defineStore('friends', {
  state: (): State => ({
    drawer: null,
    friends: [
      {
        id: 1,
        name: 'John Smith',
        online: true,
        game: {
          id: 10,
          logo: 'games/storm-peak/avatar.png',
          name: 'Battle of StormPeak',
        },
      },
      {
        id: 2,
        name: 'Jane Smith',
        online: true,
      },
      {
        id: 3,
        name: 'Jimmy Doe',
        online: false,
      },
      {
        id: 4,
        name: 'Charles Edward Cheese',
        online: false,
      },
    ],
  }),
  getters: {
    online (state) {
      const total = state.friends.length
      const online = state.friends.filter(friend => friend.online).length

      return `(${online}/${total})`
    },
  },
  actions: {
    setDrawer (value: boolean) {
      this.drawer = value
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    },
  },
})
