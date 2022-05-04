<template>
  <div class="page_content">
        <div class="page_content_head" >
            <h1>{{ $t('page_content_head.title')}}</h1>
            <p>
            {{ $t('page_content_head.description')}}
            </p>
             <p>
            {{ $t('page_content_head.description2')}}
            </p>
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
.page_content{
    background-color: var( --bg);
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
    height: 350px;
    background-image: url(../../assets/svg/bgcity.svg);;
     background-position: center center;
     background-repeat: no-repeat;
}
.page_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
   
}
.page_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.page_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.page_content_head>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 60px;
    max-width: 520px;
    text-align: center;
}

</style>
