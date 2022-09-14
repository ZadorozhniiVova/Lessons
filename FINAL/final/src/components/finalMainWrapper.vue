<template>
  <div class="finalMainWrapper">
    <finalCatalog />
    <finalFavorite v-if="FAVORITE.length" 
    :favorite_data="FAVORITE"/>
  </div>
</template>

<script>
import finalCatalog from "./finalCatalog";
import finalFavorite from "./finalFavorite";
import { mapGetters } from 'vuex';

export default {
  name: "finalMainWrapper",
  components: {
    finalCatalog,
    finalFavorite,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'FAVORITE'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello I am alive!");
  },
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
