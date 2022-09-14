<template>
  <div class="finalSideMenu">
    <v-card style="background-color: black">
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-0">
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

        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
          <v-list-item link>
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
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
import VueToyFace from "vue-toy-face";

export default {
  name: "finalSideMenu",
  data() {
    return {
      name: localStorage.getItem("userName"),
      email: localStorage.getItem("email"),
    };
  },
  components: { VueToyFace },
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

.v-navigation-drawer {
  // цвет заднего фона боковой панели
  background-color: #fad961 !important;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%) !important;
}
</style>
