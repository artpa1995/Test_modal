<template>
  <div class="menus" >
   <ul>
       <li :class="{ 'isset_page' : page === 'home_page'}" > <router-link to="/">{{ $t("menu.home") }}</router-link> </li>
       <li :class="{ 'isset_page' : page === 'about_page'}">  <router-link to="/about">{{ $t("menu.about") }}</router-link></li>
       <li :class="{ 'isset_page' : page === 'service_page'}">  <router-link to="/service">{{ $t("menu.service") }}</router-link></li>
       <li :class="{ 'isset_page' : page === 'team_page'}">   <router-link to="/team">{{ $t("menu.team") }}</router-link></li>
       <li :class="{ 'isset_page' : page === 'contact_page'}">   <router-link to="/contact">{{ $t("menu.contact") }}</router-link></li>
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
    max-width: 107px;
}
.menus ul li {
    margin-top: 3rem;
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: var( --color5);
    opacity: 0.98;
    cursor: pointer;
}
.menus ul li a{
    font-family: var( --font_head);
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: var( --color5);
    opacity: 0.98;
    cursor: pointer;
    text-decoration: none;
}

.isset_page::after { 
    content: " ";
    position: absolute;
    width: 1rem;
    height: 2px;
    background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
    margin-top: 25px; 
    margin-left: -15px;
}

@media screen and (max-width: 1024px) {
    .menus ul li a{
        color: white;
    }
    .menus ul li {
        margin-top: 25px;
        font-family: var( --font_head);
        font-style: normal;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.25rem;
        color: var( --color5);
    }
    .menus ul {
        align-items: center;
    }
}
</style>
