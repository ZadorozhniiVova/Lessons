<template>
  <div class="body" @mousemove="move">
    <finalHeader />
    <finalSlider />
    <finalBestStores />
    <finalComments />
    <finalMainWrapper />
    <finalFooterVue />
  </div>
</template>

<script>
import finalHeader from "../components/finalHeader";
import finalSlider from "@/components/finalSlider.vue";
import finalBestStores from "@/components/finalBestStores.vue";
import finalComments from "@/components/finalComments.vue";
import finalFooterVue from "@/components/finalFooter.vue";
import finalMainWrapper from "@/components/finalMainWrapper.vue";
import { eventBus } from "../main";

export default {
  name: "HomeView",

  components: {
    finalHeader,
    finalSlider,
    finalBestStores,
    finalComments,
    finalFooterVue,

    finalMainWrapper,
  },
  methods: {
    move($event) {
      if ($event.pageX < 20) {
        eventBus.$emit("isOpenSideMenu", true);
      } else {
        eventBus.$emit("isOpenSideMenu", false);
      }
    },
  },
};
</script>
