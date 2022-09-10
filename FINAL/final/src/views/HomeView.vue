<template>
  <div class="body">
    <finalHeader></finalHeader>
    <finalSlider></finalSlider>
    <!-- <finalSearchMarket></finalSearchMarket> -->
    <finalMostPopular></finalMostPopular>
    <!-- <div v-for="game in games" :key="game"></div> -->
    <finalFooterVue />
  </div>
</template>

<script>
import finalHeader from "../components/finalHeader";
import finalSlider from "@/components/finalSlider.vue";
// import finalSearchMarket from "@/components/finalSearchMarket.vue";
import finalMostPopular from "@/components/finalMostPopular.vue";
import finalFooterVue from "@/components/finalFooter.vue";
// import finalSharingVue from "@/components/finalSharing.vue";

export default {
  name: "HomeView",

  components: {
    finalHeader,
    finalSlider,
    // finalSearchMarket,
    finalMostPopular,
    finalFooterVue,
    // finalSharingVue,
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
<style lang="sass"></style>
