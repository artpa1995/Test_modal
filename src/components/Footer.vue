<template>
  <div class="footer">
     <a class="back_to_top" ref="scroll"  @click="backToTop()">
         <span class="back_to_top_span">&#10148;</span>
     </a>
      <div class="contents_footer">
          <div class="contents_footer_blocs">
               <div class="contents_footer_bloc contents_footer_blocs_mision">
                   <h3>{{ $t('contents_footer_mission.title')}}</h3>
                   <p>
                       {{ $t('contents_footer_mission.description')}} 
                    </p>
                </div>
                <div class="contents_footer_bloc">
               <h3 style="">{{ $t('info')}}</h3>
                    <ul>
                        <li v-for="info in this.$i18n.messages[this.$i18n.locale].info_menu" :key="info">
                            <router-link :to="info.url">{{info.name}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="contents_footer_bloc" >
                    <h3 style="">{{ $t('menu.contact')}} </h3>
                    <div>
                        <p><a :href="'tel:'+$t('contact_for_footer.tel') ">{{$t('contact_for_footer.tel')}}</a></p>
                        <p> <a href="mailto:info@l-it.am">info@l-it.am</a></p>
                        <p>{{$t('contact_for_footer.addres')}}</p>
                    </div>
                </div>
          </div>
      </div> 
       <div class="contents_footer_down">
          info@l-it.am
       </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
//   props: {
   
//   },
//    components: {
  
//   },
//   data() {
//     return {    
//     }
//   },
  methods:{
    trackScroll() {
        var scroll = this.$refs.scroll
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        if(scroll == null){
            return;
        }
        if (scrolled > coords) {
             scroll.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
             scroll.classList.remove('back_to_top-show');
        }
    },
    backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -30);
            setTimeout(this.backToTop, 0);
        }
    },
  },
  created: function () {
    window.addEventListener('scroll', this.trackScroll)
  },
   
};

</script>

<style scoped>
.back_to_top {
  position: fixed;
  bottom: 80px;
  right: 2.5rem;
  z-index: 9999;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 1.875rem;
  /* background: linear-gradient(90deg, rgba(146,64,252,1) 0%, rgba(225,153,252,1) 100%); */
  background: linear-gradient(90deg, rgb(146 64 252 / 32%) 0%, rgb(225 153 252 / 47%) 100%);
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 50%;
  display: none;
  transform: rotate(-90deg);
  text-align: center;
}
.back_to_top_span {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 44px;
    height: 41px;
}
.back_to_top:hover {
   box-shadow: 0 0 .2em var( --color3);
    cursor: pointer;
}

.back_to_top-show {
  display: block;
}

label {
  position: relative;
}
label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width:1.25rem;
  background: url(../assets/svg/crar.svg) center / contain no-repeat;
}
.subscription_input {
    max-width: 278px;
    width: 100%;
    padding: 10px 2.5rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border:1px solid #D8D6E4FF;
    margin-top: 1.125rem;
}
.subscription_input:focus {
    outline: none;
}
.footer{
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    
}
.contents_footer{
    background-image: url(../assets/svg/footer.svg);
    background-color: var( --bg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
}
.contents_footer_down{
    background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
    opacity: 0.8;
    padding: 8px;
    text-align: center;
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 14px;
    color: #FFFFFF;
}
.contents_footer_blocs{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    /* align-items: center; */
}
.contents_footer_bloc>h3{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 100%;
    color: var( --texts_color);
}
.contents_footer_bloc>h2{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;  
    text-transform: capitalize;
    color: var( --texts_color);
    max-width: 333px;
}
 .contents_footer_bloc>div>p, .contents_footer_bloc>div>p>a{
    text-decoration: none;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    max-width: 250px;
}
.contents_footer_bloc>div {
    margin-top: 0.815rem;
}

.contents_footer_bloc>p {
    text-decoration: none;
    margin-top: 0.815rem;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    max-width: 250px;
}
.contents_footer_bloc>ul{
    list-style: none;
    margin-top: 10px;
    margin-bottom: 7px;
}
.contents_footer_bloc>ul>li>a{
    text-decoration: none;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    max-width: 250px;
}
.contents_footer_bloc>ul>li>a:hover {
        text-decoration: underline;
}
.erorrs{
    list-style: none;
    color: red;
    background-color: white;
    padding: 6px;
    margin: 13px 0px;
    border-radius: 0.25rem;
}
.subscription_button{
    cursor: pointer;
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height:1.25rem;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    padding: 1rem 8px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    border-radius: 5px;
    border: unset;
    margin-top: 28px;
    float: right;
}
.subscription_button:focus {
    outline: none;
}
.subscription_section{
    width: 100%;
}
.contents_footer_bloc{
    margin: 3.125rem 0px;
}
@media screen and (max-width: 600px) {
  
  .contents_footer_blocs_mision{
        display: none;
    }
    .contents_footer_bloc>ul>li{
        text-align: center;
    }
  .contents_footer_bloc{
      /* display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 360px;
      width: 100%; */
  }
  .contents_footer_bloc>p{
      text-align: center;
  }
  .contents_footer_bloc>div>p{
      text-align: center;
  }
  .contents_footer_bloc>h3{
      text-align: center;
  }
}
@media screen and (max-width: 380px) {
    .contents_footer_bloc>p{
        font-size: 11px;
    }
  .subscription_input{
      padding-right: 0px;
  }
}
</style>
