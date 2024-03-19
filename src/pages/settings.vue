<template>
  <section>
    <v-toolbar flat>
      <v-btn
        to="/"
        icon
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-divider
        class="mx-3"
        inset
        vertical
      />
      Settings
    </v-toolbar>
    <v-divider />

    <div class="pa-3">
      <div class="mb-3">
        Language
      </div>

      <v-form class="mb-3">
        <v-select
          v-model="language"
          :items="items"
          item-title="text"
          item-value="value"
          label="Language"
          prepend-inner-icon="mdi-earth"
          style="max-width: 400px"
          variant="solo"
          flat
        />

        <v-checkbox label="Minimize To System Tray" />
        <v-checkbox label="Run When My Computer Starts" />
        <v-checkbox label="Enable developer mode" />
        <v-checkbox label="Hide Purchased Products" />

        <v-divider />

        <v-checkbox label="Use Proxy" />

        <v-divider class="mb-3" />

        <v-sheet max-width="400">
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-title>Edit Cached Storage Location</v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-list-item-title>Troubleshoot</v-list-item-title>
            </v-list-item>
            <v-list-item
              href="https://community.vuetifyjs.com"
              rel="noopener"
              target="_blank"
            >
              <v-list-item-title>Support</v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-list-item-title>Show Logs</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-form>

      <v-divider class="mb-5" />

      <div class="text-center subheading">
        Vuetify Material Design | 2024
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const items = ref([
    {
      value: 'en',
      text: 'English (United States)',
    },
  ])
  const language = ref('en')
</script>
