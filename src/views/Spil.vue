<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat class="transparent">
            <img style=" max-height: 500px; width: 100% " src="https://esport.dk/assets/media/550">
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card flat class="transparent">
              <v-btn :ripple="false">
                <v-avatar>
                  <img style=" height: 100px; width: 100px;"src="https://i.etsystatic.com/17978984/r/il/62b049/1601504293/il_fullxfull.1601504293_teiu.jpg">
                </v-avatar>
              </v-btn>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs6>
          <v-card flat class="transparent">
            <v-btn :ripple="false">
              <v-avatar>
                <img style=" height: 100px; width: 100px; " src="https://i.exophase.com/psn/games/o/3086e.png">
              </v-avatar>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card-text
            style="font-family: Tenby seven regular; font-size: 35px; text-align: left; padding: 100px 0px 0px 0px;"
            class="px-0"
          >Hvilke spil understøtter eSport Esbjerg?</v-card-text>
          <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
          <v-card-text style="text-align: left; font-family: Hero New;">
            I AaB esport tilbyder vi træning og hold i de mest populære spil i dansk esport. I øjeblikket er det følgende spil: CS:GO, LoL, Overwatch og FIFA.
            <br>
            <br>Vi bliver tit spurgt, om vi har planer om at starte afdelinger op i nye spil. Man er velkommen til at spille det spil, man ønsker. Men for, at vi som forening, kan understøtte et spil med struktureret træning og hold, er der nogle kriterier, der skal være opfyldt. Det er nemlig vigtigt for os, at vi kan sikre en vis kvalitet.
            <br>
            <br>De kriterier, der som minimum skal være opfyldt, er følgende:
            <br>
            <br>Afdelingsleder
            <br>Det er vigtigt, at vi har en afdelingsleder, der sikrer strukturen og den overordnede ledelse af afdelingen.
            <br>
            <br>Træner
            <br>For at vi kan sikre den faglige del, er det vigtigt, at vi har en træner, der kan stå for træningen og udviklingen af holdet.
            <br>
            <br>Mange af vores medlemmer spiller mange forskellige spil og ikke kun det spil, som de er på hold i. Vi er et stort fællesskab og vores fælles interesse er esport og gaming. Derfor bruger vi også tid sammen på at hygge os med andre spil, f.eks World of Warcraft, Starcraft, Diablo, PUBG, Fortnite osv..
            <br>
            <br>Du behøver derfor ikke nødvendigvis at være kompetitiv i alle de spil, du spiller. Du kan sagtens hygge dig med vores medlemmer gennem f.eks. vores discord server, så kom indenfor og sig hej! Det kræver nemlig ikke medlemsskab at besøge vores discord server, så kig ind forbi! Vi har en række gæsterum til CS:GO, LoL, Overwatch, Fortnite, Diablo og et generelt gæsterum, som du kan bruge, selvom du ikke er medlem. Vi har derudover en lang række kanaler udelukkende til AaB esport medlemmers brug, som er usynlige for dig indtil, du selv bliver medlem.
            <br>
          </v-card-text>
        </v-flex>
        <v-flex xs2 offset-xs4>
          <v-btn
            style="height: 100px; width: 350px;  font-family: Tenby seven regular; letter-spacing: 3px; "
            class="knap"
          >
            <v-card style="height: 100px;" class="transparent"></v-card>
            <v-card-text>Se Træningstider</v-card-text>
          </v-btn>
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

<style  scoped>
.knap {
  background-color: #15537d !important;
}
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
#logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>