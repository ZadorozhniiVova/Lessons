<template>
  <div v-if="showLoginModal" class="login-page" name="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div
            v-if="!registerActive"
            class="card login"
            v-bind:class="{ error: emptyFields }"
          >
            <v-btn
              class="closeModalBtn"
              @click="closeModal"
              text
              color="primary"
            >
              Close
            </v-btn>
            <h1>Sign In</h1>
            <form class="form-group login" @submit.prevent="login">
              <input
                v-model="login_form.email"
                type="email"
                class="form-control"
                placeholder="Email"
              />
              <input
                v-model="login_form.password"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <input type="submit" class="btn btn-success" value="Login" />
              <p>
                Don't have an account?
                <a
                  class="link-modal"
                  href="#"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Sign up here</a
                >
              </p>
            </form>
          </div>

          <div
            v-else
            class="card register"
            v-bind:class="{ error: emptyFields }"
          >
            <v-btn
              class="closeModalBtn"
              @click="closeModal"
              text
              color="primary"
            >
              Close
            </v-btn>
            <h1>Sign Up</h1>
            <form class="form-group register" @submit.prevent="register">
              <input
                v-model="register_form.email"
                type="email"
                class="form-control"
                placeholder="Email address"
              />
              <input
                v-model="register_form.password"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <input type="submit" value="Register" class="btn btn-success" />
              <p>
                Already have an account?
                <a
                  class="link-modal"
                  href="#"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Sign in here</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../vuex/store";
import { eventBus } from "../main";
export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});

    const login = () => {
      store.dispatch("login", login_form.value);
    };
    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },

  props: {
    show: {
      type: Boolean,
    },
  },
  data: function () {
    return {
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
      userLogin: "",
      showLoginModal: false,
    };
  },

  methods: {
    closeModal() {
      eventBus.$emit("showLoginModal", false);
    },
  },
  created() {
    eventBus.$on("showLoginModal", (data) => {
      this.showLoginModal = data;
    });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #6dc849;
}
.closeModalBtn {
  width: 30px;
  right: 10px;
  top: 10px;
  position: absolute !important;
}
.v-btn__content {
  caret-color: #6dc849 !important;
  color: #6dc849 !important;

  &:focus {
    caret-color: #6dc849 !important;
    color: #6dc849 !important;
  }
}
.v-application .primary--text {
  caret-color: #6dc849 !important;
  color: #6dc849 !important;

  &:focus {
    caret-color: #6dc849 !important;
    color: #6dc849 !important;
  }
}

.login-page {
  .link-modal {
    color: #6dc849 !important;
    text-decoration: none;
  }
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 999;
  margin: 0 auto;
  .container {
    height: 100vh;

    .row {
      height: 100vh;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  p {
    line-height: 1rem;
  }

  .card {
    padding: 20px;
    background-color: #151515;
    opacity: 1 !important;
  }

  .form-group {
    margin-bottom: 10px !important;
  }
  .form-control {
    background-color: rgba(255, 255, 255, 0.16);
    color: white;
    margin-bottom: 10px !important;
  }
  .form-control:focus {
    color: #212529;
    background-color: rgba(255, 255, 255, 0.6);
    border-color: #6dc849;
    outline: 0;
    box-shadow: 0 0 0 0.25rem #6dc849;
  }
  .form-group {
    input {
      margin-bottom: 20px;
    }
  }

  .error {
    animation-name: errorShake;
    animation-duration: 0.3s;
  }

  .v-application p {
    margin-bottom: 0px !important;
  }
  .btn-success {
    --bs-btn-color: #fff;
    --bs-btn-bg: #6dc849;
    --bs-btn-border-color: #6dc849;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #6dc849;
    --bs-btn-hover-border-color: #6dc849;
    --bs-btn-focus-shadow-rgb: 60, 153, 110;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #6dc849;
    --bs-btn-active-border-color: #6dc849;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #6dc849;
    --bs-btn-disabled-border-color: #6dc849;
  }

  .v-application.primary--text {
    color: #6dc849 !important;
    caret-color: #6dc849 !important;
  }
  @keyframes errorShake {
    0% {
      transform: translateX(-5px);
    }
    25% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
