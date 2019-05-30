<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12 md10 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >DISCORD</span>
              
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>
        </v-flex>

 <v-flex xs12 lg10 offset-lg1 d-flex id="discord">
      <iframe src="https://titanembeds.com/embed/582527715840753665" height="600" width="800" frameborder="0"></iframe>
        </v-flex>


 <v-flex xs12 md10 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >SPØRGSMÅL</span>
              
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex style="text-align:left; padding-left:16px;" xs12 md10 offset-md1>
            <p>Her igennem Discord kan du stille spørgsmål til trænerne. <br> Forummet vil også løbende blive opdateret hvis en træning skulle blive aflyst, og nye events
            
            <br>
            <br>
            <span style="font-weight:1000 !important; font-size: 15px; ">Sådan gør du</span> <br> <br>
            Tryk på knappen "eSports Esbjerg" i vinduet for at blive inviteret direkte til discord. 
            Eller tryk i vinduet og begynd at skrive. <br> Tryk på burger menuen for at få vidst de ledige kanaler <br>
            Vælg herefter den kanal under "channels" ude til venstre som passer på dit spørgsmål. <br>
            Skriv herefter i "message-feltet" dit spørgsmål, så vender vi tilbage til dig hurtigst muligt. </p> 
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

.font {
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
}

.brødtekst {
  font-family: hero-new, sans-serif;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 2.8px;
  font-size: 15px;
}
</style>