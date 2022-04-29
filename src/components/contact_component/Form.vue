<template>
  <div class="form_content">
    <div class="form_content_head" >
        <h1>{{ $t('form_content_head.title')}}</h1>
        <p>{{ $t('form_content_head.description')}}</p>
    </div>
    <div class="form_form">
      <p class="erorrs" :class="{ empty_fild:name_error}">{{ $t('error_inputs.names')}}</p>
      <p class="erorrs" :class="{ empty_fild:email_error}">{{ $t('error_inputs.email')}}</p>
      <p class="erorrs" :class="{ empty_fild:email_invalid_error}">{{ $t('error_inputs.invalid_email')}}</p>
      <p class="erorrs" :class="{ empty_fild:phone_error}">{{ $t('error_inputs.phone')}}</p>
      <p class="erorrs" :class="{ empty_fild:message_error}">{{ $t('error_inputs.message')}}</p>
      <p class="erorrs" :class="{ empty_fild:check_error}">{{ $t('error_inputs.check')}}</p>
      <div class="form-field">
        <div class="form-field__control" :class="{ empty_error:name_error  }" >
          <label for="firstname" class="form-field__label">{{ $t('form_inputs.name')}} </label>
          <input id="firstname" type="text" class="form-field__input"  v-model.trim="name" />
        </div>
      </div>
      <div class="form-field">
          <div class="form-field__control" :class="{ empty_error:email_error }">
            <label for="email" class="form-field__label">Email</label>
            <input id="email" type="email" class="form-field__input" v-model.trim="email"  />
          </div>
      </div>
      <div class="form-field">
          <div class="form-field__control" :class="{ empty_error:phone_error }" >
            <label for="phone" class="form-field__label">{{$t('form_inputs.phone')}}</label>
            <input id="phone" type="email" class="form-field__input" v-model.trim="phone" />
          </div>
      </div>
      <div class="form-field">
        <div class="form-field__control" :class="{ empty_error:message_error }">
          <label for="additionalInfo" class="form-field__label">{{$t('form_inputs.message')}}</label>
          <textarea id="additionalInfo" class="form-field__textarea"  v-model="message" ></textarea>
        </div>
      </div> 
        <p v-if="errors.length">
            <ul>
                <li class="erorrs"  v-for="error_reg in errors" :key="error_reg">{{ error_reg }}</li>
            </ul>
        </p>
        
        <div class="form_check" >
            <span class="checkbox" @click="check = !check" :class="{ check: check, empty_error:check_error }" ></span>
            <span class="form_check_text" @click="check = !check" >{{ $t('form_inputs.form_check_text')}}</span>
        </div>
        <div class="submit"><Buttons :value="$t('form_inputs.submit')" @click="consultation"/></div>
    </div>
     
  
  </div>
