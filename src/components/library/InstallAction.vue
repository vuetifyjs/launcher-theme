<template>
  <v-dialog
    v-model="dialog"
    :disabled="isLoading"
    max-width="600"
  >
    <template #activator="{ props }">
      <v-hover v-model="hover">
        <v-sheet
          :color="hover && !isLoading ? 'secondary' : 'transparent'"
          class="transition-swing cursor-pointer"
          height="64"
          style="border-radius: 0 0 6px 6px;"
          v-bind="props"
        >
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <div class="text-uppercase pa-3">
              <span v-if="!isLoading">
                Install
              </span>
              <v-progress-circular
                v-else
                width="2"
                indeterminate
              />
            </div>
          </v-row>
        </v-sheet>
      </v-hover>
    </template>

    <v-card>
      <v-card-title>
        Choose install location
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            v-model="folder"
            class="mb-3"
            hide-details
            flat
            variant="solo-inverted"
          >
            <template
              v-if="mdAndUp"
              #prepend-inner
            >
              <v-sheet
                class="mr-3 pa-2"
                color="grey-darken-3"
                dark
              >
                Folder
              </v-sheet>
            </template>
          </v-text-field>

          <v-text-field
            :model-value="path"
            disabled
            flat
            hide-details
            variant="solo-inverted"
          >
            <template
              v-if="mdAndUp"
              #prepend-inner
            >
              <v-sheet
                class="mr-3 pa-2"
                color="grey-darken-3"
                dark
              >
                Path&nbsp;&nbsp;&nbsp;
              </v-sheet>
            </template>
          </v-text-field>

          <div>
            <v-checkbox-btn
              hide-details
              label="Auto-Update"
            />

            <v-checkbox-btn
              hide-details
              label="Create Shortcut"
            />
          </div>
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-space-between bg-grey-darken-4">
        <v-btn
          :disabled="isLoading"
          color="grey-lighten-4"
          theme="dark"
          variant="text"
          @click="dialog = false"
        >
          Cancel
        </v-btn>

        <v-btn
          :loading="isLoading"
          color="success"
          theme="dark"
          variant="flat"
          @click="isLoading = true"
        >
          Install
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { useDownloadsStore } from '@/stores/downloads'
  import { useLibraryStore } from '@/stores/library'
  import { storeToRefs } from 'pinia';
  import { useDisplay } from 'vuetify';

  const { mdAndUp } = useDisplay();
  const { downloading } = storeToRefs(useDownloadsStore());
  const { setDownloading } = useDownloadsStore()
  const { setInstalled } = useLibraryStore()
  const { installed } = storeToRefs(useLibraryStore())

  interface Props {
    value: any
  }

  const props = withDefaults(defineProps<Props>(), {
    value: () => ({})
  })
  const dialog = ref(false)
  const folder = ref('c:/')
  const hover = ref(false)
  const isLoading = ref(false)

  const path = computed(() => {
    return `${folder.value}Game`
  })
  watch(isLoading, (val) => {
    const _downloading = downloading.value.slice()

    _downloading.push(props.value.id)

    setDownloading(_downloading)
    dialog.value = false

    val && setTimeout(() => {
      isLoading.value = false
      const _installed = installed.value

      _installed.push(props.value.id)

      setInstalled(_installed)
      setDownloading(
        _downloading.filter(id => id !== props.value.id),
      )
    }, 3000)
  })
</script>
