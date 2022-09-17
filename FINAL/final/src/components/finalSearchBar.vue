<template>
  <div id="finalSearchBar">
    <autocomplete
      aria-label="Search game"
      placeholder="Search game"
      :search="search"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
    >
      <template #result="{ result, props }">
        <router-link
          v-bind="props"
          class="autocomplete-result wiki-result d-flex justify-start align-center"
          :to="{ name: 'gameId', params: { id: `${result.id}` } }"
        >
        <div class="search__el d-flex justify-start align-center">
              <img class="search__el-img" :src="result.background_image" />

              <span class="search__el-name">{{ result.name }}</span>
            </div>
            <div class="wiki-snippet" v-html="result.snippet"
          />
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
      key: "a93f8e4bce884b11ae59a173f67e656c",
      value: ""
    };
  },
  components: {
    autocomplete
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
      console.log(result);
      return result.title;
    },

    handleSubmit(result) {
      window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`);
    }
  }
  //   methods: {
  //     // Search function can return a promise
  //     // which resolves with an array of
  //     // results. In this case we're using
  //     // the Wikipedia search API.
  //     search(input) {
  //       this.value = input;
  //       const url = `https://api.rawg.io/api/games?&key=${this.key}&search=${input}&search_exact=true`;

  //       return new Promise((resolve) => {
  //         if (input.length < 1) {
  //           return resolve([]);
  //         }

  //         fetch(url)
  //           .then((response) => response.json())
  //           .then(data => {
  //           const result = data.results.map((result, index) => {

  //             return { ...result, index }
  //           })
  //           resolve(result)
  //         })

  //         //   .then((data) => {
  //         //     // console.log(data.results)
  //         //     data.result
  //         //     resolve(data.results)
  //         //     // if (this.value) {
  //         //     //   resolve(data.query.search);
  //         //     // } else {
  //         //     //   resolve([]);
  //         //     // }
  //         //   });
  //         //   .then((data) => {
  //         //     console.log(data.results)
  //         //     resolve(data.results);
  //         //   });
  //       });
  //     },

  //     // Wikipedia returns a format like this:
  //     //
  //     // {
  //     //   pageid: 12345,
  //     //   title: 'Article title',
  //     //   ...
  //     // }
  //     //
  //     // We want to display the title
  //     getResultValue(result) {
  //       for (let i = 0; i < result.length; i++) {
  //         console.log("result[i]", result[i]);
  //         return result[i];
  //       }
  //       //
  //     },

  //     // Open the selected article in
  //     // a new window

  //     handleSubmit(result) {
  //       window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`);
  //     },
  //     clear() {
  //       this.value = ''
  //       this.$refs.autocomplete.value = ''
  //     }
  //   }
};
</script>

<style lang="scss">
#finalSearchBar {
  margin: 0 auto;
  width: 100%;
  z-index: 6;
  height: 44px;
  border-radius: 24px;
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

    &:focus{
        border-color: rgba(0,0,0,.12);
    background-color: #fff;
    color: black;
    border-radius: 24px;
    outline: none;
    box-shadow: 0 2px 2px rgb(0 0 0 / 16%);
    }
}
.autocomplete-input[aria-expanded=true]{
    border-radius: 24px !important;
}
.autocomplete-result-list{
    margin-top:10px!important;
    border-radius: 16px !important;
    // background-color: black !important;
    border: none !important;
}

.wiki-result {
  padding: 16px;
  background: transparent;
  text-decoration: none;
  .search__el-img {
      width: 30px;
      height: 40px;
      max-width: 30px;
      max-height: 40px;
      border-radius: 6px;
      margin-right: 5px;
    }

}

.wiki-snippet {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}
</style>
