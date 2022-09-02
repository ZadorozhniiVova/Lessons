<template>
  <div class="wrapper" id="wrapper">
    <div class="card" :class="{ rotateCard: isCardTurn }">
      <div class="card__front" :class="{ rotate: isCardTurn }">
        <div class="card__focus"></div>
        <div class="card__bg">
          <img src="../assets/10.jpeg" alt="" class="card__bg-img" />
        </div>
        <div class="card__item">
          <div class="card__item-label label">
            <img src="../assets/chip.png" alt="chip" class="label__chip" />
            <img src="../assets/visa.png" alt="visa" class="label__type" />
          </div>
          <div class="card__item-number Number">
            <div
              v-for="(n, $index) in 16"
              :key="$index + 1"
              style="
                display: flex;
                justify-content: flex-start;
                align-items: center;
              "
            >
              <transition name="slide-fade-up">
                <span
                  class="card__numbers"
                  v-if="cardNumber[$index] == undefined"
                >
                  #
                </span>
                <div
                  class="card__numbers"
                  style="font-size: 16px"
                  v-else-if="$index > 3 && $index < 12"
                >
                  &#128945;
                </div>
                <div class="card__numbers" v-else>{{ cardNumber[$index] }}</div>
              </transition>
              <div
                class="card__numbers"
                v-if="$index == 3 || $index == 7 || $index == 11"
                style="margin-right: 30px"
              ></div>
            </div>
          </div>
          <div class="card__item-holder holder">
            <div class="holder__name" style="position: relative">
              <span class="holder__name-title">Card Holder</span>
              <transition name="slide-fade-up">
                <span class="holder__subtitle-name" v-if="!cardName.length"
                  >FULL NAME</span
                >
                <span v-if="cardName.length" key="1">
                  
                    <span
                      class="holder__subtitle-name"
                      v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')"
                      :key="$index + 1"
                      >
                      <transition name="slide-fade-up"><span>{{ n }}</span></transition>
                    </span>

                </span>
              </transition>
            </div>
            <div class="holder__expire">
              <span class="holder__expire-title">Expires</span>
              <div class="holder__expire-date date">
                <h3 class="holder__subtitle-exp" v-if="cardExpireMonth == ''">
                  MM
                </h3>
                <h3 class="holder__subtitle-exp" v-else>
                  {{ cardExpireMonth }}
                </h3>
                <h3 class="holder__subtitle-exp">/</h3>
                <h3 class="holder__subtitle-exp" v-if="cardExpireYear == ''">
                  YY
                </h3>
                <h3 class="holder__subtitle-exp" v-else>
                  {{ cardExpireYear }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__back" :class="{ rotate__back: isCardTurn }">
        <div class="card__bg">
          <img src="../assets/10.jpeg" alt="" class="card__bg-img" />
        </div>
        <div class="card__back-line"></div>
        <div class="card__back-cvv cvv">
          <span class="cvv__title-back">CVV</span>
          <div class="cvv__input-back">
            <span v-for="(n, $index) in cvvNum" :key="$index"> * </span>
          </div>
          <div class="card__back-type">
            <img src="../assets/visa.png" alt="visa" class="label__type" />
          </div>
        </div>
      </div>
    </div>

    <form class="form" id="form">
      <div class="mb-3">
        <label for="exampleInputNumber" class="form-label">Card Number</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputNumber"
          minlength="16"
          maxlength="16"
          required
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
          v-model="cardNumber"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Card Holders</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          required
          v-model="cardName"
          @change="isVisibleName = !isVisibleName"
        />
      </div>
      <div class="form__secure">
        <div class="form__secure-date date" required>
          <label for="dateSelect" class="form-label">Expiration Date</label>
          <div class="date__choice">
            <select
              class="form-select form__select-date"
              aria-label="Default select example"
              id="dateSelect"
              required
              v-model="cardExpireMonth"
            >
              <option selected value="">Month</option>
              <option v-for="n in 12" :value="n" :key="n">{{ n }}</option>
            </select>
            <select
              class="form-select form__select-date"
              aria-label="Default select example"
              required
              v-model="cardExpireYear"
            >
              <option selected value="">Year</option>
              <option v-for="n in 12" :value="date + n - 2000" :key="n">
                {{ date + n }}
              </option>
            </select>
          </div>
        </div>
        <div class="form__secure-cvv">
          <label for="cvv" class="form-label">CVV</label>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="cvv"
              minlength="3"
              maxlength="3"
              @focus="cardTurn(true)"
              @blur="cardTurn(false)"
              required
              v-model="cvvNum"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      date: 2021,
      cardName: "",
      cardNumber: "",
      cardExpireYear: "",
      cardExpireMonth: "",
      cvvNum: "",
      isCardTurn: false,
      isVisibleName: true,
      cardTurn: function (result) {
        this.isCardTurn = result;
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  background: #ddeefc;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

.mb-3 {
  margin-bottom: 20px;
  text-align: left;
}

.form {
  max-width: 570px;
  margin: auto;
  width: 100%;
  background: #fff;
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  padding: 35px;
  padding-top: 180px;
}

.form-control {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  padding: 5px 15px;
  background: none;
  color: #1a3b5d;
  font-family: "Source Sans Pro", sans-serif;
}
.form-select {
  max-width: 150px;
  width: 150px;

  height: 50px !important;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  padding: 5px 15px;
  background: none;
  color: #1a3b5d;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-appearance: none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC);
  background-size: 12px;
  background-position: 90% center;
  background-repeat: no-repeat;
  padding-right: 30px;
}

.form__select-date {
  height: auto;
  max-height: 100px;
}

.form__select-date + .form__select-date {
  margin-left: 15px;
}

.form__secure {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form__secure-date {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.date__choice {
  display: flex;
}

.form__secure-cvv {
  max-width: 150px;
}

.form__secure-cvv > .mb-3 {
  margin-bottom: 0 !important;
}
.btn-primary {
  width: 100%;
  height: 55px;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
}

.card {
  max-width: 430px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;
  margin-bottom: -130px;
  border-radius: 15px;
  border: none;
  position: relative;
  background: transparent;
}

.card__front,
.card__back {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 60px 0 rgb(14 42 90 / 55%);
  transform: perspective(2000px);
  transform-style: preserve-3d;
  transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: 0.7s ease-in-out;
}

.card__font {
  transform: rotateY(0deg);
}

.card__back {
  position: absolute;
  height: 100%;
  background-color: #1c1d27;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg) !important;
}

.card__back-line {
  background: rgba(0, 0, 19, 0.8);
  width: 100%;
  height: 50px;
  margin-top: 30px;
  position: relative;
  z-index: 2;
}
.card__back-cvv {
  text-align: right;
  position: relative;
  z-index: 2;
  padding: 15px;
}

.card__back-type {
  height: 45px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 100px;
  margin-left: auto;
  width: 100%;
}

.cvv__title-back {
  padding-right: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 5px;
}
.cvv__input-back {
  height: 45px;
  background: #fff;
  margin-bottom: 30px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: #1a3b5d;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 0px 10px 20px -7px rgb(32 56 117 / 35%);
}

.card__item {
  font-family: "Source Code Pro", monospace;
  padding: 25px 15px;
  position: relative;
  z-index: 4;
  height: 100%;
  text-shadow: 7px 6px 10px rgb(14 42 90 / 80%);
  user-select: none;
  border-radius: 15px;
}

.card__focus {
  position: absolute;
  z-index: 3;
  border-radius: 15px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  border: 2px solid rgb(255 255 255 / 65%);
}

.card__bg {
  height: 100%;
  position: absolute;
  height: 100%;
  background-color: rgb(28 29 39);
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.card__bg-img {
  max-width: 100%;
  display: block;
  max-height: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card__back .card__bg-img {
  transform: scaleX(-1);
}
.form-label {
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #1a3b5d;
  width: 100%;
  display: block;
  user-select: none;
  text-align: left;
}

.label {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 10px;
}

.label__chip {
  width: 60px;
}

.label__type {
  height: 45px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 100px;
  margin-left: auto;
  width: 100%;
}

.card__item-number {
  font-weight: 500;
  line-height: 1;
  color: rgb(255 255 255);
  font-size: 27px;
  margin-bottom: 35px;
  display: inline-flex;
  padding: 10px 15px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  justify-content: center;
}

.card__numbers {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card__item-holder {
  color: rgb(255 255 255);
  display: flex;
  align-items: flex-start;
}

.holder__name {
  color: rgb(255 255 255);
  width: 100%;
  max-width: calc(100% - 85px);
  padding: 10px 15px;
  font-weight: 500;
  display: block;
  cursor: pointer;
}

.holder__name-title {
  opacity: 0.7;
  font-size: 13px;
  margin-bottom: 6px !important;
}
.holder__expire-title {
  opacity: 0.7;
  font-size: 13px;
  margin-bottom: 6px;
}

.holder__subtitle-name {
  font-size: 18px;
  font-family: "Source Code Pro", monospace;
  line-height: 1;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  margin-bottom: 0;
}

.holder__subtitle-name__letter {
  display: inline-block;
  min-width: 8px;
  position: relative;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
}
.holder__subtitle-exp {
  font-family: "Source Code Pro", monospace;
  font-size: 18px;
  line-height: 1;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
}

.holder__expire {
  flex-wrap: wrap;
  font-size: 18px;
  margin-left: auto;
  padding: 10px;
  display: inline-flex;
  width: 80px;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
}

.holder__expire-date {
  font-weight: 500;
  line-height: 1;
  color: #fff;
  font-size: 27px;

  display: inline-block;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.holder__expite-title {
  opacity: 0.7;
  font-size: 13px;
  padding-bottom: 6px;
  width: 100%;
}

.holder__expire-date h3 {
  margin-bottom: 0;
  width: 22px;
  display: flex;
  justify-content: center;
}

.rotate {
  transform: rotateY(180deg);
}

.rotate__back {
  transform: rotateY(360deg) !important;
}

.slide-fade-up-enter {
  opacity: 0;
  transform: translate(0, 15px);
  pointer-events: none;
}
.slide-fade-up-enter-active {
  transition: all 0.25s ease-in-out;
  transition-delay: 0.1s;
  position: relative;
}
.slide-fade-up-leave-active {
  transition: all 0.25s ease-in-out;
  position: absolute;
}

.slide-fade-up-leave-to {
  opacity: 0;
  transform: translate(0, -15px);
  pointer-events: none;
}

.slide-fade-right-enter-active {
  transition: all 0.25s ease-in-out;
  transition-delay: 0.1s;
  position: relative;
}
.slide-fade-right-leave-active {
  transition: all 0.25s ease-in-out;
  position: absolute;
}
.slide-fade-right-enter {
  opacity: 0;
  transform: translateX(10px) rotate(45deg);
  pointer-events: none;
}
.slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(-10px) rotate(45deg);
  pointer-events: none;
}
</style>
