<template>
  <v-btn class="openMenuBtn mx-2" fab dark color="#151515">
    <v-icon dark @click="openSideMenu">
      mdi-format-list-bulleted-square
    </v-icon>
  </v-btn>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      isOpenSideMenu: false,
    };
  },
  methods: {
    openSideMenu() {
      this.isOpenSideMenu = !this.isOpenSideMenu;
      console.log("openSideMenu click on btn Header");
      eventBus.$emit("openSideMenu", this.isOpenSideMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixins.scss";
.openMenuBtn {
  position: fixed;
  right: 10px;
  z-index: 999;
  top: 27px;
  @include maxWidth(860px) {
    top: 13px;
    max-width: 40px;
    max-height: 40px;
  }
  @include maxWidth(500px) {
    max-width: 40px;
    max-height: 40px;
    top: 4px;
  }
}
</style>
