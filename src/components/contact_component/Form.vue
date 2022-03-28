<template>
  <div class="form_content">
    <div class="form_content_head" >
        <h1>{{ $t('form_content_head.title')}}</h1>
        <p>{{ $t('form_content_head.description')}}</p>
    </div>
    <div class="form_form">
        <p v-if="errors.length">
            <ul>
                <li class="erorrs"  v-for="error_reg in errors" :key="error_reg">{{ error_reg }}</li>
            </ul>
        </p>
        <input type="text" :placeholder=" $t('form_inputs.name')" v-model.trim="name" :class="{ empty_error:name_error  }">
        <input type="email" placeholder="Email" v-model.trim="email" :class="{ empty_error:email_error }">
        <input type="text" :placeholder=" $t('form_inputs.phone')" v-model.trim="phone" :class="{ empty_error:phone_error }">
        <textarea name="" id="" cols="30" rows="10" :placeholder=" $t('form_inputs.message')" v-model="message" :class="{ empty_error:message_error }"></textarea>
        <div class="form_check">
            <span class="checkbox" @click="check = !check" :class="{ check: check }"></span>
            <span class="form_check_text">{{ $t('form_inputs.form_check_text')}}</span>
        </div>
        <div class="submit"><Buttons :value="$t('form_inputs.submit')" @click="consultation"/></div>
        
    </div>
  
  </div>
</template>
<script>
import Buttons from '../Buttons.vue';
export default {
     props: {
        
    },
    components: {
        Buttons,
    },
  data() {
    return {
        errors: [],
        email: null,
        name: null,
        phone: null,
        message: null,
        email_error: false,
        name_error: false,
        phone_error: false,
        message_error: false,
        empty_error: false,
        check : false,
        form_content_head: [
            { title: 'напишите ваше сообщение', description: 'Наш проект менеджер свяжется с вами после заполнения данной формы'},
             ],
    };
  },
  mounted() {
    //console.log(this.form_content_img)
  },
   methods:{
       validEmail: function (email_login) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email_login);
    },
     async consultation () {
       
         this.errors = [];
         let flag = true;
      
      if (!this.email) {
        this.email_error = true;
        flag = false;
        
        if (this.$i18n.locale == 'en') {
          this.errors.push('Email is required.');
        }else if(this.$i18n.locale == 'ru'){
          this.errors.push('Требуется указать Email.');
        }else{
          this.errors.push('Պահանջվում է էլ. հասցեն');
        }
      } else if (!this.validEmail(this.email)) {
        this.email_error = true;
        flag = false;
        if (this.$i18n.locale == 'en') {
          this.errors.push('Please enter a valid email address.');
        }else if(this.$i18n.locale == 'ru'){
          this.errors.push('Укажите корректный адрес электронной почты.');
        }else{
          this.errors.push('Խնդրում ենք մուտքագրել գործող էլեկտրոնային հասցե.');
        }
        
        
      }
      if (!this.name) {
        this.name_error = true;
        flag = false;
        if (this.$i18n.locale == 'en') {
          this.errors.push('Name is required.');
        }else if(this.$i18n.locale == 'ru'){
          this.errors.push('Требуется указать ФИО');
        }else{
          this.errors.push('Անունը պարտադիր է');
        }
        
      }
      if (!this.phone) {
         this.phone_error = true;
        flag = false;
          if (this.$i18n.locale == 'en') {
          this.errors.push('Required to specify a  Phone.');
        }else if(this.$i18n.locale == 'ru'){
          this.errors.push('Требуется указать  Телефон.');
        }else{
           this.errors.push('Հեռախոսահամարը պարտադիր է։');
        }
       
      }
      if (!this.message) {
          this. message_error = true;
        flag = false;
          if (this.$i18n.locale == 'en') {
          this.errors.push('A message is required.');
        }else if(this.$i18n.locale == 'ru'){
          this.errors.push('Требуется указать  Сообщение');
        }else{
          this.errors.push('Պահանջվում է հաղորդագրություն');
        }
        
      }
      if(flag === false){
        return this.errors;
      }
      this.data_consultation = [this.name, this.phone, this.message, this.email, this.check];  
      
     try {
        await axios.post(`http://jsonplaceholder.typicode.com/users`, {
          body: this.data_consultation
        }).then(() => {
         // alert('Form was submitted successfully')
        })
      } catch (e) {
        this.errors.push(e)
      }
     }
   }
};
</script>

<style scoped>
.form_content{
    background-color: var( --bg);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
}
.form_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    /* text-transform: uppercase; */
    color:var( --color5);
}
.form_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.form_content_head>p{
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 20px;
    max-width: 400px;
    text-align: center;
}
.form_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    /* width: 100%;
    max-width: 600px; */
}
.form_form input, textarea{
    border-radius: 5px;
    border: 1px solid var( --color-head_r1);
    font-family: 'Overpass';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    /* text-align: center; */
    letter-spacing: 0.1em;
    color: var( --texts_color);
    padding: 10px;
    max-width: 600px;
    width: 100%!important;
    resize: none;
    margin-top: 30px;
}
.form_form input:hover{
    border: 2px solid var( --color4);
    box-shadow: 0px 0px 4px var( --color3);
    margin-bottom: -2px;
}
.form_form textarea:hover{
    border: 2px solid var( --color4)C;
    box-shadow: 0px 0px 4px var( --color3);
    margin-bottom: -2px;
}
.form_form input {
    height: 25px;
}
.form_check{
    display: flex;
    justify-content: flex-start;
    max-width: 620px;
    width: 100%;
    align-items: center;
    margin-top: 20px;
}
.checkbox{
    width: 10px;
    height: 10px;
    border: 1px solid grey;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 2px;
}
.check{
    border: 1px solid var( --bg);
    background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color4) 97.28%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    
}

:focus {
    outline: none;
}
.submit{
   max-width: 620px;
   width: 100%;
   display: flex;
   justify-content: end;
}
.form_check_text{
  font-family: var( --font_texts);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: var( --texts_color);
}
.erorrs{
  list-style: none;
  color:red;
  background: #ff000021;
   font-family: var( --font_texts);
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  border: 1px solid red;
  border-radius: 5px;
  margin-top: 10px;
  padding: 8px 6px;
}
.empty_error{
  border: 1px solid red !important;
}
.name_error{
  border: 1px solid red !important;
}
@media screen and (max-width: 700px) {
   .form_form input, textarea{
        max-width: 240px;
    }
    .form_check{
         justify-content: center;
         flex-wrap: wrap;
    }
}
@media screen and (max-width: 530px) {
   .checkbox{
         margin-left: 20px;
         /* height: 13px;
         width: 25px; */
    }
    .form_check_text{
      
        text-align: center;
        padding: 15px;
    }
}

@media screen and (max-width: 342px) {
    .form_content_head>h1::before {
        margin-top: 45px;
    }
}
</style>
