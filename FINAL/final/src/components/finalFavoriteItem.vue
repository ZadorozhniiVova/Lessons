<template>
  <div class="finalFavoriteItem">
    <img
      class="finalFavoriteItem-img"
      :src="favorite_item_data.background_image"
    />
    <div class="finalFavoriteItem-info">
      <p>{{ favorite_item_data.name }}</p>
      <p>{{ favorite_item_data.id }}</p>
    </div>
    <div class="finalFavoriteItem-quantity">
      <button @click="deleteFromFavorite">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "finalFavoriteItem",
  props: {
    favorite_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods:{
    deleteFromFavorite(){
      this.$emit("deleteFromFavorite")
    }
  },
};
</script>

<style lang="scss" scoped>
.finalFavoriteItem {
  box-sizing: border-box;
  background-color: #202020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 12px;
    -webkit-box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);

  &-img {
    max-width: 200px;
    
  }
}
</style>
