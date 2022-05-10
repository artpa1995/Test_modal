<template>
  <div class="advertising_content container">
      <div class="advertising_title">
            <h1>{{ $t('advertising_title.title')}}</h1>
        </div>
    <div class="advertising_bloc">
        <div class="advertising_blocs" v-for="(advertising_contents, index) in this.$i18n.messages[this.$i18n.locale].advertising_content" :key="advertising_contents" :class="'advertising_content'+index">
            <img :src="advertising_contents.img" alt="" >
            <h3>{{advertising_contents.title}}</h3>
            <p>{{advertising_contents.description}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
     props: {
        
    },
    components: {
    
  },
  data() {
    return {
            
    }
  },
  mounted() {

  },
   methods:{
      
   }
};
</script>

<style scoped>
.advertising_content{
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    
}
.advertising_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 3.125rem;
}
.advertising_title>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
.advertising_title>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.advertising_bloc{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 3.125rem 0px;
}
.advertising_blocs{
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
}
.advertising_blocs:nth-child(3n + 3) {
  width: 100%;
}
.advertising_blocs>h3{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
    text-align: center;
}
.advertising_blocs>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 350;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 1.25rem;
    max-width: 320px;
    text-align: center;
}
@media screen and (max-width: 800px) {
    .advertising_blocs{
        width: unset;
        margin-top: 1.875rem;
    }
}
@media screen and (max-width: 1024px) {
    .advertising_content_part{
        justify-content: center;
    }
    .advertising_content_part_left{
      display: none;
    }
}
@media screen and (max-width: 824px) {
   .advertising_bloc{
           padding: 1.875rem 0px;
   }
}

@media screen and (max-width: 360px) {
    .advertising_title>h1 {
      font-size: 1rem;
    }
}
</style>
