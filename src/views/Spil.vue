<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px; ">
      <v-layout row wrap>


     <v-flex xs12 md10 offset-lg1 class="hidden-lg-and-up">
          <v-carousel style="height: 40% !important;" >
            <v-carousel-item 
              class="fade-in-fwd"
              reverse-transition="fade-in-fwd"
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              position="top;"
              contain
            ></v-carousel-item>
          </v-carousel>
        </v-flex>

        <v-flex xs12 md10 offset-lg1 class="hidden-md-and-down">
          <v-carousel>
            <v-carousel-item style=""
              class="fade-in-fwd"
              reverse-transition="fade-in-fwd"
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              position="top;"
              
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

     <v-divider class="hidden-lg-and-up" inset style="visibility: hidden; margin-top:-300px;"></v-divider>

    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12 md10 offset-lg1>
          <v-card-text 
            style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; text-align: left; padding: 100px 0px 0px 0px;"
            class="pa-1"
          >Hvilke spil understøtter eSport Esbjerg?</v-card-text>
          <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
          <v-card-text style="text-align: left; padding: 16px; !important" class="brødtekst">
           Hos esport Esbjerg tilbyder vi træning og hold i de mest populære spil i dansk esport. I øjeblikket er det følgende spil: CS:GO, fortnite og Overwatch. Fifa er lige rundt om hjørnet til at blive oprettet.
            <br>
            <br>Vi bliver tit spurgt, om vi har planer om at starte afdelinger op i nye spil. Man er velkommen til at spille det spil, man ønsker. Men for, at vi som forening, kan understøtte et spil med struktureret træning og hold, er der nogle kriterier, der skal være opfyldt. Det er nemlig vigtigt for os, at vi kan sikre en vis kvalitet.
     
   
      
            <br>
            <br>Træner
            <br>For at vi kan sikre den faglige del, er det vigtigt, at vi har en træner, der kan stå for træningen og udviklingen af holdet.
            <br>
            
            
            <br>Du behøver ikke nødvendigvis at være kompetitiv i alle de spil, du spiller. Du kan sagtens hygge dig med vores medlemmer gennem f.eks. vores discord server, så kom indenfor og sig hej! 
            <br>
          </v-card-text>
        </v-flex>
        <v-flex xs12 lg10 offset-lg1 d-flex>
          <v-btn
            style="height: 100px; width: 350px; font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size:130%; letter-spacing: 3px; "
            class="knap" to="/Training"
          >
            <v-card style="height: 100px; " class="transparent"></v-card>
            <v-card-text st>SE TRÆNINGSTIDER</v-card-text>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"
        },
        {
          src:
            "https://media.playstation.com/is/image/SCEA/fortnite-season-9-key-art-01-ps4-us-09may19?$native_nt$"
        },
        {
          src:
            "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/04/08182400/ow-cast.jpg"
        },
        {
          src:
            "https://i.pinimg.com/originals/30/1d/e3/301de3d0cb0639f0ec0b3209459ba06c.jpg"
        }
      ]
    };
  }
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


.brødtekst {
  font-family: hero-new, sans-serif !important;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 2.8px;
  font-size: 15px;
}

.fade-in-fwd {
  animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) alternate both;
}

@keyframes fade-in-fwd {
  0% {
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>