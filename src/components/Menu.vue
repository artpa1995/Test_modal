<template>
  <div class="menus" >
   <ul>
       <li :class="{ 'isset_page' : page === 'home_page'}" ><a href="/">{{ $t("menu.home") }}</a></li>
       <li :class="{ 'isset_page' : page === 'about_page'}"><a href="/about"> {{ $t("menu.about") }}</a></li>
       <li :class="{ 'isset_page' : page === 'servise_page'}"><a href="/servise"> {{ $t("menu.servise") }}</a></li>
       <li :class="{ 'isset_page' : page === 'team_page'}"><a href="/team"> {{ $t("menu.team") }}</a></li>
       <li :class="{ 'isset_page' : page === 'contact_page'}"><a href="/contact"> {{ $t("menu.contact") }}</a></li>
   </ul>
  </div>
</template>

<script>
export default {
 props: {
   page :String,
 },
 
};
</script>

<style scoped>
.menus ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: end;
}
.menus ul li {
    margin-top: 45px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #012350;
    opacity: 0.98;
    cursor: pointer;
}
.menus ul li a{
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #012350;
    opacity: 0.98;
    cursor: pointer;
    text-decoration: none;
}

.isset_page::after { 
    content: " ";
    position: absolute;
    width: 16px;
    height: 2px;
    background: linear-gradient(265.11deg, #E199FC -0.1%, #9240FC 97.28%);
    margin-top: 25px; 
    margin-left: -15px;
}

@media screen and (max-width: 1024px) {
    .menus ul li a{
    color: white;
    }
    .menus ul li {
    margin-top: 25px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #012350;
    }
    .menus ul {
        align-items: center;
    }
}
</style>
