<template>
  <div class="finalSideMenu">
    <v-card style="background-color: black">
      <v-navigation-drawer permanent expand-on-hover>
        <v-list v-if="name">
          <v-list-item
            class="px-0 d-flex justify-center"
            v-if="name !== undefined"
          >
            <VueToyFace
              size="40"
              rounded="75"
              :group="2"
              :toy-number="10"
              class="avatar"
            />
          </v-list-item>
          <v-list-item link class="userName">
            <v-list-item-content>
              <v-list-item-title class="text-h8">
                {{ name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item class="px-0 d-flex justify-center">
            <VueToyFace
              size="40"
              rounded="75"
              :group="2"
              :toy-number="3"
              class="avatar"
            />
          </v-list-item>
          <v-list-item link class="userName">
            <v-list-item-content>
              <v-list-item-title class="text-h8"> Guest </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- RETURN HOME -->
        <v-list nav dense>
          <v-list-item link class="side__menu-el">
            <router-link
              class="d-flex align-center side__link"
              :to="{ name: 'home' }"
              ><v-list-item-icon
                >
                <svg class="sideMenu__img" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">    <path
                  class="side__menu-icon" d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"/></svg></v-list-item-icon
              >
              <v-list-item-title class="side__title">Home</v-list-item-title></router-link
            >
          </v-list-item>

          <!-- FAVORITE LIST -->

          <v-list-item link class="side__menu-el">
            <router-link
              :to="{ name: 'favorite', params: { favorite_data: FAVORITE } }"
              class="d-flex align-center side__link"
              ><v-list-item-icon
                ><svg
                  class="sideMenu__img"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="side__menu-icon"
                    d="M11 19.67C10.8785 19.6733 10.758 19.6458 10.65 19.59C10.34 19.42 2.93001 15.49 1.38001 10.19C0.490006 7.19 0.790006 4.26 2.18001 2.4C2.68804 1.72873 3.35061 1.19002 4.11141 0.829638C4.87222 0.469257 5.70878 0.297857 6.55001 0.330001C7.45302 0.285771 8.35012 0.498008 9.13759 0.942176C9.92506 1.38634 10.5707 2.04431 11 2.84C11.4293 2.04431 12.075 1.38634 12.8624 0.942176C13.6499 0.498008 14.547 0.285771 15.45 0.330001C16.2912 0.297857 17.1278 0.469257 17.8886 0.829638C18.6494 1.19002 19.312 1.72873 19.82 2.4C21.21 4.26 21.51 7.17 20.62 10.19C19.07 15.49 11.62 19.42 11.35 19.59C11.242 19.6458 11.1216 19.6733 11 19.67ZM6.55001 1.83C5.94176 1.79757 5.33482 1.91459 4.78222 2.17084C4.22963 2.42709 3.7482 2.81477 3.38001 3.3C2.27001 4.78 2.06001 7.2 2.82001 9.77C4.02001 13.86 9.55001 17.24 11 18.07C12.45 17.24 18 13.85 19.18 9.77C19.94 7.2 19.73 4.77 18.62 3.3C18.2518 2.81477 17.7704 2.42709 17.2178 2.17084C16.6652 1.91459 16.0583 1.79757 15.45 1.83C11.94 1.83 11.76 5.36 11.75 5.51C11.75 5.70891 11.671 5.89968 11.5303 6.04033C11.3897 6.18098 11.1989 6.26 11 6.26C10.8011 6.26 10.6103 6.18098 10.4697 6.04033C10.329 5.89968 10.25 5.70891 10.25 5.51C10.23 5.14 10 1.83 6.55001 1.83Z"
                  />
                </svg>

                <div
                  class="favorite__popUp d-flex justify-center"
                  v-if="FAVORITE.length"
                >
                  {{ FAVORITE.length }}
                </div></v-list-item-icon
              >
              <v-list-item-title class="side__title">Favorite</v-list-item-title></router-link
            >
          </v-list-item>

          <v-divider></v-divider>

          <!-- TOP LIST -->
          <v-list-item class="sideList__header">
            <H6>Top</H6>
          </v-list-item>
          <!-- BEST OF YEAR -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{ name: 'BestYear', params: { favorite_data: FAVORITE } }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg
                  class="sideMenu__img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    class="side__menu-icon"
                    d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title"
                >Best of the Year</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <!-- POPULAR LAST YEAR -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{ name: 'Best2021', params: { favorite_data: FAVORITE } }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    class="side__menu-icon"
                    d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title"
                >Popular in 2021</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <!-- POPULAR All TIME -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{
                name: 'bestOfAllTime',
                params: { favorite_data: FAVORITE }
              }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    class="side__menu-icon"
                    d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title"
                >Popular All Time</v-list-item-title
              ></router-link
            >
          </v-list-item>
          <v-divider></v-divider>

          <!-- Platforms LIST -->
          <v-list-item class="sideList__header">
            <H6>Play</H6>
          </v-list-item>
          <!-- PC -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{ name: 'PlatformPC', params: { favorite_data: FAVORITE } }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    class="side__menu-icon"
                    d="M2 22h9.5v-9.5H2V22zm0-10.5h9.5V2H2v9.5zM12.5 2v9.5H22V2h-9.5zm0 20H22v-9.5h-9.5V22z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title"> PC</v-list-item-title></router-link
            >
          </v-list-item>

          <!-- PLAYSTATION -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{ name: 'PlatformPS', params: { favorite_data: FAVORITE } }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 24">
                  <path
                    class="side__menu-icon"
                    d="m18.646 5.077c.044.289.069.622.069.96 0 .109-.003.218-.008.326l.001-.015c0 2.344-.007 4.688.006 7.032.655.34 1.427.549 2.245.57h.007c.022.001.048.001.074.001.521 0 1.011-.131 1.439-.362l-.016.008c.478-.268.867-.644 1.143-1.096l.008-.014c.295-.491.512-1.064.616-1.677l.004-.029c.08-.464.125-.998.125-1.542 0-.191-.006-.382-.017-.57l.001.026c-.013-1.131-.259-2.202-.692-3.171l.02.051c-.269-.559-.613-1.036-1.027-1.443l-.001-.001c-.389-.383-.824-.72-1.298-1l-.031-.017c-.979-.56-2.112-1.048-3.302-1.404l-.116-.03c-.75-.24-1.505-.47-2.262-.69-1.323-.375-2.652-.735-4.005-.987q0 11.2 0 22.393l5.065 1.607q.006-9.414 0-18.827c-.001-.018-.001-.039-.001-.06 0-.36.112-.693.304-.967l-.004.005c.115-.146.292-.24.49-.24.038 0 .074.003.11.01l-.004-.001c.234.043.44.143.609.286l-.002-.002c.235.224.397.523.446.858l.001.008zm-13.226 13.272c1.738-.621 3.475-1.249 5.216-1.866.007-.076.01-.165.01-.254 0-.034-.001-.069-.002-.103v.005c0-.865 0-1.73 0-2.594-2.202.777-4.4 1.563-6.602 2.342-.537.196-1.082.37-1.608.594-.675.272-1.254.581-1.795.943l.035-.022c-.243.156-.438.368-.569.619l-.004.009c-.065.135-.103.294-.103.461 0 .139.026.271.073.393l-.003-.007c.139.322.354.589.624.785l.005.004c.47.338 1.02.601 1.613.756l.035.008c1.548.53 3.332.835 5.187.835.117 0 .234-.001.351-.004h-.017c.995-.024 1.948-.129 2.876-.308l-.108.017c.014-.146.006-.293.008-.439 0-.732 0-1.463 0-2.194-.744.266-1.487.537-2.23.806-.244.101-.536.193-.837.26l-.037.007c-.406.087-.873.138-1.351.139h-.001c-.009 0-.021 0-.032 0-.42 0-.823-.072-1.198-.204l.025.008c-.15-.049-.271-.15-.344-.282l-.002-.003c-.007-.025-.011-.054-.011-.084 0-.102.047-.193.12-.254h.001c.188-.165.413-.294.66-.372l.013-.004zm25.184-1.68c-.436-.361-.949-.648-1.509-.831l-.033-.009c-.309-.098-.609-.22-.918-.314-1.432-.449-3.079-.708-4.786-.708-.036 0-.073 0-.109 0h.006c-.502.018-1.004.032-1.503.09-1.52.165-2.908.484-4.228.946l.132-.04q0 1.52 0 3.04c1.829-.64 3.654-1.287 5.482-1.928.551-.183 1.185-.288 1.844-.288h.052-.003c.018 0 .039-.001.06-.001.412 0 .808.071 1.176.201l-.025-.008c.148.048.269.147.343.276l.002.003c.005.024.008.051.008.079 0 .139-.075.261-.186.327l-.002.001c-.291.195-.629.352-.99.453l-.025.006q-3.85 1.374-7.699 2.745c-.054.01-.033.076-.038.114v2.834q5.06-1.819 10.121-3.635c.665-.218 1.21-.437 1.738-.685l-.092.039c.528-.245.979-.567 1.359-.959l.001-.001c.198-.209.32-.492.32-.804 0-.004 0-.008 0-.012v.001c-.034-.378-.22-.707-.497-.929l-.003-.002z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title">Playstation</v-list-item-title></router-link
            >
          </v-list-item>
          <!-- XBOX -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{
                name: 'PlatformXbox',
                params: { favorite_data: FAVORITE }
              }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    class="side__menu-icon"
                    d="M24 12c0-.001 0-.001 0-.002 0-3.618-1.606-6.861-4.144-9.054l-.015-.013c-1.91 1.023-3.548 2.261-4.967 3.713l-.004.004c.044.046.087.085.131.132 3.719 4.012 7.106 9.73 6.546 12.471 1.53-1.985 2.452-4.508 2.452-7.246 0-.002 0-.004 0-.006zM12.591 3.955c1.68-1.104 3.699-1.833 5.872-2.022l.048-.003c-1.837-1.21-4.09-1.929-6.511-1.929-2.171 0-4.207.579-5.962 1.591l.058-.031c.658.567 2.837.781 5.484 2.4.143.089.316.142.502.142.189 0 .365-.055.513-.149l-.004.002zM9.166 6.778c.046-.049.093-.09.138-.138-1.17-1.134-2.446-2.174-3.806-3.1l-.099-.064c-.302-.221-.681-.354-1.091-.354-.146 0-.288.017-.425.049l.013-.002c-2.398 2.198-3.896 5.344-3.896 8.84 0 2.909 1.037 5.576 2.762 7.651l-.016-.02c-1.031-2.547 2.477-8.672 6.419-12.862zM12.084 9.198c-3.962 3.503-9.477 8.73-8.632 11.218 2.174 2.213 5.198 3.584 8.542 3.584 3.493 0 6.637-1.496 8.826-3.883l.008-.009c.486-2.618-4.755-7.337-8.744-10.91z"
                  />
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title">Xbox</v-list-item-title></router-link
            >
          </v-list-item>

          <!-- Nintendo -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{
                name: 'PlatformNintendo',
                params: { favorite_data: FAVORITE }
              }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg
                  class="SVGInline-svg discover-sidebar__icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 16"
                >
                  <path
                    class="side__menu-icon"
                    d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
                  ></path>
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title">Nintendo</v-list-item-title></router-link
            >
          </v-list-item>

          <!-- iOS -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{
                name: 'PlatformIos',
                params: { favorite_data: FAVORITE }
              }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18">
                  <path
                    class="side__menu-icon"
                    d="M9.538 0H1.651C.896 0 .287.587.287 1.31v15.368c0 .723.61 1.31 1.364 1.31h7.887c.754 0 1.364-.587 1.364-1.31V1.31c0-.723-.61-1.31-1.364-1.31zm-5.89.796h3.894c.098 0 .178.14.178.315 0 .174-.08.316-.178.316H3.648c-.099 0-.177-.142-.177-.316 0-.174.078-.315.177-.315zm1.947 15.898c-.48 0-.87-.375-.87-.836 0-.462.39-.835.87-.835s.87.373.87.835c0 .461-.39.836-.87.836zM9.88 13.83H1.31V2.21h8.57v11.62z"
                  ></path>
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title">iOS</v-list-item-title></router-link
            >
          </v-list-item>

          <!-- Android -->
          <v-list-item link class="side__menu-el">
            <router-link
              :to="{
                name: 'PlatformAndroid',
                params: { favorite_data: FAVORITE }
              }"
              class="d-flex align-center side__link"
              ><v-list-item-icon>
                <svg
                  class="side__menu-icon"
                  viewBox="0 0 16 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z"
                  ></path>
                </svg>
              </v-list-item-icon>
              <v-list-item-title class="side__title">Android</v-list-item-title></router-link
            >
          </v-list-item>
          <!-- <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<script>
import VueToyFace from "vue-toy-face";
import { mapGetters } from "vuex";

export default {
  name: "finalSideMenu",
  data() {
    return {
      name: localStorage.getItem("userName"),
      email: localStorage.getItem("email")
    };
  },
  components: { VueToyFace },
  computed: {
    ...mapGetters(["FAVORITE", "BESTOFYEAR", "BESTOF2021", "BESTOFALLTIME"])
  }
};
</script>

<style lang="scss" scoped>
* {
  color: #6dc849 !important;
  font-family: "Josefin Sans", sans-serif;
}

.finalSideMenu {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 15%;

  .v-navigation-drawer {
    background-color: #151515 !important;
    border: 1px solid #6dc849;
  }
  .side__menu-el {
    transition: 0.1s;
    &:hover {
      transform: scale(1.05);
    }
    &:hover .side__menu-icon {
      fill: white;
    }
    .side__menu-icon {
      fill: white;
      transition: 0.1s;
      justify-content: center;
    }

    .side__title{
      font-size: 16px;
    }
  }
}

.sideList__header {
  padding: 0 !important;
  text-align: center;
  width: 100%;
  display: block;
  height: 20px !important;
  min-height: 20px !important;
}

.v-list--nav.v-list--dense .v-list-item:not(:last-child):not(:only-child),
.v-list--nav .v-list-item--dense:not(:last-child):not(:only-child),
.v-list--rounded.v-list--dense .v-list-item:not(:last-child):not(:only-child),
.v-list--rounded .v-list-item--dense:not(:last-child):not(:only-child) {
  margin-bottom: 0 !important ;
}

.v-list--dense .v-list-item .v-list-item__icon,
.v-list-item--dense .v-list-item__icon {
  justify-content: center;
}
.v-list-item-icon,
.v-list-item-title {
  text-decoration: none !important;
  justify-content: center;
  align-items: center;
}
.v-divider {
  background-color: black !important ;
  margin: 4px 0 !important;
}
.v-navigation-drawer {
  // цвет заднего фона боковой панели
  background-color: #6dc849 !important;
}

.router-link-exact-active {
  text-decoration: none;
}
.align-center {
  text-decoration: none;
}
.favorite__popUp {
  // padding:5px;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  transition: 0.2s;
  position: absolute;
  color: black !important;
  font-size: 10px;
  top: 0;
  right: -3px;
}

.userName {
  width: 100%;
  padding: 0 !important;
  text-align: center;
  width: 100%;
  display: block;
}

.side__link {
  width: 100%;
}
</style>
