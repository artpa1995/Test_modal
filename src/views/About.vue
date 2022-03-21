<template>
  <div class="home">
    <Header head_text="about_page" content_text="about_content_text" page="about_page"/>
    <Animation />
    <Page />
    <Methods />
    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Page from '@/components/about_component/Page.vue';
import Methods from '@/components/about_component/Methods.vue';
import Animation from '@/components/about_component/Animation.vue';
export default {
  name: 'Home',
  components: {
    Header,Footer,Page,Methods,Animation
  }
}
</script>
