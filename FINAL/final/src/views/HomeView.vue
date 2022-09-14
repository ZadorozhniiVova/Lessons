<template>
  <div class="body">
    <!-- <finalVideoVue/> -->
    <!-- <finalSlider></finalSlider> -->
    <finalHeader></finalHeader>
    <finalMainWrapper />
    <!-- <finalSearchMarket></finalSearchMarket> -->

    <!-- <div v-for="game in games" :key="game"></div> -->
    <finalFooterVue />
  </div>
</template>

<script>
import finalHeader from "../components/finalHeader";
// import finalSlider from "@/components/finalSlider.vue"; //almost
// import finalVideoVue from "@/components/finalVideo.vue";
// import finalSearchMarket from "@/components/finalSearchMarket.vue";
import finalFooterVue from "@/components/finalFooter.vue";
// import finalSharingVue from "@/components/finalSharing.vue";
import finalMainWrapper from "@/components/finalMainWrapper.vue";

export default {
  name: "HomeView",

  components: {
    finalHeader,
    // finalSlider, //almost
    // finalSearchMarket,
    // finalMostPopular, //almost
    finalFooterVue,
    // finalVideoVue,
    // finalSharingVue,

    finalMainWrapper,
  },
  mounted() {
    // this.$store.dispatch("loadAllGames");
    // this.$store.dispatch("loadAllPlatforms");
  },
  computed: {
    // games() {
    //   return this.$store.state.games;
    // },
    // platforms() {
    //   return this.$store.state.platforms;
    // },
  },
};
</script>
<style lang="scss">
.body {
  background-color: black;
}
</style>
