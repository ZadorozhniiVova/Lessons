<template>
  <div class="main__comments">
    <div class="main__comments-container container">
      <div class="container__text">
        <h3 class="container__text-title">Words From Our Clients</h3>
        <p class="container__text-comment">
          To make an embarrassing admission, I like video games. That's what got
          me into software engineering when I was a kid. I wanted to make money
          so I could buy a better computer to play better video games - nothing
          like saving the world.
        </p>
        <div class="container__text-rating rating">
          <div class="rating__value">
            <v-rating
              background-color="#6dc849"
              color="#6dc849"
              half-increments
              hover
              length="5"
              size="20"
              :value="4.8"
              readonly
            ></v-rating>
            <span class="rating__value-score"> (4.8/5) </span>
          </div>
          <p class="rating__description">Overall Customer Ratings</p>
        </div>
      </div>
      <div class="container__comments comments">
        <div class="comments__wrapper">
          <div class="comments__wrapper-box box">
            <div class="box__user">
              <VueToyFace
                size="60"
                rounded="75"
                :group="2"
                :toy-number="17"
                class="avatar box__user-img"
              />
              <div class="box__user-info">
                <span class="box__user-info__name"> James Williams </span>
                <v-rating
                  background-color="#151515"
                  color="#151515"
                  half-increments
                  hover
                  length="5"
                  size="20"
                  :value="4"
                  readonly
                ></v-rating>
              </div>
            </div>
            <p class="box__comment-title">
              “ Great Games Collections
              <emoji name="alien" size="20" /> ”
            </p>
            <p class="box__comment-text">
              I was searching this game for many years and I was happy that I
              could find it here.
            </p>
          </div>
          <div class="comments__wrapper-box box">
            <div class="box__user">
              <VueToyFace
                size="60"
                rounded="75"
                :group="2"
                :toy-number="6"
                class="avatar box__user-img"
              />
              <div class="box__user-info">
                <span class="box__user-info__name"> Chris Adams </span>
                <v-rating
                  background-color="#151515"
                  color="#151515"
                  half-increments
                  hover
                  length="5"
                  size="20"
                  :value="4.5"
                  readonly
                ></v-rating>
              </div>
            </div>
            <p class="box__comment-title">
              “ Perfect Response Author <emoji name="yum" size="20" />”
            </p>
            <p class="box__comment-text">
              I had a question about the game and the yours response was great
              &amp; comfort.
            </p>
          </div>
        </div>
        <div class="comments__wrapper">
          <div class="comments__wrapper-box box">
            <div class="box__user">
              <VueToyFace
                size="60"
                rounded="75"
                :group="2"
                :toy-number="14"
                class="avatar box__user-img"
              />
              <div class="box__user-info">
                <span class="box__user-info__name"> Angeline Flora </span>
                <v-rating
                  background-color="#151515"
                  color="#151515"
                  half-increments
                  hover
                  length="5"
                  size="20"
                  :value="4.5"
                  readonly
                ></v-rating>
              </div>
            </div>
            <p class="box__comment-title">
              “It’s a-me, Mario! <emoji name="four_leaf_clover" size="20" /> ”
            </p>
            <p class="box__comment-text">
              This in-joke for video gamers is said by Ezio’s uncle Mario after
              meeting on the road. It quickly became one of the more iconic
              quotes within the game for its reference to our favorite Italian
              plumber.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Emoji from "vuejs-emojis";
