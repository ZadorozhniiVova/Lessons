<template>
  <div class="gamePage">
    <!-- <hooper
      class="gameSliderNav"
      group="groupGame"
      :vertical="true"
      :transition="800"
      :itemsToShow="3"
      :centerMode="true"
      style="position: absolute; left: 20px"
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
            <div
              class="gameCard__container-game d-flex flex-wrap justify-space-between"
            >
              <div class="gameCard__container-left game">
                <div class="game__title d-flex flex-column align-start">
                  <div class="mb-5">
                    <span class="game__title-released mr-2">{{
                      gameInfo.released
                    }}</span>
                    <span class="game__title-playTime mr-2"
                      >AVERAGE PLAYTIME: {{ gameInfo.playtime }} HOURS</span
                    >
                  </div>
                  <h1
                    class="game__title-text"
                    v-animate-css="fadeInDown5001000"
                  >
                    {{ gameInfo.name }}
                  </h1>
                </div>
                <div class="game__subtitle">
                  <div class="game__subtitle-author author">
                    <h3
                      class="author__name"
                      v-for="publisher of gameInfo.publishers"
                      :key="publisher.id"
                    >
                      {{ publisher.name }}
                    </h3>
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
                  <h4 class="game__info-text">
                    {{ gameInfo.description_raw }}
                  </h4>
                </div>
              </div>
              <div class="gameCard__container-right">
                <div class="d-flex flex-column justify-start align-center">
                  <h4 style="color: white">Where To Buy:</h4>
                  <div
                    class="gameCard__container-buy buy justify-lg-start"
                    v-if="storesInfo.length != 0"
                  >
                    <v-btn
                      class="buy__btn"
                      depressed
                      elevation="6"
                      plain
                      color="#2C2E30"
                      v-for="(platform, $index) in storesData"
                      :key="$index.id"
                      :value="platform"
                      :href="storesData[$index].url"
                      ><p class="buy__btn-text">
                        {{ storesData[$index].name }}
                      </p>
                    </v-btn>
                  </div>
                  <div v-else><h2 style="color: white">Out of Selling</h2></div>
                </div>
                <div class="info__container d-flex justify-start align-start">
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Genre</h5>
                    <div class="game__subtitle-genre genre">
                      <div class="genre__list">
                        <span
                          class="genre__list-item"
                          v-for="genre in gameInfo.genres"
                          :key="genre.id"
                        >
                          {{ genre.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Release date</h5>
                    <p>{{ gameInfo.released }}</p>
                  </div>
                </div>
                <div
                  class="info__container d-flex justify-space-between align-start"
                >
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Platforms</h5>
                    <div class="game__subtitle-genre genre">
                      <div class="genre__list">
                        <span
                          class="genre__list-item"
                          v-for="platform in platforms"
                          :key="platform.id"
                        >
                          {{ platform.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Metascore</h5>
                    <a :href="gameInfo.metacritic_url" class="metacritic">{{
                      gameInfo.metacritic
                    }}</a>
                  </div>
                </div>
                <div
                  class="info__container d-flex justify-space-between align-start"
                >
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Developer</h5>
                    <div class="game__subtitle-genre genre">
                      <div class="genre__list">
                        <span
                          class="genre__list-item"
                          v-for="developer in gameInfo.developers"
                          :key="developer.id"
                        >
                          {{ developer.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Publisher</h5>
                    <div class="game__subtitle-genre genre">
                      <div class="genre__list">
                        <span
                          class="genre__list-item"
                          v-for="publisher in gameInfo.publishers"
                          :key="publisher.id"
                        >
                          {{ publisher.name }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="info__container d-flex justify-space-between align-start"
                >
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5>Web Site</h5>
                    <div class="game__subtitle-genre genre">
                      <a :href="gameInfo.website">{{ gameInfo.website }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
      <!-- <slide id="gameMainSlide">  //Характеристики
        <div
          class="gameCard"
          :style="{ backgroundImage: 'url(' + gameInfo.background_image + ')' }"
        >
          <div class="gameCard__cover"></div>
          <div class="gameCard__container">
            <div class="gameCard__container-pageTitle pageTitle">
              <h4 class="pageTitle__text">Shops</h4>
            </div>

            <div class="gameCard__container-require require">
              <template>
                <v-card>
                  <v-tabs vertical>
                    <v-tab v-for="platform in platforms" :key="platform">
                      <v-icon left> mdi-account </v-icon>
                      {{ platform.name }}
                    </v-tab>
                    <v-tab-item>
                      <v-card
                        flat
                        v-for="(platform,$index ) in platforms"
                        :key="$index"
                      >
                        <v-card-text
                          style="display: flex; justify-content: space-between"
                        >
                          <div>
                            <p>
                              {{ platform[$index].minReq }}
                            </p>
                          </div>
                          <div>
                            <p>
                              {{ platform[$index].recReq }}
                            </p>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </v-card>
              </template>
            </div>
          </div>
        </div>
      </slide> -->

      <slide id="gameMainSlide" v-if="achivements.length > 0">
        <div
          v-if="isAchiv"
          class="gameMainSlide__modal d-flex justify-center align-center"
        >
          <div
            v-for="achivement in achivements"
            :key="achivement.id"
            class="d-flex justify-center align-center"
          >
            <div
              v-if="achivement.id == AchivInfo"
              class="d-flex justify-center align-center"
            >
              <div
                class="achivement__modal-info d-flex justify-center align-center flex-column"
              >
                <img
                  :src="achivement.image"
                  alt="achivement.image"
                  class="achivement__modal-img"
                />
                <h2
                  clas="achivement__modal-name animate__animated animate__bounce"
                >
                  {{ achivement.name }}
                </h2>
                <h5 class="achicement__modal-goal">
                  {{ achivement.description }}
                </h5>
              </div>
            </div>
          </div>

          <b-button
            @click="AchivShow"
            variant="outline-success"
            class="closeModal__btn"
            >Close Achivement</b-button
          >
        </div>
        <div
          class="gameCard"
          :style="{ backgroundImage: 'url(' + gameInfo.background_image + ')' }"
        >
          <div class="gameCard__cover"></div>
          <div class="gameCard__container">
            <div class="gameCard__container-pageTitle pageTitle">
              <h4 class="pageTitle__text">Achivements</h4>
            </div>
            <div class="gameCard__container-achivement achivement">
              <div
                @click="AchivShow(achivement.id)"
                class="achivement__card"
                v-animate-css.click="'animate__flipInX'"
                v-for="achivement in achivements"
                :key="achivement.id"
                :style="{
                  backgroundImage: 'url(' + gameInfo.background_image + ')',
                }"
              >
                <div class="achivement__fwd">
                  <img
                    :src="achivement.image"
                    alt="achivement.image"
                    class="achivement__fwd-img"
                  />
                </div>
                <div class="achivement__back">
                  <div class="achivement__back-info">
                    <p clas="achivment__name">
                      {{ achivement.name }}
                    </p>
                    <p class="achicement__goal">
                      {{ achivement.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide id="gameMainSlide" v-if="screenshots.length > 0">
        <div
          class="gameCard gameCard__screenshots"
          :style="{ backgroundImage: 'url(' + gameInfo.background_image + ')' }"
        >
          <div class="gameCard__cover"></div>
          <div class="gameCard__container">
            <div class="gameCard__container-pageTitle pageTitle">
              <h4 class="pageTitle__text">Screenshots</h4>
            </div>
            <div class="gameCard__container-screenschots screenschots">
              <hooper
                group="screenshots"
                class="screenschots__slider-Top"
                :vertical="false"
              >
                <slide
                  class="screenschots__slideTop"
                  v-for="screenshot in screenshots"
                  :key="screenshot.id"
                >
                  <img class="screenschots__slideTop-img" :src="screenshot" />
                </slide>
              </hooper>

              <hooper
                group="screenshots"
                :itemsToShow="3"
                :centerMode="true"
                class="screenschots__slider-Btm"
                :vertical="false"
                :autoPlay="true"
                :playSpeed="1500"
              >
                <slide
                  class="screenschots__slideBtm"
                  v-for="screenshot in screenshots"
                  :key="screenshot.id"
                >
                  <img class="screenschots__slideBtm-img" :src="screenshot" />
                </slide>

                <hooper-navigation
                  slot="hooper-addons-screenshot"
                ></hooper-navigation>
                <hooper-pagination
                  slot="hooper-addons-screenshot"
                ></hooper-pagination>
              </hooper>
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
import "animate.css";
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
      platforms: [],
      achivements: [],
      screenshots: [],
      AchivInfo: "",

      //stiles
      isOpacity: false,
      isAchiv: false,

      //Animate
      fadeInDown5001000: {
        classes: "fadeInDown",
        delay: 500,
        duration: 1000,
      },
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  methods: {
    AchivShow: function (achivementId) {
      this.isAchiv = !this.isAchiv;
      this.AchivInfo = achivementId;
      console.log(this.AchivInfo);
      return achivementId;
    },
  },
  async beforeMount() {
    let gameId = this.gameId;
    let respGameId = await Api().get(
      `games/${gameId}?&key=a93f8e4bce884b11ae59a173f67e656c`
    );
    let respGameIdMarket = await Api().get(
      `games/${gameId}/stores?&key=a93f8e4bce884b11ae59a173f67e656c`
    );

    let respGameIdAchiv = await Api().get(
      `games/${gameId}/achievements?&key=a93f8e4bce884b11ae59a173f67e656c`
    );
    let respGameIdScreenshots = await Api().get(
      `games/${gameId}/screenshots?&key=a93f8e4bce884b11ae59a173f67e656c`
    );

    console.log("respGameId", respGameId.data);
    // console.log("respGameIdAchiv", respGameIdAchiv.data);

    // console.log("respGameIdMarket.data.results", respGameIdMarket.data.results); //url
    this.gameInfo = respGameId.data;
    this.storesInfo = respGameIdMarket.data.results;
    this.achivements = respGameIdAchiv.data.results;

    for (let i = 0; i < respGameIdScreenshots.data.results.length; i++) {
      this.screenshots.push(respGameIdScreenshots.data.results[i].image);
    }
    // console.log(" this.screenshots", this.screenshots);

    for (let i = 0; i < respGameId.data.platforms.length; i++) {
      this.platforms.push({
        name: respGameId.data.platforms[i].platform.name,
        released: respGameId.data.platforms[i].released_at,
      });
    }

    console.log("this.platforms", this.platforms);
    for (let i = 0; i < respGameId.data.stores.length; i++) {
      this.storesNames.push(respGameId.data.stores[i].store.name);
    }
    // console.log(this.storesNames);

    for (let i = 0; i < this.storesInfo.length; i++) {
      this.storesData.push({
        name: this.storesNames[i],
        url: this.storesInfo[i].url,
      });
    }
    // console.log("this.storesData", this.storesData);
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
  font-style: normal;
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

  // .nav__btn {
  //   bottom: 100px !important;
  //   left: 20px !important;
  //   top: auto !important;

  //   .hooper-indicators {
  //     &:first-child {
  //       .hooper-indicator {
  //         &:after {
  //           content: "Game Info";
  //           text-shadow: #999 0 0 10px;
  //           color: white;
  //           width: 200px;
  //           display: inline-block;
  //           font-family: "Josefin Sans", sans-serif;
  //           font-style: normal;
  //           font-weight: 700;
  //           font-size: 24px;
  //           line-height: 30px;
  //           opacity: 0.3;
  //           transition: 0.3s ease-in-out;
  //         }
  //         .hooper-sr-only {
  //           position: absolute;
  //           width: 1px;
  //           height: 1px;
  //           padding: 0;
  //           margin: -1px;
  //           overflow: hidden;
  //           clip: rect(0, 0, 0, 0);
  //           border: 0;
  //         }
  //       }
  //       .is-active {
  //         &::after {
  //           opacity: 1;
  //         }
  //       }
  //       li {
  //         height: 20px !important;
  //       }
  //     }
  //   }
  // }
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
      padding: 40px 0;
      margin: 0 auto;
      max-width: 90%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      position: relative;

      .pageTitle {
        top: 80px;
        margin-bottom: 40px;
        color: white;

        &__text {
          margin-bottom: 0;
        }
      }

      .game {
        width: 60%;
        &__title {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &-text {
            font-family: "Josefin Sans", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 72px;
            letter-spacing: 0;
            line-height: 74px;
            overflow-wrap: break-word;
            color: #fefcfe;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }

          &-released {
            font-size: 12px;
            line-height: normal;
            font-weight: 400;
            border-radius: 4px;
            background-color: #fff;
            padding: 2px 7.5px;
          }
          &-playTime {
            font-size: 12px;
            line-height: normal;
            font-weight: 400;
            text-transform: uppercase;
            color: #fff;
            letter-spacing: 2px;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
        }

        &__subtitle {
          display: inline-flex;
          margin: 20px 0;
          flex-wrap: wrap;
          justify-content: flex-start;

          .author {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &__name {
              font-family: "Josefin Sans", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              line-height: 31px;
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
                font-size: 20px;
                line-height: 31px;
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
              font-size: 20px;
              line-height: 31px;
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
            width: 100%;
            max-width: 100%;
            height: 230px;
            max-height: 230px;
            font-family: "Josefin Sans", sans-serif;
            font-weight: 300;
            letter-spacing: 1.5px;
            font-size: 15px;
            line-height: 33px;
            color: #fefcfe;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -moz-box;
            -moz-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
            line-clamp: 3;
            box-orient: vertical;
          }
        }
      }
      .achivement {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;

        .achivement__card {
          width: 100px;
          height: 160px;
          margin: 20px;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          text-align: center;
          border-radius: 5px;
          transition: 0.3s;
          transition: 0.3s;
          animation: flipH 5s linear infinite;
          perspective: 2000px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-content: center;
          cursor: pointer;
          border: 2px solid gold;
          background-position: center;
          background-size: cover;

          &:hover {
            transform: scale(1.1);
          }

          .achivement__fwd {
            position: absolute;
            width: 100%;
            height: 100%;
            // -webkit-backface-visibility: hidden;
            // backface-visibility: hidden;
            background: #000000;
            // animation: flipH 5s linear infinite;

            &-img {
              margin: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .buy {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        &__btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px !important;
          padding: 6px 12px !important;
          padding-bottom: 0px !important;
          text-align: left !important;
          background-color: #2c2e30 !important;
          height: 37px !important;
          transition: 0.1s ease-in-out;
          border-radius: 4px;
          color: #fefcfe !important;

          .v-btn__content {
            width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          &:hover {
            transform: scale(1.1);
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
            font-size: 16px;
            color: #fefcfe !important;
            line-height: 16px;
            margin-bottom: 0 !important;
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

      .screenschots {
        width: 100%;
        height: 100%;

        .screenschots__slider-Top {
          height: 500px;
          margin-bottom: 10px;

          .screenschots__slideTop {
            height: 500px;
            border-radius: 5px;
            overflow: hidden;
            // display: flex;
            // justify-content: center;
            // align-items: center;

            .screenschots__slideTop-img {
              margin: 0px;
              width: 100%;
            }
          }
        }

        .screenschots__slider-Btm {
          .screenschots__slideBtm {
            margin: 0 5px;
            border-radius: 5px;
            overflow: hidden;

            .screenschots__slideBtm-img {
              margin: 0px;
              height: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }
  .gameCard__screenshots {
    .pageTitle {
      margin-bottom: 20px;
    }

    .hooper {
      flex-direction: row;
      .hooper-track {
        flex-direction: row;
        margin-left: 0 !important;
      }
    }
  }
}
.v-application ol,
.v-application ul {
  padding-left: 0 !important;
}

.isOpacity {
  opacity: 1;
  text-shadow: none;
}

@keyframes flipH {
  0% {
    transform: rotateY(0deg) rotateZ(33deg) skewY(-5deg);
  }
  50% {
    transform: rotateY(180deg) rotateZ(33deg) skewY(-5deg);
  }
  100% {
    transform: rotateY(360deg) rotateZ(33deg) skewY(-5deg);
  }
}
// @keyframes rotateAchBack {
//   0% {
//     transform: rotateY(180deg) rotateZ(33deg) skewY(-5deg);
//   }
//   50% {
//     transform: rotateY(360deg) rotateZ(33deg) skewY(-5deg);
//   }
//   100% {
//     transform: rotateY(540deg) rotateZ(33deg) skewY(-5deg);
// }
// }

.gameMainSlide__modal {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  color: white;
  flex-direction: column;
  transition: 1s ease-in-out;

  .closeModal__btn {
    position: absolute;
    top: 20px;
    right: 80px;
  }
}
.achivement__modal-img {
  width: 400px;
  border-radius: 2px solid gold;
}

.achivement__modal-name {
  font-family: "Josefin Sans", sans-serif !important;
  font-weight: 700 !important;
  font-size: 28px !important;
}

.achivement__modal-goal {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
}

.info__container {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

.metacritic {
  color: #6dc849;
  border-color: rgba(109, 200, 73, 0.4);
  min-width: 32px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px 0;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  border: 1px solid;
  background-color: black;
}
</style>
