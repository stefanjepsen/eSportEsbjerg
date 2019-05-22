<template>
  <v-footer dark height="auto">
    <v-card
      class="flex"
      flat
      tile
      style="box-shadow: 0px 1px 6px #000000; opacity: 0.95; font-family: tenby-seven, sans-serif; font-weight: 700;"
    >
      <v-card-title style="background-color: #121723;" class>
        <v-flex xs2 offset-xs class="hidden-sm-and-down"></v-flex>
        <img src="./../assets/logo2.png" class="logo2">
        <v-title>ESPORT ESBJERG</v-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Hjem</v-btn>
          <v-btn flat>Tilmelding</v-btn>
          <v-btn flat>Omkring os</v-btn>
          <v-btn flat>Events</v-btn>
          <v-btn flat style="color:#21AED4;">Discord</v-btn>
        </v-toolbar-items>
        <v-flex xs2 offset-xs></v-flex>
      </v-card-title>

      <v-card-actions
        class="justify-center"
        style="font-family: hero-new, sans-serif;
font-weight: 300;
font-style: normal; font-size:10px; padding:0;"
      >
        &copy;2019 —
        <strong
          style="font-family: hero-new, sans-serif;
font-weight: 300;
font-style: normal; font-size:10px;"
        >eSport Esbjerg</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>

