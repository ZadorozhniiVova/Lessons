<template>
  <div class="finalSlider d-flex flex-column justify-center align-center">
    <div class="finalSlider__container d-flex justify-center align-center">
      <div class="finalSlider__left">
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
          class="finalSlider__left-left"
        >
          <slide
            v-for="game in sliderGames"
            :key="game.id"
            class="finalSlider__left-left-slide leftSlide"
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
          class="finalSlider__left-right"
        >
          <slide
            v-for="game in sliderGames"
            :key="game.id"
            class="finalSlider__left-right-slide rightSlide"
          >
            <div class="rightSlide__item" style="width: 100%; height: 100%">
              <img class="rightSlide__item-img" :src="game.background_image" />
            </div>
          </slide>
        </hooper>
      </div>
      <hooper
        :vertical="true"
        :itemsToShow="3"
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
          <div class="rightSlide__item">
            <img class="rightSlide__item-img" :src="game.background_image" />
          </div>
        </slide>
      </hooper>
    </div>
    <hooper
      :itemsToShow="5"
      :centerMode="true"
      :infiniteScroll="true"
      :autoPlay="true"
      :playSpeed="3000"
      :transition="1000"
      :wheelControl="false"
      :mouseDrag="true"
      group="MainSlider"
      class="finalSlider__bottom"
    >
      <slide
        v-for="game in sliderGames"
        :key="game.id"
        class="finalSlider__bottom-slide bottomSlide"
      >
        <div class="bottomSlide__item d-flex justify-center align-center h-100">
          <span class="bottomSlide__item-name">{{ game.name }}</span>
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
      sliderGamesStores: []
    };
  },
  components: {
    Hooper,
    Slide
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
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.finalSlider {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 600px;
  padding: 20px 0;
  background-color: #151515;

  &__container {
    width: 90%;
    height: 80%;
    min-height: 80%;
    margin: 0 auto;

    .finalSlider__left {
      display: flex;
      background-color: #151515;
      height: 100%;
      width: 70%;
      .finalSlider__left-left {
        height: 100%;
        width: 50%;

        &-slide {
          overflow: hidden;
          height: 100%;
          width: 200%;

          .leftSlide__item {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .finalSlider__left-right {
        height: 100%;
        width: 50%;
        transform: rotate(180deg);

        &-slide {
          overflow: hidden;
          width: 200%;
          height: 100%;

          .rightSlide__item {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotate(180deg);
          }
        }
      }
    }
    .finalSlider__right {
      width: 30%;
      height: 100%;

      &-slide {
        // height: fit-content !important;

        .rightSlide__item {
          width: 100%;
          // height: fit-content;
        }
      }
    }
  }
  &__bottom {
    width: 90% !important;
    overflow: hidden;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-slide {
      .bottomSlide__item {
        height: 100%;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
      }
      &.is-active .bottomSlide__item{
        color: white !important;
      }
    }
  }
}

.hooper-track {
  padding-left: 0 !important;
}
.slider__img {
  width: 200%;
  /* height: 100%; */
  margin: 0 !important;
}
</style>
