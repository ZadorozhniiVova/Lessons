<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <breeding-rhombus-spinner
        class="logo"
        :animation-duration="2000"
        :size="80"
        color="white"
      />
    </div>
  </transition>
</template>

<script>
import { BreedingRhombusSpinner } from "epic-spinners";
export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    BreedingRhombusSpinner,
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = !this.show;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.preloader {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(109, 200, 73);
  background: radial-gradient(
    circle,
    rgba(109, 200, 73, 1) 0%,
    rgba(244, 241, 5, 1) 39%,
    rgba(21, 21, 21, 1) 100%
  );
  position: absolute;
  z-index: 99999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;

  .logo {
    animation-name: scaleOut;
    animation-duration: 1s;
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
