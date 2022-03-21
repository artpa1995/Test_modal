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
        contacts_content_head: [{ title: 'Свяжитесь с нами', description: 'Если у вас есть дополнительные вопросы, пожалуйста, не стесняйтесь обращаться к нам.'}, ],
        contacts_content_blok_items: [
            {icon:require('../../assets/svg/ph.svg'), title :'Телефон', value: '+7 968 026 66 60 '},
            {icon:require('../../assets/svg/em.svg'), title :'Email', value: 'L-it@mail.com'},
            {icon:require('../../assets/svg/ad.svg'), title :'АДРЕС', value: 'Yerevan '},
         ],
    };
  },
  mounted() {
    //console.log(this.contacts_content_img)
  },
   methods:{
      
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap');
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
}
.contacts_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, #3DEE87 -47.45%, #3DB7FF 146.11%);
    margin-top: 25px; 
}
.contacts_content_head>p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #828282;
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    color: #012350;
    text-align: center;
    margin: 30px;
}
.contacts_content_blok_item>p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #828282;
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
