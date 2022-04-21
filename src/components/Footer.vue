<template>
  <div class="footer">
     <a class="back_to_top" ref="scroll" title="Наверх" @click="backToTop()">
         <span class="back_to_top_span">&#10148;</span>
     </a>
      <div class="contents_footer">
          <div class="contents_footer_bloks">
               <div class="contents_footer_blok">
                   <h3>{{ $t('contents_footer_mission.title')}}</h3>
                   <p>
                       {{ $t('contents_footer_mission.description')}} 
                    </p>
                </div>
                <div class="contents_footer_blok">
               <h3 style="margin-top:36px;">{{ $t('info')}}</h3>
                    <ul>
                        <li v-for="info in this.$i18n.messages[this.$i18n.locale].info_menu" :key="info">
                            <router-link :to="info.url">{{info.name}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="contents_footer_blok" >
               <h3 style="margin-top:33px;">{{ $t('menu.contact')}} </h3>
                   <p><a :href="'tel:'+$t('contact_for_footer.tel') ">{{$t('contact_for_footer.tel')}}</a></p>
                   <p> <a :href="'mailto:'+$t('contact_for_footer.email')">{{$t('contact_for_footer.email')}}</a></p>
                   <p>{{$t('contact_for_footer.addres')}}</p>
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
  props: {
   
  },
   components: {
  
  },
  data() {
    return {    
    }
  },
  methods:{
    trackScroll() {
        var scroll = this.$refs.scroll
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
       
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
  right: 40px;
  z-index: 9999;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 30px;
  background: linear-gradient(90deg, rgba(146,64,252,1) 0%, rgba(225,153,252,1) 100%);
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
  width: 20px;
  background: url(../assets/svg/crar.svg) center / contain no-repeat;
}
.subscription_input {
    max-width: 278px;
    width: 100%;
    padding: 10px 40px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border:1px solid #D8D6E4FF;
    margin-top: 18px;
}
.subscription_input:focus {
    outline: none;
}
.footer{
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    height: 480px;
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
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
}
.contents_footer_bloks{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
}
.contents_footer_blok>h3{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: var( --texts_color);
}
.contents_footer_blok>h2{
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;  
    text-transform: capitalize;
    color: var( --texts_color);
    max-width: 333px;
}
.contents_footer_blok>p, .contents_footer_blok>p>a{
    text-decoration: none;
    margin-top: 20px;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    max-width: 250px;
}
.contents_footer_blok>ul{
    list-style: none;
    margin-top: 10px;
}
.contents_footer_blok>ul>li>a{
    text-decoration: none;
    font-family: var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    max-width: 250px;
}
.contents_footer_blok>ul>li>a:hover {
        text-decoration: underline;
}
.erorrs{
    list-style: none;
    color: red;
    background-color: white;
    padding: 6px;
    margin: 13px 0px;
    border-radius: 4px;
}
.subscription_button{
    cursor: pointer;
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    padding: 16px 8px;
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
.contents_footer_blok{
        max-width: 360px;
}
@media screen and (max-width: 600px) {
  .footer {
     height: 580px;
  }
}
@media screen and (max-width: 380px) {
  .subscription_input{
      padding-right: 0px;
  }
  .contents_footer_blok{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
}
</style>
