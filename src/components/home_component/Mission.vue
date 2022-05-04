<template>
  <div class="mission_content">
      <div class="mission_content_head"  >
        <h1>{{ $t('mission_content_heads.title')}}</h1>
        <div class="mission_content_head_line"></div>
        <p>
           {{ $t('mission_content_heads.description')}}
        </p>
      </div>
  </div>
</template>
<script>
export default {
    
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
.mission_content{
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
}
.mission_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 40px;
}
.mission_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.mission_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(265.11deg, var( --color1) -0.1%, var( --color2) 97.28%);
    margin-top: 25px; 
}
.mission_content_head>p{
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
@media screen and (max-width: 800px) {
  .mission_content_head>h1{
    font-size: 17px;
  }
  .mission_content_head{
    padding-top: 0px;
  }
    .mission_content{
      padding-bottom: 0px;
    }
}
@media screen and (max-width: 800px) {
    .mission_content{
      padding-bottom: 0px;
    }
}
</style>
