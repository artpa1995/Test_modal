<template>
    <div id="container">
        <div class="con">
            <div class="blocs">
                <div class="bloc1 move_up_down"><img class="move_up_down1" src="../../assets/team/bloc.svg" alt=""></div>
                <div class="bloc1 move_up_down" style="position: relative; left: 30px;"><img class="move_up_down4" src="../../assets/team/bloc.svg" alt=""></div>
            </div>
            <div class="blocs" style="margin-top:230px">
                <div class="bloc move_up_down"><img class="move_up_down2" src="../../assets/team/bloc.svg" alt=""></div>
                <div class="bloc move_up_down"><img class="move_up_down3" src="../../assets/team/bloc.svg" alt=""></div>
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
    background-image: url(../../assets/team/shenq.svg);
    background-position: 65px 65px;
    background-repeat: no-repeat;
    background-size: 300px 300px;
    height: 400px;
    width: 100%;
}
.blocs{
    display: flex;
    justify-content: space-between;
    top: 70px;
    position: relative;
    cursor: pointer;
}
.bloc1{
    max-width: 400px;
    background-image: url(../../assets/team/shoxq.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 70px;
    width: 105px;
    
}
.bloc{
    max-width: 400px;
    margin: 0 auto;
    background-image: url(../../assets/team/shoxq.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 70px;
    width: 105px;
}

.move_up_down>img{
    position: relative;
    top: -30px;
}
.move_up_down1{
    animation: lid-screen infinite 5.5s ease;
}
.move_up_down2{
    animation: lid-screen infinite 4.5s ease;
}
.move_up_down3{
    animation: lid-screen infinite 4s ease;
}
.move_up_down4{
    animation: lid-screen infinite 3.5s ease;
}

@keyframes lid-screen {
  0% {
    top: -30px;
  }
  50%{
      top: 0px;
  }
   100% {
    top: -30px;
  }
}

@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

