<template>
  <div class="our_team_content container">
      <div class="our_team_content_head" >
         <h1>{{ $t('our_team_content_head.title')}}</h1>
        <p>{{ $t('our_team_content_head.description')}}</p>
      </div>
      <div class="our_team_content_blocs">
           <div class="our_team_content_bloc">
              <div class="our_team_content_bloc_item"  v-for="our_team_content_bloc_item in this.$i18n.messages[this.$i18n.locale].our_team_content_bloc_items" :key="our_team_content_bloc_item">
                  <div class="bloks_line"></div>
                   <div class="our_team_content_bloc_item_title">
                       <div class="our_team_content_bloc_item_img">
                            <img v-bind:src="our_team_content_bloc_item.icon" alt="">
                       </div>
                       <h3>{{our_team_content_bloc_item.title}}</h3>
                        <div class="our_team_content_bloc_item_line"></div>
                        <p>{{our_team_content_bloc_item.description}} </p>
                   </div>
               </div>
           </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
      }
    }
};
</script>

<style scoped>
.bloks_line{
     border: 1px dashed transparent;
     
    border-top-color: grey;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2%;
}
.our_team_content{
    background-color: var( --bg);
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    padding-top: 3.125rem;
    padding-bottom: 3.125rem;
}
.our_team_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.our_team_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
.our_team_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2)46.11%);
    margin-top: 25px; 
}
.our_team_content_head>p{
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
.our_team_content_bloc{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.875rem;
}
.our_team_content_bloc_item{
    margin-top: 3.125rem;
    position: relative;
    /* max-width: 50%; */
    width: 50%;
    /* padding: 10px; */
    box-sizing: border-box;
    /* border-bottom: 1px dashed grey; */
    /* padding-top: 3.125rem;
    padding-left: 3.125rem; */
}
.our_team_content_bloc_item::after{
    /* content: " ";
    position: absolute;
    border-bottom: 1px dashed grey;
    max-width: 88%;
    width: 100%;
    top: -21px; */
}

.our_team_content_bloc_item:first-child{
width: 50.1%;

    display: flex;
    flex-direction: column;
    align-items: center;
}
/* .our_team_content_bloc:nth-child(2n + 1)::before{
    border-right: 1px dashed rgb(175, 31, 31);
} */
.our_team_content_bloc_item:nth-child(2n - 2)>.our_team_content_bloc_item_title {
    border-right: 1px dashed grey;
}
.our_team_content_bloc_item:first-child>.our_team_content_bloc_item_title{
    border-right:unset;
}
.our_team_content_bloc_item_title{
    margin-top: 2rem;
    padding-left: 3.125rem;
}
.our_team_content_bloc_item_img{
    display: flex;
    justify-content: center;
    margin-left: -10px;
    width: 170px;
    height: 170px;
    transition: 1s;
}
.our_team_content_bloc_item_img>img{
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 50%;
    z-index: 2 ;
    transition: 0.8s;
}
.our_team_content_bloc_item_title::before {
    content: " ";
    position: absolute;
    width: 159px;
    height: 159px;
    border-radius: 50%;
    border: 1px solid var( --color6);
    margin-top: -10px;
    margin-left: -8px;
}
.our_team_content_bloc_item_img:hover img {
    margin-top: -10px;
    margin-left: -8px;
    width: 159px;
    height: 159px;
}
.our_team_content_bloc_item_title>h3{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
    margin-top: 1.25rem;
}
.our_team_content_bloc_item_line {
   
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(265.11deg, var( --color-head_r1)-0.1%, var( --color-head_r2) 97.28%);
    margin-top: 15px; 
}
.our_team_content_bloc_item_title>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.875rem;
    color: var( --texts_color);
    margin-top: 15px;
    max-width: 370px;
}
@media screen and (max-width: 1349px) {
 
   .our_team_content_bloc_item{
       /* max-width: 545px; */
   }
   .our_team_content_bloc_item::after{
        /* max-width: 29rem; */
    }
}
@media screen and (max-width: 1149px) {
   .our_team_content_bloc_item{
       /* max-width: 445px; */
   }
   .our_team_content_bloc_item::after{
        /* max-width: 23rem; */
    }
}
@media screen and (max-width: 992px) {
    .our_team_content_bloc_item:nth-child(2n - 2)>.our_team_content_bloc_item_title {
     border-right: unset;
    }

    .our_team_content_bloc_item_title{
        padding-left: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   .our_team_content_bloc_item{
       width: 85%!important;
   }

   .our_team_content_bloc_item:first-child{
        width: 85%;
    }
    .our_team_content_bloc_item_title>p{
        text-align: center;
    }
  
}
@media screen and (max-width: 749px) {
   .our_team_content_bloc_item{
       border-right: unset !important;;
   }
}
@media screen and (max-width: 450px) {
   /* .our_team_content_bloc_item_title>p{
       text-align: center;
   }
   .our_team_content_bloc_item_title>h3 {
       text-align: center;
   } */
   .our_team_content_bloc_item::after{
        /* max-width: 14rem; */
    }
}
</style>
