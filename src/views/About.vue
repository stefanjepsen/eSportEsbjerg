<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12 md4 offset-md1>
          <v-card flat class="transparent">
            <v-card-text class="px-0">
              <img id="logo" class="glitch" src="../assets/logo2.png">
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md5 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >OM OS</span>
              <v-spacer></v-spacer>
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>

          <v-card
            flat
            style="background-color: #15537d; border: solid 2.5px #2b93c6; padding: 5px; margin-top: 20px; "
          >
            <v-card-text
              style="text-align: left; padding: 0px; font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 15px; "
            >
              <span style="margin-right: 70%;">Hvem er vi?</span>
              <v-btn style=" pading:0px; margin:0;" icon @click="vis = !vis">
                <v-icon
                  style="align-content: right;"
                >{{ vis ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
              <v-card-actions style="padding: 0px; margin: 0px; height: 0px;"></v-card-actions>
              <v-slide-y-transition>
                <v-card-text
                  class="brødtekst"
                  style="padding: 0x 0px 0px 0px; font-family: Hero New"
                  v-show="vis"
                >
                  <br>eSport Esbjerg er en folkeoplysende forening, som har til formål at skabe et samvær for unge, såvel som gamle der har en interesse indenfor gaming.
                </v-card-text>
              </v-slide-y-transition>
              <v-spacer></v-spacer>
            </v-card-text>
            <v-divider class="pa-2" style="visibility:hidden;"></v-divider>
            <v-divider class="pa-2" style></v-divider>
            <v-card-text
              style="text-align: left; padding: 0px; font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 15px; "
            >
              <span style="margin-right: 65%;">Vores værdier</span>
              <v-btn style=" pading:0px; margin:0;" icon @click="show = !show">
                <v-icon
                  style="align-content: right;"
                >{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
              <v-card-actions style="padding: 0px; margin: 0px; height: 0px;"></v-card-actions>
              <v-slide-y-transition>
                <v-card-text
                  class="brødtekst"
                  style="padding: 0x 0px 0px 0px; font-family: Hero New"
                  v-show="show"
                >
                  <br>Vores værdier helt konkret er at skabe et fællesskab hvor der er plads til alle og vore børn og unge kan dyrke deres fælles interesse for eSport.
                  Når man bliver medlem af eSport esbjerg så støtter man udviklingen af eSport i esbjerg og man får rabat på vores store events (ELP).
                </v-card-text>
              </v-slide-y-transition>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md10 offset-lg1>
          <v-card flat class="transparent">
            <v-card-text
              style=" font-size: 35px; text-align: left; padding: 0px;"
              class="font"
            >Hvem er eSport Esbjerg</v-card-text>
            <v-card flat style="background-color: #2b93c6; height: 1.5px;"></v-card>
          </v-card>
        </v-flex>

        <v-flex xs12 md10 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding: 16px !important;" class="px-0">
              <br>Her kan man finde folk med samme interesse inden for de forskellige spil og få sat ansigt på de personer man spiller med. Dette skaber en mulighed for at være sammen omkring spil, men samtidig komme ud og lære nye folk at kende.
              <br>
              <br>Vi startede op i 2016 hvor vores ønske var at bidrage til den positive udvikling af unges fritidsinteresser, og sætte Esbjerg på landkortet
              for denne relativt nye form for sport, som nu er blevet anerkendt af både DGI og De Olympiske Lege som en reél sportsgren på konkurrenceniveau.
              <br>
              <br>Vi startede vores træninger op i mid 2017 hvor vi prøvede en mere bred vifte af spil for at se hvad der var os og i 2018 fik vi så den træningsplan med mere specifikke spil, som kan ses
              <v-btn class="brødtekst" flat small style=" margin:0px;" to="/spil">her.</v-btn>
              <br>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-3" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 md10 offset-lg1>
          <v-card flat class="transparent">
            <v-card-text
              style=" font-size: 35px; text-align: left; padding: 0px;"
              class="font"
            >eSport Esbjergs bestyrelse</v-card-text>
            <v-card flat style="background-color: #2b93c6; height: 1.5px;"></v-card>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-3" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <!--Første række af bestyrelsen-->

        <v-flex xs12 md10 offset-lg1 d-flex>
          <v-card flat class="transparent" style="margin-left:10%; ">
            <img
              style="height: 80px; width: height: 80px;  "
              :src="require('../assets/person.svg')"
            >
            <v-card-text class="px-0">
              <p class="font10">Jack Donovan</p>

              <span>Kasser</span>
            </v-card-text>
          </v-card>

          <v-card flat class="transparent">
            <img style="height: 80px; width: height: 80px; " :src="require('../assets/person.svg')">
            <v-card-text class="px-0">
              <p class="font10">Jesper Sørensen</p>

              <span>Medlem</span>
            </v-card-text>
          </v-card>

          <v-card flat class="transparent" style="margin-right:10%; ">
            <img style="height: 80px; width: height: 80px; " :src="require('../assets/person.svg')">
            <v-card-text class="px-0">
              <p class="font10">Søren Jensen</p>

              <span>Medlem</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <!--anden række af bestyrelsen-->
        <v-flex xs12 md5 offset-lg1 d-flex>
          <v-card flat class="transparent">
            <img
              style="height: 80px; width: height: 80px; margin-top: 20px;"
              :src="require('../assets/person.svg')"
            >
            <v-card-text class="px-0">
              <p class="font10">Mark Strunck</p>

              <span>Formand</span>
            </v-card-text>
          </v-card>

          <v-card flat class="transparent">
            <img
              style="height: 80px; width: height: 80px; margin-top: 20px;"
              :src="require('../assets/person.svg')"
            >
            <v-card-text class="px-0">
              <p class="font10">Sune Røjkjær</p>

              <span>Næstformand</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md5 offset-lg d-flex>
          <v-card flat class="transparent">
            <img
              style="height: 80px; width: height: 80px; margin-top: 20px;"
              :src="require('../assets/person.svg')"
            >
            <v-card-text class="px-0">
              <p class="font10">Viktor Gjermandsen</p>

              <span>Suppleant</span>
            </v-card-text>
          </v-card>

          <v-card flat class="transparent">
            <img
              style="height: 80px; width: height: 80px; margin-top: 20px;"
              :src="require('../assets/person.svg')"
            >
            <v-card-text class="px-0">
              <p class="font10">Kasper Nielsen</p>

              <span>Suppleant</span>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 md10 offset-lg1 d-flex>
          <v-divider class="pa-3" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 md4 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Jack Donovan
                <br>
              </h1>
              <p
                class="brødtekst"
              >Har været med siden starten af eSport Esbjerg og er træner-ansvarlig og træner Fornite på Cosmos.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md2>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Jesper Sørensen
                <br>
              </h1>
              <p
                class="brødtekst"
              >Har været med i foreningen siden starten og var tidligere næstformand inden Januar 2019.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Søren Jensen
                <br>
              </h1>
              <p
                class="brødtekst"
              >Har været med i foreningen i cirka 2 et halv år, og er ansvarlig for medieholdet/grafisk.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md2>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Mark Strunck
                <br>
              </h1>
              <p
                style
                class="brødtekst"
              >Har været med siden starten af eSport Esbjerg og er foreningens anden formand og træner Fortnite i Kvaglundhallen.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Sune Røjkjær
                <br>
              </h1>
              <p
                class="brødtekst"
              >Har været med i foreningen i halvandet år, og været næstformand siden Januar 19 og træner CSGO på Cosmos.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md2>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Viktor Gjermandsen
                <br>
              </h1>
              <p class="brødtekst">Har været med siden starten og var foreningens første formand.</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Kasper Nielsen
                <br>
              </h1>
              <p
                class="brødtekst"
              >Har været med i foreningen siden Januar, og har en erfaring inde for børn og unge området og har arbejdet som unge konsulent.</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    vis: false
  })
};
</script>


<style scoped>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}

#logo {
  width: 396px;
  height: 396px;
  object-fit: contain;
}

.font {
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
}

.font10 {
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
  margin-bottom: 5px !important;
}

.brødtekst {
  font-family: hero-new, sans-serif !important;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 2.8px;
  font-size: 15px;
}

.glitch {
  animation: glitch 10s linear infinite both;
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