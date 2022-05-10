<template>
  <div class="about_content container">
      <div class="about_content_head"  >
         <h1>{{ $t('about_content_head.title') }} 
             <div class="about_content_head_line"></div>
         </h1>
        
        <p>{{ $t('about_content_head.description') }}</p>
      </div>
      <div class="about_content_blocs">
           <div class="about_content_bloc">
               <div class="about_content_bloc_item"  v-for="about_content_bloc_item in this.$i18n.messages[this.$i18n.locale].about_content_bloc_items" :key="about_content_bloc_item">
                   <div class="about_content_bloc_item_title">
                       <img :src="about_content_bloc_item.icon" alt="">
                       <span>{{about_content_bloc_item.title}}</span>
                   </div>
                   <div class="about_content_bloc_item_line"></div>
                   <p class="about_content_bloc_item_text">
                        {{about_content_bloc_item.description}}
                  </p>
               </div>
           </div>
           <div class="about_content_bloc" >
              <img v-for="about_content_imgs in about_content_img" :key="about_content_imgs"  :src="about_content_imgs.img">
           </div>
           <div class="about_content_bloc">
               <div class="about_content_bloc_item"  v-for="about_content_bloc_item in this.$i18n.messages[this.$i18n.locale].about_content_bloc_items_2" :key="about_content_bloc_item">
                   <div class="about_content_bloc_item_title">
                       <img v-bind:src="about_content_bloc_item.icon" alt="">
                       <span>{{about_content_bloc_item.title}}</span>
                   </div>
                   <div class="about_content_bloc_item_line"></div>
                   <p class="about_content_bloc_item_text">
                        {{about_content_bloc_item.description}}
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
      
        about_content_img:[{img: require('../../assets/about_img.png')}],
    };
  },
  mounted() {
      
  },
   methods:{
      
   }
};
</script>

<style scoped>
.about_content{
    background-color: var( --bg);
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
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
/* .about_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
} */
.about_content_head_line{
 
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 0.5rem; 
}
.about_content_head>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 1.25rem;
    max-width: 25rem;
    text-align: center;
}
.about_content_blocs{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 3.125rem;
}
.about_content_bloc>img {
    width: 100%;
}
.about_content_bloc_item{
    margin-top: 3.125rem;
}
.about_content_bloc_item_title{
    display: flex;
    align-items: center;
}
.about_content_bloc_item_title img {
    width: 1.875rem;
    height: 1.875rem;
}
.about_content_bloc_item_title>span{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
    margin-left: 10px;
}
.about_content_bloc_item_line{
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 1.25rem; 
}
.about_content_bloc_item_text{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.875rem;
    color: var( --texts_color);
    margin-top: 15px;
    max-width: 370px;
}
@media screen and (max-width: 430px) {
  .about_content_bloc_item_line{
      margin: 10px auto;
  }
  .about_content_bloc_item_title{
      justify-content: center;
  }
  .about_content_bloc_item_text{
      text-align: center;
  }
  .about_content_bloc_item_title>span{
      max-width: 180px;
  }

}
</style>
