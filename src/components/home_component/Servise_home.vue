<template>
  <div class="servise_content">
      <div class="servise_content_head" >
        <h1>{{ $t('home_servise_content_heads.title') }}</h1>
        
        <p> {{ $t('home_servise_content_heads.description') }}</p>
      </div>
      <div class="servise_content_bloks">
            <div class="servise_content_blok" v-for="servise_content_blok in this.$i18n.messages[this.$i18n.locale].servise_content_bloks" :key="servise_content_blok">
                    <img  v-bind:src="servise_content_blok.icon" />
                    <h2>{{servise_content_blok.title}}</h2>
                    <span></span>
                    <p>
                        {{servise_content_blok.description}}
                    </p>
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
.servise_content{
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
}
.servise_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.servise_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.servise_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.servise_content_head>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 20px;
    max-width: 370px;
}
.servise_content_bloks{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.servise_content_blok{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
}
.servise_content_blok>p{
    max-width: 347px;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 10px;
}
.servise_content_blok>h2{
    margin-top: 20px;
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
}
.servise_content_blok>span { 
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 20px; 
    text-align: center;
}
</style>
