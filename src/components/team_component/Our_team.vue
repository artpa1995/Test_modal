<template>
  <div class="our_team_content">
      <div class="our_team_content_head" >
         <h1>{{ $t('our_team_content_head.title')}}</h1>
        <p>{{ $t('our_team_content_head.description')}}</p>
      </div>
      <div class="our_team_content_blocs">
           <div class="our_team_content_bloc">
              <div class="our_team_content_bloc_item"  v-for="our_team_content_bloc_item in this.$i18n.messages[this.$i18n.locale].our_team_content_bloc_items" :key="our_team_content_bloc_item">
                   <div class="our_team_content_bloc_item_title">
                       <div class="our_team_content_bloc_item_img">
                            <img v-bind:src="our_team_content_bloc_item.icon" alt="">
                       </div>
                       <h3>{{our_team_content_bloc_item.title}}</h3>
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
.our_team_content{
    background-color: var( --bg);
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
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.our_team_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2)46.11%);
    margin-top: 25px; 
}
.our_team_content_head>p{
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
.our_team_content_bloc{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
}
.our_team_content_bloc_item{
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
.our_team_content_bloc_item:nth-child(2n + 1) {
    border-right: 1px dashed grey;
}
.our_team_content_bloc_item:last-child{
    border-right:unset;
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
    width: 150px;
    height: 150px;
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
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
    margin-top: 20px;
}
.our_team_content_bloc_item_title>h3::before {
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(265.11deg, var( --color-head_r1)-0.1%, var( --color-head_r2) 97.28%);
    margin-top: 25px; 
}
.our_team_content_bloc_item_title>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: var( --texts_color);
    margin-top: 15px;
    max-width: 370px;
}
@media screen and (max-width: 1349px) {
   .our_team_content_bloc_item{
       max-width: 545px;
   }
}
@media screen and (max-width: 1149px) {
   .our_team_content_bloc_item{
       max-width: 445px;
   }
}
@media screen and (max-width: 949px) {
   .our_team_content_bloc_item{
       max-width: 345px;
   }
}
@media screen and (max-width: 749px) {
   .our_team_content_bloc_item{
       border-right: unset !important;;
   }
}
</style>
