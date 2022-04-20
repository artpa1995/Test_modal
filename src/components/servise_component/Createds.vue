<template>
  <div class="createds_content">
      <div class="createds_title"  >
            <h1>{{ $t('createds_title.title')}}</h1>
        </div>
    <div class="createds_blok">
        <div class="createds_blok_title" >
             {{ $t('createds_title.title2')}}
        </div>
        <div class="createds_bloks" v-for="(createds_contents, index) in this.$i18n.messages[this.$i18n.locale].createds_content" :key="createds_contents" :class="'createds_content'+index">
            <img :src="createds_contents.img" alt="" >
            <p>{{createds_contents.description}}<span>{{createds_contents.title}}</span></p>
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
          
    }
  },
  mounted() {
  },
   methods:{
     
   }
};
</script>

<style scoped>
.createds_content{
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}
.createds_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 40px;
}
.createds_title>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    color: var( --color5);
}
.createds_title>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1)-47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.createds_blok{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 60px 0px;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
}
.createds_bloks{
    display: flex;
    justify-content: center;
    align-items: end;
}
.createds_bloks>img{
    width: 20px;
}
.createds_bloks>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 350;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 20px;
    text-align: center;
    margin-left: 10px;
}
.createds_bloks>p>span{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: var( --color5);
    margin-left: 10px;
}
.createds_blok_title{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: var( --color5);
}
@media screen and (max-width: 800px) {
    .createds_bloks{
        width: unset;
    }
}
@media screen and (max-width: 1024px) {
    .createds_content_part{
        justify-content: center;
    }
    .createds_content_part_left{
      display: none;
    }
}
@media screen and (max-width: 342px) {
    .createds_title>h1::before {
        margin-top: 45px;
    }
}
</style>
