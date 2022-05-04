<template>
  <div class="methods_content">
      <div class="methods_content_head"  >
         <h1>{{$t('methods_content_head.title')}}</h1>
        <p>
           {{$t('methods_content_head.description')}}
        </p>
      </div>
      <div class="methods_content_blocs">
           <div class="methods_content_bloc">
               <div class="methods_content_bloc_item"  v-for="methods_content_bloc_item in this.$i18n.messages[this.$i18n.locale].methods_content_bloc_items" :key="methods_content_bloc_item">
                   <div class="methods_content_bloc_item_title">
                       <img v-bind:src="methods_content_bloc_item.icon" alt="">
                       <span>{{methods_content_bloc_item.title}}</span>
                   </div>
                   <div class="methods_content_bloc_item_line"></div>
                   <p class="methods_content_bloc_item_text">
                        {{methods_content_bloc_item.description}}
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
       
    };
  },
  mounted() {
  },
   methods:{   
   }
};
</script>

<style scoped>
.methods_content{
    background-color: var( --bg);
    max-width:120rem;
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
.methods_content_blocs{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 30px;
}
.methods_content_bloc{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1470px;
}
.methods_content_bloc>img {
    width: 100%;
}
.methods_content_bloc_item{
    margin-top: 50px;
}
.methods_content_bloc_item_title{
    display: flex;
    align-items: center;
}
.methods_content_bloc_item_title>span{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 20px;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
    margin-left: 10px;
}
.methods_content_bloc_item_line{
    width: 55px;
    height: 4px;
    background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
    margin-top: 20px; 
}
.methods_content_bloc_item_text{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: var( --texts_color);
    margin-top: 15px;
    max-width: 370px;
}
@media screen and (max-width: 800px) {
  .methods_content_bloc{
      justify-content: center;
  }
    .methods_content_bloc_item_title{
        justify-content: center;
    }
    .methods_content_bloc_item_text{
        text-align: center;
    }
}
@media screen and (max-width: 400px) {
  .methods_content_head>h1 { 
      font-size: 17px;
    }
}
@media screen and (max-width: 357px) {
    
  .methods_content_head>h1 {
    text-align: center;
     font-size: 1rem;
    }
    .methods_content_bloc_item_line{
        margin: 20px auto;
    }
    .methods_content_bloc_item_title{
        justify-content: center;
    }
    .methods_content_bloc_item_text{
        text-align: center;
    }
    .methods_content_bloc_item_title>span{
        max-width: 180px;
    }
   
}
</style>
