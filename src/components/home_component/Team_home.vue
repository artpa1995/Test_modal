<template>
  <div class="team_content container">
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
    box-sizing: border-box;
}
.team_content_part{
    display: flex;
    justify-content: space-between;
}
.team_content_part_left{
   width: 910px;
    padding: 1.56rem;
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
    margin-top: -6.25rem;
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
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
.team_content_part_right>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 1.56rem; 
}
.team_content_part_right>p{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: left;
    letter-spacing: 0.1em;
    color:var( --texts_color);
    margin-top: 1.25rem;
    max-width: 600px;
}
.team_content_part_right>button{
    max-width: 230px;
    padding: 1rem 9px;
    margin-top: 1.875rem;
}
._team{
    text-decoration: none;
    padding: 0.9em 2.6em;
    max-width: 71px;
    margin-top: 1.875rem;
}
@media screen and (max-width: 1070px) {
    .team_content_part_left{
        width: 988px;
    }
}
@media screen and (max-width: 1024px) {
   
     .team_content_part_right>h1, .team_content_part_right>p{
        text-align: center;
    }
    ._team{
        margin: 1.875rem auto;
    }
    .team_content_part{
        justify-content: center;
    }
    .team_content_part_left{
      display: none;
    }
    .team_content_part_right{
        height: unset;
        padding-top: 1.875rem;
    }
}
</style>
