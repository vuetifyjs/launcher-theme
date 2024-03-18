import { defineStore } from "pinia";

interface State {
  loggedIn: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): State => ({
    loggedIn: false,
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
  },
});
