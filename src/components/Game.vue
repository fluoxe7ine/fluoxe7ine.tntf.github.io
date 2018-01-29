<template lang="html">
  <div class="main">
    <div class="left-side">

    </div>
    <div class="content">
      <h1>Does the color match to its name?</h1>
      <div class="time-line" :style="{width: lineWidth + '%'}"></div>
      <p id="match" :style="{color: colorstyle}">{{ color | capitalize }}</p>
      <p id="counter">{{counter}}</p>
      <div class="left-button" @click="buttonLeftClick()">
        <p>TRUE</p>
      </div>
      <div class="right-button" @click="buttonRightClick()">
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
      lineWidth: 100,
      color: 'sample',
      colorstyle: null,
      match: null,
      counter: 0
    }
  },
  filters: {
    capitalize (value) {
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created () {
    this.generatingMatch()
    this.timer()
    document.onkeydown = (e) => {
      if (event.keyCode === 39) this.buttonRightClick()
      if (event.keyCode === 37) this.buttonLeftClick()
    }
  },
  methods: {
    timer () {
      this.timerId = window.setInterval(() => {
        this.lineWidth--
        if (this.lineWidth === 0) {
          clearInterval(this.timerId)
          this.$root.score = this.counter
          this.$router.push('/restart')
        }
      }, 13)
    },
    buttonLeftClick () {
      if (this.match === true) {
        this.counter++
        this.generatingMatch()
        this.lineWidth = 100
      } else {
        clearInterval(this.timerId)
        this.$root.score = this.counter
        this.counter = 0
        this.$router.push('/restart')
      }
    },
    buttonRightClick () {
      if (this.match === false) {
        this.counter++
        this.generatingMatch()
        this.lineWidth = 100
      } else {
        clearInterval(this.timerId)
        this.$root.score = this.counter
        this.counter = 0
        this.$router.push('/restart')
      }
    },
    generatingMatch () {
      if (Math.random() <= 0.5) {
        this.generatingTrueMatch()
        this.match = true
        console.log(this.match)
      } else {
        this.generatingFalseMatch()
        this.match = false
        console.log(this.match)
      }
    },
    generatingTrueMatch () {
      this.colorNames = ['blue', 'red', 'yellow', 'green', 'orange', 'purple']
      this.rand = Math.floor(Math.random() * this.colorNames.length)
      this.color = this.colorNames[this.rand]
      this.colorstyle = this.colorNames[this.rand]
    },
    generatingFalseMatch () {
      this.colorNames = ['blue', 'red', 'yellow']
      this.colorStyles = ['green', 'orange', 'purple']
      this.randName = Math.floor(Math.random() * this.colorNames.length)
      this.randColor = Math.floor(Math.random() * this.colorStyles.length)
      this.color = this.colorNames[this.randName]
      this.colorstyle = this.colorStyles[this.randColor]
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
  text-align: center;
  margin-top: 20%;
  font-size: 200%;
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
  text-align: center;
  margin-top: 20%;
  font-size: 300%;
}
</style>
