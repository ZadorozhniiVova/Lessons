<template>
  <div class="footer bg-success" fluid>
    <h1>Footer</h1>
  </div>
</template>

<script>
export default {
  computed: {
    characters(state) {
      // return this.$store.getters.getCharacters
      return this.$store.state.characters;
    },
  },
};
</script>

<style></style>
