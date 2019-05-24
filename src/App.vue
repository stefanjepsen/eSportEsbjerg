<template>
  <v-app dark style="background-image: linear-gradient(218deg, #15537d, 7%, #121723); letter-spacing: 2.2px; ">
    
    <v-content>
      <router-view></router-view>
    </v-content>
    <navbar />
    <Footer />
    
  </v-app>
</template>

<script>
import navbar from '@/components/navbar'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: 
    
   { navbar:navbar,
   Footer:Footer},
   
  
  data () {
    return {
      //
    }
  }
  

}
</script>

<style lang="scss">

</style>
