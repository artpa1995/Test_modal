

<template>
    <div id="container">  
        <div class="ramka">
            <div class="mramka"></div>
        </div>
          <div class="pcrar">          
          </div>
        <div class="flip-container" >
          <div class="flipper rotate" >
            <div class="front">
               <img class="move_bloc" src="../../assets/namak/kr.svg" alt="">
              <!-- front content -->
            </div>
            <div class="back">
              <!-- back content -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
      data(){
        return{
         
        }
      },
      methods: {

      },
  mounted () {
    
    }
  }
</script>
<style scoped>

.flip-container {
	perspective: 700px;
  width: 560px;
  display: flex;
  justify-content: center;
}
 .front, .back {
	width: 240px;
	height: 200px;
}

.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	width: 240px;
	height: 200px;
	position: relative;
  animation: rotate infinite 9s ;
}

.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.front {
	z-index: 2;
	transform: rotateY(0deg);
   background-image: url(../../assets/namak/crar.svg);
   background-repeat: no-repeat;
   background-size: contain;
}

.back {
	transform: rotateY(180deg);
   background-image: url(../../assets/namak/heth.svg);
   background-repeat: no-repeat;
   background-size: contain;
}

#container{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    max-width: 500px;
    margin: 0 auto;
    background-image: url(../../assets/namak/bg.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}
