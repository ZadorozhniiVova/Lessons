<template>
  <div class="finalFavorite">
    <h1>Favorite Games</h1>
    <finalFavoriteItem
      v-for="(favorite, index) in favorite_data"
      :key="favorite.id"
      :favorite_item_data="favorite"
      @deleteFromFavorite="deleteFromFavorite(index)"
    />
  </div>
</template>

<script>
import finalFavoriteItem from "./finalFavoriteItem.vue";
import { mapActions } from "vuex";

export default {
  name: "finalFavorite",
  components: {
    finalFavoriteItem
  },
  props: {
    favorite_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions([
      "DELETE_FROM_FAVORITE"
    ]),
    deleteFromFavorite(favoriteGameIndex) {
      this.DELETE_FROM_FAVORITE(favoriteGameIndex)
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: white;
}
</style>
