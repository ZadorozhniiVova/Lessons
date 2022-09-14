<template>
  <div class="finalSideMenu">
    <v-card style="background-color: black">
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-0 d-flex justify-center">
            <VueToyFace
              size="40"
              rounded="75"
              :group="2"
              :toy-number="10"
              class="avatar"
            />
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- RETURN HOME -->
        <v-list nav dense>
          <v-list-item link>
            <router-link class="d-flex align-center" :to="{ name: 'home' }"
              ><v-list-item-icon
                ><v-icon dark>mdi-home</v-icon></v-list-item-icon
              >
              <v-list-item-title>Home</v-list-item-title></router-link
            >
          </v-list-item>

          <!-- FAVORITE LIST -->

          <v-list-item link>
            <router-link
              :to="{ name: 'favorite', params: { favorite_data: FAVORITE } }"
              class="d-flex align-center"
              ><v-list-item-icon
                ><v-icon dark> mdi-heart </v-icon>
                <div
                  class="favorite__popUp d-flex justify-center"
                  v-if="FAVORITE.length"
                >
                  {{ FAVORITE.length }}
                </div></v-list-item-icon
              >
              <v-list-item-title>Favorite</v-list-item-title></router-link
            >
          </v-list-item>

          <v-divider></v-divider>

          <!-- TOP LIST -->
          <v-list-item class="sideList__header">
            <H6>TOP</H6>
          </v-list-item>
          <!-- BEST OF YEAR -->
          <v-list-item link>
            <router-link
              :to="{ name: 'BestYear', params: { favorite_data: BESTOFYEAR } }"
              class="d-flex align-center"
              ><v-list-item-icon>
                <svg
                  class="sideMenu__img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title
                >Best of the Year</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <!-- POPULAR LAST YEAR -->
          <v-list-item link>
            <router-link
              :to="{ name: 'Best2021', params: { favorite_data: BESTOF2021 } }"
              class="d-flex align-center"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title
                >Popular in 2021</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <!-- POPULAR All TIME -->
          <v-list-item link>
            <router-link
              :to="{
                name: 'bestOfAllTime',
                params: { favorite_data: BESTOFALLTIME },
              }"
              class="d-flex align-center"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title
                >Popular All Time</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <!-- <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
import VueToyFace from "vue-toy-face";
import { mapGetters } from "vuex";

export default {
  name: "finalSideMenu",
  data() {
    return {
      name: localStorage.getItem("userName"),
      email: localStorage.getItem("email"),
    };
  },
  components: { VueToyFace },
  computed: {
    ...mapGetters(["FAVORITE", "BESTOFYEAR", "BESTOF2021", "BESTOFALLTIME"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  color: black !important;
  font-family: "Josefin Sans", sans-serif;
}

.finalSideMenu {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 60px;
}

.sideList__header {
  padding: 0 !important;
  text-align: center;
  width: 100%;
  display: block;
  height: 20px !important;
  min-height: 20px !important;
}

.v-list-item-icon,
.v-list-item-title {
  text-decoration: none !important;
}
.v-divider {
  background-color: black !important ;
}
.v-navigation-drawer {
  // цвет заднего фона боковой панели
  background-color: #fad961 !important;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%) !important;
}

.router-link-exact-active {
  text-decoration: none;
}
.align-center {
  text-decoration: none;
}
.favorite__popUp {
  // padding:5px;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  transition: 0.2s;
  position: absolute;
  top: 0;
  right: -5px;
}
</style>
