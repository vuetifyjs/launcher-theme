<template>
  <v-container
    v-if="article"
    class="article pt-0 px-0"
  >
    <v-img
      :src="getImgUrl(`../../assets/${article.img}`)"
      gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,0)"
      height="50vh"
      cover
    >
      <RouterLink to="/">
        <v-list-subheader class="ms-3">
          Back to Home
        </v-list-subheader>
      </RouterLink>
    </v-img>

    <v-sheet
      class="py-5 px-3"
      color="grey-lighten-2"
      light
    >
      <h1
        class="text-h2 font-weight-bold mb-4"
        v-text="article.title"
      />

      <v-row>
        <v-col
          class="text-grey-darken-2 text-h6 font-weight-light"
          cols="12"
          md="6"
        >
          <p>
            Nunc nec neque. Vestibulum fringilla pede sit amet augue. Curabitur at lacus ac velit ornare lobortis. Pellentesque commodo eros a enim. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

            Vivamus in erat ut urna cursus vestibulum. Quisque ut nisi. Curabitur nisi. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus.

            Maecenas nec odio et ante tincidunt tempus. Pellentesque commodo eros a enim. Suspendisse feugiat. Nulla facilisi. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          </p>

          <p>
            Nunc nec neque. Vestibulum fringilla pede sit amet augue. Curabitur at lacus ac velit ornare lobortis. Pellentesque commodo eros a enim. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

            Vivamus in erat ut urna cursus vestibulum. Quisque ut nisi. Curabitur nisi. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus.
          </p>

          <p>
            Nunc nec neque. Vestibulum fringilla pede sit amet augue. Curabitur at lacus ac velit ornare lobortis. Pellentesque commodo eros a enim. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

            Vivamus in erat ut urna cursus vestibulum. Quisque ut nisi. Curabitur nisi. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus.

            Maecenas nec odio et ante tincidunt tempus. Pellentesque commodo eros a enim. Suspendisse feugiat. Nulla facilisi. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          </p>

          <v-row
            align="center"
            class="pt-4 bg-white mx-0 text-grey-darken-2"
            justify="space-between"
            tag="p"
          >
            <span class="pl-3 subheading">
              Share this on social media
            </span>

            <div class="d-flex">
              <v-btn class="bg-transparent" variant="flat" icon>
                <v-icon>mdi-discord</v-icon>
              </v-btn>

              <v-btn class="bg-transparent" variant="flat" icon>
                <v-icon>mdi-reddit</v-icon>
              </v-btn>

              <v-btn class="bg-transparent" variant="flat" icon>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>

              <v-btn class="bg-transparent" variant="flat" icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-col>

        <v-col
          class="mt-5"
          cols="12"
          md="6"
        >
          <v-card
            class="mx-auto"
            elevation="24"
            max-width="400"
          >
            <v-img :src="getImgUrl(`../../assets/${article.altImg}`)" />
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useHomeStore } from '@/stores/home'

  const { params } = useRoute()
  const { articles } = useHomeStore()

  const article = computed(() => {
    return articles.find(article => article.slug === params.slug)
  })

  const getImgUrl = (imagePath: string) => new URL(`${imagePath}`, import.meta.url).href
</script>

<style lang="scss">
.article {
  p {
    line-height: 2;
    padding: 0 12px 20px;
  }
}
</style>
