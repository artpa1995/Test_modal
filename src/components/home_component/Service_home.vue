<template>
  <div class="service_content container">
      <div class="service_content_head" >
        <h1>{{ $t('home_service_content_heads.title') }}
            <div class="service_content_head_line"></div>
        </h1>
        
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
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
/* .service_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
} */
.service_content_head_line { 
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 0.5rem; 
}
.service_content_head>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 1.25rem;
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
    padding-top: 3.125rem;
}
.service_content_bloc>p{
    max-width: 347px;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 10px;
}
.service_content_bloc>h2{
    margin-top: 1.25rem;
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    color: var( --color5);
    opacity: 0.98;
}
.service_content_bloc>span {
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 10px; 
    text-align: center;
}
</style>
