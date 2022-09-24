<template>
  <div id="finalSearchBar">
    <autocomplete
      aria-label="Search game"
      placeholder="Search game"
      :search="search"
      :get-result-value="getResultValue"
    >
      <template #result="{ result, props }">
        <router-link
          v-bind="props"
          class="autocomplete-result search-result d-flex justify-start align-center"
          :to="{ name: 'gameId', params: { id: `${result.id}` } }"
        >
          <div class="search__el d-flex justify-start align-center">
            <img class="search__el-img" :src="result.background_image" />

            <span class="search__el-name">{{ result.name }}</span>
          </div>
          <div class="search-snippet" v-html="result.snippet" />
        </router-link>
      </template>
    </autocomplete>
  </div>
</template>

<script>
console.clear();
import autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";
export default {
  name: "finalSearchBar",
  data() {
    return {
      key: "fa71b951c31e4e3b9af2efbdf3fe7c97",
      value: "",
    };
  },
  components: {
    autocomplete,
  },
  methods: {
    search(input) {
      return new Promise((resolve) => {
        const url = `https://api.rawg.io/api/games?&key=${this.key}&search=${input}&search_exact=true`;
        if (input.length < 1) {
          return resolve([]);
        }

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            resolve(data.results);
          });
      });
    },

    getResultValue(result) {
      // console.log(result);
      return result.title;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_mixins.scss";
#finalSearchBar {
  margin: 0 auto;
  width: 100%;
  z-index: 6;
  height: 44px;
  border-radius: 24px;
  padding: 0 10px;

  @include maxWidth(860px) {
    max-width: 220px;
    height: 28px;
  }
}
.autocomplete-input {
  font-size: 14px;
  background-color: hsla(0, 0%, 100%, 0.16);
  border: none;
  padding: 15px 12px 15px 38px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.6);
  font-weight: 400;
  border-radius: 24px;
  transition: color 0.3s, background-color 0.3s, opacity 0.3s,
    width 0.05s linear;

  @include maxWidth(860px) {
    max-width: 220px;
    height: 28px;
    padding: 0px 10px 0 38px;
  }
  @include maxWidth(500px) {
    padding: 0px 10px;
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.12);
    background-color: #fff;
    color: black;
    border-radius: 24px;
    outline: none;
    box-shadow: 0 2px 2px rgb(0 0 0 / 16%);
  }
}
.autocomplete-input[aria-expanded="true"] {
  border-radius: 24px !important;
}
.autocomplete-result-list {
  margin-top: 10px !important;
  border-radius: 16px !important;
  // background-color: black !important;
  border: none !important;
}

.search-result {
  padding: 16px;
  background: transparent;
  text-decoration: none;

  @include maxWidth(860px) {
    padding: 5px;
  }
  .search__el-img {
    width: 80px;
    height: 60px;
    max-width: 80px;
    max-height: 60px;
    border-radius: 6px;
    margin-right: 5px;
    @include maxWidth(860px) {
      width: 40px;
      height: 30px;
      max-width: 50px;
      max-height: 50px;
    }
  }
  .search__el-name {
    color: black;
    font-size: 16px;
    @include maxWidth(860px) {
      font-size: 10px;
    }
  }
}

.search-snippet {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}

.autocomplete[data-loading="true"]:after {
  top: 12px !important;

  @include maxWidth(860px) {
    top: 4px !important;
  }
}
.autocomplete-input {
  @include maxWidth(500px) {
    background-image: none;
  }
}
.autocomplete-input::placeholder {
  @include maxWidth(860px) {
    font-size: 14px;
  }
  @include maxWidth(500px) {
    font-size: 10px;
  }
}
</style>
