<template>
  <div class="mission_content">
      <div class="mission_content_head"  >
        <h1>{{ $t('mission_content_heads.title')}}</h1>
        <p>
           {{ $t('mission_content_heads.description')}}
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
        mission_content_head: [
            { title: 'НАША МИССИЯ', description: 'Создавать успешные интернет проекты, используя современные технологии, индивидуальный подход к каждому бизнесу'},
             ],
       
    };
  },
  mounted() {
    //console.log(this.about_content_img)
  },
   methods:{
      
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&display=swap');
.mission_content{
    /* background-color: #FAF9F9FF; */
    max-width: 1920px;
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
}
.mission_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(265.11deg, #E199FC -0.1%, #9240FC 97.28%);
    margin-top: 25px; 
}
.mission_content_head>p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #828282;
    margin-top: 20px;
    max-width: 400px;
    text-align: center;
}
</style>
