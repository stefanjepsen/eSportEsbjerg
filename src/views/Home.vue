<template>
  <div>
    <v-container fluid grid-list-md style="max-width: 1500px;">
      <v-layout row wrap text-xs-center>
        <v-flex xs12 md10 offset-md1>
          <div class="deconstructed">
            <div>eSPORT ESBJERG</div>
            <div>eSPORT ESBJERG</div>
            <div>eSPORT ESBJERG</div>
            <div>eSPORT ESBJERG</div>
          </div>
        </v-flex>

        <v-flex xs12 md10 offset-lg1 d-flex>
          <v-divider class="pa-3 hidden-sm-and-down" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 lg10 offset-lg1 d-flex>
          <div class="Border1">
            <p class="fontsize2">OVERSIGT</p>
          </div>
          <br>
        </v-flex>

        <!-- Events, træningstider og logo ------------------------------------------------------------------------------------------------------------------------------------------------------------>

        <v-flex xs12 md10 offset-lg1 d-flex>
          <v-divider class inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs5 md3 offset-lg1 d-flex class>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color max-width="600">
              <v-img
                style="height:100%"
                src="https://scontent.fbll1-1.fna.fbcdn.net/v/t1.0-9/60069865_1688794517889668_6134994305661534208_n.jpg?_nc_cat=110&_nc_ht=scontent.fbll1-1.fna&oh=d669eb60bd8f44bb996cb566d004309d&oe=5D50D661"
                aspect-ratio
              >
                <router-link to="/Lan">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
                    
                    color:white;"
                    >
                      <p class="hovertext">Esbjerg Lan party</p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs6 md4>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                src="http://computerfysik.dk/wp-content/uploads/2016/11/Counterstrike-Global-Offensive.jpg"
                aspect-ratio
                contain
              >
                <router-link to="/Training">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
                   
                    color:white; "
                    >
                      <p class="hovertext">
                        COUNTERSTRIKE GO
                        <br>SPILLETIDER
                      </p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>

          <v-divider class="mx-1" inset vertical style="visibility: hidden;"></v-divider>

          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                src="https://icdn2.digitaltrends.com/image/ninja-skin-featured-image-fortnite-season-8-patch-8-0-7126.jpg "
                aspect-ratio
                contain
              >
                <router-link to="/Training">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
               
                    color:white; "
                    >
                      <p class="hovertext">
                        FORTNITE
                        <br>SPILLETIDER
                      </p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 md3 d-flex>
          <v-hover>
            <v-card flat slot-scope="{ hover }" class="mx-auto transparent" color max-width="600">
              <v-img
                class="glitch"
                style=" height:100% "
                src="http://www.esport-esbjerg.dk/media/1051/logo2000x2000.png"
                aspect-ratio
                contain
              >
                <router-link to="/About">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
                    
                    color:white; "
                    >
                      <p class="hovertext">eSPORT ESBJERG</p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <!-- Spillene ------------------------------------------------------------------------------------------------------------------------------------------------------------>

        <v-flex xs12 lg10 offset-lg1 d-flex>
          <div class="Border1">
            <p class="fontsize2">VORES SPIL</p>
          </div>
          <br>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 lg3 offset-lg1 d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                style="height:100%; position:relative;"
                src="https://mlstaticquic-a.akamaihd.net/counter-strike-global-offensive-cs-go-original-steam-xgamesz-D_NQ_NP_784486-MLU26572713582_122017-F.jpg"
                aspect-ratio
              >
                <router-link to="/Spil">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
                   
                    color:white; "
                    >
                      <p class="hovertext">COUNTERSTRIKE GO</p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 lg4 auto d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                aspect-ratio
                contain
              >
                <router-link to="/Spil">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
                   
                    color:white; "
                    >
                      <p class="hovertext">FORTNITE</p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 lg3 d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                style="height:100%;"
                src="https://image.redbull.com/rbcom/010/2014-11-13/1331690088299_2/0100/0/1/overwatch.jpg"
                aspect-ratio
              >
                <router-link to="/Spil">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                      style="height: 100%; 
                  
                    color:white; "
                    >
                      <p class="hovertext">OVERWATCH</p>
                    </div>
                  </v-expand-transition>
                </router-link>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-3" inset style="visibility: hidden;"></v-divider>
        </v-flex>
        <!-- Sociale medier ------------------------------------------------------------------------------------------------------------------------------------------------------------>

        <v-flex xs12 md7 offset-lg1 d-flex>
          <div class="Border1">
            <p class="fontsize2">GIV OS ET LIKE</p>
          </div>
        </v-flex>
        <v-flex xs2 md3 offset-lg0 offset-lg>
          <div class="Border1 hidden-sm-and-down"></div>
        </v-flex>
        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <!--Instagram-->
        <v-flex xs12 lg7 offset-lg1 d-flex>
          <iframe
            style="padding-left:25px;"
            src="http://instaembedder.com/gallery-v2.php?width=140&cols=5&rows=3&margin=8&color=gray&likes=1&share_buttons=1&comments=1&link=1&frame=1&image_border=4&frame_color=transparent&cid=11638&"
            frameborder="0"
            width="100%"
            height="520"
            lazy-src
            loading="lazy"
          ></iframe>
        </v-flex>

        <!--FACEBOOK-->
        <v-flex xs12 lg2 offset-lg d-flex>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/eSportEsbjerg/"
            data-tabs="timeline"
            data-width="358 "
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
          </div>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 md3 offset-lg1 d-flex>
          <div class="Border1">
            <p class="fontsize2">TRÆNINGSTIDER</p>
          </div>
        </v-flex>
        <v-flex xs12 md9 lg7 offset-lg0 offset-lg>
          <div class="Border1 hidden-sm-and-down">
            <p class="fontsize2 hidden-sm-and-down">KUNNE DET VÆRE NOGET FOR DIG?</p>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex
          style="font-family: hero-new,sans-serif;
