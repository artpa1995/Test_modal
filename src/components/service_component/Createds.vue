<template>
<!-- <svg width="16" height="17" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2739 33.3634C24.2952 29.9887 30.2739 21.3687 30.2739 11.737V5.89929C27.1811 5.89929 24.674 3.3921 24.674 0.299316H15.2739H5.8739C5.8739 3.3921 3.36671 5.89929 0.273926 5.89929V11.7369C0.273926 21.3687 6.25265 29.9887 15.2739 33.3634Z" fill="url(#paint0_linear_372_981)"/>
<path d="M15.2739 33.3634C24.2952 29.9887 30.2739 21.3687 30.2739 11.737V5.89929C27.1811 5.89929 24.674 3.3921 24.674 0.299316H15.2739C15.2739 0.299316 15.2739 26.0015 15.2739 33.3634Z" fill="url(#paint1_linear_372_981)"/>
<path d="M13.1841 22.6612L8.21143 17.6886L10.9512 14.9488L13.1841 17.1816L19.5962 10.7695L22.336 13.5093L13.1841 22.6612Z" fill="white"/>
<path d="M15.2739 20.5716V15.092L19.5964 10.7695L22.3362 13.5093L15.2739 20.5716Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_372_981" x1="41.5188" y1="-28.9978" x2="-27.2917" y2="-13.8758" gradientUnits="userSpaceOnUse">
<stop stop-color="#3DEE87"/>
<stop offset="1" stop-color="#3DB7FF"/>
</linearGradient>
<linearGradient id="paint1_linear_372_981" x1="35.8964" y1="-28.9978" x2="0.259783" y2="-25.082" gradientUnits="userSpaceOnUse">
<stop stop-color="#3DEE87"/>
<stop offset="1" stop-color="#3DB7FF"/>
</linearGradient>
</defs>
</svg> -->
  <div class="createds_content container">
      <div class="createds_title"  >
            <h1>{{ $t('createds_title.title')}}</h1>
        </div>
        
    <div class="createds_bloc">
        <h3 class="createds_bloc_title" >&nbsp; {{ $t('createds_title.title2')}}</h3>
        <div class="createds_bloc_texts">
            <div class="createds_blocs" v-for="(createds_contents, index) in this.$i18n.messages[this.$i18n.locale].createds_content" :key="createds_contents" :class="'createds_content'+index">
                <img :src="createds_contents.img" alt="" >
                <p>
  {{createds_contents.description}}<span>{{createds_contents.title}}</span></p>
            </div>
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
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}
.createds_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 3.125rem;
}
.createds_title>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.125rem;
    color: var( --color5);
}
.createds_title>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1)-47.45%, var( --color2) 146.11%);
    margin-top: 1.56rem; 
}
.createds_bloc{
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap; */
    padding: 3.125rem 0px;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
}
.createds_blocs{
    display: flex;
    justify-content: center;
    align-items: center;
}
.createds_blocs>img{
    width: 1.25rem;
}
.createds_blocs>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 350;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    /* margin-top: 1.25rem; */
    text-align: left;
    margin-left: 10px;
}
.createds_blocs>p>span{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.875rem;
    color: var( --color5);
    margin-left: 10px;
}
.createds_bloc_title{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: var( --color5);
    margin-bottom: 1.25rem;
}
.createds_bloc_texts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
@media screen and (max-width: 933px) {
    .createds_bloc_title{
        text-align: center;
    }
    .createds_blocs{
            align-items: flex-start;
            max-width: 900px;
            width: 100%;
    }
}
@media screen and (max-width: 800px) {
    .createds_blocs{
        width: unset;
        padding: 10px;
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

</style>
