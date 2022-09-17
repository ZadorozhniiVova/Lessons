<template>
  <v-app class="app">
    <FinalSideMenu  />
    <!-- <preloader /> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Preloader from "@/components/finalPreloader.vue";
import FinalSideMenu from "@/components/finalSideMenu.vue";
export default {
  name: "App",
  data() {
    return {
      name: localStorage.userName,
    };
  },
  components: {
    // Preloader,
    FinalSideMenu,
    // finalLoginModal,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
.screenLoader {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00dbde;
  background-image: linear-gradient(43deg, #00dbde 0%, #fc00ff 100%);
}
</style>
