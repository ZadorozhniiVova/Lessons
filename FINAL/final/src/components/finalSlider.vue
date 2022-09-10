<template>
  <div>
    <hooper
      :vertical="true"
      style="height: 70vh"
      :itemsToShow="1"
      :centerMode="true"
      :infiniteScroll="true"
      :autoPlay="true"
      :playSpeed="2000"
    >
      <slide
        v-for="game in sliderGames"
        :key="game"
        style="overflow: hidden; width: 100%"
      >
        <div class="slide" style="width: 100%; height: 100%">
          <img class="slider__img" :src="game.background_image" />
        </div>
      </slide>
    </hooper>
  </div>
</template>
<!-- <hooper class="productSliderRight" group="group1" :vertical="true" :infiniteScroll="true">
      <slider class="productSliderRight__slide" v-for="game in sliderGames" :key="game" >
        <div class="slyde__el">
          <img class="slyde__el-img" :src="game.background_image" />
          <span>{{ game.name }}</span>
        </div>
      </slider>
    </hooper>  -->
<script>
import Api from "../service/api";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "MyComponent",
  data() {
    return {
      sliderItemsID: [
        326243, 27976, 647552, 494384, 463723, 29238, 437059, 490752,
      ],
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
        `games/${element}?&key=aa0261996cd54584b28260614f7a2d1b`
      );
      let respStore = await Api().get(
        `games/${element}/stores?&key=aa0261996cd54584b28260614f7a2d1b`
      );

      console.log("respGames", respGames.data);
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

<style>
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hooper-track {
  padding-left: 0 !important;
}
.slider__img {
  width: 100%;
  margin: 0 !important;
}
</style>
