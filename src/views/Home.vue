<template>
  <div class="home">
    <v-container>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md12 lg10 xl10>
          <div class="Border1"></div>
          <div class="Border1"></div>

          <br>

          <div class="grid-container">
            <div class="events">

              <v-hover value>
                <v-card hover slot-scope="{ hover }" contain color="grey lighten-5" max-width="600">
                  <v-img
                    :aspect-ratio="0"
                    src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/60069865_1688794517889668_6134994305661534208_n.jpg?_nc_cat=110&_nc_ht=scontent-ams4-1.xx&oh=0a9c83b723886512d3a028f7eecf21d3&oe=5D50D661"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>





            <div class="cs1">
                            <v-hover value>
                <v-card hover slot-scope="{ hover }" contain color="grey lighten-5" max-width="600" height="100%">
                  <v-img
                  height="100%"
                  style=""
                    :aspect-ratio="3"
                    src="https://static.gamespot.com/uploads/original/1551/15511094/2998337-counter-strike-global-offensive-2140715.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>


            
            <div class="ft1">
              <v-hover value>
                <v-card hover slot-scope="{ hover }" contain color="grey lighten-5" max-width="600" height="100%">
                  <v-img
                    :aspect-ratio="0"
                    height="100%"
                    src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div class="placeholder1">
              <p>anders</p>
            </div>
          </div>
          <br>
          <div class="Border1"></div>
          <br>
          <div class="grid-games">
            <div class="Game1">
              <p>anders</p>
            </div>
            <div class="Game-2">
              <p>anders</p>
            </div>
            <div class="Game-3">
              <p>anders</p>
            </div>
            <div class="Game-4">
              <p>anders</p>
            </div>
          </div>

          <br>
          <div class="Border1"></div>
          <br>

          <div class="grid-insta">
            <div class="Insta-Galleri">
              <p>anders</p>
            </div>
            <div class="Discord-server">
              <p>anders</p>
            </div>
          </div>
          <br>
          <div class="Border1"></div>
          <br>
          <div class="grid-facebook">
            <div class="facebookpost">
              <p>anders</p>
            </div>
            <div class="medlemidag">
              <p>Anders</p>
            </div>
          </div>

          <br>
          <div class="Border1"></div>
          <br>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Border1 {
  width: 100%;

  height: 25px;

  border: solid 2.5px #2b93c6;

  background-color: #15537d;
}

.grid-container {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1auto 536px 1auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "events cs1 placeholder1" "events ft1 placeholder1";
}

.events {
  grid-area: events;
}

.cs1 {
  grid-area: cs1;
}

.ft1 {
  grid-area: ft1;
}

.placeholder1 {
  grid-area: placeholder1;
}

.grid-games {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "Game1 Game-2 Game-3 Game-4";
}

.Game1 {
  grid-area: Game1;
  border: solid 2.5px #2b93c6;
}

.Game-2 {
  grid-area: Game-2;
  border: solid 2.5px #2b93c6;
}

.Game-3 {
  grid-area: Game-3;
  border: solid 2.5px #2b93c6;
}

.Game-4 {
  grid-area: Game-4;
  border: solid 2.5px #2b93c6;
}

.grid-insta {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
  grid-template-areas: "Insta-Galleri Discord-server";
  border: solid 2.5px #2b93c6;
}

.Insta-Galleri {
  grid-area: Insta-Galleri;
  border: solid 2.5px #2b93c6;
}

.Discord-server {
  grid-area: Discord-server;
  border: solid 2.5px #2b93c6;
}

.grid-facebook {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;
  grid-template-areas: "facebookpost medlemidag";
}

.facebookpost {
  grid-area: facebookpost;
  border: solid 2.5px #2b93c6;
}

.medlemidag {
  grid-area: medlemidag;
  border: solid 2.5px #2b93c6;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  width: 100%;
}
</style>

