import { GameType } from "@/types";
import { defineStore } from "pinia";

interface State {
  drawer: any;
  downloading: GameType[];
}

export const useDownloadsStore = defineStore("downloads", {
  state: (): State => ({
    drawer: null,
    downloading: [],
  }),
  actions: {
    setDownloading(value: GameType[]) {
      this.downloading = value;
    },
    setDrawer(value: boolean) {
      this.drawer = value;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
