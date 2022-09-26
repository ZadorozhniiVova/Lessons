<template>
  <div class="finalCatalogItem" @mouseover="onSlider">
    <div class="finalCatalogItem__top">
      <div class="finalCatalogItem__slider">
        <hooper
          :pagination="true"
          :autoPlay="allowAutoplay"
          :playSpeed="1000"
          :transition="300"
          :infiniteScroll="true"
        >
          <slide
            v-for="image in product_data.short_screenshots"
            :key="image.id"
          >
            <img class="finalCatalogItem__img" :src="image.image" alt="" />
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>

      <div class="finalCatalogItem__info">
        <div
          v-if="product_data.metacritic"
          class="finalCatalogItem__info-metacritic"
        >
          {{ product_data.metacritic }}
        </div>
        <div class="finalCatalogItem__info-platforms platforms">
          <div
            class="platforms__name"
            v-for="platform in product_data.platforms"
            :key="platform.id"
          >
            {{ platform.platform.name }}
          </div>
        </div>
        <router-link
          :to="{ name: 'gameId', params: { id: `${product_data.id}` } }"
          class="finalCatalogItem__info-name"
          >{{ product_data.name }}</router-link
        >
        <div class="finalCatalogItem__btn">
          <v-btn
            class="finalCatalogItem__btn-favorite"
            icon
            :color="btnLike"
            @click="addToFavorite"
            v-if="$store.state.user"
          >
            <v-icon dark> mdi-heart </v-icon>
          </v-btn>
          <div class="d-flex justify-end align-center">
            <v-rating
              background-color="green lighten-2"
              color="green"
              half-increments
              hover
              length="5"
              size="20"
              :value="product_data.rating"
            ></v-rating>
            <div>
              {{ product_data.rating }}({{ product_data.reviews_count }})
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="finalCatalogItem__btm">
      <div class="finalCatalogItem__btm-info info">
        <div class="info__wrapper">
          <span class="info__wrapper-name">Release Date:</span>
          <span class="info__wrapper-content">{{ product_data.released }}</span>
        </div>
        <hr class="info__br" />
        <div class="info__wrapper">
          <span class="info__wrapper-name">Last Update:</span>
          <span class="info__wrapper-content">{{ product_data.updated }}</span>
        </div>
        <hr class="info__br" />
        <div class="info__wrapper">
          <span class="info__wrapper-name">Genre:</span>
          <div class="info__wrapper-genre genre">
            <span
              class="genre__name"
              v-for="genre in product_data.genres"
              :key="genre.id"
              >{{ genre.name }}</span
            >
          </div>
        </div>
        <v-btn class="info__wrapper-btn" block outlined color="grey">
          <router-link
            class="info__wrapper-btn__link"
            :to="{ name: 'gameId', params: { id: `${product_data.id}` } }"
            >Show more info ></router-link
          >
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import "hooper/dist/hooper.css";
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";

export default {
  name: "finalCatalogItem",
  data() {
    return {
      allowAutoplay: false,
      btnLike: "grey",
      favoriteList: [],
    };
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  methods: {
    onSlider: function () {
      // console.log("over");
      this.allowAutoplay = true;
    },
    addToFavorite() {
      if (this.btnLike == "red") {
        this.btnLike = "grey";
        this.$emit("deleteFromFavorite");
      } else {
        this.btnLike = "red";
        this.$emit("addToFavorite", this.product_data);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixins.scss";
* {
  font-family: "Josefin Sans", sans-serif;
  font-style: normal;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.finalCatalogItem {
  padding: 0px;
  text-decoration: none;
  position: relative;
  transition: 0.1s;
  height: 100%;
  width: 100%;
  min-width: 100%;
  background-color: #202020;
  border-radius: 12px;
  -webkit-box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 7%);
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    overflow: visible;
    z-index: 2;
    border-radius: 12px 12px 0 0;
  }
  &:hover .finalCatalogItem__btm {
    opacity: 1;
    top: auto;
    left: 0;
    z-index: 2;
  }
  &:hover .finalCatalogItem__btn {
    opacity: 1;
  }

  &__btm {
    position: absolute;
    top: 0;
    opacity: 1;
    z-index: -1;
    border-radius: 0 0 12px 12px;
    overflow: hidden;
    width: 100%;
    background-color: #202020 !important;
    padding: 12px;
    @include maxWidth(1024px) {
      padding: 10px;
    }

    .info {
      background-color: #202020 !important;
      color: white;

      &__br {
        margin: 10px 0;
      }
      &__wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-name {
          margin-right: 10px;
          opacity: 0.8;
          font-size: 12px;
        }
        .genre {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: center;

          &__name {
            margin: 2px 5px;
            padding: 2px 4px;
            background-color: #6dc849;
            border-color: rgba(109, 200, 73, 0.4);
            border-radius: 10px;
          }
        }
        &-btn {
          width: 100%;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;

          &__link {
            text-decoration: none;
            font-size: 16px;
            color: white;
          }
        }
      }
    }
  }
  &__top {
    border-radius: 12px 12px 0 0;
    background-color: #202020;
    overflow: hidden;
  }

  &__slider {
    width: 100%;
    max-width: 100%;
    min-height: 56%;
    height: 56%;

    .hooper-pagination {
      width: 100% !important;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 0.3s;

      .hooper-indicators {
        justify-content: center !important;
        align-items: center !important;
        width: 100% !important;

        li {
          width: 30px !important;
          margin: 0 3px !important;

          .hooper-indicator {
            width: 100% !important;
            background-color: grey !important;
            opacity: 0.7 !important;
          }

          &.is-active {
            width: 100% !important;
            background-color: #6dc849 !important;
            opacity: 0.7 !important;
          }
          &:hover {
            background-color: #6dc849;
          }
        }
      }
    }
  }
  &__img {
    height: 100%;
    width: 100%;
  }

  &__info {
    padding: 12px;
    position: relative;
    @include maxWidth(1024px) {
      padding: 10px;
    }
    &-metacritic {
      position: absolute;
      right: 10px;
      top: 10px;
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
    }
    &-platforms {
      width: 90%;
      margin-bottom: 10px;
      height: 40px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;

      .platforms__name {
        font-family: "Josefin Sans", sans-serif;
        font-style: normal;
        font-size: 10px;
        line-height: 10px;
        display: inline-flex;
        flex-wrap: wrap;
        flex: 0 1 auto;
        color: #6dc849;
        align-items: center;
        justify-content: flex-start;
        margin-right: 6px;
      }
    }
    &-rating {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-name {
      font-family: "Josefin Sans", sans-serif;
      font-style: normal;
      font-weight: 700;
      color: white !important;
      text-decoration: none;
      font-size: 20px;
      line-height: 23px;
      height: 46px;
      display: block;
      &:hover {
        opacity: 0.6;
      }
    }
    .finalCatalogItem__btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 1;
    }
  }

  &__tbtn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padd &-btn {
      color: white !important;
      padding: 3px;
    }
  }

  &:hover .hooper-pagination {
    opacity: 1;
  }
}
.hooper-pagination {
  width: 100% !important;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s;

  .hooper-indicators {
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;

    li {
      width: 30px !important;
      margin: 0 3px !important;

      .hooper-indicator {
        width: 100% !important;
        background-color: grey !important;
        opacity: 0.7 !important;
        &.is-active {
          width: 100% !important;
          background-color: #6dc849 !important;
          opacity: 0.7 !important;
        }
        &:hover {
          background-color: #6dc849 !important;
        }
      }
    }
  }
}
.v-icon,
.v-icon--link {
  padding: 4px !important;
}
</style>
