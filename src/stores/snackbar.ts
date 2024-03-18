import { defineStore } from "pinia";

const DEFAULT_SNACKBAR = Object.freeze({
  color: "success",
  href: false,
  msg: "",
  text: "Close",
  to: false,
  timeout: 6000,
});

interface State {
  snackbar: {
    color: string;
    href: boolean;
    msg: string;
    text: string;
    to: boolean;
    timeout: number;
  };
  value: boolean;
}

export const useSnackbarStore = defineStore("snackbar", {
  state: (): State => ({
    snackbar: DEFAULT_SNACKBAR,
    value: false,
  }),
  actions: {
    setSnackbar(value: any) {
      this.snackbar = Object.assign(
        {},
        {
          color: "success",
          href: false,
          msg: "",
          text: "Close",
          to: false,
          timeout: 6000,
        },
        value
      );
    },
    setValue(value: boolean) {
      this.value = value;
    },
  },
});
