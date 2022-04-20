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

