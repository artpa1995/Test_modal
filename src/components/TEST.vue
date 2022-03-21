<template>
  <div class="home">
    <div id="apps">
  <ul class="shop">
    <li v-for="(item, index) in items" :key="index">
      <span>{{item.text}}</span>
      <span>{{item.price}}</span>
      <button @click="additem($event, index)">Add</button>
    </li>
  </ul>
  <div class="cart" style="">{{count}}</div>
  <div class="ball-container"><!--small ball-->
    <div v-for="(ball, index) in balls" :key="index">
      <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
        <div class="ball" v-show="ball.show">
          <div class="inner inner-hook"></div>
        </div>
      </transition>
    </div>
  </div>
</div>
    <Header head_text="Контекстная реклама и Разработка сайтов" content_text="Создадим индивидуальный сайт, подключим рекламную компанию, гарантируем поток клиентов " page="home_page"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
   data(){
     return {
    count: 0,
    items:[
      {
        text: "Apple",
        price: 15
      },
      {
        text: "Banana",
        price: 15
      }
      ],
    balls: [//Small balls set to 3
    {
      show: false
    },
      {
        show: false
      },
      {
        show: false
      },
      ],
    dropBalls:[],
   }
  },
  methods:{
    additem(event){
      this.drop(event.target);
      this.count ++;
    },
    drop(el){ //parabolic
    for(let i=0;i<this.balls.length;i++){
      let ball = this.balls[i];
      if(!ball.show){
        ball.show = true;
        ball.el=el;
        this.dropBalls.push(ball);
        return;
      }
    }
    },
    beforeDrop(el) {/* Shopping cart ball animation realization */
    let count = this.balls.length;
    while (count--) {
      let ball = this.balls[count];
      if (ball.show) {
        let rect = ball.el.getBoundingClientRect(); //The position of the element relative to the viewport
        let x = rect.left-32;
        let y = -(window.innerHeight-rect.top-22); //Get y
        el.style.display ='';
        el.style.webkitTransform ='translateY('+y+'px)'; //translateY
        el.style.transform ='translateY('+y+'px)';
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform ='translateX('+x+'px)';
        inner.style.transform ='translateX('+x+'px)';
      }
    }
    },
    dropping(el, done) {/*Reset the number of balls and style reset*/
    let rf = el.offsetHeight;
    el.style.webkitTransform ='translate3d(0,0,0)';
    el.style.transform ='translate3d(0,0,0)';
    let inner = el.getElementsByClassName('inner-hook')[0];
    inner.style.webkitTransform ='translate3d(0,0,0)';
    inner.style.transform ='translate3d(0,0,0)';
    el.addEventListener('transitionend', done);
    },
    afterDrop(el) {/*Initialize the ball*/
    let ball = this.dropBalls.shift();
    if (ball) {
      ball.show=false;
el.style.display ='none';
    }
    }
  }
}
</script>
<style scoped>
.shop{
  position: fixed;
  top: 300px;
  left: 40px;
}
.ball{
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*Bezier curve*/
}
.inner{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgb(0,160,220);
  transition: all 0.4s linear;
}
.cart{
  position: fixed;
  bottom: 22px;
  left: 32px;
  width: 30px;
  height: 30px;
  background-color: rgb(0,160,220);
  color: rgb(255,255,255);
}
</style>


