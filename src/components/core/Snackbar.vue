<template>
  <v-snackbar
    v-model="snack"
    :color="snackbar.color"
    :style="{
      marginBottom: sm ? '40px' : undefined
    }"
    :timeout="snackbar.timeout"
    location="bottom"
  >
    <v-row
      align="center"
      class="mx-0"
    >
      <v-icon
        v-if="computedIcon()"
        class="mr-3"
        theme="dark"
      >
        {{ computedIcon }}
      </v-icon>

      <div v-text="snackbar.msg" />

      <v-spacer />

      <v-btn
        :color="computedColor"
        :ripple="false"
        :variant="snackbar.color !== 'store' ? 'text' : undefined"
        v-bind="bind"
        theme="dark"
        @click="setValue(false)"
      >
        {{ snackbar.text }}
      </v-btn>

      <v-btn
        v-if="snackbar.text == 'Close'"
        :ripple="false"
        class="ml-3"
        icon
      >
        <v-icon>mdi-clear</v-icon>
      </v-btn>
    </v-row>
  </v-snackbar>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { useSnackbarStore } from '@/stores/snackbar'

  const { sm } = useDisplay()
  const { snackbar, value, setValue } = useSnackbarStore()

  const bind = computed(() => {
    if (snackbar.to) return { to: '#' }
    if (snackbar.href) {
      return {
        href: '#',
        target: '_blank',
        rel: 'noopener',
      }
    }

    return {}
  })
  const computedColor = computed(() => {
    if (snackbar.color !== 'store') {
      return !computedIcon() ? 'primary lighten-3' : undefined
    }

    return 'green'
  })

  const computedIcon = () => {
    switch (snackbar.color) {
      case 'store': return 'mdi-cart'
      case 'success': return 'mdi-check'
      case 'info': return 'mdi-info'
      case 'warning': return 'mdi-warning'
      case 'error': return 'mdi-error'
      default: return false
    }
  }

  const snack = computed({
    get () {
      return value
    },
    set (val) {
      setValue(val)
    },
  })

</script>

<style>
  .snack-markdown p {
    margin-bottom: 0 !important;
  }
</style>
