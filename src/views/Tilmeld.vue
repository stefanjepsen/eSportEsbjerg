<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12 md4 offset-md1>
          <v-card flat class="transparent">
            <v-card-text class="px-0">
              <p></p>
              <img id="logo" class="glitch" src="../assets/logo2.png">
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md5 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >Fordele ved medlemskab</span>
              <v-spacer></v-spacer>
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>
          <v-card
            flat
            style="background-color: rgb(21,83,125, .2);  padding: 5px; margin-top: 20px; "
          >
            <v-card-text
              style="text-align: left; padding: 0px; font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 170%; letter-spacing: 1px; "
              class="px-0"
            >
              <v-card-actions style="padding-left: 0px; margin: 0px; height: 0px;"></v-card-actions>
              <p>Få adgang samt rabatter ved klubarrangementer.</p>

              <p>Adgang til både Discord og Teamspeak server.</p>

              <p>Fordele på eSport Esbjerg´s spil server.</p>

              <p>Medlemstilbud fra sponsorer.</p>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md10 offset-lg1>
          <v-card flat class="transparent">
            <v-card-text
              style=" font-size: 35px; text-align: left; padding: 0px;"
              class="font"
            >Priser</v-card-text>
            <v-card flat style="background-color: #2b93c6; height: 1.5px;"></v-card>
          </v-card>
        </v-flex>

        <v-flex xs12 md10 offset-md1>
          <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
        </v-flex>

        <v-flex xs12 md5 offset-md1>
          <v-hover>
            <v-card
              flat
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              style="background-color: rgb(21,83,125, .2);"
            >
              <v-card-text class="px-0">
                <p class="font" style="font-size:400%;">
                  100 kr
                  <br>
                </p>Beløbet er beregnet som årskontigent, og er et beløb som skal tillægges de andre pakker.
                <br>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 md5 offset-md>
          <v-hover>
            <v-card
              flat
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              style="background-color: rgb(21,83,125, .2);"
            >
              <v-card-text class="px-0">
                <p class="font" style="font-size:400%;">
                  300 kr
                  <br>
                </p>Træning 1 gang i ugen med det valgte spil. <br> Gældende i 6 mdr.
                <br>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 md5 offset-md1>
          <v-hover>
            <v-card
              flat
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              style="background-color: rgb(21,83,125, .2);"
            >
              <v-card-text class="px-0">
                <p class="font" style="font-size:400%;">
                  500 kr
                  <br>
                </p>Træning 2 gange i ugen med det valgte spil. <br> Gældende i 6 mdr.
                <br>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 md5 offset-md>
          <v-hover>
            <v-card
              flat
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="mx-auto"
              style="background-color: rgb(21,83,125, .2);"
            >
              <v-card-text class="px-0">
                <p class="font" style="font-size:400%;">
                  +250 kr
                  <br>
                </p>Giver adgang til en ekstra træning om ugen i et andet spil. <br> Kan kun tilkøbes ved valg af en af de andre pakker. 
                <br>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

      <v-flex xs12 md10 offset-md1>
          <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
        </v-flex>

    <v-flex xs12 md10 offset-md1>
          <v-card flat class="transparent">
            <v-card-text
              style=" margin:0px; padding: 0px;"
           
            > <v-btn class="knap" style="text-decoration:none; color:white; text-decoration:none; padding:0px !important; height: 100px; width: 100%; font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size:150%; letter-spacing: 3px; " > <a style="text-decoration:none; color:white;" href="mailto:SUPPORT@ESPORT-ESBJERG.DK?subject=Tilmelding Til Medlemskab &body=Gamertag: 
            Fornavn: 
            Efternavn:
            (Hvis forældre indtast dit navn her: )
            Vejnavn:
            Postnummer:
            By:
            EmailAdresse
            Fødselsdato:
            Gaming pakke:">
TILMELD DIG</a> </v-btn> </v-card-text>
            
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>


<style scoped>

.knap {
  background-color: #15537d !important;
}

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