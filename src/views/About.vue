<template>
  <div>
    
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card flat class="transparent">
            <v-card-text class="px-0">
              <img id="logo" src="../assets/logo2.png">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs6>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span style="font-family: Tenby seven regular; font-size: 35px; align: left;  ">Om os</span>
              <v-spacer></v-spacer>
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
              <span
                style=" font-family: Hero New; font-size: 15px; padding-top: 2px; "
                class="brødtekst"
              >Vi startede i 2016 og er meget glade for vores fremgang</span>
            </v-card-text>
          </v-card>
          <v-card
            flat
            style="background-color: #15537d; border: solid 2.5px #2b93c6; padding: 5px; margin-top: 20px;"
          >
            <v-card-text style="text-align: left; padding: 0px; font-family: Tenby seven regular; font-size: 15px; letter-spacing: 1px; " class="px-0"> 
              Hvad handler det hele om?
              <v-btn icon @click="show = !show">
                <v-icon style="align-content: right;"> {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
              <v-card-actions style="padding: 0px; margin: 0px; height: 0px;"></v-card-actions>
              <v-slide-y-transition>
                <v-card-text
                  style="padding: 15px 0px 15px 0px; font-family: Hero New"
                  v-show="show"
                >Vi er en klub der engagerer os inden for gaming og eSport her i Esbjerg. Vi har et godt samarbejde med Cosmos skolen, som har lokaler og computere til rådighed.</v-card-text>
              </v-slide-y-transition>
              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card flat class="transparent">
            <v-card-text style="font-family: Tenby seven regular; font-size: 35px; text-align: left; padding: 0px;"  class="px-0">eSport Esbjergs bestyrrelse</v-card-text>
            <v-card flat style="background-color: #2b93c6; height: 1.5px;"></v-card>
          </v-card>
        </v-flex>

        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card flat class="transparent">
          <img style="height: 80px; width: height: 80px; margin-top: 20px;" :src="require('../assets/person.svg')" > 
          <v-card-text class="px-0">Jack Donovan</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
          <v-card flat class="transparent">
            <v-card-text style="font-family: Tenby seven regular; font-size: 35px; text-align: left; padding: 0px;"  class="px-0">Hvem er eSport Esbjergs bestyrelse</v-card-text>
            <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
          </v-card>
        </v-flex>

        <v-flex  xs4 offset-xs1 >
        <v-card flat class="transparent">
          <v-card-text style="text-align: left;" class="px-0">
            Anders Jytzler <br>
            <br>
            Anders er 29 år, og er selvstændig med webbureauet Hype Media i Esbjerg. <br>
            Anders har, ligesom de øvrige medlemmer, en stor passion for Esport. <br>
            Han har brugt de første mange år foran computeren med at spille Counter Strike, <br> 
            og det var også her den store interesse for alvor begyndte at brede sig hos Anders. <br>
            Den dag i dag, bruger Anders tid på spillet Dota 2, og har stor interesse for dette. <br>
            Anders er fritidsunderviser i Esport hos Ungdomsskolen og har været det de sidste 3 år.
            </v-card-text>
        </v-card>
      </v-flex>

      <v-flex  xs4 offset-xs2>
        <v-card flat class="transparent">
          <v-card-text style="text-align: left;" class="px-0">
            Anders Jytzler <br>
            <br>
            Anders er 29 år, og er selvstændig med webbureauet Hype Media i Esbjerg. <br>
            Anders har, ligesom de øvrige medlemmer, en stor passion for Esport. <br>
            Han har brugt de første mange år foran computeren med at spille Counter Strike, <br> 
            og det var også her den store interesse for alvor begyndte at brede sig hos Anders. <br>
            Den dag i dag, bruger Anders tid på spillet Dota 2, og har stor interesse for dette. <br>
            Anders er fritidsunderviser i Esport hos Ungdomsskolen og har været det de sidste 3 år.
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
    show: false
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
</style>