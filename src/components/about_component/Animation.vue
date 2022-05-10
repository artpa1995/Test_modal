<template>
    <div id="container">
      <div class="macbook">
        <div class="inner">
          <div class="screen">
            <div class="face-one">
              <div class="camera"></div>
              <div class="display">
                <iframe  type="text/html"  src="https://www.youtube.com/embed/0lbzmZeS-BY?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=0lbzmZeS-BY" frameborder="0" allowfullscreen></iframe>
                <div class="shade"></div>
              </div>
              <span>MacBook Pro</span>
            </div>
            <img src="../../assets/Apple_logo.png" alt="" class="logo">
          </div>
          <div class="body">
            <div class="face-one">
              <div class="touchpad">
              </div>
              <div class="keyboard">
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key space"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
                <div class="key f"></div>
              </div>
            </div>
            <div class="pad one"></div>
            <div class="pad two"></div>
            <div class="pad three"></div>
            <div class="pad four"></div>
          </div>
        </div>
        <div class="shadow"></div>
</div>
    </div>
</template>

<script>
 
  export default {
    name: '',
    data () {
      return {
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>
<style scoped>
#container{
    position: absolute;
    top: 3.125rem;
    left: 0;
    right: 0;
    max-width: 25rem;
    width: 100%;
    height: 25rem;
    margin: 0 auto;
    padding: 1.875rem;
}
.macbook {
  width: 200px;
  height: 126px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -75px 0 0 -48px;
  perspective: 500px;
}
.shadow {
  position: absolute;
  width: 90px;
  height: 0px;
  left: 2.5rem;
  top: 190px;
  transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
  box-shadow: 0 0 3.125rem 2.5rem rgba(0,0,0,0.3);
  animation: shadow infinite 7s ease;
}
.inner {
  z-index: 20;
  position: absolute;
  width: 200px;
  height: 126px;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  transform:rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  animation: rotate infinite 7s ease;
}
.screen {
  width: 200px;
  height: 126px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  background: #ddd;
  transform-style: preserve-3d;
  transform-origin: 50% 121px;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  animation: lid-screen infinite 7s ease;
  background-image: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);
  background-position: left bottom;
  background-size: 300px 300px;
  box-shadow: inset 0 3px 7px rgba(255,255,255,0.5);
}
.screen .logo {
  position: absolute;
  width: 2.5rem;
  height: 24px;
  left: 50%;
  top: 50%;
  margin: -0.75rem 0 0 -10px;
  transform: rotateY(180deg) translateZ(0.1px);
}
.screen .face-one {
  width: 200px;
  height: 126px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  background: #d3d3d3;
  transform: translateZ(2px);
  background-image: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);;
}
.screen .face-one .camera {
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background: #000;
  position: absolute;
  left: 50%;
  top: 0.25rem;
  margin-left: -1.5px;
}
.screen .face-one .display {
  width: 180px;
  height: 107px;
  margin: 11px;
  background: url("https://upload.wikimedia.org/wikipedia/en/9/98/MacOS_Monterey_Desktop.png") no-repeat center center #000;
  background-size: 100% 100%;
  border-radius: 1px;
  position: relative;
  box-shadow: inset 0 0 2px rgba(0,0,0,1);
}
.screen .face-one .display .shade {
  position: absolute;
  left: 0;
  top: 0;
  width: 180px;
  height: 114px;
  background: linear-gradient(-135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 47%,rgba(255,255,255,0) 48%);
  animation: screen-shade infinite 7s ease;
  background-size: 300px 200px;
  background-position: 0px 0px;
}
.screen .face-one span {
  position: absolute;
  top: 85px;
  left: 57px;
  font-size: 6px;
  color: #666
}
.body {
  width: 200px;
  height: 126px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  background: #cbcbcb;
  transform-style: preserve-3d;
  transform-origin: 50% bottom;
  transform: rotateX(-90deg);
  animation: lid-body infinite 7s ease;
  background-image:linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);;
}
.body .face-one {
  width: 200px;
  height: 126px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 7px;
  transform-style: preserve-3d;
  background: #dfdfdf;
  animation: lid-keyboard-area infinite 7s ease;
  transform: translateZ(-2px);
  background-image: linear-gradient(256.38deg, var( --color1) -47.45%, var( --color2) 146.11%);;
}
.body .touchpad {
  width: 44px;
  height: 31px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 0.25rem;
  margin: -3.125rem 0 0 -1.125rem;
  background: #cdcdcd;
  background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  box-shadow: inset 0 0 3px #888;
}
.body .keyboard {
    width: 176px;
    height: 69px;
    position: absolute;
    left: 7px;
    top: 2.5rem;
    border-radius: 0.25rem;
    transform-style: preserve-3d;
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 3px #777;
    padding: 0 0 0 2px;
}
.keyboard .key {
  width: 10px;
  height: 10px;
  background: #444;
  float: left;
  margin: 1.2px;
  transform: translateZ(-2px);
  border-radius: 2px;
  box-shadow: 0 -2px 0 #222;
  animation: keys infinite 7s ease;
}
.key.space {
  width: 48px;
}
.key.f {
  height: 3px;
}
.body .pad {
  width: 5px;
  height: 5px;
  background: #333;
  border-radius: 100%;
  position: absolute;
}
.pad.one {
  left: 1.25rem;
  top: 1.25rem;
}
.pad.two {
  right: 1.25rem;
  top: 1.25rem;
}
.pad.three {
  right: 1.25rem;
  bottom: 1.25rem;
}
.pad.four {
  left: 1.25rem;
  bottom: 1.25rem;
}
.display iframe {
  width: 170px;
  height: 96px;
}
@keyframes rotate {
  0% {
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }
  5% {
    transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg);
  }
  20% {
    transform: rotateX(30deg) rotateY(200deg) rotateZ(0deg);
  }
  25% {
    transform: rotateX(-60deg) rotateY(150deg) rotateZ(0deg);
  }
  60% {
    transform: rotateX(-20deg) rotateY(130deg) rotateZ(0deg);
  }
  65% {
    transform: rotateX(-20deg) rotateY(120deg) rotateZ(0deg);
  }
  80% {
    transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg);
  }
  85% {
    transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg);
  }
  87% {
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
  }
}

