

<template>
    <div id="container">  
        <div class="ramka">
            <div class="mramka"></div>
        </div>
          <div class="pcrar">          
          </div>
        <!-- <div class="crar" id="crar">

            <img class="kr" id="kr" src="../../assets/namak/kr.svg" alt="">
            <div class="nabg">
                <img class="na" src="../../assets/namak/na.svg" alt="">
            </div>
             
        </div> -->
        <!-- <div class="shoxq">
            
        </div> -->

        <div class="flip-container" >
           <!-- ontouchstart="this.classList.toggle('hover'); -->
          <div class="flipper" id="el">
            <div class="front">
               <img class="kr" id="kr" src="../../assets/namak/kr.svg" alt="">
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
          flag : false,
        }
      },
      methods: {
              init: function () {
                this.flag = true;
               // console.log(this.flag);
                var elem = document.getElementById('el');  
                 var kr = document.getElementById('kr');  
                var idy = "";
                let x = 0;
                let y = 0;
                var hp = 0;
                var hd = -150;
               // var elem = document.getElementById('crar');
                 var flag = false;
                var id = '';
                 var id2 = '';
                var idup = '';

                  clearInterval(id);
                  clearInterval(id2);
                  clearInterval(idup);
                 id = setInterval(framex, 1 );
                  id2 = setInterval(framex, 1 );
                 idup = setInterval(frameup, 55);
                if(flag == true){
                  clearInterval(id);
                  clearInterval(id2);
                  clearInterval(idup);
                }
              //console.log(flag);
                var iddown = "";

                function frameup() {
                   flag = true;
                  if(hp >= -150){
                    hp--;
                    elem.style.top = hp+'px';
                  }
                  //console.log(hp);
                  if(hp == -150){
                    
                    const myTimeoutw = setTimeout(function myGreetingw() {
                    iddown = setInterval(framedown, 55);
                    }, 5000);
                    clearInterval(idup);
                  }
                }

                function framedown() {
                 // clearInterval(idup);
                  if(hd < -30){
                    hd++;
                    elem.style.top = hd+'px';
                  }
                  //console.log(hd);
                  if(hd >= -30){
                     clearInterval(iddown);
                   // hp = 0;const myTimeoutw = setTimeout(function myGreetingw() {
                   // idup = setInterval(frameup, 55); }, 1);
                   
                  }
                }

                function framex() {
                  flag = true;
                  if (x <=  4320) {
                    x++; 
                    elem.style.transform = "rotateY("+x+"deg) ";
                    y = 3160;
                  }
                  if(x == 4320){
                    kr.classList.add("animkr")
                    const myTimeout = setTimeout(function myGreeting() {
                    idy =  setInterval(framey, 1);
                   }, 5000);
                   clearInterval(id);
                   clearInterval(id2);
                  }
                }

                function framey() { 
                  kr.classList.remove("animkr")     
                  if (y >= 0 ) {
                    y--; 
                    elem.style.transform = "rotateY("+y+"deg) ";
                  } 
                  if(y == 0) {
                    x = 0;
                    id =  setInterval(framex, 1);
                    clearInterval(idy);
                  }  
                }

              }
      },
       mounted () {
         console.log(this.flag);
         if(this.flag == false){
          this.flag = true;
          console.log(this.flag);
          this.init()
         }
    
    }
  }
</script>
<style scoped>
/* entire container, keeps perspective */
.flip-container {
	perspective: 700px;
  width: 560px;
  display: flex;
  justify-content: center;
}
	/* flip the pane when hovered */
	.flip-container:hover .flipper {
		transform: rotateY(360deg);
	}

 .front, .back {
	width: 240px;
	height: 200px;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
		width: 240px;
	height: 200px;
	position: relative;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

/* front pane, placed above back */
.front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
   background-image: url(../../assets/namak/crar.svg);
   background-repeat: no-repeat;
   background-size: contain;
}

/* back, initially hidden pane */
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
        	/* perspective: 1000px;*/
     /* transform-style: preserve-3d;  */
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
    width: 150px;
    top: 8px;
    left: 9px;
    z-index: 3;
}
.animkr{
 animation: crar 1 5s ;
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

/* @media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
} */

</style>

