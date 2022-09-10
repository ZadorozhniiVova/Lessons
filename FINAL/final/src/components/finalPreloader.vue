<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <breeding-rhombus-spinner
        class="logo"
        :animation-duration="2000"
        :size="80"
        color="#9708CC"
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00dbde;
  background-image: linear-gradient(43deg, #00dbde 0%, #fc00ff 100%);
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
