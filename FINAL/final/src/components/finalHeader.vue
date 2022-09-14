<template>
  <div class="hello">
    <header class="header">
      <div class="header__container">
        <a href="#" class="header__container-logo logo">
          <img class="logo__img" src="../assets/logo.png" alt="" />
        </a>
        <nav class="header__container-markets markets">
          <ul class="markets__list">
            <li class="markets__list-el markets__list-el__microsoft">
              <a
                class="markets__list-el__link link"
                href="https://www.microsoft.com/uk-ua/store/games/windows"
              >
                <svg
                  class="link__img link__img-microsoft"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 22h9.5v-9.5H2V22zm0-10.5h9.5V2H2v9.5zM12.5 2v9.5H22V2h-9.5zm0 20H22v-9.5h-9.5V22z"
                  />
                </svg>
              </a>
            </li>
            <li class="markets__list-el markets__list-el__xbox">
              <a
                class="markets__list-el__link"
                href="https://www.xbox.com/ru-RU/microsoft-store"
              >
                <svg
                  class="link__img link__img-xbox"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12c0-.001 0-.001 0-.002 0-3.618-1.606-6.861-4.144-9.054l-.015-.013c-1.91 1.023-3.548 2.261-4.967 3.713l-.004.004c.044.046.087.085.131.132 3.719 4.012 7.106 9.73 6.546 12.471 1.53-1.985 2.452-4.508 2.452-7.246 0-.002 0-.004 0-.006zM12.591 3.955c1.68-1.104 3.699-1.833 5.872-2.022l.048-.003c-1.837-1.21-4.09-1.929-6.511-1.929-2.171 0-4.207.579-5.962 1.591l.058-.031c.658.567 2.837.781 5.484 2.4.143.089.316.142.502.142.189 0 .365-.055.513-.149l-.004.002zM9.166 6.778c.046-.049.093-.09.138-.138-1.17-1.134-2.446-2.174-3.806-3.1l-.099-.064c-.302-.221-.681-.354-1.091-.354-.146 0-.288.017-.425.049l.013-.002c-2.398 2.198-3.896 5.344-3.896 8.84 0 2.909 1.037 5.576 2.762 7.651l-.016-.02c-1.031-2.547 2.477-8.672 6.419-12.862zM12.084 9.198c-3.962 3.503-9.477 8.73-8.632 11.218 2.174 2.213 5.198 3.584 8.542 3.584 3.493 0 6.637-1.496 8.826-3.883l.008-.009c.486-2.618-4.755-7.337-8.744-10.91z"
                  />
                </svg>
              </a>
            </li>
            <li class="markets__list-el markets__list-el__ps">
              <a
                class="markets__list-el__link"
                href="https://store.playstation.com/ru-ua/pages/latest"
              >
                <svg
                  class="link__img link__img-ps"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 31 24"
                >
                  <path
                    d="m18.646 5.077c.044.289.069.622.069.96 0 .109-.003.218-.008.326l.001-.015c0 2.344-.007 4.688.006 7.032.655.34 1.427.549 2.245.57h.007c.022.001.048.001.074.001.521 0 1.011-.131 1.439-.362l-.016.008c.478-.268.867-.644 1.143-1.096l.008-.014c.295-.491.512-1.064.616-1.677l.004-.029c.08-.464.125-.998.125-1.542 0-.191-.006-.382-.017-.57l.001.026c-.013-1.131-.259-2.202-.692-3.171l.02.051c-.269-.559-.613-1.036-1.027-1.443l-.001-.001c-.389-.383-.824-.72-1.298-1l-.031-.017c-.979-.56-2.112-1.048-3.302-1.404l-.116-.03c-.75-.24-1.505-.47-2.262-.69-1.323-.375-2.652-.735-4.005-.987q0 11.2 0 22.393l5.065 1.607q.006-9.414 0-18.827c-.001-.018-.001-.039-.001-.06 0-.36.112-.693.304-.967l-.004.005c.115-.146.292-.24.49-.24.038 0 .074.003.11.01l-.004-.001c.234.043.44.143.609.286l-.002-.002c.235.224.397.523.446.858l.001.008zm-13.226 13.272c1.738-.621 3.475-1.249 5.216-1.866.007-.076.01-.165.01-.254 0-.034-.001-.069-.002-.103v.005c0-.865 0-1.73 0-2.594-2.202.777-4.4 1.563-6.602 2.342-.537.196-1.082.37-1.608.594-.675.272-1.254.581-1.795.943l.035-.022c-.243.156-.438.368-.569.619l-.004.009c-.065.135-.103.294-.103.461 0 .139.026.271.073.393l-.003-.007c.139.322.354.589.624.785l.005.004c.47.338 1.02.601 1.613.756l.035.008c1.548.53 3.332.835 5.187.835.117 0 .234-.001.351-.004h-.017c.995-.024 1.948-.129 2.876-.308l-.108.017c.014-.146.006-.293.008-.439 0-.732 0-1.463 0-2.194-.744.266-1.487.537-2.23.806-.244.101-.536.193-.837.26l-.037.007c-.406.087-.873.138-1.351.139h-.001c-.009 0-.021 0-.032 0-.42 0-.823-.072-1.198-.204l.025.008c-.15-.049-.271-.15-.344-.282l-.002-.003c-.007-.025-.011-.054-.011-.084 0-.102.047-.193.12-.254h.001c.188-.165.413-.294.66-.372l.013-.004zm25.184-1.68c-.436-.361-.949-.648-1.509-.831l-.033-.009c-.309-.098-.609-.22-.918-.314-1.432-.449-3.079-.708-4.786-.708-.036 0-.073 0-.109 0h.006c-.502.018-1.004.032-1.503.09-1.52.165-2.908.484-4.228.946l.132-.04q0 1.52 0 3.04c1.829-.64 3.654-1.287 5.482-1.928.551-.183 1.185-.288 1.844-.288h.052-.003c.018 0 .039-.001.06-.001.412 0 .808.071 1.176.201l-.025-.008c.148.048.269.147.343.276l.002.003c.005.024.008.051.008.079 0 .139-.075.261-.186.327l-.002.001c-.291.195-.629.352-.99.453l-.025.006q-3.85 1.374-7.699 2.745c-.054.01-.033.076-.038.114v2.834q5.06-1.819 10.121-3.635c.665-.218 1.21-.437 1.738-.685l-.092.039c.528-.245.979-.567 1.359-.959l.001-.001c.198-.209.32-.492.32-.804 0-.004 0-.008 0-.012v.001c-.034-.378-.22-.707-.497-.929l-.003-.002z"
                  />
                </svg>
              </a>
            </li>
            <li class="markets__list-el markets__list-el__steam">
              <a
                class="markets__list-el__link"
                href="https://store.steampowered.com/"
              >
                <svg
                  class="link__img link__img-steam"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 259"
                >
                  <path
                    d="M127.779 0C60.42 0 5.24 52.412 0 119.014l68.724 28.674a35.812 35.812 0 0 1 20.426-6.366c.682 0 1.356.019 2.02.056l30.566-44.71v-.626c0-26.903 21.69-48.796 48.353-48.796 26.662 0 48.352 21.893 48.352 48.796 0 26.902-21.69 48.804-48.352 48.804-.37 0-.73-.009-1.098-.018l-43.593 31.377c.028.582.046 1.163.046 1.735 0 20.204-16.283 36.636-36.294 36.636-17.566 0-32.263-12.658-35.584-29.412L4.41 164.654c15.223 54.313 64.673 94.132 123.369 94.132 70.818 0 128.221-57.938 128.221-129.393C256 57.93 198.597 0 127.779 0zM80.352 196.332l-15.749-6.568c2.787 5.867 7.621 10.775 14.033 13.47 13.857 5.83 29.836-.803 35.612-14.799a27.555 27.555 0 0 0 .046-21.035c-2.768-6.79-7.999-12.086-14.706-14.909-6.67-2.795-13.811-2.694-20.085-.304l16.275 6.79c10.222 4.3 15.056 16.145 10.794 26.46-4.253 10.314-15.998 15.195-26.22 10.895zm121.957-100.29c0-17.925-14.457-32.52-32.217-32.52-17.769 0-32.226 14.595-32.226 32.52 0 17.926 14.457 32.512 32.226 32.512 17.76 0 32.217-14.586 32.217-32.512zm-56.37-.055c0-13.488 10.84-24.42 24.2-24.42 13.368 0 24.208 10.932 24.208 24.42 0 13.488-10.84 24.421-24.209 24.421-13.359 0-24.2-10.933-24.2-24.42z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div class="buttonLogin">
            <b-button
              v-if="!userName"
              @click="loadModal"
              variant="outline-primary"
              >Login</b-button
            >
            <b-button v-else @click="clearUserData" variant="outline-primary"
              >Logout</b-button
            >
          </div>
        </nav>
      </div>
    </header>
    <finalLoginModal :show="showLogin" @login="userLogIn" />
  </div>
