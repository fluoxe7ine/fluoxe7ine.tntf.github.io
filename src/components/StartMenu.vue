<template>
  <div class="start-menu">
    <div class="start-menu-content">
      <h1>Welcome!</h1>
      <p>USE</p>
      <p>OR</p>
      <p>TO SCORE POINTS</p>
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
</style>