font-weight: 300;
font-style: normal;"
          xs12
          md3
          offset-lg1
          text-xs-center
        >
          <div style=" background-color: rgb(21,83,125, .2); height:555px; ">
            <p style="font-size:140%;">
              <br>Cosmos (Bakkeskolen)
            </p>Mandag og Onsdag
            <br>18:00 - 20:00
            <br>Fortnite og
            <br>CounterStrike Global Offfensive
            <br>
            <br>Tirsdag og Torsdag
            <br>18:00 - 20:00
            <br>Overwatch og
            <br>CounterStrike Global Offensive
            <br>
            <br>

            <v-divider class="pa-2" style></v-divider>

            <p style="font-size:140%;">Kvaglundhallen</p>Mandag
            <br>18:00 - 20:00
            <br>Fortnite
            <br>
            <br>Onsdag
            <br>18:00 - 20:00
            <br>CounterStrike Global Offensive
            <v-spacer></v-spacer>
          </div>
        </v-flex>

        <v-flex xs12 md7 offset-lg0 offset-lg>
          <v-hover>
            <iframe
              width="100%"
              height="555"
              src="https://www.youtube.com/embed/6XpjyiPGErI?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-hover>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-3" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 lg10 offset-lg1 d-flex>
          <div class="Border1">
            <p class="fontsize2"> <span class="hidden-md-and-down"> VÆR MED PÅ </span>DISCORD</p>
          </div>
          <br>
        </v-flex>
   <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
        <v-flex xs12 sm6 md10 offset-lg1 class="discord" d-flex>
          <v-divider class inset style="visibility: hidden;"></v-divider>
        </v-flex>
        <v-flex xs12 lg10 offset-lg1 d-flex id="discord">
        <iframe src="https://titanembeds.com/embed/582527715840753665" height="600" width="800" frameborder="0"></iframe>
        </v-flex>
 





      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.deconstructed {
  position: relative;
  margin: auto;
  height: 2em;
  color: transparent;
  font-family: tenby-seven, sans-serif;
  font-weight: 800 !important;
  font-size: 10vw;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.03em;
}

.deconstructed > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;

  pointer-events: none;
}

.deconstructed > div:nth-child(1) {
  -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
  mask-image: linear-gradient(black 25%, transparent 25%);
  animation: deconstructed1 8s;
}

.deconstructed > div:nth-child(2) {
  -webkit-mask-image: linear-gradient(
    transparent 25%,
    black 25%,
    black 50%,
    transparent 50%
  );
  mask-image: linear-gradient(
    transparent 25%,
    black 25%,
    black 50%,
    transparent 50%
  );
  animation: deconstructed2 8s;
}

.deconstructed > div:nth-child(3) {
  -webkit-mask-image: linear-gradient(
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%
  );
  mask-image: linear-gradient(
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%
  );
  animation: deconstructed3 8s;
}

.deconstructed > div:nth-child(4) {
  -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
  mask-image: linear-gradient(transparent 75%, black 75%);
  animation: deconstructed4 8s;
}

@keyframes deconstructed1 {
  0% {
    transform: translateX(100%);
  }
  26% {
    transform: translateX(0%);
  }
  83% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes deconstructed2 {
  0% {
    transform: translateX(100%);
  }
  24% {
    transform: translateX(0%);
  }
  82% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes deconstructed3 {
  0% {
    transform: translateX(100%);
  }
  22% {
    transform: translateX(0%);
  }
  81% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes deconstructed4 {
  0% {
    transform: translateX(100%);
  }
  20% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
}

.Border1 {
  width: 100%;

  height: 3rem;

  border: solid 1.5px #15537d;

  background-color: #131723;
}

.fontsize2 {
  font-size: 200%;
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
}

.hovertext {
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
  font-size: 70%;
}

.ff1 {
  opacity: 1 !important;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  background-color: #131723;
}

body {
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
}

.glitch {
  animation: glitch 7s linear infinite both;
}

@keyframes glitch {
  0%,
  100% {
    opacity: 1;
  }
  32.98% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  34% {
    opacity: 0;
  }
  34.02% {
    opacity: 1;
  }
  34.98% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  35.9% {
    opacity: 0;
  }
  35.92% {
    opacity: 1;
  }
  38.98% {
    opacity: 1;
  }
  39% {
    opacity: 0;
  }
  39.8% {
    opacity: 0;
  }
  39.82% {
    opacity: 1;
  }
  83.98% {
    opacity: 1;
  }
  84% {
    opacity: 0;
  }
  84.9% {
    opacity: 0;
  }
  84.92% {
    opacity: 1;
  }
}
</style>

