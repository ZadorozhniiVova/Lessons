<template>
  <div class="gamePage" @mousemove="move">
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
              <h4 class="pageTitle__text">Game Info</h4>
            </div>
            <div
              class="gameCard__container-game d-flex flex-wrap justify-space-between"
            >
              <div class="gameCard__container-left game">
                <div class="game__title d-flex flex-column align-start">
                  <div class="mb-2">
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
                  <div class="game__subtitle-rating rating" @click="addRating">
                    <v-rating
                      class="game__rating"
                      :value="gameInfo.rating"
                      color="warning"
                      background-color="warning lighten-1"
                      hover
                      half-increments
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
                <div class="d-flex flex-column justify-start align-start">
                  <h4 class="gameCard__container-title">Where To Buy:</h4>
                  <div
                    class="gameCard__container-buy buy justify-center"
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
                <h4 class="gameCard__container-title">About:</h4>
                <div class="info__container d-flex justify-start align-start">
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5 class="info__container-title">Genre</h5>
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
                    <h5 class="info__container-title">Release date</h5>
                    <p class="genre__list-item">{{ gameInfo.released }}</p>
                  </div>
                </div>
                <div
                  class="info__container d-flex justify-space-between align-start"
                >
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5 class="info__container-title">Platforms</h5>
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
                    <h5 class="info__container-title">Metascore</h5>
                    <a
                      v-if="gameInfo.metacritic"
                      :href="gameInfo.metacritic_url"
                      class="metacritic"
                      >{{ gameInfo.metacritic }}</a
                    >
                  </div>
                </div>
                <div
                  class="info__container d-flex justify-space-between align-start"
                >
                  <div
                    class="w-50 d-flex flex-column justify-center align-start"
                  >
                    <h5 class="info__container-title">Developer</h5>
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
                    <h5 class="info__container-title">Publisher</h5>
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
                    class="w-100 d-flex flex-column justify-center align-start"
                  >
                    <h5 class="info__container-title">Web Site</h5>
                    <div class="game__subtitle-genre genre">
                      <a class="genre__link" :href="gameInfo.website">{{
                        gameInfo.website
                      }}</a>
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
          <div class="gameCard__container gameCard__container-screenshots">
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
                class="screenschots__slider-Btm"
                group="screenshots"
                :settings="hooperScreenShotBtmSettings"
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
import { eventBus } from "../main";
export default {
  data() {
    return {
      key: "fa71b951c31e4e3b9af2efbdf3fe7c97",
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
      hooperScreenShotBtmSettings: {
        vertical: false,
        autoPlay: true,
        playSpeed: 4000,
        infiniteScroll: true,
        // itemsToShow: 3,
        breakpoints: {
          500: { itemsToShow: 2 },
          800: {
            itemsToShow: 2,
          },
          900: {
            itemsToShow: 3,
          },
        },
      },

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
    addRating() {
      console.log(this.gameInfo.ratings_count);
      this.gameInfo.ratings_count += 1;
      return this.gameInfo.ratings_count;
    },
    move($event) {
      if ($event.pageX < 50) {
        eventBus.$emit("isOpenSideMenu", true);
      } else {
        eventBus.$emit("isOpenSideMenu", false);
      }
    },
  },
  async beforeMount() {
    let gameId = this.gameId;
    let respGameId = await Api().get(`games/${gameId}?&key=${this.key}`);
    let respGameIdMarket = await Api().get(
      `games/${gameId}/stores?&key=${this.key}`
    );

    let respGameIdAchivPage1 = await Api().get(
      `games/${gameId}/achievements?&key=${this.key}&page=1`
    );
    let respGameIdAchivPage2 = await Api().get(
      `games/${gameId}/achievements?&key=${this.key}&page=2`
    );
    let respGameIdAchivPage3 = await Api().get(
      `games/${gameId}/achievements?&key=${this.key}&page=3`
    );
    let respGameIdScreenshots = await Api().get(
      `games/${gameId}/screenshots?&key=${this.key}`
    );

    console.log("respGameId", respGameId.data);
    console.log("respGameIdAchivPage2", respGameIdAchivPage2.data);

    // console.log("respGameIdMarket.data.results", respGameIdMarket.data.results); //url
    this.gameInfo = respGameId.data;
    this.storesInfo = respGameIdMarket.data.results;
    respGameIdAchivPage1.data.results.forEach((element) => {
      this.achivements.push(element);
    });
    respGameIdAchivPage2.data.results.forEach((element) => {
      this.achivements.push(element);
    });
    respGameIdAchivPage3.data.results.forEach((element) => {
      this.achivements.push(element);
    });
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
@import "../assets/scss/_mixins.scss";
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

    @include maxWidth(768px) {
      left: -6px !important;
      top: 36px !important;
    }

    .hooper-indicators {
      padding-left: 20px !important;
      @include maxWidth(768px) {
        padding-left: 0px !important;
      }

      li {
        height: 10px !important;

        .hooper-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: 0.3s ease-in-out;

          &:hover {
            background-color: #6dc849;
          }
          &.is-active {
            background-color: #6dc849;
          }
        }

        & + li {
          margin-top: 10px;
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
        rgba(0, 0, 0, 0.77) 100%
      );
      z-index: 0;
    }
    &__container {
      z-index: 2;
      padding: 20px 0;
      margin: 0 auto;
      max-width: 90%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      @include maxWidth(768px) {
        max-width: 90%;
        justify-content: center;
        align-items: flex-start;
      }

      &-game {
        height: 100%;
        @include maxWidth(768px) {
          align-items: flex-start !important;
          justify-content: flex-start !important;
        }

        .game {
          width: 55%;
          margin-right: 10px;

          @include maxWidth(768px) {
            width: 100%;
            margin-right: 0;
            height: auto;
            max-height: 30%;
          }
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
              @include maxWidth(1260px) {
                font-size: 60px;
                line-height: 66px;
                margin-bottom: 0;
              }

              @include maxWidth(768px) {
                font-size: 45px;
                line-height: 50px;
                margin-bottom: 0;
              }
              @include maxWidth(550px) {
                font-size: 30px;
                line-height: 36px;
                margin-bottom: 0;
              }
            }

            &-released {
              font-size: 12px;
              line-height: normal;
              font-weight: 400;
              border-radius: 4px;
              background-color: #fff;
              padding: 2px 7.5px;
              @include maxWidth(768px) {
                font-size: 10px;
              }
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
              @include maxWidth(768px) {
                font-size: 10px;
              }
              @include maxWidth(550px) {
                padding-right: 40px;
                font-size: 8px;
                letter-spacing: 1px;
              }
            }
          }

          &__subtitle {
            display: inline-flex;
            margin: 10px 0;
            flex-wrap: wrap;
            justify-content: flex-start;
            @include maxWidth(768px) {
              margin: 5px 0;
            }
            @include maxWidth(500px) {
              margin: 0;
            }

            // .author {
            //   display: flex;
            //   justify-content: flex-start;
            //   align-items: center;
            //   &__name {
            //     font-family: "Josefin Sans", sans-serif;
            //     font-style: normal;
            //     font-weight: 400;
            //     font-size: 20px;
            //     line-height: 31px;
            //     display: flex;
            //     align-items: center;
            //     color: #c6c6c6;
            //     margin-bottom: 0;
            //   }
            // }

            // .genre {
            //   display: flex;
            //   justify-content: flex-start;
            //   align-items: center;
            //   text-decoration: none;

            //   .genre__list {
            //     display: inline-flex;
            //     justify-content: flex-start;
            //     align-items: center;
            //     padding-left: 0;
            //     margin-bottom: 0;

            //     &-item {
            //       list-style: none;
            //       font-family: "Josefin Sans", sans-serif;
            //       font-style: normal;
            //       font-weight: 400;
            //       font-size: 20px;
            //       line-height: 31px;
            //       display: flex;
            //       align-items: center;
            //       color: #c6c6c6;

            //       & + .genre__list-item {
            //         &:before {
            //           content: "&";
            //           margin: 0 10px;
            //           font-family: "Josefin Sans", sans-serif;
            //           font-weight: 400;
            //           font-weight: 300;
            //           font-size: 30px;
            //           line-height: 41px;
            //           display: flex;
            //           align-items: center;
            //           color: #c6c6c6;
            //         }
            //       }
            //     }
            //   }
            // }

            .rating {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .v-icon,
              .v-rating {
                @include maxWidth(768px) {
                  padding: 1px !important;
                  margin-bottom: 10px;
                }
                @include maxWidth(500px) {
                  padding: 0px !important;
                  font-size: 18px !important;
                }
              }

              &__answers {
                font-family: "Josefin Sans", sans-serif;
                font-weight: 400;
                font-style: normal;
                font-size: 20px;
                line-height: 20px;
                max-height: 20px;
                // display: inline-block;
                // padding-top: 2px;
                // display: flex;
                // @include flexCenter;
                color: #c6c6c6;
                @include maxWidth(768px) {
                  margin: 0 2px 14px;
                }
                @include maxWidth(500px) {
                  font-size: 14px !important;
                  margin: 0 2px 16px;
                }
              }
            }

            // .author ~ div {
            //   margin-left: 10px;
            // &:before {
            //   content: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='24' width='24'><path d='M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z' fill='%23134578' /></svg>");
            //   margin: 0 10px;
            //   font-family: "Josefin Sans", sans-serif;
            //   font-style: normal;
            //   font-weight: 600;
            //   font-size: 30px;
            //   line-height: 41px;
            //   display: flex;
            //   align-items: center;
            //   color: #c6c6c6;
            // }
            // }
          }

          &__info {
            &-text {
              width: 100%;
              max-width: 100%;
              font-family: "Josefin Sans", sans-serif;
              font-weight: 300;
              font-size: 20px;
              line-height: 33px;
              color: #fefcfe;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -moz-box;
              -moz-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 15;
              -webkit-box-orient: vertical;
              line-clamp: 15;
              box-orient: vertical;
              @include maxWidth(1260px) {
                line-height: 20px;
              }
              @include maxWidth(768px) {
                font-size: 15px;
                line-height: 18px;
                line-clamp: 9;
                -webkit-line-clamp: 9;
              }
              @include maxWidth(550px) {
                font-size: 13px;
                line-height: 14px;
                line-clamp: 9;
                -webkit-line-clamp: 9;
              }
            }
          }
        }
        .gameCard__container-right {
          width: 425px;
          @include maxWidth(1080px) {
            width: 300px;
          }
          @include maxWidth(768px) {
            width: 100%;
          }

          .gameCard__container-title {
            margin: 0;
            font-size: 18px;
            font-weight: 400;
            color: hsla(0, 0%, 100%, 0.4);
            @include maxWidth(1080px) {
              width: 100%;
              text-align: left;
            }
          }
          .buy {
            display: flex;
            justify-content: space-between !important;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 100%;

            @include maxWidth(1080px) {
              justify-content: center !important;
            }
            @include maxWidth(768px) {
              justify-content: flex-start !important;
              margin: 5px 0;
            }

            &__btn {
              width: 200px;
              height: 40px !important;
              color: hsla(0, 0%, 100%, 0.5) !important;
              border-radius: 6px !important;
              background-color: hsla(0, 0%, 100%, 0.1) !important;

              display: flex;
              flex-direction: column;
              align-items: center;
              margin: 5px;
              padding: 6px 12px !important;
              padding-bottom: 0px !important;
              text-align: left !important;
              background-color: #2c2e30 !important;
              transition: 0.3s ease-in-out;

              @include maxWidth(1080px) {
                width: 100%;
                height: 30px !important;
              }
              @include maxWidth(768px) {
                width: auto;
                padding: 5px 12px 0 !important;
                &:first-child {
                  margin-left: 0;
                }
              }
              @include maxWidth(550px) {
                padding: 3px 8px 0 !important;
              }

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
                font-weight: 300;
                letter-spacing: 0;
                color: #fefcfe !important;
                line-height: 16px;
                margin-bottom: 0 !important;
                @include maxWidth(1080px) {
                  font-size: 12px;
                  line-height: 12px;
                }
              }
            }
          }
          .info__container {
            background-color: rgba(0, 0, 0, 0.6);
            color: white;
            margin: 10px 0;
            border-radius: 10px;
            padding: 5px;
            @include maxWidth(768px) {
              margin: 5px 0;
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
            .genre__list-item {
              font-size: 16px;
              @include maxWidth(1080px) {
                font-size: 12px;
              }
              @include maxWidth(768px) {
                margin-bottom: 0 !important;
                font-size: 10px;
                line-height: 12px;
              }
            }
            .genre__link {
              text-decoration: none;
              color: white;
              transition: 0.1s;
              font-size: 16px;
              @include maxWidth(1080px) {
                font-size: 12px;
              }
              &:hover {
                color: grey;
              }
            }
            .info__container-title {
              font-size: 20px;

              @include maxWidth(1080px) {
                font-size: 16px;
              }
            }
          }
        }
      }
      .pageTitle {
        top: 40px;
        margin-bottom: 40px;
        color: white;
        width: 100%;
        @include maxWidth(768px) {
          display: none;
        }

        &__text {
          margin-bottom: 0;
        }
      }

      .achivement {
        width: 100%;
        height: 100%;
        max-width: 1300px;
        margin: 0 auto;
        display: grid;
        gap: 5px;
        grid-template-columns: repeat(10, 1fr);
        justify-items: center;
        align-items: center;
        @include maxWidth(1150px) {
          grid-template-columns: repeat(6, 1fr);
        }
        @include maxWidth(600px) {
          grid-template-columns: repeat(5, 1fr);
        }
        .achivement__card {
          width: 80px;
          height: 140px;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          text-align: center;
          border-radius: 5px;
          transition: 0.3s;
          transition: 0.3s;
          animation: flipH 8s linear infinite;
          perspective: 4000px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-content: center;
          cursor: pointer;
          border: 2px solid gold;
          background-position: center;
          background-size: cover;
          -webkit-box-shadow: 10px 10px 43px -18px rgba(255, 234, 0, 0.77);
          -moz-box-shadow: 10px 10px 43px -18px rgba(255, 234, 0, 0.77);
          box-shadow: 10px 10px 43px -18px rgba(255, 234, 0, 0.77);
          @include maxWidth(1300px) {
            width: 60px;
            height: 120px;
          }

          @include maxWidth(1150px) {
            // width: 50px;
            height: 110px;
          }

          @include maxWidth(700px) {
            width: 50px;
            height: 100px;
          }
          @include maxWidth(550px) {
            width: 50px;
            height: 80px;
          }
          @include maxWidth(550px) {
            width: 40px;
            height: 60px;
          }

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
        @include maxWidth(768px) {
          display: none;
        }

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
        @include flex-center-column;
        @include maxWidth(768px) {
          height: 80%;
        }
        @include maxWidth(650px) {
          height: 60%;
        }
        .hooper-track {
          height: 100%;
        }
        .screenschots__slider-Top {
          height: 70%;
          width: 80%;
          margin-bottom: 10px;
          @include maxWidth(1000px) {
            width: 95%;
          }
          @include maxWidth(1000px) {
            width: 98%;
            height: 50%;
          }

          .screenschots__slideTop {
            height: 100%;
            border-radius: 10px;
            overflow: hidden;
            // display: contents;
            // display: flex;
            // justify-content: center;
            // align-items: center;

            .screenschots__slideTop-img {
              border-radius: 10px;
              margin: 0px;
              width: 100%;
              height: 100%;
            }
          }
        }

        .screenschots__slider-Btm {
          width: 80%;
          @include maxWidth(1000px) {
            width: 95%;
          }
          @include maxWidth(500px) {
            display: none;
          }
          .screenschots__slideBtm {
            padding: 0 5px;
            border-radius: 5px;
            @include transition(0.4s);
            // overflow: hidden;

            .screenschots__slideBtm-img {
              border-radius: 5px;
              margin: 0px;
              height: 100%;
              width: 100%;
              @include transition(0.4s);
            }
          }
        }
      }
    }
  }
  .gameCard__container-screenshots {
    @include flexCenter;
    // height:80% !important;
    width: 100% !important;
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

.gamePage
  .gameCard__container-game
  .gameCard__container-right
  .info__container {
  @include maxWidth(1080px) {
  }
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
    // position: absolute;
    bottom: 20px;
    right: 50%;
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
</style>
