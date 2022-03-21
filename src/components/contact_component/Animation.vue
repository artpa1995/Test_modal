<template>
    <div id="container">  
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
    background-image: url(../../assets/svg/contact_head.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
    height: 900px;
    width: 100%;
}

@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

