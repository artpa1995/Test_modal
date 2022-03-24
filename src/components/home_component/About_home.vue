<template>
  <div class="about_content">
      <div class="about_content_head"  >
         <h1>{{ $t('about_content_head.title') }} </h1>
        <p>{{ $t('about_content_head.description') }}</p>
      </div>
      <div class="about_content_bloks">
           <div class="about_content_blok">
               <div class="about_content_blok_item"  v-for="about_content_blok_item in this.$i18n.messages[this.$i18n.locale].about_content_blok_items" :key="about_content_blok_item">
                   <div class="about_content_blok_item_title">
                       <img :src="about_content_blok_item.icon" alt="">
                       <span>{{about_content_blok_item.title}}</span>
                   </div>
                   <div class="about_content_blok_item_line"></div>
                   <p class="about_content_blok_item_text">
                        {{about_content_blok_item.description}}
                  </p>
               </div>
           </div>
           <div class="about_content_blok" >
              <img v-for="about_content_imgs in about_content_img" :key="about_content_imgs"  :src="about_content_imgs.img">
           </div>
           <div class="about_content_blok">
               <div class="about_content_blok_item"  v-for="about_content_blok_item in this.$i18n.messages[this.$i18n.locale].about_content_blok_items_2" :key="about_content_blok_item">
                   <div class="about_content_blok_item_title">
                       <img v-bind:src="about_content_blok_item.icon" alt="">
                       <span>{{about_content_blok_item.title}}</span>
                   </div>
                   <div class="about_content_blok_item_line"></div>
                   <p class="about_content_blok_item_text">
                        {{about_content_blok_item.description}}
                  </p>
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
        // about_content_head: [
        //     { title: 'О КОМПАНИИ', description: 'Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.'},
        //      ],
        // about_content_blok_items: [
        //     {icon:require('../../assets/svg/4.svg'), title:  ("whatsNext.components") , description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
        //     {icon:require("../../assets/svg/5.svg"), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
        //     {icon:require('../../assets/svg/6.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            
        //  ],
        //  about_content_blok_items_2: [
        //     {icon:require('../../assets/svg/7.svg'), title: 'Техническая реализация', description: 'Подходим к ресурсу с точки зрения его масштабируемости. Учитываем показатель юзабилити, т.е. удобство пользования'},
        //     {icon:require("../../assets/svg/8.svg"), title: 'Продвижение и оптимизация', description: 'Проводим плотную работу по поисковому продвижению. Внутренняя и внешняя оптимизация проекта'},
        //     {icon:require('../../assets/svg/9.svg'), title: 'Последующая поддержка сайта', description: 'Сопровождаем как те проекты, которые сами сделали, так и любые другие, которые пришли к нам на обслуживание'},
            
        //  ],
        about_content_img:[{img: require('../../assets/about_img.png')}],
    };
  },
  mounted() {
      
    //console.log(this.$i18n.messages[this.$i18n.fallbackLocale].about_content_blok_items)
    //console.log(this.$i18n.fallbackLocale);
  },
   methods:{
      
   }
};
</script>

<style scoped>
.about_content{
    background-color: var( --bg);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
}
.about_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.about_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.about_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.about_content_head>p{
    font-family: var( --font_texts);
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
.about_content_bloks{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 60px;
}
.about_content_blok>img {
    width: 100%;
}
.about_content_blok_item{
    margin-top: 50px;
}
.about_content_blok_item_title{
    display: flex;
    align-items: center;
}
.about_content_blok_item_title>span{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
    margin-left: 10px;
}
.about_content_blok_item_line{
    width: 55px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 20px; 
}
.about_content_blok_item_text{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: var( --texts_color);
    margin-top: 15px;
    max-width: 370px;
}
</style>
