<template>
  <div class="finalMainWrapper">
    <keep-alive>
      <finalCatalog />
    </keep-alive>
  </div>
</template>

<script>
import finalCatalog from "./finalCatalog";

export default {
  name: "finalMainWrapper",
  components: {
    finalCatalog,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scopped>
.finalMainWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
</style>
