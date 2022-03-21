<template>
    <div id="container">
        <div id="target"></div>   
    </div>
</template>

<script>
  
</script>
<style scoped>

#container{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    max-width: 400px;
    margin: 0 auto;
    
    background-image: url(../../assets/svg/team_head.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
    height: 900px;
    width: 100%;
}

/* #target {
    position: relative;
    width: 400px;
    height: 400px;
    margin: auto;
 
} */
@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

