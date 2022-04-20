<template>
  <div class="home">
    <Header head_text="servise_page" content_text="servise_content_text" page="servise_page"  />
    <Map />
    <Advertising />
    <Createds />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue';
import Advertising from '@/components/servise_component/Advertising.vue';
import Createds from '@/components/servise_component/Createds.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header, Map, Advertising, Createds, Footer
  },
  data () {
    return{
     
    }
  }
}
</script>
<style scoped>

</style>
