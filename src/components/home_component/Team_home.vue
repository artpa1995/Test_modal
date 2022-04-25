<template>
  <div class="team_content">
      <div class="team_content_part"  >
         <div class="team_content_part_left"  >
             <div class="team_profile" v-for="(team_profile_img, index) in team_profile" :key="team_profile_img" :class="'team_profile'+index">
                 <img :src="team_profile_img.img" alt="" >
             </div>
        </div>
        <div class="team_content_part_right"  >
            <h1>{{ $t('home_team_content.title')}}</h1>
            <p>
                {{ $t('home_team_content.description')}}
            </p>
            <router-link class="btn _team" to="/team">{{ $t('more_info')}}</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Buttons from '@/components/Buttons.vue';
export default {
     props: {
    },
    components: {
    Buttons,
  },
  data() {
    return {
        team_profile: [
            { img:require('../../assets/team/1.jpg')},
            { img:require('../../assets/team/2.jpg')},
            { img:require('../../assets/team/3.jpg')},
            { img:require('../../assets/team/4.jpg')},
            { img:require('../../assets/team/5.jpg')},
            { img:require('../../assets/team/6.jpg')}
        ],
    }
  }
};
</script>

<style scoped>
.team_content{
    background-color: var( --bg);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    
}
.team_content_part{
    display: flex;
    justify-content: space-between;
}
.team_content_part_left{
   width: 910px;
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
}
.team_profile{
    position: relative;
    left: 0px;
    top: 0px;
    width: 150px;
    height:150px; 
    transition: 0.5s;
}
.team_profile0{
    margin-left: 14%;
}
.team_profile1{
    margin-left: 20%;
    margin-right: 10%;
}
.team_profile2{
    margin-left: 7%;
}
.team_profile3{
    margin-left: 5%;
    margin-top: -100px;
    margin-right: 5%;
    width: 200px;
    height:200px;
}
.team_profile4{
    margin-right: 5%;
}

.team_profile5{
    margin-left: 32%;
    margin-top: -70px;
}
.team_profile::before{
    border-radius: 50%;
    content: " ";
    position: absolute;
    width: 146px;
    height: 144px;
    z-index: 0;
}
.team_profile0::before { 
    border: 1px solid var( --color6);
    margin-top: -10px;
    margin-left: -5px; 
}
.team_profile1::before { 
    border: 1px solid var( --color6);
    margin-top: -10px;
    margin-left: 5px;
}
.team_profile2::before { 
    border: 1px solid #76D8E1FF;
    margin-top: -10px;
    margin-left: 5px;
}
.team_profile3::before { 
    width: 196px;
    height: 194px;
    border: 1px solid #76D8E1FF;
    margin-top: -10px;
    margin-left: -5px;
}
.team_profile4::before { 
    border: 1px solid #76D8E1FF;
    margin-top: -10px;
    margin-left: -5px;
}
.team_profile5::before { 
    border: 1px solid var( --color6);
    margin-top: -10px;
    margin-left: 5px;
}
.team_profile0:hover img{
    margin-left:-6px;
    margin-top: -11px;
}
.team_profile1:hover img{
    margin-left:5px;
    margin-top: -10px;
}
.team_profile2:hover img{
    margin-left:5px;
    margin-top: -10px;
}
.team_profile3:hover img{
    margin-left:-5px;
    margin-top: -10px;
}
.team_profile4:hover img{
    margin-left:-5px;
    margin-top: -10px;
}
.team_profile5:hover img{
    margin-left:5px;
    margin-top: -10px;
}
.team_profile>img{
    width: 100%;
    height:100%;
    object-fit: cover; 
    border-radius: 50%;
    position: relative; 
    transition: 0.5s;
}
.team_content_part_right{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 730px;
}
.team_content_part_right>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}
.team_content_part_right>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.team_content_part_right>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    letter-spacing: 0.1em;
    color:var( --texts_color);
    margin-top: 20px;
    max-width: 600px;
}
.team_content_part_right>button{
    max-width: 230px;
    padding: 16px 9px;
    margin-top: 30px;
}
._team{
    text-decoration: none;
    padding: 0.9em 2.6em;
    max-width: 171px;
    margin-top: 30px;
}
@media screen and (max-width: 1070px) {
    .team_content_part_left{
        width: 988px;
    }
}
@media screen and (max-width: 1024px) {
    .team_content_part{
        justify-content: center;
    }
    .team_content_part_left{
      display: none;
    }
}
</style>
