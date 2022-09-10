<template>
  <div class="gamePage">
    <!-- <hooper
      class="gameSliderNav"
      group="groupGame"
      :vertical="true"
      :transition="800"
      :itemsToShow="3"
      :centerMode="true"
    >
      <slide> Game Info </slide>
      <slide> Images </slide>
      <slide> slide 3 </slide>
      <slide> slide 4 </slide>
    </hooper> -->
    <hooper
      class="game__slider"
      group="groupGame"
      :vertical="true"
      style="height: 100vh"
      :itemsToShow="1"
      :centerMode="true"
      :transition="800"
    >
      <slide id="gameMainSlide">
        <div
          class="gameCard"
          :style="{ backgroundImage: 'url(' + gameInfo.background_image + ')' }"
        >
          <div class="gameCard__cover"></div>
          <div class="gameCard__container">
            <div class="gameCard__container-pageTitle pageTitle">
              <h4 class="pageTitle__text">Shops</h4>
            </div>
            <div class="gameCard__container-game game">
              <div class="game__title">
                <h1 class="game__title-text">{{ gameInfo.name }}</h1>
              </div>
              <div class="game__subtitle">
                <div class="game__subtitle-author author">
                  <h3
                    class="author__name"
                    v-for="publisher of gameInfo.publishers"
                    :key="publisher"
                  >
                    {{ publisher.name }}
                  </h3>
                </div>
                <div class="game__subtitle-genre genre">
                  <ul class="genre__list">
                    <li
                      class="genre__list-item"
                      v-for="genre in gameInfo.genres"
                      :key="genre"
                    >
                      {{ genre.name }}
                    </li>
                  </ul>
                </div>
                <div class="game__subtitle-rating rating">
                  <v-rating
                    :value="gameInfo.rating"
                    color="grey"
                    dense
                    half-increments
                    readonly
                    size="24"
                  ></v-rating>
                  <span class="rating__answers">{{
                    gameInfo.ratings_count
                  }}</span>
                </div>
              </div>
              <div class="game__info">
                <h4 class="game__info-text">{{ gameInfo.description_raw }}</h4>
              </div>
            </div>
            <div
              class="gameCard__container-buy buy"
              v-if="storesInfo.length != 0"
            >
              <v-btn
                class="buy__btn"
                depressed
                elevation="6"
                plain
                x-large
                color="#2C2E30"
                v-for="(platform, $index) in storesData"
                :key="$index"
                :value="platform"
                :href="storesData[$index].url"
                ><span class="buy__btn-text">{{
                  storesData[$index].name
                }}</span>
              </v-btn>
            </div>
            <div v-else><h2 style="color: white">Out of Selling</h2></div>
            <div class="gameCard__container-age age">
              <div class="age__value">
                <span class="age__value-text"> {{ ageLimit }} +</span>
              </div>
              <div class="age__info">
                <span class="age__info-text">Age limit</span>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide id="gameMainSlide">
        <div
          class="gameCard"
          :style="{ backgroundImage: 'url(' + gameInfo.background_image + ')' }"
        >
          <div class="gameCard__cover"></div>
          <div class="gameCard__container">
            <div class="gameCard__container-pageTitle pageTitle">
              <h4 class="pageTitle__text">Shops</h4>
            </div>
            <div class="gameCard__container-game game">
              <div class="game__title">
                <h1 class="game__title-text">{{ gameInfo.name }}</h1>
              </div>
              <div class="game__subtitle">
                <div class="game__subtitle-author author">
                  <h3
                    class="author__name"
                    v-for="publisher of gameInfo.publishers"
                    :key="publisher"
                  >
                    {{ publisher.name }}
                  </h3>
                </div>
                <div class="game__subtitle-genre genre">
                  <ul class="genre__list">
                    <li
                      class="genre__list-item"
                      v-for="genre in gameInfo.genres"
                      :key="genre"
                    >
                      {{ genre.name }}
                    </li>
                  </ul>
                </div>
                <div class="game__subtitle-rating rating">
                  <v-rating
                    :value="gameInfo.rating"
                    color="grey"
                    dense
                    half-increments
                    readonly
                    size="24"
                  ></v-rating>
                  <span class="rating__answers">{{
                    gameInfo.ratings_count
                  }}</span>
                </div>
              </div>
              <div class="game__info">
                <h4 class="game__info-text">{{ gameInfo.description_raw }}</h4>
              </div>
            </div>
            <div
              class="gameCard__container-buy buy"
              v-if="storesInfo.length != 0"
            >
              <v-btn
                class="buy__btn"
                depressed
                elevation="6"
                plain
                x-large
                color="#2C2E30"
                v-for="(platform, $index) in storesData"
                :key="$index"
                :value="platform"
                :href="storesData[$index].url"
                ><span class="buy__btn-text">{{
                  storesData[$index].name
                }}</span>
              </v-btn>
            </div>
            <div v-else><h2 style="color: white">Out of Selling</h2></div>
            <div class="gameCard__container-age age">
              <div class="age__value">
                <span class="age__value-text"> {{ ageLimit }} +</span>
              </div>
              <div class="age__info">
                <span class="age__info-text">Age limit</span>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide id="gameMainSlide">
        <div
          class="gameCard"
          :style="{ backgroundImage: 'url(' + gameInfo.background_image + ')' }"
        >
          <div class="gameCard__cover"></div>
          <div class="gameCard__container">
            <div class="gameCard__container-pageTitle pageTitle">
              <h4 class="pageTitle__text">Shops</h4>
            </div>
            <div class="gameCard__container-game game">
              <div class="game__title">
                <h1 class="game__title-text">{{ gameInfo.name }}</h1>
              </div>
              <div class="game__subtitle">
                <div class="game__subtitle-author author">
                  <h3 class="author__name">
                    {{ gameInfo.publishers[0].name }}
                  </h3>
                </div>
                <div class="game__subtitle-genre genre">
                  <ul class="genre__list">
                    <li
                      class="genre__list-item"
                      v-for="genre in gameInfo.genres"
                      :key="genre"
                    >
                      {{ genre.name }}
                    </li>
                  </ul>
                </div>
                <div class="game__subtitle-rating rating">
                  <v-rating
                    :value="gameInfo.rating"
                    color="grey"
                    dense
                    half-increments
                    readonly
                    size="24"
                  ></v-rating>
                  <span class="rating__answers">{{
                    gameInfo.ratings_count
                  }}</span>
                </div>
              </div>
              <div class="game__info">
                <h4 class="game__info-text">{{ gameInfo.description_raw }}</h4>
              </div>
            </div>
            <div
              class="gameCard__container-buy buy"
              v-if="storesInfo.length != 0"
            >
              <v-btn
                class="buy__btn"
                depressed
                elevation="6"
                plain
                x-large
                color="#2C2E30"
                v-for="(platform, $index) in storesData"
                :key="$index"
                :value="platform"
                :href="storesData[$index].url"
                ><span class="buy__btn-text">{{
                  storesData[$index].name
                }}</span>
              </v-btn>
            </div>
            <div v-else><h2 style="color: white">Out of Selling</h2></div>
            <div class="gameCard__container-age age">
              <div class="age__value">
                <span class="age__value-text"> {{ ageLimit }} +</span>
              </div>
              <div class="age__info">
                <span class="age__info-text">Age limit</span>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-pagination class="nav__btn" slot="hooper-addons">
        <ol class="hooper-indicators">
          <li>
            <button type="button" class="hooper-indicator">
              <span class="hooper-sr-only"></span>
            </button>
          </li>
          <li>
            <button type="button" class="hooper-indicator">
              <span class="hooper-sr-only">item 1</span>
            </button>
          </li>
          <li>
            <button type="button" class="hooper-indicator">
              <span class="hooper-sr-only">item 2</span>
            </button>
          </li>
        </ol>
      </hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import Api from "../service/api";
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      gameId: this.$route.params.id,
      gameInfo: [],
      genres: [],
      storesInfo: [],
      storesNames: [],
      storesData: [],
      ageLimit: "12",

      //stiles
      isOpacity: false,
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  methods: {},
  async beforeMount() {
    let gameId = this.gameId;
    let respGameId = await Api().get(
      `games/${gameId}?&key=aa0261996cd54584b28260614f7a2d1b`
    );
    let respGameIdMarket = await Api().get(
      `games/${gameId}/stores?&key=aa0261996cd54584b28260614f7a2d1b`
    );

    console.log("respGameId", respGameId.data.stores);
    console.log("respGameIdMarket.data.results", respGameIdMarket.data.results); //url
    this.gameInfo = respGameId.data;
    this.storesInfo = respGameIdMarket.data.results;

    for (let i = 0; i < respGameId.data.stores.length; i++) {
      this.storesNames.push(respGameId.data.stores[i].store.name);
    }
    console.log(this.storesNames);

    for (let i = 0; i < this.storesInfo.length; i++) {
      this.storesData.push({
        name: this.storesNames[i],
        url: this.storesInfo[i].url,
      });
    }
    console.log("this.storesData", this.storesData);
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.gamePage {
  .gameSliderNav {
    z-index: 999 !important;
    position: absolute !important;
    bottom: 0 !important;
    color: white !important;
    width: 200px;

    .hooper-slide {
      height: 30px !important;
    }
  }

  .hooper-pagination {
    left: 10px !important;
    top: 80px !important;
    width: 60px;

    .hooper-indicators {
      padding-left: 20px !important;

      li {
        height: 10px !important;

        .hooper-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: 0.3s ease-in-out;
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }

  .nav__btn {
    bottom: 100px !important;
    left: 20px !important;
    top: auto !important;

    .hooper-indicators {
      &:first-child {
        .hooper-indicator {
          &:after {
            content: "Game Info";
            color: white;
            width: 200px;
            display: inline-block;
            font-family: "Josefin Sans", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            opacity: 0.3;
            transition: 0.3s ease-in-out;
          }
          .hooper-sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
          }
        }
        .is-active {
          &::after {
            opacity: 1;
          }
        }
        li {
          height: 20px !important;
        }
      }
    }
  }
  .gameCard {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: relative;

    &__cover {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.85) 11.61%,
        rgba(0, 0, 0, 0) 100%
      );
      z-index: 0;
    }
    &__container {
      z-index: 2;
      width: 95%;
      padding: 80px 40px 100px;
      margin: 0 auto;
      max-width: 1400px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .pageTitle {
        top: 80px;
        margin-bottom: 160px;
        color: white;

        &__text {
          margin-bottom: 0;
        }
      }

      .game {
        width: 100%;
        margin-bottom: 75px;
        &__title {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &-text {
            font-family: "Josefin Sans", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 64px;
            line-height: 79px;
            color: #fefcfe;
          }
        }

        &__subtitle {
          display: inline-flex;
          margin: 30px 0;

          .author {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &__name {
              font-family: "Josefin Sans", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 30px;
              line-height: 41px;
              display: flex;
              align-items: center;
              color: #c6c6c6;
              margin-bottom: 0;
            }
          }

          .genre {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .genre__list {
              display: inline-flex;
              justify-content: flex-start;
              align-items: center;
              padding-left: 0;
              margin-bottom: 0;

              &-item {
                list-style: none;
                font-family: "Josefin Sans", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 30px;
                line-height: 41px;
                display: flex;
                align-items: center;
                color: #c6c6c6;

                & + .genre__list-item {
                  &:before {
                    content: "&";
                    margin: 0 10px;
                    font-family: "Josefin Sans", sans-serif;
                    font-weight: 400;
                    font-weight: 300;
                    font-size: 30px;
                    line-height: 41px;
                    display: flex;
                    align-items: center;
                    color: #c6c6c6;
                  }
                }
              }
            }
          }

          .rating {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &__answers {
              font-family: "Josefin Sans", sans-serif;
              font-weight: 400;
              font-style: normal;
              font-size: 30px;
              line-height: 41px;
              display: flex;
              align-items: center;
              color: #c6c6c6;
            }
          }

          .author ~ div {
            margin-left: 10px;
            &:before {
              content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='24' width='24'><path d='M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z' fill='%23134578' /></svg>");
              margin: 0 10px;
              font-family: "Josefin Sans", sans-serif;
              font-style: normal;
              font-weight: 600;
              font-size: 30px;
              line-height: 41px;
              display: flex;
              align-items: center;
              color: #c6c6c6;
            }
          }
        }

        &__info {
          &-text {
            font-family: "Josefin Sans", sans-serif;
            font-weight: 300;
            letter-spacing: 1.5px;
            font-size: 20px;
            line-height: 33px;
            color: #fefcfe;
          }
        }
      }

      .buy {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &__btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          padding: 12px 24px !important;
          text-align: left !important;
          background-color: #2c2e30 !important;
          height: 57px !important;
          transition: 0.1s ease-in-out;
          border-radius: 4px;
          color: #fefcfe !important;

          .v-btn__content {
            width: 100% !important;
          }

          & + .buy__btn {
            margin-left: 20px !important;
          }

          &:active {
            box-shadow: 0px 0px 0px 4px #000000, 0px 0px 0px 8px #ffffff,
              0px 0px 15px 4px #ffffff !important;
          }

          &:focus {
            box-shadow: 0px 0px 0px 4px #000000, 0px 0px 0px 8px #ffffff,
              0px 0px 15px 4px #ffffff !important;
          }

          &-text {
            font-family: "Josefin Sans", sans-serif;
            font-size: 24px;
            color: #fefcfe !important;
            height: 19px;
            display: block;
          }
        }
      }

      .age {
        position: absolute;
        right: 0;
        bottom: 40px;
        align-self: flex-end;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border: 2px solid white;
        background-color: black;

        &__value {
          padding: 15px 5px;
          background-color: orange;
          display: flex;
          align-items: center;
          justify-content: center;
          &-text {
            color: white;
            font-family: "Alfa Slab One", cursive;
            font-weight: 400;
            font-size: 35px;
          }
        }
      }
    }
  }
}

.isOpacity {
  opacity: 1;
}
</style>
