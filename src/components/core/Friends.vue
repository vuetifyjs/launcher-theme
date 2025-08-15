<template>
  <div>
    <v-navigation-drawer
      :model-value="friendsDrawer"
      class="bg-black"
      location="right"
      style="overflow: visible"
      width="325"
      static
    >
      <v-row
        class="mx-0 flex-column fill-height"
        justify="center"
      >
        <v-col>
          <v-list
            class="py-0"
            color="transparent"
            lines="two"
          >
            <Auth />

            <template v-if="loggedIn">
              <v-divider />

              <v-list-item>
                <v-list-item-title class="font-weight-light pl-4">
                  Friends Online {{ online }}
                </v-list-item-title>
              </v-list-item>

              <v-divider />

              <v-menu
                v-for="(friend, i) in friends"
                :key="i"
                :location="mdAndUp ? 'left' : smAndDown ? 'bottom' : undefined"
                :style="`max-height: 0; min-width: ${smAndDown ? '100%' : undefined }`"
                :width="mdAndUp ? 200 : undefined"
                content-class="border"
              >
                <template #activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    :append-avatar="friend.game? getImgUrl(`../../assets/${friend.game.logo}`) : undefined"
                    :value="friend.id"
                    class="px-n3"
                  >
                    <template #prepend>
                      <v-avatar
                        :color="friend.online ? 'green' : 'red'"
                        size="12"
                      />
                    </template>
                    <v-list-item-title class="text-white">{{ friend.name }}</v-list-item-title>
                    <v-list-item-subtitle class="text-white">{{ friend.game? `Playing ${friend.game.name}`: (friend.online ? 'Online' : 'Offline') }}</v-list-item-subtitle>
                  </v-list-item>
                </template>

                <v-list :bg-color="(mdAndUp ? 'black' : 'grey-darken-4')">
                  <v-list-item title="Whisper" @click="whisperFriend()" />

                  <v-list-item title="Remove Friend" @click="removeFriend()" />

                  <v-list-item title="Block" @click="blockFriend()" />
                </v-list>
              </v-menu>
            </template>
          </v-list>
        </v-col>

        <v-col
          v-if="!loggedIn"
          class="d-flex justify-center mt-n12"
        >
          <v-avatar
            class="mt-n12"
            color="grey-darken-4"
            size="128"
          >
            <v-icon
              color="grey-darken-2"
              size="96"
            >
              mdi-account
            </v-icon>
          </v-avatar>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <Fab />
  </div>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { useFriendsStore } from '@/stores/friends'
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'

  const { mdAndUp, smAndDown } = useDisplay()
  const { friends, drawer, online } = storeToRefs(useFriendsStore())
  const { setDrawer } = useFriendsStore()
  const { loggedIn } = storeToRefs(useAuthStore())
  const friendsDrawer = computed({
    get () {
      return drawer.value
    },
    set (val) {
      setDrawer(val.value)
    },
  })

  const blockFriend = () => {
    //
  }
  // const menu = (event: any) => {
  //   //
  // }
  const removeFriend = () => {
    //
  }
  const whisperFriend = () => {
    //
  }

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href
</script>
