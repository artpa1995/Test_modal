<template>
    <div id="container">  
        <div class="ramka">
            <div class="mramka"></div>
        </div>
          <div class="pcrar">          
        </div>
        <div class="crar" id="crar">

            <img class="kr" id="kr" src="../../assets/namak/kr.svg" alt="">
            <div class="nabg">
                <img class="na" src="../../assets/namak/na.svg" alt="">
            </div>
             
        </div>
        <!-- <div class="shoxq">
            
        </div> -->
    </div>
</template>

<script>
  export default {
      data(){

      },
      methods: {
      init: function () {
          
          let id = null;
          let x = 0;
          let y = 6
          var elem = document.getElementById('crar');
        clearInterval(id);
  id = setInterval(frame, 5);
        function frame() {
            
    if (x == 360 ) {
      clearInterval(id);
     console.log(elem);
    } else {
        y++
      x++; 
     // transform: rotateX(115deg) rotateY(-45deg);
    
      //elem.style.transform = "rotateX("+x+"deg) rotateY(-"+y+"deg)"; 
       elem.style.transform = "rotateY("+x+"deg) "; 
    //   elem.style.transform = "rotateY(-"+y+"deg)";
      //elem.style.left = pos + "px"; 
    }
    //frame();
  }

      }
      },
       mounted () {
      this.init()
    }
  }
</script>
<style scoped>

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
.na{
    width: 100%;
    height: 100%;
}
.nabg{
        background-color: white;
    transform: rotateX(-18deg) rotateY(61deg);
    height: 30px;
    width: 315px;
    position: relative;
    left: -33px;
    top: -73px;
    
     animation: namak infinite 6.5s ;
}
.kr{
    position: relative;
    width: 177px;
    top: 10px;
    left: 28px;
   /* transform: rotateX(115deg) rotateY(-45deg); */
    animation: crar infinite 6.5s ;
    z-index: 3;
}
@keyframes namak {
    0%{
        height: 0px;
        top: -50px;
       
    }
     20%{
        height: 0px;
        
       
    }
    /* 80%{
        height: 25px;
        top: -60px;
    }
    90%{
        height: 20px;
        top: -65px;
    }
    100%{
        height: 10px;
        top: -70px;
    } */
}
@keyframes crar {
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
  80% {
   transform: rotateX(105deg) rotateY(-38deg);
    top: -14px;
  }
   85% {
    transform: rotateX(95deg) rotateY(-32deg);
    top: -10px;
  }
   88% {
     transform: rotateX(80deg) rotateY(-25deg);
    top: -6px;
  }
  92% {
    transform: rotateX(60deg) rotateY(-18deg);
    top: 0px;
  }
  
  100% {
    transform: rotateX(30deg) rotateY(-8deg);
    top: 7px;
  }
}

/* @media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
} */

</style>

