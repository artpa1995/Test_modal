<template>
  <div class="header">
    <div class="mobile_content">
           <div class="logo_mobile">
              <router-link to="/">
                <img src="../assets/logo-transparent.png" alt="">
              </router-link>
            </div>
            <div id="sidemenu">
                <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" :class="{active:navOpen}">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bottom"></span>
                  </button>
                <transition name="translateX">
                  <nav v-show="navOpen">
                    <div class="sidemenu__wrapper">
                      <Menu :page="page" />
                      <CustomSelect :options="this.lang" :default="this.locallang ? this.locallang  : this.lang[0]"  class="select"/>
                    </div>
                  </nav>
                </transition>
            </div>
        </div>
      <div class="contents">
          <div class="content_left">
              <div class="content_left_left">
                <div class="logo">
                  <router-link to="/">
                    <img src="../assets/logo-transparent.png" alt="">
                 </router-link>
                </div>
                <div class="content_left_left_texts">
                    <h1>{{ $t(head_text) }}</h1>
                    <h4>{{ $t(content_text) }}</h4>
                    <router-link to="/about">
                    <Buttons v-if="page === 'home_page'"   :value=" $t('head_button') " />
                    <!-- <Buttons v-if="page === 'home_page'" @click=" modal = !modal; /* $event.target.classList.toggle('active')*/" :value=" $t('head_button') " />-->
                    </router-link> 
                </div>
              </div>
               
               <div class="content_left_right"></div>
          </div>
          <div class="content_right">
            <div class="content_right_head">
              <div class="content_right_content">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.92041 17.7207C7.09816 18.1503 7.29269 18.5617 7.50334 18.9501C8.34409 20.4993 9.38893 21.5701 10.3554 21.9141V17.2372C9.18416 17.2818 8.02417 17.447 6.92041 17.7207ZM16.326 18.0844C17.1101 18.3487 17.8533 18.6705 18.5368 19.0446C17.3367 20.1717 15.8849 21.0341 14.2756 21.5361C14.7577 20.9915 15.2137 20.3308 15.6293 19.5649C15.8846 19.0948 16.1169 18.5997 16.326 18.0844ZM10.3557 15.9473V11.6583H5.65527C5.71402 13.3328 5.99969 14.9973 6.47806 16.5044C7.72331 16.1852 9.03453 15.9943 10.3557 15.9473ZM10.3557 6.0804V10.3694H5.65527C5.71402 8.69495 5.99969 7.03024 6.47806 5.52315C7.72331 5.84256 9.03453 6.0334 10.3557 6.0804ZM10.3554 4.79053V0.113647C9.38893 0.457565 8.34409 1.52843 7.50334 3.07765C7.29269 3.46605 7.09816 3.87744 6.92041 4.30696C8.02417 4.58072 9.18416 4.74588 10.3554 4.79053ZM15.0795 4.30696C14.9018 3.87744 14.7072 3.46588 14.4966 3.07765C13.6558 1.52843 12.611 0.457565 11.6445 0.113647V4.79053C12.8158 4.74588 13.9758 4.58072 15.0795 4.30696ZM11.6445 10.3694V6.0804C12.9658 6.03323 14.2769 5.84256 15.5221 5.52315C16.0005 7.03024 16.2862 8.69495 16.3451 10.3694H11.6445ZM11.6445 11.6583V15.9473C12.9658 15.9943 14.2769 16.1852 15.5221 16.5044C16.0005 14.9973 16.2862 13.3328 16.3449 11.6583H11.6445ZM5.23698 5.15456C4.72169 6.77696 4.42226 8.55261 4.36469 10.3694H0C0.141159 7.93393 1.07674 5.70845 2.55093 3.94841C3.37204 4.42493 4.27724 4.82944 5.23698 5.15456ZM15.6293 2.46262C15.8844 2.93292 16.1167 3.42807 16.326 3.94336C17.1101 3.679 17.8533 3.35724 18.5369 2.98311C17.3367 1.85602 15.8849 0.993622 14.2756 0.491592C14.7577 1.03625 15.2137 1.69673 15.6293 2.46262ZM5.67384 3.94336C4.88983 3.679 4.14661 3.35724 3.46313 2.98311C4.66324 1.85585 6.11494 0.993622 7.72426 0.491425C7.24237 1.03625 6.78633 1.69673 6.37057 2.46262C6.11528 2.93292 5.88298 3.42807 5.67384 3.94336ZM17.6355 11.6583C17.5779 13.4751 17.2785 15.2507 16.7632 16.8731C17.7229 17.1982 18.6281 17.6026 19.4492 18.0791C20.9234 16.3191 21.859 14.0938 22.0002 11.6583H17.6355ZM16.7632 5.15456C17.7229 4.82944 18.6281 4.42509 19.4492 3.94858C20.9234 5.70862 21.859 7.9341 22.0002 10.3694H17.6355C17.5779 8.55261 17.2785 6.77696 16.7632 5.15456ZM11.6445 17.2372V21.9141C12.611 21.5701 13.6558 20.4993 14.4966 18.9501C14.7074 18.5617 14.9018 18.1503 15.0795 17.7206C13.9758 17.447 12.8158 17.2818 11.6445 17.2372ZM5.23698 16.8731C4.27724 17.1982 3.37204 17.6026 2.55093 18.0791C1.07657 16.3191 0.141159 14.0936 0 11.6583H4.36469C4.42226 13.4751 4.72169 15.2507 5.23698 16.8731ZM6.3705 19.5649C6.11537 19.0948 5.88307 18.5997 5.67377 18.0844C4.88976 18.3487 4.14653 18.6705 3.46289 19.0446C4.66316 20.1717 6.11487 21.0341 7.72418 21.5361C7.24213 20.9915 6.78609 20.331 6.3705 19.5649Z" fill="url(#paint0_linear_496_100)"/>
                  <defs>
                  <linearGradient id="paint0_linear_496_100" x1="22.717" y1="13.8875" x2="-0.366279" y2="11.8956" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E199FC"/>
                  <stop offset="1" stop-color="#9240FC"/>
                  </linearGradient>
                  </defs>
                </svg>
                <div class="lang_select">
                  <CustomSelect :options="this.lang" :default="select_lang()"  class="select"/>
                </div>
              </div>
              <div class="menu">
                <Menu :page="page"  class="burger_menu"/>
              </div>
            </div>
            <div class="content_right_line">
              <div class="line"></div>
              <div class="line-content">
                IT DEVELOPMENT
              </div>
            </div>
          </div>
      </div>
  </div>
  <div class="modal" :class="iconClass"  @click=" close_modal" v-if="page === 'home_page'">
      <div class="modal_content">
        <span
          class="close"
          @click=" modal = !modal;">
          &times;
        </span>
        <div class="modal_info">
          
          <p>Email: L-it@mail.com</p>
          <p>Phone: +374-55-55-55-55</p>
          <p><router-link to="/contact">{{ $t("menu.contact") }}</router-link></p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import CustomSelect from '@/components/CustomSelect.vue';
import Buttons from '@/components/Buttons.vue';
import Menu from '@/components/Menu.vue';


export default {
  name: 'Header',
  props: {
    head_text :String,
    content_text :String,
    page :String,
  },
  components: {
    CustomSelect,
    Buttons,
    Menu,
  },
  data() {
    return {
      info: [],
      lang: ['EN','????', '??????'],
      open: false,
      modal: false,
      navOpen: false,
      locallang: localStorage.getItem('lang'),

    }
  },
  mounted() {


  // axios.get('http://127.0.0.1:8000/api/getHeaderDataVue')
  // .then(response => this.info = response.data).catch(error => console.log(error));
  //  console.log( this.info);
  },
  methods:{

    
    select_lang: function (){
        if(localStorage.getItem('lang') == "ru"){
          this.locallang = this.lang[1];
          return this.locallang;
        }
        if(localStorage.getItem('lang') == "en"){
          this.locallang = this.lang[0];
          return this.locallang;
        }
         if(localStorage.getItem('lang') == "arm"){
          this.locallang = this.lang[2];
          return this.locallang;
        }
        return  this.lang[0];
    },

     close_modal: function (event) {
      let close = event.target.className;
      if (close == 'modal') {
        this.close = false;
      }
    },



  },
  computed: {
       created() {
},
  iconClass() {
      return this.modal ? '' : 'close_modal';
    }
  },
};
</script>

<style scoped>

.modal_info{
  font-family: var( --font_head);
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.1em;
  opacity: 0.8;
  margin-top: 25px;
  text-decoration: none;
}
.modal_info>p>a{
   text-decoration: none;
}
.modal_info>p>a:hover{
   text-decoration: underline;
}
.close_modal{
  display: none !important;;
}
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 6.25rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
.modal_content {
  background-color: #fefefe;
  margin: auto;
  padding: 1.25rem;
  border-radius: 5px;
  width: 25%;
}
.close {
  color: var(--color-head_r1);
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: var( --color-head_r2);
  text-decoration: none;
  cursor: pointer;
}
.content_right_line{
  position: relative;
  z-index: -10;
  width: 6.25rem;
}
.content_right_line .line{
  border: 0.5px solid transparent;
  border-left-color: #000000;
  height: 95%;
  width: 1px;
  margin: 10% auto;
}
.content_right_line .line-content{
  position: absolute;
  top: 45%;
  right: -50%;
  transform: rotate(90deg);
  white-space: nowrap;
  background-color: white;
  padding: 1rem;
  font: 15pt/0 'Averia Serif Libre';
}

.border_line{
  margin-inline-start: auto;
  margin-top: calc(-16vh - 138px);
  width: 74%;
}
.border_line fieldset{
  transform: rotate(90deg);
  border: 0.5px solid transparent;
  border-top-color: #000000;
  box-sizing: border-box;
}
legend{
  font: 15pt/0 'Averia Serif Libre';
  margin: auto;
  padding: 6.25rem 1.25rem;
}
.menu{
  display: flex;
  justify-content: center;
  margin-top: 3.125rem;
}
.content_right{
  display: flex;
  justify-content: end;
  width: 45%;
}
.content_right_head{
  display: flex;
  flex-direction: column;
}
.content_right_content{
  display: flex;
  justify-content: center;
  padding-top: 3.15rem;
}
.contents{
  max-width:120rem;
  width: 100%;
  margin: 0 auto 1.875rem;
  display: flex;
  box-shadow: 0 10px 1rem 0 rgb(0 0 0 / 20%), 0 6px 1.25rem 0 rgb(0 0 0 / 19%) !important;
  position: relative;
}
.content_left{
  display: flex;
  justify-content: space-between;
  width: 55%;
  height: 100%;
  background: radial-gradient(55.71% 79.06% at 70.48% 50%, #0061B1 12%, #005198 29%, #003871 60%, #002959 85%, #002350 100%);
}
.content_left_right{
  border-left: 63px solid transparent;
  border-bottom: 600px solid white;
  background: radial-gradient(55.71% 79.06% at 70.48% 50%, #0061B1 12%, #005198 29%, #003871 60%, #002959 85%, #002350 100%);
  width: 76px;
}
.content_left_left{
  margin-left: 25px;
}

.logo img {
    width: 116px;
    height: 111px;
}
.logo {
  padding-top:36px;
  padding-left: 3.125rem;
}
.mobile_content{
  
  display: none;
}
.logo_mobile img {
    width: 116px;
    height: 111px;
}
.content_left_left_texts{
  color: white;
  max-width: 17.5rem;
  width: 100%;
  padding-top:72px;
  padding-left: 3.125rem;
  }
.content_left_left_texts h1 {
  font-family: var(--font_head);
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.875rem;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  }
.content_left_left_texts h1::before {
    content: " ";
    position: absolute;
    width: 3rem;
    height:0.25rem;
    background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
    margin-top: 1.875rem;
}
.content_left_left_texts h4 {
  font-family: var( --font_head);
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.1em;
  opacity: 0.8;
  margin-top: 25px;
  }
.check_more{
  background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
  border-radius: 6.25rem;
  width: 130px;
  height: 39px;
  border: unset;
  margin-top:36px;
  color: #ffff;
  }
#sidemenu{
  display: none;
}
#sidemenu nav {
  width: 100%;
  background: radial-gradient(43.71% 89.06% at 54.48% 49%, #0061B1 12%, #005198 29%, #003871 60%, #002959 85%, #002350 100%);
  position: absolute;
  left: 0;
  z-index: 99;
  padding-bottom: 1.875rem;
}
#sidemenu .sidemenu__btn {
  display: block;
  width: 3.125rem;
  height: 3.125rem;
  background: unset;
  border: none;
  position: relative;
  z-index: 100;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
}
#sidemenu .sidemenu__btn span {
  display: block;
  width: 1.25rem;
  height: 2px;
  margin: auto;
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease;
}
#sidemenu .sidemenu__btn span.top {
  transform: translateY(-8px);
}
#sidemenu .sidemenu__btn span.bottom {
  transform: translateY(8px);
}
#sidemenu .sidemenu__btn.active .top {
  transform: rotate(-45deg);
}
#sidemenu .sidemenu__btn.active .mid {
  transform: translateX(-1.25rem);
  opacity: 0;
}
#sidemenu .sidemenu__btn.active .bottom {
  transform: rotate(45deg);
}
#sidemenu .sidemenu__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}
.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}
.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
.menus>ul{
  list-style: none;
}

