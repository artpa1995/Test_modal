<template>
  <div class="advertising_content">
      <div class="advertising_title">
            <h1>{{ $t('advertising_title.title')}}</h1>
        </div>
    <div class="advertising_blok">
        <div class="advertising_bloks" v-for="(advertising_contents, index) in this.$i18n.messages[this.$i18n.locale].advertising_content" :key="advertising_contents" :class="'advertising_content'+index">
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
            advertising_title: [
                { title: 'Контекстная реклама'}
             ],
             advertising_content: [
                { img:require('../../assets/svg/16.svg'), title: 'Оперативность запуска', description: 'Один специалист ведет не более 3 клиентов одновременно — это позволяет оперативно решать задачи вашего бизнеса'},
                { img:require('../../assets/svg/17.svg'), title: 'Рациональность использования бюджета', description: 'Мы не расходуем ни одного рубля впустую. Стоимость работ полностью оправдана!'},
                { img:require('../../assets/svg/18.svg'), title: 'Эффективность и гарантия результата', description: 'Мы отвечаем за свою работу и делаем все, чтобы достичь поставленных целей'},
                { img:require('../../assets/svg/19.svg'), title: 'Только целевой трафик', description: 'Нам важно не просто создать видимую популярность ресурса, а конвертировать ее в ваш реальный доход'},
                { img:require('../../assets/svg/20.svg'), title: 'Развитие и обучение', description: 'Мы максимально доходчиво расскажем и покажем все про маркетинговые активности'}
             ],
    }
  },
  mounted() {
     //console.log(this.advertising_profile);
  },
   methods:{
      
      alerts(){
      alert("modal");
    }
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap');
*{
    margin: 0px;
    padding: 0px;
}
.advertising_content{
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    
}
.advertising_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 40px;
}
.advertising_title>h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
}
.advertising_title>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, #3DEE87 -47.45%, #3DB7FF 146.11%);
    margin-top: 25px; 
}
.advertising_blok{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 60px 0px;
}
.advertising_bloks{
    display: flex;
    flex-direction: column;
    /* max-width: 700px;
    width: 100%; */
    width: 40%;
    justify-content: center;
    align-items: center;
}
.advertising_bloks:nth-child(3n + 3) {
  width: 100%;
}
.advertising_bloks>h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
    text-align: center;
}
.advertising_bloks>p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 350;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #828282;
    margin-top: 20px;
    max-width: 320px;
    text-align: center;
}
@media screen and (max-width: 800px) {
    .advertising_bloks{
        width: unset;
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
@media screen and (max-width: 342px) {
    .advertising_title>h1::before {
    
    margin-top: 45px;
}
}
</style>