.ramka{
    max-width: 150px;
    background-image: url(../../assets/namak/ramka.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
    height: 100px;
    width: 100%;
}
.mramka{
    position: absolute;
    top: -25px;
    z-index: 2;
    max-width: 190px;
    background-image: url(../../assets/namak/mramka.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
    height: 170px;
    width: 100%;
}
.pcrar{
    max-width: 150px;
    background-image: url(../../assets/namak/pcrar.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
    height: 100px;
    width: 100%;
}
.crar{
  position: relative;
  max-width: 250px;
  background-image: url(../../assets/namak/crar.svg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 250px;
  width: 100%;
  margin: 0 auto;
}
.shoxq{
    max-width: 350px;
    background-image: url(../../assets/namak/shoxq.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 250px;
    width: 100%;
    margin: 0 auto;
}

.nabg{
    background-color: white;
    transform: rotateX(-18deg) rotateY(61deg);
    height: 30px;
    width: 315px;
    position: relative;
    left: -33px;
    top: -73px;
     animation: namak infinite 5s ;
}
.move_bloc{
    position: relative;
    width: 150px;
    top: 8px;
    left: 9px;
    z-index: 3;
    animation: crar infinite 9s ;
}


@keyframes rotate {
  1% {
    transform:rotateY(50deg);
    top: -3px;
  }
   2% {
    transform:rotateY(100deg);
    top: -6px;
  }
   3% {
    transform:rotateY(150deg);
    top: -9px;
  }
   4% {
    transform:rotateY(200deg);
    top: -12px;
  }
   5% {
    transform:rotateY(250deg);
    top: -15px;
  }
   6% {
    transform:rotateY(300deg);
    top: -18px;
  }
   7% {
    transform:rotateY(350deg);
    top: -21px;
  }
   8% {
    transform:rotateY(400deg);
    top: -24px;
  }
   9% {
    transform:rotateY(450deg);
    top: -27px;
  }
   10% {
    transform:rotateY(500deg);
    top: -30px;
  }
  11% {
    transform:rotateY(550deg);
    top: -33px;
  }
   12% {
    transform:rotateY(600deg);
    top: -36px;
  }
   13% {
    transform:rotateY(650deg);
    top: -39px;
  }
   14% {
    transform:rotateY(700deg);
    top: -42px;
  }
   15% {
    transform:rotateY(750deg);
    top: -45px;
  }
   16% {
    transform:rotateY(850deg);
    top: -48px;
  }
   17% {
    transform:rotateY(900deg);
    top: -51px;
  }
   18% {
    transform:rotateY(950deg);
    top: -54px;
  }
   19% {
    transform:rotateY(1000deg);
    top: -57px;
  }
   20% {
    transform:rotateY(1050deg);
    top: -60px;
  }
   21% {
    transform:rotateY(1100deg);
    top: -63px;
  }
   22% {
    transform:rotateY(1150deg);
    top: -66px;
  }
   23% {
    transform:rotateY(1200deg);
    top: -69px;
  }
   24% {
    transform:rotateY(1250deg);
    top: -72px;
  }
   25% {
    transform:rotateY(1300deg);
    top: -75px;
  }
   26% {
    transform:rotateY(1350deg);
    top: -78px;
  }
   27% {
    transform:rotateY(1400deg);
    top: -81px;
  }
   28% {
    transform:rotateY(1450deg);
    top: -84px;
  }
   29% {
    transform:rotateY(1500deg);
    top: -87px;
  }
   30% {
    transform:rotateY(1550deg);
    top: -90px;
  }
   31% {
    transform:rotateY(1600deg);
    top: -93px;
  }
   32% {
    transform:rotateY(1650deg);
    top: -96px;
  }
   33% {
    transform:rotateY(1700deg);
    top: -99px;
  }
   34% {
    transform:rotateY(1750deg);
    top: -102px;
  }
   35% {
    transform:rotateY(1800deg);
    top: -105px;
  }
  
   /*37% {
    transform:rotateY(1900deg);
    top: -111px;
  }
   38% {
    transform:rotateY(1950deg);
    top: -114px;
  }
   39% {
    transform:rotateY(2000deg);
    top: -117px;
  }
   40% {
    transform:rotateY(2050deg);
    top: -120px;
  }
   41% {
    transform:rotateY(2100deg);
    top: -123px;
  }
   42% {
   transform:rotateY(2150deg);
    top: -123px;
  }
  60% {
    transform:rotateY(2150deg);
    top: -123px;
  } */
 
   /* 61% {
    transform:rotateY(2050deg);
    top: -120px;
  } */
  /* 62% {
    transform:rotateY(2000deg);
    top: -117px;
  }
  63% {
    transform:rotateY(1950deg);
    top: -114px;
  }
  64% {
    transform:rotateY(1900deg);
    top: -111px;
  }
  65% {
    transform:rotateY(1850deg);
    top: -108px;
  } */
  66% {
    transform:rotateY(1800deg);
    top: -105px;
  }
  67% {
    transform:rotateY(1750deg);
    top: -102px;
  }
  68% {
    transform:rotateY(1700deg);
    top: -99px;
  }
  69% {
    transform:rotateY(1650deg);
    top: -96px;
  }
  70% {
    transform:rotateY(1600deg);
    top: -93px;
  }
   71% {
    transform:rotateY(1550deg);
    top: -90px;
  }
  72% {
    transform:rotateY(1500deg);
    top: -87px;
  }
  73% {
    transform:rotateY(1450deg);
    top: -84px;
  }
  74% {
    transform:rotateY(1400deg);
    top: -81px;
  }
  75% {
    transform:rotateY(1350deg);
    top: -78px;
  }
  76% {
    transform:rotateY(1300deg);
    top: -75px;
  }
  77% {
    transform:rotateY(1250deg);
    top: -72px;
  }
  78% {
    transform:rotateY(1200deg);
    top: -69px;
  }
  79% {
    transform:rotateY(1150deg);
    top: -66px;
  }
  80% {
    transform:rotateY(1100deg);
    top: -63px;
  }
   81% {
    transform:rotateY(1050deg);
    top: -60px;
  }
  82% {
    transform:rotateY(1000deg);
    top: -57px;
  }
  83% {
    transform:rotateY(950deg);
    top: -54px;
  }
  84% {
    transform:rotateY(900deg);
    top: -51px;
  }
  85% {
    transform:rotateY(850deg);
    top: -48px;
  }
  86% {
    transform:rotateY(800deg);
    top: -45px;
  }
  87% {
    transform:rotateY(750deg);
    top: -42px;
  }
  88% {
    transform:rotateY(700deg);
    top: -39px;
  }
  89% {
    transform:rotateY(650deg);
    top: -36px;
  }
  90% {
    transform:rotateY(600deg);
    top: -33px;
  }
   91% {
    transform:rotateY(550deg);
    top: -30px;
  }
  92% {
    transform:rotateY(500deg);
    top: -27px;
  }
  93% {
    transform:rotateY(450deg);
    top: -24px;
  }
  94% {
    transform:rotateY(400deg);
    top: -21px;
  }
  95% {
    transform:rotateY(350deg);
    top: -18px;
  }
  96% {
    transform:rotateY(300deg);
    top: -15px;
  }
  97% {
    transform:rotateY(250deg);
    top: -12px;
  }
  98% {
    transform:rotateY(200deg);
    top: -9px;
  }
  99% {
    transform:rotateY(150deg);
    top: -6px;
  }
  100% {
    transform:rotateY(100deg);
    top: -3px;
  }

}
@keyframes namak {
    0%{
        height: 0px;
        top: -50px;
    }
     20%{
        height: 0px;
    }
}
@keyframes crar {
  
  0% {
    transform: rotateX(0deg) rotateY(5deg);
  }
/*  2% {
    transform: rotateX(20deg) rotateY(-6deg);
    top: 8px;
  }
  4% {
    transform: rotateX(30deg) rotateY(-8deg);
    top: 7px;
  }
   6% {
    transform: rotateX(35deg) rotateY(-10deg);
    top: 6px;
  }
  8% {
    transform: rotateX(40deg) rotateY(-11deg);
    top: 4px;
  }
  10% {
    transform: rotateX(45deg) rotateY(-12deg);
    top: 4px;
  }
  12% {
    transform: rotateX(50deg) rotateY(-14deg);
   top: 3px;
  }
  14% {
    transform: rotateX(55deg) rotateY(-16deg);
   top: 1px;
  }
   16% {
    transform: rotateX(60deg) rotateY(-18deg);
    top: 0px;
  }
   18% {
    transform: rotateX(65deg) rotateY(-19deg);
    top: -2px;
  }
   20% {
    transform: rotateX(70deg) rotateY(-21deg);
    top: -4px;
  }
  22% {
    transform: rotateX(75deg) rotateY(-23deg);
    top: -6px;
  }
   24% {
    transform: rotateX(80deg) rotateY(-25deg);
    top: -6px;
  }
   26% {
    transform: rotateX(85deg) rotateY(-27deg);
    top: -8px;
  } 
   28% {
    transform: rotateX(85deg) rotateY(-27deg);
    top: -8px;
  }
   30% {
    transform: rotateX(90deg) rotateY(-27deg);
    top: -9px;
  }
   32% {
    transform: rotateX(95deg) rotateY(-32deg);
    top: -10px;
  }
  34% {
    transform: rotateX(100deg) rotateY(-36deg);
    top: -13px;
  }
   36% {
    transform: rotateX(105deg) rotateY(-38deg);
    top: -14px;
  }
  38% {
    transform: rotateX(110deg) rotateY(-41deg);
    top: -15px;
  }
   40% {
    transform: rotateX(115deg) rotateY(-45deg);
    top: -16px;
  }
    */
    10% {
    transform: rotateX(45deg) rotateY(-12deg);
    top: 4px;
  }
     35% {
    transform: rotateX(60deg) rotateY(-18deg);
    top: 0px;
  }
  38% {
    transform: rotateX(85deg) rotateY(-27deg);
    top: -8px;
  } 
  40% {
    transform: rotateX(115deg) rotateY(-45deg);
    top: -16px;
  }
  50% {
    transform: rotateX(115deg) rotateY(-45deg);
    top: -16px;
  }
  54% {
    transform: rotateX(115deg) rotateY(-45deg);
    top: -16px;
  }
   55% {
     transform: rotateX(80deg) rotateY(-25deg);
    top: -6px;
  }
  63% {
    transform: rotateX(30deg) rotateY(-8deg);
    top: 7px;
    }
  /*90% {
   transform: rotateX(105deg) rotateY(-38deg);
    top: -14px;
  }
   92% {
    transform: rotateX(95deg) rotateY(-32deg);
    top: -10px;
  }
   94% {
     transform: rotateX(80deg) rotateY(-25deg);
    top: -6px;
  }
  96% {
    transform: rotateX(60deg) rotateY(-18deg);
    top: 0px;
  }*/
  
  100% {
    transform: rotateX(30deg) rotateY(-8deg);
    top: 7px;
  }
}
@keyframes crar2 {
  0% {
    transform: rotateX(0deg) rotateY(5deg);
  }
  2% {
    transform: rotateX(20deg) rotateY(-6deg);
    top: 8px;
  }
  4% {
    transform: rotateX(30deg) rotateY(-8deg);
    top: 7px;
  }
  6% {
    transform: rotateX(35deg) rotateY(-10deg);
    top: 6px;
  }
  8% {
    transform: rotateX(40deg) rotateY(-11deg);
    top: 4px;
  }
  10% {
    transform: rotateX(45deg) rotateY(-12deg);
    top: 4px;
  }
  12% {
    transform: rotateX(50deg) rotateY(-14deg);
   top: 3px;
  }
  14% {
    transform: rotateX(55deg) rotateY(-16deg);
   top: 1px;
  }
   16% {
    transform: rotateX(60deg) rotateY(-18deg);
    top: 0px;
  }
   18% {
    transform: rotateX(65deg) rotateY(-19deg);
    top: -2px;
  }
   20% {
    transform: rotateX(70deg) rotateY(-21deg);
    top: -4px;
  }
  22% {
    transform: rotateX(75deg) rotateY(-23deg);
    top: -6px;
  }
   24% {
    transform: rotateX(80deg) rotateY(-25deg);
    top: -6px;
  }
   26% {
    transform: rotateX(85deg) rotateY(-27deg);
    top: -8px;
  }
   28% {
    transform: rotateX(85deg) rotateY(-27deg);
    top: -8px;
  }
   30% {
    transform: rotateX(90deg) rotateY(-27deg);
    top: -9px;
  }
   32% {
    transform: rotateX(95deg) rotateY(-32deg);
    top: -10px;
  }
  34% {
    transform: rotateX(100deg) rotateY(-36deg);
    top: -13px;
  }
   36% {
    transform: rotateX(105deg) rotateY(-38deg);
    top: -14px;
  }
  38% {
    transform: rotateX(110deg) rotateY(-41deg);
    top: -15px;
  }
  
  40% {
    transform: rotateX(115deg) rotateY(-45deg);
    top: -16px;
  }
  90% {
   transform: rotateX(105deg) rotateY(-38deg);
    top: -14px;
  }
   92% {
    transform: rotateX(95deg) rotateY(-32deg);
    top: -10px;
  }
   94% {
     transform: rotateX(80deg) rotateY(-25deg);
    top: -6px;
  }
  96% {
    transform: rotateX(60deg) rotateY(-18deg);
    top: 0px;
  }
  
  100% {
    transform: rotateX(30deg) rotateY(-8deg);
    top: 7px;
  }
}

@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

