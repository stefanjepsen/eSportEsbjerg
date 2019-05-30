<template>
  <v-footer dark height="auto">
    <v-card
      flat
      tile
      class="white--text text-xs-center flex"
      style="font-family: tenby-seven, sans-serif; font-weight: 700;
      background-color:#121723;
      "
    >
      <div class="parent">
        <img class="image1" src="http://www.esport-esbjerg.dk/media/1051/logo2000x2000.png">
      </div>

      <v-card-text>
        <v-btn style light v-for="icon in icons" :key="icon" class="mx-4" icon>
          <a :href="icon.url" :target="icon.target">
            <v-icon size="24px">{{ icon.name }}</v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        <p style="font-size:250%;">KONTAKT OS</p>

        <div class="Border2"></div>

        <br>
        <p>
          <span class="fontSize">ADRESSE</span>
          <br>ASKEKRATTET 4
          <br>
ESBJERG
        </p>
        <p>
          <span class="fontSize">Telefon</span>
          <br>+45 27 15 37 74
        </p>

        <p>
          <span class="fontSize">E-MAIL</span>
          <br>SUPPORT@ESPORT-ESBJERG.DK
        </p>
      </v-card-text>

      <v-divider style="border-color:#2B93C6"></v-divider>

      <v-card-text class="white--text">
        2019 —
        <strong>Lektiebanden skoleprojekt for eSport Esbjerg</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "fab fa-facebook",
        url:
          "https://www.facebook.com/eSportEsbjerg/?eid=ARDMt8mTpiP4VD173eVsXAkaNFBRDKWWhheL5ZRpRgZVufRKaAMr3RqtZGq3F55NoYABBW8_6fhv2gp1",
        target: "_blank"
      },

      {
        name: "fab fa-youtube-square",
        url:
          "https://www.youtube.com/channel/UCm75AVCNbTaKKmIWu77eHmA/featured",
        target: "_blank"
      },
      {
        name: "fab fa-instagram",
        url: "https://www.instagram.com/esport_esbjerg/",
        target: "_blank"
      }
    ]
  })
};
</script>

<style lang="scss">
.fontSize {
  font-size: 170%;
}

.Border2 {
  width: 20%;
  margin: auto;
  height: 1px;

  border: solid 0.5px #2b93c6;

  background-color: #15537d;
}

.fa-facebook::before {
  color: white;
}
.fa-youtube-square::before {
  color: white;
}
.fa-instagram::before {
  color: white;
  size: 200px;
}

.parent {
  position: relative;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  height: 2em;
}
.image1 {
  position: relative;
  top: -75px;
  left: 0;
  height: 120px;
}
</style>

