<template>
    <div id="container">
        <div class="con">
            <div class="bloks">
                <div class="blok1 nk"><img class="nk1" src="../../assets/team/blok.svg" alt=""></div>
                <div class="blok1 nk" style="position: relative; left: 30px;"><img class="nk4" src="../../assets/team/blok.svg" alt=""></div>
            </div>
            <div class="bloks" style="margin-top:230px">
                <div class="blok nk"><img class="nk2" src="../../assets/team/blok.svg" alt=""></div>    
                <div class="blok nk"><img class="nk3" src="../../assets/team/blok.svg" alt=""></div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
  
</script>
<style scoped>

#container{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    max-width: 400px;
    margin: 0 auto;
    background-image: url(../../assets/team/eli.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 440px 440px;
    height: 500px;
    width: 100%;
}
.con{
    background-image: url(../../assets/team/bg.svg);
    background-position: 65px 65px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    height: 400px;
    width: 100%;
}
.bloks{
    display: flex;
    justify-content: space-between;
    top: 70px;
    position: relative;
    cursor: pointer;
}
.blok1{
    max-width: 400px;
    background-image: url(../../assets/team/shoxq.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 70px;
    width: 105px;
    
}
.blok{
    max-width: 400px;
    margin: 0 auto;
    background-image: url(../../assets/team/shoxq.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 70px;
    width: 105px;
}

.nk>img{
    position: relative;
    top: -30px;
    

}
.nk1{
animation: lid-screen infinite 5.5s ease;
}
.nk2{
animation: lid-screen infinite 4.5s ease;
}
.nk3{
animation: lid-screen infinite 4s ease;
}
.nk4{
animation: lid-screen infinite 3.5s ease;
}

@keyframes lid-screen {
  0% {
    top: -30px;
  }
2.5% {
    top: -28px;
  }
  5% {
    top: -26px;
  }
  7.5%{
     top: -24px;
  }
  10% {
    top: -22px;
  }
   12.5%{
     top: -20px;
  }
  15% {
   
    top: -18px;
  }
   17.5%{
     top: -16px;
  }
  20% {
    top: -14px;
  }
   22.5%{
     top: -12px;
  }
  25% {
    top: -10px;
  }
   27.5%{
     top: -8px;
  }
   30%{
     top: -7px;
  }
   32.5%{
     top: -6px;
  }
  35% {
    top: -5px;
  }
  40% {
    top: -4px;
  }
   42.5%{
     top: -3px;
  }
  45%{
      top: -2px;
  }
   47.5%{
     top: -1px;
  }
  50%{
      top: 0px;
  }
   52.5%{
     top: -1px;
  }
  55%{
      top: -2px;
  }
   57.5%{
     top: -3px;
  }
  60% {
    top: -4px;
  }
  62.5%{
     top: -5px;
  }
  65% {
    top: -6px;
  }
  67.5%{
     top: -7px;
  }
   70% {
    top: -8px;
  }
  72.5%{
     top: -10px;
  }
  75%{
     top: -12px;
  }
  77.5%{
     top: -14px;
  }
  80% {
    
    top: -16px;
  }
  82.5%{
     top: -18px;
  }
  85% {
    top: -20px;
  }
  87.5%{
     top: -22px;
  }
  90% {
    top: -24px;
  }
  92.5%{
     top: -26px;
  }
  95% {
    top: -28px;
  }
  97.5%{
     top: -30px;
  }
   100% {
    top: -30px;
  }
  /* 20% {
    transform: rotateX(-90deg);
    background-position: -150px top;
  } */
  /* 25% {
    transform: rotateX(15deg);
    background-position: left bottom;
  }
  30% {
    transform: rotateX(-5deg);
    background-position: right top;
  }
  38% {
    transform: rotateX(5deg);
    background-position: right top;
  }
  48% {
    transform: rotateX(0deg);
    background-position: right top;
  }
  90% {
    transform: rotateX(0deg);
    background-position: right top;
  }
  100% {
    transform: rotateX(0deg);
    background-position: right center;
  } */
}




@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

