<template>
  <div class="home">
    <Header head_text="service_page" content_text="service_content_text" page="service_page"  />
    <Map />
    <Advertising />
    <Createds />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue';
import Advertising from '@/components/service_component/Advertising.vue';
import Createds from '@/components/service_component/Createds.vue';
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
