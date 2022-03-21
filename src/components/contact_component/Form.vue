<template>
  <div class="form_content">
    <div class="form_content_head"  v-for="form_content_heads in form_content_head" :key="form_content_heads">
        <h1>{{form_content_heads.title}}</h1>
        <p>{{form_content_heads.description}}</p>
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
       console.log(this.check)
         this.errors = [];
         let flag = true;
      
      if (!this.email) {
        this.email_error = true;
        flag = false;
        
        if (this.$i18n.locale == 'en') {
          this.errors.push('Required to specify Email.');
        }else{
          this.errors.push('Требуется указать Email.');
        }
      } else if (!this.validEmail(this.email)) {
        this.email_error = true;
        flag = false;
        if (this.$i18n.locale == 'en') {
          this.errors.push('Please enter a valid email address.');
        }else{
          this.errors.push('Укажите корректный адрес электронной почты.');
        }
        
      }
      if (!this.name) {
        this.name_error = true;
        flag = false;
        if (this.$i18n.locale == 'en') {
          this.errors.push('Name is required.');
        }else{
          this.errors.push('Требуется указать ФИО.');
        }
        
      }
      if (!this.phone) {
         this.phone_error = true;
        flag = false;
          if (this.$i18n.locale == 'en') {
          this.errors.push('Required to specify a repeated Phone.');
        }else{
           this.errors.push('Требуется указать повторный Телефон.');
        }
       
      }
      if (!this.message) {
          this. message_error = true;
        flag = false;
          if (this.$i18n.locale == 'en') {
          this.errors.push('A message is required.');
        }else{
          this.errors.push('Требуется указать  Сообщение');
        }
        
      }
      if(flag === false){
        return this.errors;
      }
      this.data_consultation = [this.name, this.phone, this.message, this.email, this.check];  
      console.log(this.data_consultation); 
     try {
        await axios.post(`http://jsonplaceholder.typicode.com/users`, {
          body: this.data_consultation
        }).then(() => {
          alert('Form was submitted successfully')
        })
      } catch (e) {
        this.errors.push(e)
      }
     }
   }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Overpass:ital,wght@0,100;0,400;0,700;1,400&display=swap');
.form_content{
    background-color: #FAF9F9FF;
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
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: #012350;
}
.form_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 45px;
    height: 4px;
    background: linear-gradient(256.38deg, #3DEE87 -47.45%, #3DB7FF 146.11%);
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
    color: #828282;
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
    border: 1px solid #E199FC;
    font-family: 'Overpass';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    /* text-align: center; */
    letter-spacing: 0.1em;
    color: #828282;
    padding: 10px;
    max-width: 600px;
    width: 100%!important;
    resize: none;
    margin-top: 30px;
}
.form_form input:hover{
    border: 2px solid #9240FC;
    box-shadow: 0px 0px 4px #D289FC;
    margin-bottom: -2px;
}
.form_form textarea:hover{
    border: 2px solid #9240FC;
    box-shadow: 0px 0px 4px #D289FC;
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
    border: 1px solid #FAF9F9FF;
    background: linear-gradient(265.11deg, #E199FC -0.1%, #9240FC 97.28%);
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
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #828282;
}
.erorrs{
  list-style: none;
  color:red;
  background: #ff000021;
   font-family: 'Lato';
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
