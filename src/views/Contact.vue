<template>
  <div class="home">
    <Header head_text="contact_page" content_text="contact_content_text" page="contact_page"  />
    <Animation/>
    <Contacts />
    <Form />
    <Map />
    <Footer/>
 
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Animation from '@/components/contact_component/Animation.vue';
import Contacts from '@/components/contact_component/Contacts.vue';
import Form from '@/components/contact_component/Form.vue';
import Map from '@/components/contact_component/Map.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,Contacts,Animation, Form,Footer,Map
    
  },
  data () {
    return{
     
    }
  }
  
   
}
</script>
<style scoped>

</style>