</template>

<script>
import finalLoginModal from "@/components/finalLoginModal.vue";
export default {
  name: "finalHeader",
  props: {},
  components: {
    finalLoginModal,
  },
  data() {
    return {
      showLogin: false,
      password: "",
      userName: false,
    };
  },
  computed: {
    userName() {
      return localStorage.getItem("userName");
    },
  },
  methods: {
    loadModal: function () {
      this.showLogin = !this.showLogin;
    },
    userLogIn() {
      this.userName = true;
    },
    clearUserData() {
      localStorage.clear();
      this.userName = false;
    },
  },
  mounted() {
    if (localStorage.getItem("userName")) {
      this.userName = true;
    } else {
      this.userName = false;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// * {
//   cursor: url("../assets/coursor.svg"), auto;
// }
.header {
  width: 100%;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);

  &__container {
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 100px;
      height: 50px;
      min-width: 100px;
      min-height: 50px;

      &__img {
        width: 100%;
      }
    }

    .menu {
      &__list {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;

        &-el {
          & + .menu__list-el {
            margin-left: 10px;
          }

          &__link {
            color: black;
            text-decoration: none;
          }
        }
      }
    }

    .markets {
      display: flex;
      justify-content: center;
      align-items: center;
      &__list {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;
        margin-bottom: 0;

        &-el {
          width: 30px;
          height: 30px;
          max-width: 30px;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            transform: scale(1.2);
          }
          & + .markets__list-el {
            margin-left: 20px;
          }

          &__link {
            color: black;
            text-decoration: none;

            .link__img {
              width: 100%;
              height: 100%;
              transition: 0.3s;
            }
          }

          &__microsoft :hover .link__img-microsoft {
            fill: #4285f4;
          }
          &__xbox :hover .link__img-xbox {
            fill: #9bc848;
          }
          &__ps :hover .link__img-ps {
            fill: #006fcd;
          }
          &__steam :hover .link__img-steam {
            fill: #1b2838;
          }
        }
      }
    }
  }
}

.buttonLogin {
  margin-left: 10px;
}
</style>
