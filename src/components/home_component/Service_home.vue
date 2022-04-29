<template>
  <div class="service_content">
      <div class="service_content_head" >
        <h1>{{ $t('home_service_content_heads.title') }}</h1>
        
        <p> {{ $t('home_service_content_heads.description') }}</p>
      </div>
      <div class="service_content_blocs">
            <div class="service_content_bloc" v-for="service_content_bloc in this.$i18n.messages[this.$i18n.locale].service_content_blocs" :key="service_content_bloc">
                    <img  v-bind:src="service_content_bloc.icon" />
                    <h2>{{service_content_bloc.title}}</h2>
                    <span></span>
                    <p>
                        {{service_content_bloc.description}}
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
.service_content{
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 60px;
}
.service_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.service_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.service_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.service_content_head>p{
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
.service_content_blocs{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.service_content_bloc{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
}
.service_content_bloc>p{
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
.service_content_bloc>h2{
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
.service_content_bloc>span {
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 10px; 
    text-align: center;
}
</style>
