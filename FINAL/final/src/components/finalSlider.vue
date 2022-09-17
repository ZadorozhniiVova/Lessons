<template>
  <div class="finalSlider">
    <hooper
      :vertical="true"
      :itemsToShow="1"
      :centerMode="true"
      :infiniteScroll="true"
      :autoPlay="true"
      :playSpeed="3000"
      :transition="1000"
      :wheelControl="false"
      group="MainSlider"
      class="finalSlider__left"
    >
      <slide
        v-for="game in sliderGames"
        :key="game.id"
        class="finalSlider__left-slide leftSlide"
      >
        <div class="leftSlide__item" style="width: 100%; height: 100%">
          <img class="leftSlide__item-img" :src="game.background_image" />
        </div>
      </slide>
    </hooper>
    <hooper
      :vertical="true"
      :itemsToShow="1"
      :centerMode="true"
      :infiniteScroll="true"
      :autoPlay="true"
      :playSpeed="3000"
      :transition="1000"
      :wheelControl="false"
      group="MainSlider"
      class="finalSlider__right"
    >
      <slide
        v-for="game in sliderGames"
        :key="game.id"
        class="finalSlider__right-slide rightSlide"
      >
        <div class="rightSlide__item" style="width: 100%; height: 100%">
          <img class="rightSlide__item-img" :src="game.background_image" />
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import Api from "../service/api";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "MyComponent",
  data() {
    return {
      sliderItemsID: [452642, 3328, 428839, 494384, 463723, 29238, 437059],
      sliderGames: [],
      sliderGamesStores: [],
    };
  },
  components: {
    Hooper,
    Slide,
  },
  methods: {},
  async mounted() {
    // this.$store.dispatch("loadAllGames");
    // this.$store.dispatch("loadAllPlatforms");
    // console.log(this.sliderItemsID);
    let sliderGames = this.sliderGames;
    let sliderGamesStores = this.sliderGamesStores;

    this.sliderItemsID.forEach(async function (element) {
      // console.log(element)
      let respGames = await Api().get(
        `games/${element}?&key=a93f8e4bce884b11ae59a173f67e656c`
      );
      let respStore = await Api().get(
        `games/${element}/stores?&key=a93f8e4bce884b11ae59a173f67e656c`
      );

      // console.log("respGames", respGames.data);
      sliderGames.push(respGames.data);
      sliderGamesStores.push(respStore.data.results);
    });
  },
  computed: {
    // games() {
    //   return this.$store.state.games;
    // },
    // platforms() {
    //   return this.$store.state.platforms;
    // },
  },
};
</script>

<style lang="scss" scoped>
.finalSlider {
  display: flex;
  background-color: black;

  &__left {
    height: 100vh;
    width: 50%;

    &-slide {
      overflow: hidden;
      width: 200%;

      .leftSlide__item {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &__right {
    height: 100vh;
    width: 50%;
    transform: rotate(180deg);

    &-slide {
      overflow: hidden;
      width: 200%;

      .rightSlide__item {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(180deg);
      }
    }
  }
}

.hooper-track {
  padding-left: 0 !important;
}
.slider__img {
  width: 00%;
  /* height: 100%; */
  margin: 0 !important;
}
</style>
