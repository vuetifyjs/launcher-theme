<template>
  <v-form autocomplete="off">
    <v-window
      v-model="model"
      class=""
    >
      <v-window-item class="px-3">
        <v-text-field
          class="py-2"
          label="Email"
          hide-details
          name="email"
          variant="outlined"
          single-line
          append-inner-icon="mdi-chevron-right"
          @keydown.enter="model++"
          @click:append-inner="model++"
        >
      </v-text-field>
      </v-window-item>

      <v-window-item class="px-3">
        <v-text-field
          ref="password"
          class="py-2"
          hide-details
          label="Password"
          name="password"
          type="password"
          append-inner-icon="mdi-login"
          variant="outlined"
          single-line
          @click:append-inner="login()"
          @keydown.enter="login()"
        />
      </v-window-item>
    </v-window>
  </v-form>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth';

  const { login } = useAuthStore()

  const model = ref(0);

  watch(model, (val : number) => {
    if (val != 1) return

    setTimeout(() => {
      
    }, 300)
  }) 
</script>
