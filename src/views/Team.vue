<template>
  <div class="home">
    <Header head_text="team_page" content_text="team_content_text" page="team_page"  />
    <Animation/>
    <OurTeam />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Animation from '@/components/team_component/Animation.vue';
import OurTeam from '@/components/team_component/Our_team.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,OurTeam,Animation,Footer
    
  },
  data () {
    return{
     
    }
  } 
}
</script>
<style scoped>

</style>
