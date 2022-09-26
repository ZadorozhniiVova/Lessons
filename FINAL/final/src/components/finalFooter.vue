<template>
  <v-footer :padless="true" :dark="true" absolute class="finalFooter">
    <v-card flat tile width="100%" class="lighten-1 text-center">
      <v-divider></v-divider>

      <v-card-text class="white--text">
        Created By:
        <p><strong>Zadorozhnii Volodymyr</strong></p>
      </v-card-text>
      <div class="socials">
        <!-- GitHub -->
        <a
          href="#"
          rel="noindex nofollow"
          class="socials__item"
          target="_blank"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="socials__item-img"
          >
            <path
              class="socials__item-img--fill"
              d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"
            />
          </svg>
        </a>
        <!-- Telegram -->
        <a
          href="https://t.me/ZadorozhniiVolodymyr"
          rel="noindex nofollow"
          class="socials__item"
          target="_blank"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 300 300"
            style="enable-background: new 0 0 300 300"
            xml:space="preserve"
            class="socials__item-img"
          >
            <path
              class="socials__item-img--fill"
              d="M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412
		c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22
		c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207
		c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146
		c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z"
            />
          </svg>
        </a>
        <!-- Linkedin -->
        <a
          href="https://www.linkedin.com/in/volodymyr-zadorozhnii-963809144/"
          rel="noindex nofollow"
          class="socials__item"
          target="_blank"
        >
          <svg
            class="socials__item-img"
            width="20"
            height="20"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="socials__item-img--fill"
              d="M3.10938 13V4.82422H0.566406V13H3.10938ZM1.82422 3.73047C2.64453 3.73047 3.30078 3.04688 3.30078 2.22656C3.30078 1.43359 2.64453 0.777344 1.82422 0.777344C1.03125 0.777344 0.375 1.43359 0.375 2.22656C0.375 3.04688 1.03125 3.73047 1.82422 3.73047ZM12.5977 13H12.625V8.51562C12.625 6.32812 12.1328 4.63281 9.5625 4.63281C8.33203 4.63281 7.51172 5.31641 7.15625 5.94531H7.12891V4.82422H4.69531V13H7.23828V8.95312C7.23828 7.88672 7.42969 6.875 8.74219 6.875C10.0547 6.875 10.082 8.07812 10.082 9.03516V13H12.5977Z"
            ></path>
          </svg>
        </a>
        <!-- Instagram -->
        <a
          href="https://www.instagram.com/zadorozhnii_vladimir/"
          rel="noindex nofollow"
          class="socials__item"
          target="_blank"
        >
          <svg
            class="socials__item-img"
            width="20"
            height="20"
            viewBox="0 0 17 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="socials__item-img--fill"
              d="M8.5 4.60742C6.125 4.60742 4.23242 6.53711 4.23242 8.875C4.23242 11.25 6.125 13.1426 8.5 13.1426C10.8379 13.1426 12.7676 11.25 12.7676 8.875C12.7676 6.53711 10.8379 4.60742 8.5 4.60742ZM8.5 11.6582C6.97852 11.6582 5.7168 10.4336 5.7168 8.875C5.7168 7.35352 6.94141 6.12891 8.5 6.12891C10.0215 6.12891 11.2461 7.35352 11.2461 8.875C11.2461 10.4336 10.0215 11.6582 8.5 11.6582ZM13.918 4.45898C13.918 3.90234 13.4727 3.45703 12.916 3.45703C12.3594 3.45703 11.9141 3.90234 11.9141 4.45898C11.9141 5.01562 12.3594 5.46094 12.916 5.46094C13.4727 5.46094 13.918 5.01562 13.918 4.45898ZM16.7383 5.46094C16.6641 4.125 16.3672 2.9375 15.4023 1.97266C14.4375 1.00781 13.25 0.710938 11.9141 0.636719C10.541 0.5625 6.42188 0.5625 5.04883 0.636719C3.71289 0.710938 2.5625 1.00781 1.56055 1.97266C0.595703 2.9375 0.298828 4.125 0.224609 5.46094C0.150391 6.83398 0.150391 10.9531 0.224609 12.3262C0.298828 13.6621 0.595703 14.8125 1.56055 15.8145C2.5625 16.7793 3.71289 17.0762 5.04883 17.1504C6.42188 17.2246 10.541 17.2246 11.9141 17.1504C13.25 17.0762 14.4375 16.7793 15.4023 15.8145C16.3672 14.8125 16.6641 13.6621 16.7383 12.3262C16.8125 10.9531 16.8125 6.83398 16.7383 5.46094ZM14.957 13.7734C14.6973 14.5156 14.1035 15.0723 13.3984 15.3691C12.2852 15.8145 9.6875 15.7031 8.5 15.7031C7.27539 15.7031 4.67773 15.8145 3.60156 15.3691C2.85938 15.0723 2.30273 14.5156 2.00586 13.7734C1.56055 12.6973 1.67188 10.0996 1.67188 8.875C1.67188 7.6875 1.56055 5.08984 2.00586 3.97656C2.30273 3.27148 2.85938 2.71484 3.60156 2.41797C4.67773 1.97266 7.27539 2.08398 8.5 2.08398C9.6875 2.08398 12.2852 1.97266 13.3984 2.41797C14.1035 2.67773 14.6602 3.27148 14.957 3.97656C15.4023 5.08984 15.291 7.6875 15.291 8.875C15.291 10.0996 15.4023 12.6973 14.957 13.7734Z"
            ></path>
          </svg>
        </a>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixins.scss";
v-footer {
  background-color: #151515;
  margin-top: 100px;
}
.socials {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 40px);
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 5px 0;
  gap: 10px;
  @include maxWidth(1180px) {
    grid-template-columns: repeat(4, 30px);
  }

  &__item {
    width: 40px;
    height: 40px;
    @include flexCenter;
    border: 1px solid #6dc849;
    // background-color: #151515;
    @include transition(0.1s);

    @include maxWidth(1180px) {
      width: 30px;
      height: 30px;
    }

    &:hover {
      .socials__item-img--fill {
        fill: #151515;
      }
    }

    &:hover.socials__item {
      background-color: #6dc849;
      -webkit-box-shadow: 2px 3px 25px 0px #6dc849;
      -moz-box-shadow: 2px 3px 25px 0px #6dc849;
      box-shadow: 2px 3px 25px 0px #6dc849;
    }

    &-img {
      &--fill {
        fill: #6dc849;
      }
    }
  }
}

.v-card__text {
  padding: 4px;
}
.v-divider {
  margin: 0px;
}
.v-application p {
  margin-bottom: 0;
}
</style>
