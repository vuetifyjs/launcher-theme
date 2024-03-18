import { defineStore } from "pinia";

interface State {
  drawer: any;
}

export const useAppStore = defineStore("app", {
  state: (): State => ({
    drawer: null,
  }),
  actions: {
    setDrawer(payload: any) {
      this.drawer = payload.value;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
