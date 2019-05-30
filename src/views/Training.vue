<template>
  <div>
    <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-flex xs12 md10 offset-md1>
        <v-card flat class="transparent">
          <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
            <span
              style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
            >TRÆNING</span>
            <v-spacer></v-spacer>
            <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md10 offset-lg1 class="hidden-lg-and-up">
        <v-carousel hide-delimiters style="height: 250px !important;">
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
          <v-carousel-item
            style
            class="fade-in-fwd"
            reverse-transition="fade-in-fwd"
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            position="top;"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>

      <v-divider class="hidden-lg-and-up" inset style="visibility: hidden; !important;"></v-divider>

      <v-layout row wrap>
        <v-flex xs12 md5 offset-md1>
          <v-card flat class="transparent" style>
            <v-card-text style=" text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >Cosmos Bakkeskolen</span>
              <v-spacer></v-spacer>
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>
          <v-card
            flat
            style="background-color: rgb(21,83,125, .2);  padding: 5px; margin-top: 20px; "
          >
            <v-card-text
              style="text-align: left; padding: 0px;     font-family: hero-new,sans-serif;
font-weight: 300;
font-style: normal; font-size: 15px; letter-spacing: 1px; "
              class="px-0"
            >
              <v-divider class="pa-0" style="visibility:hidden;"></v-divider>
              <p>
                <Span style="font-size:170%; ">Mandag og Onsdag fra 18:00 - 20:00</Span>
                <br>Fortnite og CounterStrike Global Offfensive
              </p>
              <v-divider class="pa-3" style="visibility:hidden;"></v-divider>
              <Span style="font-size:170%;">Tirsdag og Torsdag fra 18:00 - 20:00</Span>
              <br>Overwatch og CounterStrike Global Offensive
              <v-card-actions style="padding: 0px; margin: 0px; height: 0px;"></v-card-actions>

              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md5 offset-md>
          <v-card flat class="transparent">
            <v-card-text style="text-align: left; padding-top: 35px;" class="px-0">
              <span
                style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 35px; align: left;  "
              >Kvaglundhallen</span>
              <v-spacer></v-spacer>
              <v-card flat style="background-color: #2b93c6; height: 2px;"></v-card>
            </v-card-text>
          </v-card>
          <v-card
            flat
            style="background-color: rgb(21,83,125, .2);  padding: 5px; margin-top: 20px; "
          >
            <v-card-text
              style="text-align: left; padding: 0px;     font-family: hero-new,sans-serif;
font-weight: 300;
font-style: normal;font-size: 15px; letter-spacing: 1px; "
              class="px-0"
            >
              <v-divider class="pa-0" style="visibility:hidden;"></v-divider>
              <p>
                <Span style="font-size:170%;">Mandag fra 18:00 - 20:00</Span>
                <br>Fortnite
              </p>
              <v-divider class="pa-3" style="visibility:hidden;"></v-divider>
              <Span style="font-size:170%;">Onsdag fra 18:00 - 20:00</Span>
              <br>CounterStrike Global Offensive
              <v-card-actions style="padding: 0px; margin: 0px; height: 0px;"></v-card-actions>

              <v-spacer></v-spacer>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md10 offset-lg1>
          <v-divider class="pa-2" inset style="visibility: hidden;"></v-divider>
        </v-flex>
        <v-flex xs12 md10 offset-lg1>
          <v-card flat class="transparent">
            <v-card-text
              style=" font-size: 35px; text-align: left; padding: 0px;"
              class="font"
            >Ruteanvisninger</v-card-text>
            <v-card flat style="background-color: #2b93c6; height: 1.5px;"></v-card>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 offset-md1>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=cosmos%20bakkeskolen&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://www.pureblack.de"></a>
            </div>
          </div>
        </v-flex>

        <v-flex xs12 md4 offset-md1>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=kvaglundhallen&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://www.pureblack.de"></a>
            </div>
          </div>
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
          src: "https://i.ibb.co/SVWvXDL/Tr-ning-ved-Cosmos.jpg"
        },
        {
          src: "https://i.ibb.co/PG2YKk1/Tr-ning-ved-Cosmos-3.jpg"
        },
        {
          src: "https://i.ibb.co/5T3qb58/DSC00072.jpg"
        },
        {
          src: "https://i.ibb.co/NF3CkJX/Tr-ning-ved-Cosmos-2.jpg"
        }
      ]
    };
  }
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

.font2 {
  font-family: hero-new, sans-serif;
  font-weight: 300;
  font-style: normal;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
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