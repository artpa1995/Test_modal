<template>
  <div class="page_content container">
        <div class="page_content_head" >
            <h1>{{ $t('page_content_head.title')}}
                <div class="page_content_head_line line"></div>
            </h1>
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
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
/* .page_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
} */
.page_content_head_line{
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
}
.page_content_head>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 3.125rem;
    max-width: 520px;
    text-align: center;
}

</style>
