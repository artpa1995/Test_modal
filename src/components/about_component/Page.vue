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
        page_content_head: [
            { 
                title: 'О КОМПАНИИ',
                description: 'Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.',
                description2: 'Комплексная web разработка, создание и последующее развитие интернет проекта, оказываемая одним исполнителем, позволит вам снизить расходы, а нам даст возможность с максимальной эффективностью создать ресурс для долгого существования и успешной деятельности на просторах интернета.'
                 },
             ],
        page_content_img:[{img: require('../../assets/svg/bgcity.svg')}],
    };
  },
  mounted() {
    //console.log(this.page_content_img)
  },
   methods:{
      
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap');
.page_content{

    background-color: #FAF9F9FF;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
    height: 350px;
    background-image: url(../../assets/svg/bgcity.svg);
    background-color: #FAF9F9FF;
     background-position: center center;
     background-repeat: no-repeat;
    /*background-size: cover;*/
}
.page_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
   
}
.page_content_head>h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
}
.page_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, #3DEE87 -47.45%, #3DB7FF 146.11%);
    margin-top: 25px; 
}
.page_content_head>p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #828282;
    margin-top: 60px;
    max-width: 520px;
    text-align: center;
}

</style>
