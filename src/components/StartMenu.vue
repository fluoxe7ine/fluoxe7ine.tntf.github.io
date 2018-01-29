<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-2"></div>
      <div class="col-lg-6 start-menu-content col-md-8">
        <h1>Welcome!</h1>
        <p>USE</p>
        <div class="instructions row">
          <div class="col-lg-5 col-md-5">
            <div class="arrows">
              <div class="left-arrow">
                <img src="../assets/leftArrow.png" alt="">
              </div>
              <div class="right-arrow">
                <img src="../assets/rightArrow.png" alt="">
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2">
              <p id="or">OR</p>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="mouse">
              <img src="../assets/mouse.png" alt="">
            </div>
          </div>
        </div>
        <p id="toScorePoints">TO SCORE POINTS</p>

          <div class="row">
            <div class="col-lg-4 col-md-2">

            </div>
            <div class="col-lg-4 col-md-8">
              <router-link to="/game">
                <div class="start-button">
                  <p>START</p>
                </div>
              </router-link>
            </div>
            <div class="col-lg-4 col-md-2">

            </div>
          </div>

      </div>
      <div class="col-lg-3 col-md-2"></div>
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

.start-button {
  border: 1px solid white;
  padding-top: 10%;
  padding-bottom: 10%;
  margin-top: 15%;
}

.start-button:hover {
  border: 1px solid green;
  transform: scale(1.2);
  cursor: pointer;
}

#toScorePoints{
  position: relative;
  margin-top: 15%;
}

.instructions{
  margin-top: 20%;
}

.arrows{
  position: relative;
  left:25%;
}

.mouse{
  position: relative;
  left: 10%;
  bottom: 5%;
}
</style>
