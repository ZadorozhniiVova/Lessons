<template>
  <div class="search">
    <!-- <div class="constrain">
      <input
        class="input-grey-rounded"
        id="search"
        type="text"
        placeholder="Game Name"
        v-model="search"
      />
    </div>
    <select class="searchStoreType" name="type" id="type"></select>
    <a href="#" id="searchButton"> Search </a> -->
    <b-field>
      <b-input placeholder="Game" v-model="searchedGame"></b-input>
    </b-field>
    <span>{{ searchedGame }}</span>
    <v-autocomplete
      class="input-grey-rounded"
      id="search"
      type="text"
      placeholder="Game Name"
      auto-select-first
      chips
      clearable
      deletable-chips
      filled
      solo
    ></v-autocomplete>

    <v-col class="d-flex" cols="12" sm="6">
      <v-select :items="consoles" label="Solo field" solo></v-select>
    </v-col>
    <!-- rel="noindex nofollow" target="_black" -->
    <span>{{ searchedGame }}</span>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import { ref, watch } from "vue";

export default {
  data() {
    return {
      stores: "/stores",
      url: "https://api.rawg.io/api/",
      platforms: "/platforms",
      apiKey: "key=aa0261996cd54584b28260614f7a2d1b",
      marketType: $("#type").val(),
      consoles: [],
      games: [],
      allGames: [],
      searchedGame: "",
    };
  },

  async mounted() {
    let result = await axios.get(
      `https://api.rawg.io/api/games?key=aa0261996cd54584b28260614f7a2d1b&search=${searchedGame}&search_exact=true`
    );
    console.log("FIND", result.data.results);
    this.games = result.data.results;
  },
  setup() {
    const searchedGame = ref("");
    const data = ref([]);

    watch(
      () => searchedGame,
      (game) =>
        axios
          .get(
            `https://api.rawg.io/api/games?key=aa0261996cd54584b28260614f7a2d1b&search=${searchedGame}&search_exact=true`
          )
          .then((res) => (data.value = res.data.results)),
      console.log("RESULT", data.value)
    );

    return {
      data,
      searchedGame,
    };
  },
};
//     $("#search").change(() => {
//       async function allGames() {

//         const respGames = await fetch(
//           `https://api.rawg.io/api/games?key=aa0261996cd54584b28260614f7a2d1b&search=${{search}}&search_exact=true`
//         );
//         const respGamesJson = await respGames.json();
//         let findGames = respGamesJson.results;
//         let gameList = `<div class="game__list"></div>`;
//         $(".search").append(gameList);
//         for (let i = 0; i <= findGames.length - 1; i++) {
//           $(".game__list").append(`<div class="game__list-el">
//       <div class="game__list-el_bg"><img class="el__bg-img"  src="${findGames[i].background_image}"></div><span class="game__list-el_name"">${findGames[i].name}</span> </div>`);
//           $(".game__list").css('dislay","flex');
//           $(".game__list-el").on("click", function (event) {
//             $(".searchStoreType").html("");
//             $("#search").val($(event.target).text());
//             $(".game__list").css("display", "none");
//             if ($(event.target).text() == findGames[i].name) {
//               async function findMarket() {
//                 const respStores = await fetch(
//                   `${url}${games}/${findGames[i].id}/stores?${apiKey}`
//                 );
//                 const respStoresJson = await respStores.json();
//                 if (respStoresJson.results.length > 0) {
//                   for (let g = 0; g < respStoresJson.results.length; g++) {
//                     async function findMarketId() {
//                       const respMarket = await fetch(
//                         `${url}${stores}?${apiKey}`
//                       );
//                       const respMarketJson = await respMarket.json();
//                       let results = respMarketJson.results;
//                       for (let n = 0; n < results.length - 1; n++) {
//                         if (
//                           parseInt(respStoresJson.results[g].store_id) ===
//                           parseInt(results[n].id)
//                         ) {
//                           $(".searchStoreType").append(
//                             `<option class="searchStoreType__option" value="${results[n].name}">${results[n].name}</option>`
//                           );
//                           $("#type").change(() => {
//                             console.log($("#type").val());
//                             console.log(results[n]);
//                             if (results[n].name == $("#type").val()) {
//                               console.log(results[n].name);
//                               console.log(`${respStoresJson.results[g].url}`);
//                               $("#searchButton").attr(
//                                 "href",
//                                 `${respStoresJson.results[g].url}`
//                               ); //Добавляем поисковую ссылку
//                             }
//                           });
//                         }
//                       }
//                     }
//                     findMarketId();
//                   }
//                 } else {
//                   alert("no game links");
//                 }
//               }
//               findMarket();
//             }
//           });
//         }
//       }
//       allGames();
//     });
//   },
// };
</script>

<style lang="scss" scoped>
.input-grey-rounded {
  max-width: 200px;
}
.search {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  position: relative;
  padding-bottom: 400px;

  .game__list {
    position: absolute;
    width: 300px;
    height: auto;
    max-height: 300px;
    border: 1px solid black;
    top: 80px;
    left: 50px;
    overflow: auto;

    &-el {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      cursor: pointer;
      padding: 2px;

      &_bg {
        min-width: 60px;
        max-width: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 10px;

        .el__bg-img {
          height: 100%;
          width: auto;
          max-width: 60px;
          max-height: 60px;
        }
      }

      &:hover {
        background-color: grey;
      }
    }
  }
}
</style>
