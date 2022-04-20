<template>
  <div class="contacts_content">
      <div class="contacts_content_head" >
         <h1>{{ $t('contacts_content_head.title')}}</h1>
        <p>
           {{ $t('contacts_content_head.description')}}
        </p>
      </div>
      <div class="contacts_content_bloks">
        <div class="contacts_content_blok_item"  v-for="contacts_content_blok_item in this.$i18n.messages[this.$i18n.locale].contacts_content_blok_items" :key="contacts_content_blok_item">
            <img v-bind:src="contacts_content_blok_item.icon" alt="">
            <h3>{{contacts_content_blok_item.title}}</h3>
            <p>{{contacts_content_blok_item.value}} </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
     props: {
        
    },
  data() {
    return {
    };
  },
  mounted() {
  },
   methods:{  
   }
};
</script>

<style scoped>
.contacts_content{
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 80px;
}
.contacts_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contacts_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.contacts_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.contacts_content_head>p{
    font-family:var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 20px;
    max-width: 400px;
    text-align: center;
}
.contacts_content_bloks{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 50px;
}
.contacts_content_blok_item>h3{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    color: var( --color5);
    text-align: center;
    margin: 30px;
}
.contacts_content_blok_item>p{
    font-family:var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 20px;
    max-width: 400px;
    text-align: center;
}
@media screen and (max-width: 749px) {
   .contacts_content_blok_item{
       border-right: unset !important;;
   }
}
</style>
