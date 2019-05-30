<template>
  <v-container>
    <v-toolbar
      style=" box-shadow: 0px 1px 6px #000000; opacity: 0.95; font-family: tenby-seven, sans-serif; font-weight: 700;"
      app
      height="100px;"
      color="#131723"
    >
      <v-layout row wrap>
        <v-flex xs3 md1 offset-md2 d-flex class>
          <router-link to="/">
            <v-img
              style="height:110px; margin-top:auto; margin-left: -30%;"
              src="http://www.esport-esbjerg.dk/media/1051/logo2000x2000.png"
              aspect-ratio
              contain
            ></v-img>
          </router-link>
        </v-flex>

        <v-flex xs8 md3 offset-md1 d-flex>
          <v-toolbar-items class>
            <v-flex xs8 md11 offset-xs1 d-flex>
              <v-menu transition="slide-x-transition" bottom right full-width>
                <template v-slot:activator="{ on }">
                  <v-btn
                    style="width:100%; height:90% !important;"
                    class="hidden-lg-and-up"
                    color
                    dark
                    v-on="on"
                    depressed
                    flat
                  >
                    <v-icon left>menu</v-icon>MENU
                  </v-btn>
                </template>

                <v-list style="background-color: rgb(21,83,125, 0.0) ">
                  <v-btn class="knap" style="width:100%; padding:0; margin: 0;" to="/">HJEM</v-btn>
                  <v-btn
                    class="knap"
                    style="width:100%; padding:0; margin: 0;"
                    to="/Training"
                  >TRÆNING</v-btn>
                  <v-btn
                    class="knap"
                    style="width:100%; padding:0; margin: 0;"
                    to="/Tilmeld"
                  >TILMELDING</v-btn>
                  <v-btn
                    class="knap"
                    style="width:100%; padding:0; margin: 0;"
                    to="/Forældre"
                  >FORÆLDRE</v-btn>
                  <v-btn class="knap" style="width:100%; padding:0; margin: 0;" to="/about">OM OS</v-btn>
                  <v-btn class="knap" style="width:100%; padding:0; margin: 0;" to="/Lan">LAN</v-btn>
                  <v-btn class="knap" style="width:100%; padding:0; margin: 0;" to="/spil">SPIL</v-btn>
                  <v-btn
                    class="knap"
                    style="width:100%; padding:0; margin: 0; color:#21AED4;"
                    to="/Discord"
                  >DISCORD</v-btn>
                </v-list>
              </v-menu>
            </v-flex>

            <v-spacer></v-spacer>
            <v-btn class="hidden-md-and-down" to="/" flat>Hjem</v-btn>
          </v-toolbar-items>
          <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
          <v-toolbar-items class="hidden-md-and-down">
            <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
            <v-btn to="/Training" flat>Træning</v-btn>
            <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
            <v-btn to="/Tilmeld" flat>Tilmelding</v-btn>
            <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
            <v-btn flat to="/Forældre">Forældre</v-btn>
            <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
            <v-btn flat to="/about">Om os</v-btn>
            <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
            <v-btn flat to="/Lan">Lan</v-btn>
            <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn to="/spil" flat>spil</v-btn>
              <v-divider class="pa-1" inset vertical style="visibility: hidden;"></v-divider>
              <v-btn flat style="color:#21AED4;" to="/Discord">Discord</v-btn>
            </v-toolbar-items>
          </v-toolbar-items>
        </v-flex>
      </v-layout>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.knap {
  font-family: tenby-seven, sans-serif;
  font-weight: 700;
  border: solid 1.5px #15537d !important;

  background-color: #131723 !important;
}
</style>