@keyframes lid-screen {
  0% {
    transform: rotateX(0deg);
    background-position: left bottom;
  }
  5% {
    transform: rotateX(50deg);
    background-position: left bottom;
  }
  20% {
    transform: rotateX(-90deg);
  }
   25% {
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
  }
}

@keyframes lid-body {
  0% {
    transform: rotateX(-90deg);
    
  }
  50% {
    transform: rotateX(-90deg);
    
  }
  100% {
    transform: rotateX(-90deg);
    
  }
}

@keyframes lid-keyboard-area {
  0% {
     background-color: #dfdfdf;
  }
  50% {
    background-color: #bbb;
  }
  100% {
    background-color: #dfdfdf;
  }
}
@keyframes screen-shade {
  0% {
    background-position: - 1.25rem 0px;
  }
  5% {
    background-position: -2.5rem 0px;
  }
  20% {
    background-position: 200px 0;
  }
  50% {
    background-position: -200px 0;
  }
  80% {
    background-position: 0px 0px;
  }
  85% {
    background-position: -30px 0;
  }
  90% {
    background-position: - 1.25rem 0;
  }
  100% {
    background-position: - 1.25rem 0px;
  }
}
@keyframes keys {
  0% {
    box-shadow: 0 -2px 0 #222;
  }
  5% {
    box-shadow: 1 -1px 0 #222;
  }
  20% {
    box-shadow: -1px 1px 0 #222;
  }
  25% {
    box-shadow: -1px 1px 0 #222;
  }
  60% {
    box-shadow: -1px 1px 0 #222;
  }
  80% {
    box-shadow: 0 -2px 0 #222;
  }
  85% {
    box-shadow: 0 -2px 0 #222;
  }
  87% {
    box-shadow: 0 -2px 0 #222;
  }
  100% {
    box-shadow: 0 -2px 0 #222;
  }
}
@keyframes shadow {
  0% {
    transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
    box-shadow: 0 0 60px 2.5rem rgba(0,0,0,0.3);
  }
  5% {
    transform: rotateX(80deg) rotateY(10deg) rotateZ(0deg);
    box-shadow: 0 0 60px 2.5rem rgba(0,0,0,0.3);
  }
  20% {
    transform: rotateX(30deg) rotateY(-20deg) rotateZ(-20deg);
    box-shadow: 0 0 3.125rem 30px rgba(0,0,0,0.3);
  }
  25% {
    transform: rotateX(80deg) rotateY(-20deg) rotateZ(50deg);
    box-shadow: 0 0 35px 15px rgba(0,0,0,0.1);
  }
  60% {
    transform: rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px);
    box-shadow: 0 0 60px 2.5rem rgba(0,0,0,0.3);
  }
  100% {
    box-shadow: 0 0 60px 2.5rem rgba(0,0,0,0.3);
  }
}
.links {
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
}
.links a {
  color : #555;
  margin-left: 10px;
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

