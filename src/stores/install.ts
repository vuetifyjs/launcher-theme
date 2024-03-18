import { defineStore } from "pinia";

interface State {
  dialog: boolean;
}

export const useInstallStore = defineStore("install", {
  state: (): State => ({
    dialog: false,
  }),
  actions: {
    installGame() {
      this.dialog = true;
    },
  },
});
