<template>
  <div id="app">
    <ram-nav-menu></ram-nav-menu>
    <RamBody></RamBody>
    <router-view class="mb-3"></router-view>
    <RamFooter></RamFooter>
  </div>
</template>

<script>
import RamNavMenu from "@/components/general/RamNavMenu.vue";
import RamBody from "@/components/general/RamBody.vue";
import RamFooter from "@/components/general/RamFooter.vue";
export default {
  components: {
    RamNavMenu,
    RamBody,
    RamFooter,
  },
};
</script>
