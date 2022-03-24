<template>
  <div class="footer">
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
                            <a :href="info.url">{{info.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="contents_footer_blok" v-for="contact in contacts" :key="contact">
               <h3 style="margin-top:33px;">{{contact.title}}</h3>
                   <p>
                       {{contact.tel}}
                    </p>
                    <p>
                       {{contact.email}}
                    </p>
                    <p>
                       {{contact.addres}}
                    </p>
                </div>
                <div class="contents_footer_blok">
                    <p v-if="errors.length">
                        <ul>
                            <li class="erorrs"  v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <h2>{{ $t('dop_info')}}</h2>
                    <span class="subscription_section">
                        <label>
                            <input type="email" name="email" v-model.trim="email" :placeholder="$t('write_email')" class="subscription_input">
                        </label>
                    </span>
                    
                    <button class="subscription_button" @click="subscription">{{$t('subscription')}}</button>
                </div>
          </div>
      </div> 
       <div class="contents_footer_down">
           L-IT 2020 L-IT
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
        email: null,
        errors: [],
        contents_footer_mission:[
             { title: 'Наша миссия', description: ' Мы – компания, занимающая созданием и разработкой сайтов, их оптимизацией и последующим продвижением.'},
        ],
        info_menu: [
            {url: '/', name: 'Главная'},
            {url: '/about', name: 'О Нас'},
            {url: '/servise', name: 'Услуги'},
            {url: '/teame', name: 'Команда'},
            {url: '/contacts', name: 'Контакты'},
        ],
        contacts:[
            {title:'контакты', tel: '+37455555555', email:'L-it@mail.com', addres:'Erevani komery eli'}
        ]      
               
    }
  },
  methods:{
      validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
     async subscription(){
alert(this.email);
       this.errors = [];
      let flag = true;
      if (!this.email) {
        flag = false;
        this.reg_errors.push('Требуется указать Email.');
      } else if (!this.validEmail(this.email)) {
        flag = false;
        this.reg_errors.push('Укажите корректный адрес электронной почты.');
      }
    }
  }
};

</script>

<style scoped>
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
.contents_footer_blok>p{
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
