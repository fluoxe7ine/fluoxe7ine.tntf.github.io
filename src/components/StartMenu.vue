<template>
  <div class="start-menu">
    <div class="start-menu-content">
      <h1>Welcome!</h1>
      <p>USE</p>
      <div class="arrows">
        <div class="left-arrow">
          <img src="../assets/leftArrow.png" alt="">
        </div>
        <div class="right-arrow">
          <img src="../assets/rightArrow.png" alt="">
        </div>
      </div>
      <p id="or">OR</p>
      <div class="mouse">
        <img src="../assets/mouse.png" alt="">
      </div>
      <p id="toScorePoints">TO SCORE POINTS</p>
      <router-link to="/game">
        <div class="start-button">
          <p>START</p>
      </div>
      </router-link>
    </div>
    <div class="start-menu-opacity"></div>
  </div>
</template>

<script>
export default {
  name: 'StartMenu',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.start-menu-opacity {
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: -11;
}

.start-menu-content {
  z-index: 100;
  color: white;
  position: fixed;
  left: 25%;
  right: 25%;
  font-family: 'Exo 2', sans-serif;
  text-align: center;
}

.start-menu-content p {
  font-size: 200%;
}

.start-menu-content h1 {
  font-size: 300%;
}

.left-arrow {
  animation: pushLeft linear 1s;
  animation-iteration-count: infinite;
  float: left;
  width: 64px;
  height: 64px;
  margin-right: 20px;
  border: 1px solid white;
  transform-origin: 50% 50%;
  -webkit-animation: pushLeft linear 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: pushLeft linear 1s;
  -moz-animation-iteration-count: infinite;
  -moz-transform-origin: 50% 50%;
  -o-animation: pushLeft linear 1s;
  -o-animation-iteration-count: infinite;
  -o-transform-origin: 50% 50%;
  -ms-animation: pushLeft linear 1s;
  -ms-animation-iteration-count: infinite;
  -ms-transform-origin: 50% 50%;
}

@keyframes pushLeft{
  0% {
    transform:  translate(-23px,-24px)  scaleX(1.00) scaleY(1.00) ;
  }
  50% {
    transform:  translate(-23px,-24px)  scaleX(0.80) scaleY(0.80) ;
    border: 1px solid green;
  }
  100% {
    transform:  translate(-23px,-24px)  scaleX(1.00) scaleY(1.00) ;
  }
}

.right-arrow {
  animation: pushRight linear 1s;
  animation-iteration-count: infinite;
  float:left;
  width: 64px;
  height: 64px;
  border: 1px solid white;
  transform-origin: 50% 50%;
  -webkit-animation: pushRight linear 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: pushRight linear 1s;
  -moz-animation-iteration-count: infinite;
  -moz-transform-origin: 50% 50%;
  -o-animation: pushRight linear 1s;
  -o-animation-iteration-count: infinite;
  -o-transform-origin: 50% 50%;
  -ms-animation: pushRight linear 1s;
  -ms-animation-iteration-count: infinite;
  -ms-transform-origin: 50% 50%;
}

@keyframes pushRight{
  0% {
    transform:  translate(-23px,-24px)  scaleX(0.80) scaleY(0.80) ;
    border: 1px solid red;
  }
  50% {
    transform:  translate(-23px,-24px)  scaleX(1.00) scaleY(1.00) ;
    border: 1px solid white;
  }
  100% {
    transform:  translate(-23px,-24px)  scaleX(0.80) scaleY(0.80) ;
    border: 1px solid red;
  }
}

.mouse {
  position: absolute;
  right: 25%;
  top: 115%;
  animation: mouseMove linear 10s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  float: left;
  -webkit-animation: mouseMove linear 10s;
  -webkit-animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: mouseMove linear 10s;
  -moz-animation-iteration-count: infinite;
  -moz-transform-origin: 50% 50%;
  -o-animation: mouseMove linear 10s;
  -o-animation-iteration-count: infinite;
  -o-transform-origin: 50% 50%;
  -ms-animation: mouseMove linear 10s;
  -ms-animation-iteration-count: infinite;
  -ms-transform-origin: 50% 50%;
}

@keyframes mouseMove{
  0% {
    transform:  translate(0px,0px)  ;
  }
  10% {
    transform:  translate(-10px,0px)  ;
  }
  20% {
    transform:  translate(10px,0px)  ;
  }
  30% {
    transform:  translate(-10px,0px)  ;
  }
  40% {
    transform:  translate(10px,0px)  ;
  }
  50% {
    transform:  translate(-10px,0px)  ;
  }
  60% {
    transform:  translate(10px,0px)  ;
  }
  70% {
    transform:  translate(-10px,0px)  ;
  }
  80% {
    transform:  translate(10px,0px)  ;
  }
  90% {
    transform:  translate(-10px,0px)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
}

#or {
  position: absolute;
  left: 47%;
}

#toScorePoints {
  position: absolute;
  top: 170%;
  left: 32%;
}

.arrows{
  position: absolute;
  top: 125%;
  left: 20%;
}

.start-button {
  position: absolute;
  border: 1px solid white;
  width: 25%;
  top: 230%;
  left: 38%;
}

.start-button:hover {
  border: 1px solid green;
  transform: scale(1.2);
  cursor: pointer;
}

</style>
