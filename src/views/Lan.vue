<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px; ">
      <v-layout row wrap>
      <v-flex xs12 md10 offset-lg1  class="hidden-lg-and-up">
          <v-carousel hide-delimiters style="height: 40% !important;" >
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
          >ELP</v-card-text>
          <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
          <v-card-text style="text-align: left; font-family: Hero New;"></v-card-text>
        </v-flex>

        <v-flex style="text-align: left; padding: 16px; !important " xs12 md6 offset-md1>
          <p
            class="brødtekst"
          >ELP (Esbjerg Lan Party) er et samarbejde mellem foreninger i byen hvor vi bestræber os på at lave det fedeste event i Esbjerg! Vi vil have Esbjerg bliver mere populært indenfor gaming!</p>
          <p class="fontsize2">GENERELT</p>
          <p class="brødtekst" style="">
            Deltagelse til ELP forudsætter overholdelse af de til enhver tid gældende regler for ELP, samt dansk og international lovgivning.
            <br>
            <br>Regelsættet for ELP kan ændres uden varsel, og vil hurtigst muligt blive opdateret på ELP’s hjemmeside og Facebook.
            <br>
            <br>Deltagere skal altid følge anvisninger fra ELP’s crew, offentlige myndigheder som politi og brandvæsen, også selvom disse ikke er dækket af dette regelsæt.
            <br>
            <br>Hvis gældende regler eller anvisninger ikke bliver overholdt, forbeholder ELP sig retten til, uden varsel, at bortvise personer fra eventet og eventets område, uden mulighed for refundering af evt. billet.
            <br>
            <br>Deltagelse til ELP sker udelukkende på deltagerens eget ansvar.
            <br>
            <br>ELP påtager sig intet ansvar for hærværk, tyveri, fejlstrøm eller anden skade på udstyr.
            <br>
            <br>Hel eller delvis refundering af billet er ikke muligt. Heller ikke i tilfælde af sygdom, strømafbrydelse, udfald på netværk eller andre uforudsete hændelser.
            <br>
            <br>Hver billet til ELP er unik, og giver adgang for én person til eventet.
            <br>
            <br>
