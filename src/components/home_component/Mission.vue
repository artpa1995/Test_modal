<template>
  <div class="mission_content container">
      <div class="mission_content_head"  >
        <h1>{{ $t('mission_content_heads.title')}}
          <div class="mission_content_head_line"></div>
        </h1>
        
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
   
}
.mission_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-bottom: 3.125rem;
}
.mission_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
/* .mission_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(265.11deg, var( --color1) -0.1%, var( --color2) 97.28%);
    margin-top: 0.5rem; 
} */
.mission_content_head_line { 
   
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(265.11deg, var( --color1) -0.1%, var( --color2) 97.28%);
    margin-top: 0.5rem;
}
.mission_content_head>p{
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
