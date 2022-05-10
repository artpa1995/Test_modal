<template>
  <div class="contacts_content container">
      <div class="contacts_content_head" >
         <h1>{{ $t('contacts_content_head.title')}}</h1>
        <p>
           {{ $t('contacts_content_head.description')}}
        </p>
      </div>
      <div class="contacts_content_blocs">
        <div class="contacts_content_bloc_item">
            <img :src="$t('contacts_content_bloc_items[0].icon')" alt="">
            <h3>{{$t('contacts_content_bloc_items[0].title')}}</h3>
            <p><a :href="'tel:'+$t('contacts_content_bloc_items[0].value') ">{{$t('contacts_content_bloc_items[0].value')}}</a></p>
        </div>
         <div class="contacts_content_bloc_item">
            <img :src="$t('contacts_content_bloc_items[1].icon')" alt="">
            <h3>{{$t('contacts_content_bloc_items[1].title')}}</h3>
            <p><a :href="'mailto:'+$t('contacts_content_bloc_items[1].value') ">{{$t('contacts_content_bloc_items[1].value')}}</a></p>
        </div>
         <div class="contacts_content_bloc_item">
            <img :src="$t('contacts_content_bloc_items[2].icon')" alt="">
            <h3>{{$t('contacts_content_bloc_items[2].title')}}</h3>
            <p><a href="#map">{{$t('contacts_content_bloc_items[2].value')}}</a></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
     props: {
        
    },
  data() {
    return {
    };
  },
  mounted() {
  },
   methods:{  
   }
};
</script>

<style scoped>
.contacts_content{
    max-width:120rem;
    width: 100%;
    margin: 0 auto;
    padding-top: 3.125rem;
    padding-bottom: 80px;
}
.contacts_content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contacts_content_head>h1{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.125rem;
    text-transform: uppercase;
    color: var( --color5);
}
.contacts_content_head>h1::before { 
    content: " ";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
    margin-top: 25px; 
}
.contacts_content_head>p{
    font-family:var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 1.25rem;
    max-width: 25rem;
    text-align: center;
}
.contacts_content_blocs{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 3.125rem;
}
.contacts_content_bloc_item>h3{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    text-transform: uppercase;
    color: var( --color5);
    text-align: center;
    margin: 1.25rem;
}
.contacts_content_bloc_item>p{
    text-align: center;
}
.contacts_content_bloc_item>p>a{
    text-decoration: none;
    font-family:var( --font_texts);
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    letter-spacing: 0.1em;
    color: var( --texts_color);
    margin-top: 1.25rem;
    max-width: 25rem;
    text-align: center;
}
@media screen and (max-width: 749px) {
   .contacts_content_bloc_item{
       border-right: unset !important;;
   }
}
</style>
