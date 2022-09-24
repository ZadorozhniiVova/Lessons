<template>
  <div v-if="show" class="login-page" name="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <v-btn @click="closeModal" text color="primary"> Primary </v-btn>
          <div
            v-if="!registerActive"
            class="card login"
            v-bind:class="{ error: emptyFields }"
          >
            <h1>Sign In</h1>
            <form class="form-group">
              <input
                v-model="userLogin"
                type="text"
                class="form-control"
                placeholder="User Name"
                required
              />
              <input
                v-model="emailLogin"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordLogin"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <input type="submit" class="btn btn-primary" @click="doLogin" />
              <p>
                Don't have an account?
                <a
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
            <h1>Sign Up</h1>

            <form class="form-group">
              <input
                v-model="userReg"
                type="text"
                class="form-control"
                placeholder="User Name"
                required
              />
              <input
                v-model="emailReg"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordReg"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <input
                v-model="confirmReg"
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                required
              />
              <input
                type="submit"
                class="btn btn-primary"
                @click="doRegister"
              />
              <p>
                Already have an account?
                <a
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
export default {
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
    };
  },

  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    login() {
      console.log("work");
      localStorage.setItem("name", this.$modal.username);
    },
    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        localStorage.setItem("userName", this.userLogin);
        localStorage.setItem("email", this.emailLogin);
        localStorage.setItem("password", this.passwordLogin);
        this.closeModal();
        this.$emit("login");
        this.$emit("changeUserStatusOnLogin", true);
      }
    },
    doRegister() {
      if (
        this.emailReg === "" ||
        this.passwordReg === "" ||
        this.confirmReg !== this.passwordReg
      ) {
        this.emptyFields = true;
      } else {
        localStorage.setItem("userName", this.userReg);
        localStorage.setItem("email", this.emailReg);
        localStorage.setItem("password", this.passwordReg);
        this.closeModal();
        this.$emit("login");
        this.$emit("changeUserStatusOnLogin", true);
      }
    },
  },
};
</script>

<style lang="scss">
/* Import Poppins font: */

.login-page {
  position: absolute;
  width: 100%;
  z-index: 2;
  margin: 0 auto;
  p {
    line-height: 1rem;
  }

  .card {
    padding: 20px;
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
