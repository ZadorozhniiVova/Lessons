<template>
  <div class="sliderPopular">
    <hooper
      :itemsToShow="5"
      :autoPlay="true"
      :playSpeed="3000"
      :infiniteScroll="true"
    >
      <slide
        class="slidePopular"
        v-for="popular in popularGames"
        :key="popular"
      >
        <router-link
          :to="{ name: 'game', params: { id:`${popular.id}`} }"
          class="popularCard"
        >
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress"> </template>

            <v-img height="200" :src="popular.background_image"></v-img>

            <v-card-title size="14">{{ popular.name }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="popular.rating"
                  color="red"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-2">
                  {{ popular.rating }} ({{ popular.reviews_count }})
                </div>
              </v-row>
              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>
            <v-divider class="mx-1"></v-divider>
            <v-card-title>Available on</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <div v-if="popular.id">
                  <a
                    class="game__link"
                    v-for="(n, $index) in stores"
                    :key="$index"
                    :href="$index.url"
                    >Link</a
                  >
                </div>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <!-- <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn> -->
            </v-card-actions>
          </v-card>
        </router-link>
      </slide>
    </hooper>
  </div>
</template>

<script>
import axios from "axios";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
// import ApiGames from "@/store/store";
import Api from "../service/api";

export default {
  data() {
    return {
      popularGames: [],
      name: "App",
      stores: [],
    };
  },
  components: {
    Hooper,
    Slide,
    // ApiGames,
  },

  async mounted() {
    let popularGames = await axios.get(
      "https://api.rawg.io/api/games?dates=2022-01-01,2022-05-01&key=aa0261996cd54584b28260614f7a2d1b"
    );
    console.log("POPULAR", popularGames.data.results);
    this.popularGames = popularGames.data.results;

    //поиск магазина
    const markets = await Api().get(
      `games/${popularGames.data.results.id}/stores?&key=aa0261996cd54584b28260614f7a2d1b`
    );
    this.store = markets.data.results;
    console.log(this.store);
    // console.log("GAME", this.popularGames);
  },
};
</script>

<style>
.hooper {
  /* height: fit-content; */
}
.hooper-list {
  height: 100%;
}
.popular {
  border: 1px solid black;
}
/* .hooper-slide {
  height: 100%;
  margin: 5px;
} */
.popularCard {
  height: 100%;
  text-decoration: none;
}
.slidePopular {
  height: 100%;
}
.card {
  height: 100%;
}
.slider__popular {
  min-width: 0;
}
.slyder > div > h3 {
  color: black;
}
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(gray 100%, transparent 0);
}

.v-card__title {
  height: 64px;
  line-height: 1.5rem;
}
.v-chip-group--column .v-slide-group__content {
  justify-content: center;
}

.game__link {
  height: 20px;
  width: 40px;
  border: 1px solid black;
}
</style>
