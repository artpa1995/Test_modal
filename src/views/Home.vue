<template>
  <div class="home">
    <Header head_text="home_page" content_text="home_content_text" page="home_page"  />
    <Sphera />
    <ServiceHome />
    <AboutHome />
    <Mission />
    <Team/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sphera from '@/components/Sphera.vue';
import ServiceHome from '@/components/home_component/Service_home.vue';
import AboutHome from '@/components/home_component/About_home.vue';
import Mission from '@/components/home_component/Mission.vue';
import Team from '@/components/home_component/Team_home.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,Sphera,ServiceHome,AboutHome,Mission,Team,Footer
    
  },
  data () {
    return{  
    }
  }
}
</script>
<style scoped>

</style>
