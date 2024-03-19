<template>
  <v-form autocomplete="off">
    <v-window
      v-model="model"
      class=""
    >
      <v-window-item class="px-3">
        <v-text-field
          append-inner-icon="mdi-chevron-right"
          class="py-2"
          label="Email"
          name="email"
          variant="outlined"
          hide-details
          single-line
          @click:append-inner="model++"
          @keydown.enter="model++"
        />
      </v-window-item>

      <v-window-item class="px-3">
        <v-text-field
          ref="password"
          append-inner-icon="mdi-login"
          class="py-2"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          hide-details
          single-line
          @click:append-inner="login()"
          @keydown.enter="login()"
        />
      </v-window-item>
    </v-window>
  </v-form>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'

  const { login } = useAuthStore()

  const model = ref(0)

  watch(model, (val : number) => {
    if (val !== 1) return

    setTimeout(() => {

    }, 300)
  })
</script>
