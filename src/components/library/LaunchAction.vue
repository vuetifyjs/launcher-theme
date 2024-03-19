<template>
  <v-hover v-model="hover">
    <v-sheet
      :color="hover || menu ? 'secondary' : 'transparent'"
      class="transition-swing launch-action"
      height="64"
      tile
    >
      <v-row
        align="center"
        class="fill-height ma-0"
      >
        <div
          class="text-uppercase fill-height d-flex align-center ml-4 cursor-pointer"
          style="flex-grow: inherit;"
          @click="launch()"
        >
          {{ hoverInner || menu ? 'Settings' : 'Launch' }}
        </div>

        <v-menu
          :close-on-content-click="false"
          class="fill-height"
          min-width="100%"
          transition="slide-y-transition"
          location="bottom end"
        >
          <template #activator="{ props }">
            <v-hover v-model="hoverInner">
              <v-sheet
                :color="!hoverInner ? 'transparent' : 'secondary darken-2'"
                class="d-flex justify-center align-center transition-swing v-sheet--settings cursor-pointer"
                height="64"
                width="64"
                v-bind="props"
              >
                <v-icon>
                  {{ `mdi-${menu ? 'close' : 'cog'}` }}
                </v-icon>
              </v-sheet>
            </v-hover>
          </template>

          <v-list theme="light">
            <v-list-item
              :disabled="verifying && verifying !== props.value.id"
              title="Verify"
              @click="verify"
            />

            <v-list-item title="Create a shortcut" @click="createShortcut" />

            <v-list-item
              :ripple="false"
              title="Auto update"
              @click.stop="autoUpdate = !autoUpdate"
            >
              <template #append>
                <v-list-item-action>
                  <v-switch
                    :model-value="autoUpdate"
                    class="ml-auto justify-end"
                    hide-details
                  />
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-list-item title="Uninstall" @click="uninstall">
              <v-list-item-subtitle class="text-caption text-right">
                4.82GB
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider class="my-2" />
            <v-list-item title="Version" >
              <v-list-item-subtitle class="text-right">
                12032-x64
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-dialog
          v-model="dialog"
          max-width="400"
        >
          <v-card>
            <v-img
              :src="getImgUrl(`../../assets/${props.value.bg}`)"
              height="200"
              cover
            >
              <v-row
                align="center"
                class="fill-height mx-0"
                justify="center"
              >
                <v-progress-circular
                  color="white"
                  size="64"
                  indeterminate
                />
              </v-row>
            </v-img>
          </v-card>
        </v-dialog>
      </v-row>
    </v-sheet>
  </v-hover>
</template>

<script setup lang="ts">
  import { useVerifyStore } from '@/stores/verify'
  import { useLibraryStore } from '@/stores/library'
  import { useSnackbarStore } from '@/stores/snackbar'
  import { storeToRefs } from 'pinia'

  const { verifyInstall } = useVerifyStore()
  const { verifying } = storeToRefs(useVerifyStore())
  const { installed } = storeToRefs(useLibraryStore())
  const { setInstalled } = useLibraryStore()
  const { setSnackbar, setValue } = useSnackbarStore()

  interface Props {
    value: any
  }

  const props = withDefaults(defineProps<Props>(), {
    value: () => ({}),
  })

  const autoUpdate = ref(true)
  const dialog = ref(false)
  const hover = ref(false)
  const hoverInner = ref(false)
  const menu = ref(false)

  watch(dialog, value => {
    setTimeout(() => (dialog.value = false), 4000)
  })

  const createShortcut = () => {
    menu.value = false
    setSnackbar({ msg: 'Shortcut created' })
    setValue(true)
  }
  const launch = () => {
    dialog.value = true
  }
  const verify = async () => {
    menu.value = false
    hover.value = false

    await nextTick()
    // @ts-ignore
    verifyInstall(props.value.id)
  }
  const uninstall = () => {
    menu.value = false
    hover.value = false
    // @ts-ignore
    setInstalled(installed.value.filter(id => id !== props.value?.id))
  }

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href
</script>

<style lang="scss">
.launch-action .v-input--selection-controls__input {
  margin-right: 0;
}
.v-sheet--settings {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