</template>
<script>
import Buttons from '../Buttons.vue';
import{ emailjs } from '@emailjs/browser';
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
        email_invalid_error:false,
        name_error: false,
        phone_error: false,
        message_error: false,
        check_error: false,
        empty_error: false,
        check : false,
        form_content_head: [
            { title: 'напишите ваше сообщение', description: 'Наш проект менеджер свяжется с вами после заполнения данной формы'},
             ],
    };
  },
  mounted() {

  },
   mounted () {
      this.inputs()
    },
   methods:{

     inputs: function(){
      let elem =  document.querySelectorAll('.form-field__control');

      window.addEventListener("click", function(event) {
        if(event.target.className != 'form-field__label'){
          for(let j=0;j<elem.length;j++){
            elem[j].classList.remove("form-field__control_click");
          }
        }
      });
      for(let j=0;j<elem.length;j++){
        elem[j].addEventListener('mouseover',sethover);
        elem[j].addEventListener('mouseout',removehover);
        elem[j].addEventListener('click',setclick);
      }
      function removehover(){
        this.classList.remove("form-field__control_hover");
      }     
      function sethover(){
        this.classList.add("form-field__control_hover");
      }
      function setclick (){
        this.classList.remove("form-field__control_hover");
        this.classList.add("form-field__control_click");
      }
  
      const setActive = (el, active) => {
        const formField = el.parentNode.parentNode
        if (active) {
          formField.classList.add('form-field--is-active')
        } else {
          formField.classList.remove('form-field--is-active')
          el.value === '' ? 
          formField.classList.remove('form-field--is-filled') : 
          formField.classList.add('form-field--is-filled')
        }
      }

      [].forEach.call(
        document.querySelectorAll('.form-field__input, .form-field__textarea'),
        (el) => {
          el.onblur = () => {
            setActive(el, false)
          }
          el.onfocus = () => {
            setActive(el, true)
          }
        }
      )
    },

      sendEmail(e) {
      // emailjs.sendForm('service_665awxi', 'template_1dr6aao', this.$refs.form, 'ezYr1BVTx2-Kwu8on')
      //   .then((result) => {
      //       console.log('SUCCESS!', result.text);
      //   }, (error) => {
      //       console.log('FAILED...', error.text);
      //   });

         try {
        emailjs.sendForm('service_665awxi', 'template_5lrts4b', e.target,'ezYr1BVTx2', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
     
      this.name = ''
      this.email = ''
      this.message = ''
    },
       validEmail: function (email_login) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email_login);
    },
     async consultation () {
      this.email_error = false;
      this.check_error = false;
      this.name_error = false;
      this.phone_error = false;
      this. message_error = false;
      this.email_invalid_error = false;
      this.errors = [];
      let flag = true;
      
      if (!this.email) {
        this.email_error = true;
        flag = false;
      } else if (!this.validEmail(this.email)) {
        this.email_invalid_error = true;
        flag = false;
        
        
      }
      if(this.check == false){
         this.check_error = true;
         flag = false;
      }
      if (!this.name) {
        this.name_error = true;
        flag = false;
      }
      
      if (!this.phone) {
        this.phone_error = true;
        flag = false; 
      }
      if (!this.message) {
        this. message_error = true;
        flag = false;
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

.form-field {
  display: block;
  margin-bottom: 16px;
   padding: 10px;
    max-width: 600px;
    width: 100%!important;
}
.form-field--is-active .form-field__control::after {
  /* border-bottom: 2px solid var( --color4); */
  transform: scaleX(150);
}
.form-field--is-active .form-field__label {
  /* color: var( --color-head_r1); */
  font-size: 0.75rem;
  transform: translateY(-14px);
}
.form-field--is-filled .form-field__label {
  font-size: 0.75rem;
  transform: translateY(-14px);
}

.form-field__label {
  display: block;
  font-size: 1.2rem;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  position: absolute;
  top: 0;
  transition: all 0.4s;
  width: 100%;
  font-family: 'Overpass';
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: var( --texts_color);
}
.form-field__control {
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  border: 1px solid var( --color-head_r1);
  max-width: 600px;
  width: 100%!important;
  resize: none;
}

.form-field__input,
.form-field__textarea {
font-family: 'Overpass';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.1em;
    color: var( --texts_color);
}

.form-field__control::after {
  border-bottom: 2px solid var( --color4);
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transition: all 0.4s;
  width: 1%;
}

.form-field__control:hover {
   /* border: 2px solid var( --color4);
    box-shadow: 0px 0px 4px var( --color3);
    margin-bottom: -2px; */
}
.form-field__control_hover {
   border: 2px solid var( --color4);
    box-shadow: 0px 0px 4px var( --color3);
    margin-bottom: -2px;
}
.form-field__control_click{
   border: 2px solid var( --color4);
   border-bottom: unset;
    box-shadow: 0px 0px 4px var( --color3);
    margin-bottom: -2px;
}

.form-field__input,
.form-field__textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: transparent;
  border: 0;
  color: #333;
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;
}

.form-field__textarea {
  height: 150px;
}

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
    min-width: 10px;
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
  cursor: pointer;
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
  display: none;
  max-width: 586px;
  width: 100%;
  box-sizing: border-box;
}
.empty_fild{
  display: block;
}
.empty_error{
  border: 1px solid red !important;
  box-sizing: border-box;
  margin-bottom: 0px!important;
}
.name_error{
  border: 1px solid red !important;
}
@media screen and (max-width: 700px) {
  .submit{
    justify-content: center;
  }
  .form_form input, textarea{
    max-width: 240px;
  }
  .form_check{
    max-width: 400px;
  }
  .form-field{
    max-width: 400px;
  }
  .form_check{
    justify-content: center;
  }
}
@media screen and (max-width: 530px) {
   .checkbox{
         margin-left: 20px;
    }
    .form_check_text{
      
        text-align: center;
        padding: 15px;
    }
}
@media screen and (max-width: 450px) {
    .form_check{
      max-width: 280px;
    }
    .form-field{
      max-width: 280px;
    }
}
@media screen and (max-width: 342px) {
    .form_content_head>h1::before {
        margin-top: 25px;
    }
}
</style>
