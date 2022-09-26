<template>
  <b-icon
    class="btnScrollUp"
    icon="arrow-up-circle"
    scale="2"
    color="white"
    @click="moveToTop"
  ></b-icon>
</template>

<script>
export default {
  name: "finalBtnScroolUp",
  methods: {
    moveToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_mixins.scss";
.btnScrollUp {
  width: 56px;
  margin: 0 8px;
  cursor: pointer;
  position: fixed;
  bottom: 27px;
  right: 10px;
  z-index: 999;
  &:hover {
    @include scale(1.05);
  }
  &:focus {
    @include scale(1.05);
  }
  &:active {
    @include scale(1.1);
  }
  @include maxWidth(860px) {
    bottom: 25px;
    max-width: 40px;
    max-height: 40px;
  }
  @include maxWidth(500px) {
    max-width: 40px;
    max-height: 40px;
  }
}
</style>
