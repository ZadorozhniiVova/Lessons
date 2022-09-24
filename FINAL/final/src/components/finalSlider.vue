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
          :playSpeed="5000"
          :transition="2000"
          :wheelControl="false"
          group="MainSlider"
          class="finalSlider__left-left"
        >
          <slide
            v-for="game in sliderGames"
            :key="game.id"
            class="finalSlider__left-left-slide leftSlide"
          >
            <div class="leftSlide__item">
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
          :playSpeed="5000"
          :transition="2000"
          :wheelControl="false"
          group="MainSlider"
          class="finalSlider__left-right"
        >
          <slide
            v-for="game in sliderGames"
            :key="game.id"
            class="finalSlider__left-right-slide rightSlide"
          >
            <div class="rightSlide__item">
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
        :playSpeed="5000"
        :transition="2000"
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
      :itemsToShow="3"
      :centerMode="true"
      :infiniteScroll="true"
      :autoPlay="true"
      :playSpeed="5000"
      :transition="500"
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

// , 494384, 463723, 29238, 437059
export default {
  name: "MyComponent",
  data() {
    return {
      sliderItemsID: [452642, 3328, 428839],
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
    let sliderGames = this.sliderGames;
    let sliderGamesStores = this.sliderGamesStores;

    this.sliderItemsID.forEach(async function (element) {
      let respGames = await Api().get(
        `games/${element}?&key=fa71b951c31e4e3b9af2efbdf3fe7c97`
      );
      let respStore = await Api().get(
        `games/${element}/stores?&key=fa71b951c31e4e3b9af2efbdf3fe7c97 `
      );

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
@import "../assets/scss/_mixins.scss";
@import url("https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.finalSlider {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 70vh;
  padding: 20px 0;
  background-color: #151515;

  @include maxWidth(1300px) {
    height: 60vh;
  }
  @include maxWidth(1000px) {
    height: 50vh;
  }
  @include maxWidth(800px) {
    height: 40vh;
  }
  @include maxWidth(650px) {
    height: 40vh;
    padding: 0;
  }
  // @include maxWidth(500px) {
  //   height: 30vh;
  // }
  // @include maxWidth(400px) {
  //   height: 25vh;
  // }

  &__container {
    width: 90%;
    height: 100%;
    max-width: 1300px;
    min-height: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
    @include maxWidth(650px) {
      width: 100%;
    }

    .finalSlider__left {
      display: flex;
      background-color: #151515;
      height: 100%;
      width: 70%;

      @include maxWidth(650px) {
        width: 100%;
      }
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

            &-img {
              height: 100%;
              width: 200%;
            }
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
            &-img {
              height: 100%;
              width: 200%;
            }
          }
        }
      }
    }
    .finalSlider__right {
      width: 30%;
      height: 100%;
      @include maxWidth(650px) {
        display: none;
      }

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
    width: 70% !important;
    overflow: hidden;
    margin: 10px 0;
    min-height: 75px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @include maxWidth(650px) {
      display: none;
    }

    &-slide {
      .bottomSlide__item {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
        transition: 0.4s ease-in-out;
        &-name {
          font-family: "Fredericka the Great", cursive;
          font-size: 30px;
          width: 100%;
          text-align: center;
          @include maxWidth(1300px) {
            font-size: 25px;
          }
          @include maxWidth(1000px) {
            font-size: 22px;
          }
          @include maxWidth(800px) {
            font-size: 18px;
          }
          @include maxWidth(700px) {
            font-size: 14px;
          }
          @include maxWidth(500px) {
            font-size: 10px;
          }
          @include maxWidth(400px) {
            font-size: 8px;
          }
        }
      }
      &.is-active .bottomSlide__item {
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
