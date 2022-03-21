<template>
  <div class="our_team_content">
      <div class="our_team_content_head" >
         <h1>{{ $t('our_team_content_head.title')}}</h1>
        <p>{{ $t('our_team_content_head.description')}}</p>
      </div>
      <div class="our_team_content_bloks">
           <div class="our_team_content_blok">
              <div class="our_team_content_blok_item"  v-for="our_team_content_blok_item in this.$i18n.messages[this.$i18n.locale].our_team_content_blok_items" :key="our_team_content_blok_item">
                   <div class="our_team_content_blok_item_title">
                       <img v-bind:src="our_team_content_blok_item.icon" alt="">
                       <h3>{{our_team_content_blok_item.title}}</h3>
                        <p>{{our_team_content_blok_item.description}} </p>
                   </div>
               </div>
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
        our_team_content_head: [
            { title: 'Наши сотрудники ', description: 'В нашей команде все отлажено, каждый занимается своей частью в создании и продвижении проекта'},
             ],
        our_team_content_blok_items: [
            {icon:require('../../assets/svg/achik.svg'), title: 'МЕНЕДЖЕР ПРОЕКТА ', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require("../../assets/svg/achik.svg"), title: 'ВЭБ ДИЗАЙНЕР', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('../../assets/svg/achik.svg'), title: 'ВЕРСТАЛЬЩИК', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            {icon:require('../../assets/svg/achik.svg'), title: 'ВЕБ-ПРОГРАММИСТ', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования'},
            {icon:require("../../assets/svg/achik.svg"), title: 'КОПИРАЙТЕР', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта'},
            {icon:require('../../assets/svg/achik.svg'), title: 'КОНТЕНТ МЕНЕДЖЕР', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
            {icon:require('../../assets/svg/achik.svg'), title: 'SEO Аналитик и Оптимизатор', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
            
         ],
    };
  },
  mounted() {
    //console.log(this.our_team_content_img)
  },
   methods:{
      
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap');
.our_team_content{
    background-color: #FAF9F9FF;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
}
.our_team_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.our_team_content_head>h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
}
.our_team_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, #3DEE87 -47.45%, #3DB7FF 146.11%);
    margin-top: 25px; 
}
.our_team_content_head>p{
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
.our_team_content_blok{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
}

.our_team_content_blok_item{
    margin-top: 50px;
    position: relative;
    max-width: 645px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px dashed grey;
    padding-top: 45px;
    padding-left: 40px;

}
.our_team_content_blok_item:nth-child(2n + 1) {
  border-right: 1px dashed grey;
}
/* .our_team_content_blok_item:nth-child(2n + 1)>.our_team_content_blok_item_title::after {
    content: "";
    width: 2px;
    height: 80%;
  background: grey;
  position: absolute;
  top: 40px;
  right: 0px;
} */
.our_team_content_blok_item:last-child{
    border-right:unset;
}
/* .our_team_content_blok_item:last-child .our_team_content_blok_item_title::after {
   content: "";
    width: 2px;
    height: 80%;
  background: unset;
  position: absolute;
  top: 40px;
  right: 0px;
} */
.our_team_content_blok_item_title>img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    z-index: 2 ;
    transition: 0.5s;
}
.our_team_content_blok_item_title::before { 
    content: " ";
    position: absolute;
    width: 159px;
    height: 159px;
    border-radius: 50%;
    border: 1px solid #B87FFBFF;
    margin-top: -10px;
    margin-left: -8px;
}
.our_team_content_blok_item_title:hover img { 
    top: -10px;
    left: -8px;
    width: 159px;
    height: 159px;
    margin-bottom: -9px;
}
.our_team_content_blok_item_title>h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #012350;
    opacity: 0.98;
    margin-top: 20px;
}

.our_team_content_blok_item_title>h3::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(265.11deg, #E199FC -0.1%, #9240FC 97.28%);
    margin-top: 25px; 
}

.our_team_content_blok_item_title>p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #828282;
    margin-top: 15px;
    max-width: 370px;
}

@media screen and (max-width: 1349px) {
   .our_team_content_blok_item{
       max-width: 545px;
   }
}
@media screen and (max-width: 1149px) {
   .our_team_content_blok_item{
       max-width: 445px;
   }
}
@media screen and (max-width: 949px) {
   .our_team_content_blok_item{
       max-width: 345px;
   }
}
@media screen and (max-width: 749px) {
   .our_team_content_blok_item{
       border-right: unset !important;;
   }
}
</style>
