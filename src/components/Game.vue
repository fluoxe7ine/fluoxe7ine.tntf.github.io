<template lang="html">
  <div class="main">
    <div class="left-side">

    </div>
    <div class="content">
      <h1>Does the color match to its name?</h1>
      <div class="time-line"></div>
      <p id="match">Color</p>
      <p id="counter">COUNTER</p>
      <div class="left-button">
        <p>TRUE</p>
      </div>
      <div class="right-button">
        <p>FALSE</p>
      </div>
    </div>
    <div class="right-side">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.left-side{
  position: fixed;
  width:25%;
  top:0;
  bottom: 0;
  left:0;
}
.content{
  position: fixed;
  width:50%;
  top:0;
  bottom: 0;
  left: 25%;
  font-family: 'Exo 2',sans-serif;
  color: white;
  text-align: center;
}
.right-side{
  position: fixed;
  width:25%;
  top:0;
  bottom: 0;
  right: 0;
}
#counter{
  position: absolute;
  top:55%;
  left: 40%;
  font-size:200%;
  font-weight: bold;
}

.time-line{
  position:absolute;
  width: 100%;
  height: 5%;
  background: white;
}

.left-button{
  position: absolute;
  width:30%;
  border: 2px solid green;
  height: 15%;
  bottom: 10%;
  left: 5%;
  font-size: 200%;
}

.right-button{
  position: absolute;
  width:30%;
  border: 2px solid red;
  height: 15%;
  bottom: 10%;
  right: 5%;
  font-size: 200%;
}

.left-button:hover{
  transform: scale(1.2);
  cursor: pointer;
}

.right-button:hover{
  transform: scale(1.2);
  cursor: pointer;
}

#match{
  position: absolute;
  top: 25%;
  left: 38%;
  font-size: 400%;
}
</style>