Snyd med billetter eller andre forsøg på, uberettiget, at komme ind til eventet vil blive politianmeldt.
          </p>
        </v-flex>

        <v-flex xs12 md4 offset-md>
          <v-img
            style="height:100%"
            src="https://scontent.fbll1-1.fna.fbcdn.net/v/t1.0-9/60069865_1688794517889668_6134994305661534208_n.jpg?_nc_cat=110&_nc_ht=scontent.fbll1-1.fna&oh=d669eb60bd8f44bb996cb566d004309d&oe=5D50D661"
            aspect-ratio
            contain
          ></v-img>
        </v-flex>

        <v-flex xs12 md10 offset-lg1>
          <v-card-text
            style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; text-align: left; padding: 100px 0px 0px 0px;"
            class="pa-1"
          >Regelsæt</v-card-text>
          <v-card flat style="background-color: #2b93c6; width: 17%; height: 2px;"></v-card>
          <v-card-text style="text-align: left; font-family: Hero New;"></v-card-text>
        </v-flex>

        <v-flex style="text-align: left; padding: 16px; !important " xs12 md10 offset-md1>
          <p class="fontsize2">DELTAGERPLADSER</p>
          <p class="lineheight" style="">
            Til hver deltagerplads stilles der ét strømstik og ét netværksstik til rådighed.
            <br>
            <br>Deltageren skal selv medbringe stikdåse og netværkskabel for tilslutning af eget udstyr.
            <br>
            <br>Det er kun tilladt at tilslutte én computer, konsol eller lign. pr. deltager.
            <br>
            <br>Det er ikke tilladt at tilslutte eget netværksudstyr i form af routere, access points, switche, eller andet udstyr bortset fra en computer eller konsol til ELP’s netværk.
            <br>
            <br>Det er ikke tilladt at benytte højtalere.
            <br>
            <br>Det er ikke tilladt at medbringe køleskabe, toastere, kaffemaskiner, elkedler, effektlamper eller andre elektriske apparater med et højt strømforbrug.
            <br>
            <br>Det er ikke tilladt af medbringe sofaer, lænestole eller andre større møbler, men det er dog tilladt, at medbringe en kontorstol.
            <br>
            <br>I soveområderne skal man placere luftmadrasser og liggeunderlag, op ad hinanden uden mellemrum, og indenfor opmærkede båse, så der er soveplads til alle.
            <br>
            <br>Det er ikke tilladt at sove under borde, på gang-arealer eller lign. Sovning skal foregå i de opmærkede soveområder.
            <br>
            <br>Alle deltagernes ejendele skal placeres på deltagerens bordplads eller derunder.
            <br>
            <br>Der må under ingen omstændigheder stå ejendele i gangarealerne, foran døre eller porte da disse er flugtveje.
            <br>
            <br>Gældende lovgivning vedr. kopiering af software og ophavsretsbeskyttet materiale skal overholdes til eventet, og der henstilles til, at deltagerne er opmærksomme på, hvad der er adgang til på deres computer.
            <br>
            <br>Det er ikke tilladt, at tvinge sig adgang til andres udstyr eller på anden måde benytte andres udstyr uden tilladelse fra rette vedkommende.
            <br>
            <br>Når en deltager forlader eventet, er det deltagerens ansvar at tage alle sine medbragte ejendele med sig, samt smide alt sit affald i affaldsspandene.
            <br>
            <br>Evt. glemte ejendele skal gøres krav på straks efter eventet. Efter 1 uge doneres resten til velgørende formål, eller bortskaffes.
            <br> <br>
          </p>
        </v-flex>

        <v-flex style="text-align: left; padding: 16px; !important " xs12 md10 offset-md1>
          <p class="fontsize2">ALKOHOL OG STOFFER</p>
          <p class="lineheight">
            Det er ikke tilladt at indtage nogen former for alkohol, euforiserende stoffer eller møde op i påvirket tilstand til eventet.
            <br>
            <br>Forbuddet gælder på hele området for eventet, både i hallerne, parkeringspladserne samt alle underdørsarealer inden for event området.
            <br>
            <br>Det er ikke tilladt at indtage alkohol uden for eventets område, og derefter benytte eventets soveområde i påvirket tilstand.
            <br>
            <br>
            
              Overtrædelse af disse regler vil medføre øjeblikkelig bortvisning, uden undtagelse. Og uden refusion af evt. billet.
              <br> <br>
          </p>
        </v-flex>


  <v-flex style="text-align: left; padding: 16px; !important " xs12 md10 offset-md1>
          <p class="fontsize2">RYNING</p>
          <p class="lineheight">
           
    Det er ikke tilladt at ryge indendørs.
    <br> <br> Rygning må kun ske udendørs i de markerede rygeområder.
    <br> <br> Der gælder samme regler for brugere af e-cigaretter og snus, som for almindelige rygere.

            <br> <br>
          </p>
        </v-flex>

         <v-flex style="text-align: left; padding: 16px; !important" xs12 md10 offset-md1>
          <p class="fontsize2">ANDET</p>
          <p class="lineheight">
   
       Det er ikke tilladt af ophænge plakater, skilte, uddele reklamemateriale eller på anden måde gøre reklame uden skriftlig tilladelse fra ELP.
     <br> <br>  Det er ikke tilladt at sælge varer eller ydelser under ELP uden skriftlig tilladelse fra ELP
     <br> <br>  Det er tilladt for den enkelte deltager, at medbringe mad og drikkevarer i begrænsede mængder til eget forbrug.
     <br> <br>  ELP forbeholder sig retten til at videoovervåge eventet, tage billeder og optage video til eventet, samt at distribuere dette til internettet og bruge det til markedsføring af ELP, uden tilladelse fra personer, der måtte optræde på optagelserne/billederne.
     <br> <br>  ELP forbeholder sig retten til at gennemsøge deltagernes tasker, computerkabinetter m.m. igennem for alkohol, euforiserende stoffer m.m.
     <br> <br>  Hvis en deltager ikke vil lade ELP gennemsøge tasker, computerkabinetter m.m. vil dette medføre øjeblikkelig bortvisning.
     <br> <br>  Der kan forekomme drone-flyvning over hovedet på deltagerne, hvilket deltageren giver accept til ved accept af disse regler og deltagelse til ELP.
     <br> <br>  ELP forbeholder sig retten til at logge alt datatrafik, jfr. gældende lovgivning, på hele ELP’s netværk samt internetforbindelse.
     <br> <br>  Det er ikke tilladt at medbringe knive, knojern, attrapvåben eller andre våben, af nogen art under eventet.
     <br> <br>  Det er ikke tilladt at bære maske eller på anden måde dække sit ansigt til under eventet.
     <br> <br>  Det er ikke tilladt at benytte segboards, løbehjul og andre køretøjer indendørs til ELP, eller udendørs i forbindelse med indgangen, madboder og andre steder, hvor folk er tæt samlet.
     <br> <br>  Droneflyvning er kun tilladt efter skriftlig forudgående aftale med ELP, og vil kun blive givet, hvis man kan fremvise dronecertikat, drifthåndbog og godkendt drone, ligesom man skal have et godkendt formål med droneflyvningen.
 <br> <br>  

            <br> <br>
          </p>
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
            "https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/42249250_1400101013425688_6522139092900118528_o.jpg?_nc_cat=109&_nc_ht=scontent-ams4-1.xx&oh=77bb3f13cacdf988089e461148f92d3b&oe=5D5C48BA"
        },
        {
          src:
            "https://lh3.googleusercontent.com/o5mFmv8XVyc92cYLyPCZfT7i7wZwvQfaiPmIlulPvcVONUQdj3TIl9bFnJa-w1tjix-V1K-AGnrUHdg0j4X7sCHNxub3pzHdggX7Pi9luGAKowmls3D_C8ed8x1s354JCKISD3QgcNuihzkZedkW92Q2Kp33M_RnGJGzzIpUv03gD2gtD3h9W5kXoQSFLnGmPV87NCRyATIhquh_UJ89SGo4BGIYm-casbOqYwXGIE5eWILCX_T0h02zjhao6Qjf-4HSVdRGp5OoHAxYB5juq-bPdaYKZwIhpFRh1jZ4qth6bihKlktePNMhVHVeXq1MZzhPh1eKEB39Z_acNEYAqvd2Maz8REszcUv-lgyKOtWvijllAtGhAC_poczad_8Zd46YICUJGWYwZztaJlnuB3qSXPCgFMKeL-4r4-QZYvVA3QlvUgArup1TvZ61gI0uv5hI8e6tVpPyqeJ1VKdbkjdf6GgmSLXUcK_q8JBNJh_sCNHMW5Hr2Px4erk3O9uU2mYGxBAeSAkQhk48OuyrmVJJvx73opvyFBHj1c4-Yf2gCMsml6Ta7bypb6Us2vNoIzvFSGH0cthiIF0EVEkHuInE-pUsknngESYvqvs=w1920-h653"
        },
        {
          src:
            "https://lh3.googleusercontent.com/om_O_9T171Cb7aqxm5xxnhviXYyQSZ_1zVbcleju5CX2V7t2Y7aijG6Ac1sDl2yrm_j_LFn_dbwEymrqjxG9m0RP2AUpyHrbSUXEfh7d2oUG0ApqYsWfVoQ-wfKlVJ92_CqHT89tGWHsO8rdFIKaT3U3fvEoEkfSoDxm4M1WjJp6OuyVh--_Sgso-dVYC7L_NifNuU9mdQidrXSHRaLRSNDusmCtt2jhhwbbYjFpatt0WVHfuIGE3hp2jhoX--Xmu1DK6vCNWzh-9gf0qCgZVWGATCBewSo_fqsdSbZCmeYLGhBoe13WrswEfykKL74CIo7e3dvh2TJUB6Yp_R55bEjuY7_47w_N8TOmdAEz6etlzzNk9DAJw9Yh0IiGymhZiLY8k714znn8eU0G_OHB6QOJcy86xT9Ufsf5S_gtENfRp_oLbuKaaqmkEEp-nopo32UhArmhZAb3xsBcuwrjGygNPonaFy6ZURxemiN9-GIR4-HavSMnNdiEi1mjc21bMBHNrqzIAtrbE0McktQhuLtwH1iBo66dl86bDJH-azpUb3tdJApesapCmhygU53yKbXCME9IMUGSf7R6HynmfHy7uGbv5l-sVLGgSbs=w1920-h653"
        },
        {
          src:
            "https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/56468196_1627163404052780_2542914187361779712_o.jpg?_nc_cat=107&_nc_ht=scontent-ams4-1.xx&oh=d2299c5812f3140dc05e6bd3ba1730c1&oe=5D975D6A"
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

.fade-in-fwd {
  animation: fade-in-fwd 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) alternate both;
}

.fontsize2 {
  font-size: 150%;
  font-family: tenby-seven, sans-serif;
  font-weight: 700 !important;
}

.brødtekst {
  font-family: hero-new, sans-serif !important;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 2.8px;
  font-size: 15px;
}

.lineheight {
  font-family: hero-new, sans-serif !important;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 2.8px;
  font-size: 15px;
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