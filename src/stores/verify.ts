import { defineStore } from 'pinia'

interface State {
  paused: boolean
  cancelled: boolean
  status: number
  verifying: any
}

export const useVerifyStore = defineStore('verify', {
  state: ():State => ({
    paused: false,
    cancelled: true,
    status: 0,
    verifying: null,
  }),
  actions: {
    async verifyInstall (value: any) {
      this.verifying = value
      this.setCancelled(false)

      for (let i = 0; i <= 100; i++) {
        this.status = i

        await sleep(200 * Math.random())
        // @ts-ignore
        if (this.cancelled === true) break
        if (this.paused) await this.paused
      }

      this.$reset()
    },
    setPaused (value: boolean) {
      this.paused = value
    },
    setCancelled (value: boolean) {
      this.cancelled = value
    },
    setStatus (value: number) {
      this.status = value
    },
    setverifying (value: boolean) {
      this.verifying = value
    },
    reset () {
      this.$reset()
    },
  },
})

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
