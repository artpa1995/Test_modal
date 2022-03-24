<template>
  <div class="methods_content">
      <div class="methods_content_head"  >
         <h1>{{$t('methods_content_head.title')}}</h1>
        <p>
           {{$t('methods_content_head.description')}}
        </p>
      </div>
      <div class="methods_content_bloks">
           <div class="methods_content_blok">
               <div class="methods_content_blok_item"  v-for="methods_content_blok_item in this.$i18n.messages[this.$i18n.locale].methods_content_blok_items" :key="methods_content_blok_item">
                   <div class="methods_content_blok_item_title">
                       <img v-bind:src="methods_content_blok_item.icon" alt="">
                       <span>{{methods_content_blok_item.title}}</span>
                   </div>
                   <div class="methods_content_blok_item_line"></div>
                   <p class="methods_content_blok_item_text">
                        {{methods_content_blok_item.description}}
                  </p>
               </div>
           </div>
      </div>
  </div>
  <!-- <div class="wrap">
  <div class="note-cap"></div>
  <div class="note"></div>
</div> -->
</template>

<script>
export default {
     props: {
        
    },
  data() {
    return {
        methods_content_head: [
            { title: 'ВЕБ РАЗРАБОТКА - НАШИ МЕТОДЫ', description: 'Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.'},
             ],
        methods_content_blok_items: [
            {icon:require('../../assets/svg/10.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require('../../assets/svg/11.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('../../assets/svg/12.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            {icon:require('../../assets/svg/13.svg'), title: 'Анализ информации', description: 'Получаем данные и обсуждаем пожелания клиента. Анализируем специфику деятельности компании, ставим задачи'},
            {icon:require('../../assets/svg/14.svg'), title: 'Проектирование структурыа', description: 'Продумываем представление информации, вывод данных, учитывая поведенческий фактор. Закладываем конверсионные блоки'},
            {icon:require('../../assets/svg/15.svg'), title: 'Интерфейс', description: 'Индивидуально подходим к формированию адаптивного интерфейса, Тщательно прорабатываем детали и графические элементы'},
            
         ],
    };
  },
  mounted() {
    //console.log(this.methods_content_img)
  },
   methods:{
      
   }
};
</script>

<style scoped>
.methods_content{
    background-color: var( --bg);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
}
.methods_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.methods_content_head>h1{
    font-family: var( --color-head_r1);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.methods_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.methods_content_head>p{
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
.methods_content_bloks{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 30px;
}
.methods_content_blok{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1470px;
}
.methods_content_blok>img {
    width: 100%;
}
.methods_content_blok_item{
    margin-top: 50px;
}
.methods_content_blok_item_title{
    display: flex;
    align-items: center;
}
.methods_content_blok_item_title>span{
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
.methods_content_blok_item_line{
    width: 55px;
    height: 4px;
    background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
    margin-top: 20px; 
}
.methods_content_blok_item_text{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: var( --texts_color);
    margin-top: 15px;
    max-width: 370px;
}
/* *,*:after,*:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0;outline:0}
@keyframes anim{
  10%{
    transform: translatey(-6px)
    perspective(200px)
    rotateX(-95deg)
    scaley(.5)
    scalex(1)  
  }
  20%{
    transform: translatey(-16px)
    perspective(200px)
    rotateX(-80deg)
    scaley(.5)
    scalex(1)
  }
  30%{
    transform: translatey(-23px)
    perspective(200px)
    rotateX(-70deg)
    scaley(.5)
    scalex(1)
  }
  40%{
    transform: translatey(-31px)
    perspective(200px)
    rotateX(-60deg)
    scaley(.5)
    scalex(1)
  }
  50%{
    transform: translatey(-37px)
    perspective(200px)
    rotateX(-50deg)
    scaley(.5)
    scalex(0.95)
  }
  60%{
    transform: translatey(-43px)
    perspective(200px)
    rotateX(-40deg)
    scaley(.5)
    scalex(0.95)
  }
  70%{
    transform: translatey(-48px)
    perspective(200px)
    rotateX(-30deg)
    scaley(.5)
    scalex(0.9)
  }
  80%{
    transform: translatey(-53px)
    perspective(200px)
    rotateX(-20deg)
    scaley(.5)
    scalex(0.87)
  }
  90%{
    transform: translatey(-57px)
    perspective(200px)
    rotateX(-10deg)
    scaley(.5)
    scalex(0.84)
  }
  100%{
    transform: translatey(-60px)
    perspective(200px)
    rotateX(0deg)
    scaley(.5)
    scalex(.8)
  }
}
.wrap{display:inline-block;margin:200px;position:relative}
.note-cap{
  position:absolute;
  z-index:2;
  height:200px;
  width:200px;
  background:red;
  transform: translatey(0px)
    perspective(200px)
    rotateX(-105deg)
    scaley(.5)
    scalex(1);
  animation:anim 3s linear forwards infinite
}
.note{
  position:absolute;
  z-index:1;
  height:200px;
  width:200px;
  background:blue;
  transform: translatey(2px)
    perspective(200px)
    rotateX(75deg)
    scaley(.5)
} */
</style>
