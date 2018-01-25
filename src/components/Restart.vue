<template lang="html">
  <div class="main">
    <div class="start-menu-opacity">

    </div>
    <div class="content">
      <h1>YOU LOSE</h1>
      <p id="score">Your score: {{this.$root.score}}</p>
      <p id="try-again">TRY AGAIN?</p>
      <router-link to="/game"><div class="restart-button"></div></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.content{
  position: fixed;
  width:50%;
  top:0;
  bottom: 0;
  left: 25%;
  font-family: 'Exo 2',sans-serif;
  color: white;
  text-align: center;
  font-size: 200%;
}
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
#score{
  margin-top: 10%;
}
#try-again{
  margin-top: 15%;
}
.restart-button{
  background: url('../assets/again.png');
  width: 50px;
  height: 50px;
  margin: auto;
}

.restart-button:hover{
  background: url('../assets/again-hover.png');
  transform: scale(1.2);
  cursor: pointer;
}
</style>