import VueToyFace from "vue-toy-face";
export default {
  components: {
    VueToyFace,
    Emoji,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_mixins.scss";
.main__comments {
  width: 100%;
  padding: 120px 0 130px;
  background-color: #151515;
  @include maxWidth(1260px) {
    padding: 70px 0 90px;
  }
  @include maxWidth(756px) {
    padding: 40px 0 60px;
  }
  .container {
    @include flex-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    // flex-wrap: wrap;

    @include maxWidth(1200px) {
      @include flex-center-column;
    }

    &__text {
      max-width: 468px;
      padding: 16px 33px 10px 0;

      @include maxWidth(1340px) {
        @include flex-center-column;
        text-align: center;
        width: 100%;
        padding: 0;
        max-width: 80%;
      }
      @include maxWidth(1260px) {
        @include flex-center-column;
        max-width: 95%;
      }

      &-title {
        // font-family: $titleFont;
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 50px;
        text-transform: capitalize;
        color: #6dc849;
        text-align: left;
        width: 100%;

        @include maxWidth(1200px) {
          font-size: 38px;
          @include flex-center-column;
          text-align: center;
          width: 100%;
        }
        @include maxWidth(560px) {
          font-size: 36px;
        }
      }

      &-comment {
        // font-family: $textFont;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 34px;
        color: white;
        margin-bottom: 14px;
        text-align: left;
        @include maxWidth(1200px) {
          text-align: center;
        }

        @include maxWidth(768px) {
          width: 80%;
          font-size: 16px;
          line-height: 22px;
        }
      }
      .rating {
        width: 100%;
        text-align: left;
        @include maxWidth(1200px) {
          text-align: center;
        }
        &__value {
          display: inline-flex;
          margin-bottom: 12px;

          &-img {
            width: 120px;
            height: 20px;
            margin-right: 10px;
            @include maxWidth(768px) {
              width: 80px;
            }
          }
          &-score {
            // font-family: $titleFont;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 37px;
            color: #6dc849;
            @include maxWidth(768px) {
              font-size: 18px;
              line-height: 36px;
            }
          }
        }
        &__description {
          //   font-family: $textFont;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          color: #6dc849;
        }
      }
    }
    .comments {
      @include flexStart;
      padding: 10px 0 20px;
      @include maxWidth(1340px) {
        width: 100%;
        @include flexCenter;
      }
      @include maxWidth(768px) {
        @include flex-center-column;
      }

      &__wrapper {
        margin-right: 20px;

        @include maxWidth(1410px) {
          margin-right: 10px;
        }
        @include maxWidth(768px) {
          margin-right: 0;
        }

        .box {
          background: #6dc849;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.11);
          max-width: 381px;
          padding: 30px 35px 24px;
          @include transition(0.3s);
          @include maxWidth(1410px) {
            padding: 25px 30px 19px;
          }
          @include maxWidth(900px) {
            padding: 15px 17px 12px;
          }
          @include maxWidth(768px) {
            padding: 10px 12px 7px;
          }
          &:hover {
            @include scale(1.02);
          }
          & + .box {
            margin-top: 20px;
            @include maxWidth(768px) {
              margin-bottom: 20px;
            }
          }
          &__user {
            @include flexStart;
            margin-bottom: 20px;
            &-img {
              width: 85px;
              margin-right: 20px;
              @include maxWidth(900px) {
                width: 65px;
              }
            }
            &-info {
              @include flex-left-column;
              &__name {
                // font-family: $titleFont;
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 29px;
                color: #151515;
                margin-bottom: 15px;

                @include maxWidth(900px) {
                  font-size: 20px;
                  line-height: 25px;
                }
              }
              &__rating {
                width: 73px;
                height: 13px;
                @include maxWidth(900px) {
                  width: 60px;
                }
              }
            }
          }
          &__comment-title {
            // font-family: $titleFont;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 33px;
            color: #151515;
            margin-bottom: 13px;
            @include maxWidth(900px) {
              font-size: 18px;
              line-height: 27px;
            }
          }
          &__comment-text {
            // font-family: $textFont;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 29px;
            color: #151515;
            padding-right: 8px;
            @include maxWidth(900px) {
              font-size: 14px;
              line-height: 25px;
              padding-right: 0;
            }
          }
        }
      }
    }
  }
}
.box__user-img {
  margin: 0 !important;
}

.mdi-star:first-child {
  margin-left: 0 !important;
  padding-left: 0 !important;
}
</style>
