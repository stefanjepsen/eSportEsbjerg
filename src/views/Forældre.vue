<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12 md10 offset-md1>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >FOR FORÆLDRE</span>
              
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>
        </v-flex>

<v-flex xs12 md10 offset-md1>
         <v-img style="opacity:0.8; height:40%;" lazy-src src="https://www.thetimes.co.uk/raconteur/s3/raconteur-prod/uploads/2017/11/35642821003_de312aa1ab_o-Edited.jpg" ></v-img>
        
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; " class="px-0">
              <h1 class="font">Hvad er eSport?</h1>
               <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
              <p class="brødtekst" style=" padding-left: 16px !important;">
                eSport er elektronisk sport, dvs. computerspil på konkurrenceplan, hvilket indebærer fast træning både fysisk og i spillet, deltagelse i turneringer og mesterskaber, kvalifikationer og finaler. <br> <br>
                eSport er for alle, uanset alder, sprog og hvor du end befinder dig.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>


<v-flex xs12 md10 offset-md1>
         <v-img style="height:40%; margin-top:-25%" src="https://i0.wp.com/fredericiaavisen.dk/wp-content/uploads/2018/10/20180929_Adela-Sznajder_BlastProSeries_Istanbul_03649.jpg?fit=2048%2C1365&ssl=1" ></v-img>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left;" class="px-0">
              <h1 class="font">
                Er det kommet for at blive?
                <br>
                 <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
              </h1>
<v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
              <p class="brødtekst" style="padding-left: 16px !important;">
                Ja, det er det. Men grunden til dette er fordi det trækker folk ud af den ellers ensomme tilværelse at sidde foran computeren. <br> 
                <br>eSport er med til at skabe et fællesskab, hvor gamere kan være sociale og dele erfaringer inden for computer verdenen. Og endda finde andre, som har samme interesser som ens selv.
                <br>Det sørger også for at skabe et fælles interesse punkt for gamere, som bygger op på de samme grundprincipper som fodbold, håndbold osv.
               <span style="font-weight:1000 !important; font-size: 15px; text-decoration: underline;"> Og nej, man sidder ikke foran computeren hele tiden. </span> <br> <br> For at kunne være udøver på højt plan i en hver sport, så skal der en masse træning til, både ved computeren, men også med kroppen. Størstedelen af professionelle eSport udøvere er i god form, fordi det styrker deres reaktioner og gør at de kan tænke klart.
              </p>
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