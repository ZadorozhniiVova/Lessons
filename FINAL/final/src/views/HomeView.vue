<template>
  <div class="body">
    <finalHeader />
    <finalSlider />
    <finalBestStores/>
    <finalMainWrapper />
    <finalFooterVue />
  </div>
</template>

<script>
import finalHeader from "../components/finalHeader";
import finalSlider from "@/components/finalSlider.vue";
import finalBestStores from "@/components/finalBestStores.vue";
import finalFooterVue from "@/components/finalFooter.vue";
import finalSharingVue from "@/components/finalSharing.vue";
import finalMainWrapper from "@/components/finalMainWrapper.vue";

export default {
  name: "HomeView",

  components: {
    finalHeader,
    finalSlider,
    finalBestStores,
    finalFooterVue,
    finalSharingVue,
    finalMainWrapper,
  },
};
</script>
