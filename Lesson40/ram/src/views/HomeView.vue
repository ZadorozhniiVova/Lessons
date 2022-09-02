<template>
  <div class="home">
    <h1>{{ persons }}</h1>
    <b-button variant="success" @click="getPersons">Button</b-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Wrapper from "@/components/Wrapper.vue";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      persons: {},
    };
  },
  methods: {
    getPersons() {
      this.axios
        .get("https://rickandmortyapi.com/api/character")
        .then((resp) => {
          this.persons = resp;
        });
    },
  },
};
</script>
