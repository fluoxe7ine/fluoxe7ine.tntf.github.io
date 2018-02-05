<template lang="html">
  <div class="container">
    <div class="start-menu-opacity">

    </div>
    <div class="row">
      <div class="col-lg-3 col-md-3 hidden-sm hidden-xs">

      </div>
      <div class="content col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h1>YOU LOSE</h1>
        <p id="score">Your score: {{this.$root.score}}</p>
        <p id="try-again">TRY AGAIN?</p>
        <router-link to="/game"><div class="restart-button"></div></router-link>
      </div>
      <div class="col-lg-3 col-md-3 hidden-sm hidden-xs">
        <Highscores />
      </div>
    </div>
  </div>
</template>

<script>
import Highscores from './Highscores.vue'
export default {
  data () {
    return {

    }
  },
  components:{
    Highscores
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
.content{

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
  margin-bottom: 10%;
}

.restart-button:hover{
  background: url('../assets/again-hover.png');
  transform: scale(1.2);
  cursor: pointer;
}
</style>