@media screen and (max-width: 1024px) {
  .header{
    background: radial-gradient(55.71% 79.06% at 70.48% 50%, #0061B1 12%, #005198 29%, #003871 60%, #002959 85%, #002350 100%);
    box-shadow: 0 10px 1rem 0 rgb(0 0 0 / 20%), 0 6px 1.25rem 0 rgb(0 0 0 / 19%);
  }
  .logo{
    display: none;
  }
  .mobile_content{
    padding: 10px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contents{
    -webkit-box-shadow: none !important;;
    -moz-box-shadow: none!important;
    box-shadow: none!important;
  }
  .content_right{
    display: none;
  }
  .content_left_right{
    display: none;
    
  }
   .content_left{
    background: unset !important;;
    
  }
  .content_left{
    width: 100%;
    padding-bottom: 1.875rem;
    justify-content: space-evenly;
  }
  #sidemenu{
    display: block;
  }
  .modal_content{
    width: 45%;
  }
  .content_left_left_texts{
    padding-left: 0px;
    text-align: center;
  }
}
@media screen and (max-width: 43.125rem) {
  #sidemenu nav {
   margin-top: 1.25rem;
}
  .modal_content{
    width: 80%;
  }
  .content_left_left_texts{
    position: relative;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .logo{
    padding-left: 1rem;
  }
  .logo img {
    width: 95px;
    height: 90px;
  }
}
@media screen and (max-width: 340px) {
  .logo{
    padding-left: 0px;
  }
}
@media screen and (max-width: 332px) {
  /* #sidemenu nav {
      height: 80%;
  } */
}
</style>
