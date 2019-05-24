<template>
 <v-container>
      <v-layout align-center justify-center row fill-height>
        
        <v-toolbar
          style=" box-shadow: 0px 1px 6px #000000; opacity: 0.95; font-family: tenby-seven, sans-serif; font-weight: 700;"
          app
          fixed
          absolute
          height=" 100px"
          color="#121723"
        >
        
          
          <img  src="./../assets/logo2.png" class="logo2">
          
           <v-title>ESPORT ESBJERG</v-title>
           <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
         
    
            <v-btn flat>Hjem</v-btn>
            <v-btn flat>Tilmelding</v-btn>
            <v-btn flat>Omkring os</v-btn>
            <v-btn flat>Events</v-btn>
            <v-btn flat style="color:#21AED4;">Discord</v-btn>
   </v-toolbar-items>
 
        </v-toolbar>
         
      </v-layout>
    </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo2 {
  width: 100px;
  height: 100px;
  
}

</style>



