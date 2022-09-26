<template>
  <v-app class="app">
    <finalBtnOpenSideMenu class="finalBtnOpenSideMenu" />
    <finalSideMenu />
    <!-- <preloader /> -->
    <v-main>
      <router-view />
    </v-main>
    <finalLoginModal />
    <finalBtnScrollUp />
  </v-app>
</template>

<script>
// import Preloader from "@/components/finalPreloader.vue";
import finalLoginModal from "@/components/finalLoginModal.vue";
import finalSideMenu from "@/components/finalSideMenu.vue";
import finalBtnOpenSideMenu from "@/components/finalBtnOpenSideMenu.vue";
import finalBtnScrollUp from "@/components/finalBtnScrollUp.vue";

export default {
  name: "App",
  data() {
    return {
      // name: localStorage.userName,
      // isShowModal: false,
      // changeOnLogin: false,
    };
  },
  components: {
    // Preloader,
    finalSideMenu,
    finalLoginModal,
    finalBtnOpenSideMenu,
    finalBtnScrollUp,
  },
  methods: {
    // someMethod: function (event) {
    //   this.clientMouseX = event.pageX;
    //   console.log(this.clientMouseX)
    // },
    // isLoginModal(isShow) {
    //   console.log("receive");
    //   this.isShowModal = isShow;
    // },
    // closeModal(close) {
    //   console.log(close);
    //   this.isShowModal = close;
    // },
    // changeUserStatusOnLogin(changeOnLogin) {
    //   console.log("inAPPinn", this.changeOnLogin);
    //   this.changeOnLogin = changeOnLogin;
    //   console.log("inAPPout", this.changeOnLogin);
    // },
    // changeStatus(logOut) {
    //   this.changeOnLogin = logOut;
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_mixins.scss";
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

finalSideMenu {
  z-index: 999;
}
</style>
