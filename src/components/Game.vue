<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-3 hidden-sm">

      </div>
      <div class="content col-lg-6 col-md-6 col-xs-12 col-sm-10">
        <h1>Does the color match to its name?</h1>
        <div class="time-line" :style="{width: lineWidth + '%'}"></div>
        <p id="match" :style="{color: colorstyle}">{{ color | capitalize }}</p>
        <p id="counter">{{counter}}</p>
        <div class="row">
          <div class="left-button col-lg-4 col-sm-4 col-xs-12" @click="buttonLeftClick()">
            <p>TRUE</p>
          </div>
          <div class="col-lg-4 col-sm-4 hidden-md hidden-xs">

          </div>
          <div class="right-button col-lg-4 col-sm-4 col-xs-12" @click="buttonRightClick()">
            <p>FALSE</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 hidden-sm">
      </div>
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
          this.addScore()
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
.content{
  font-family: 'Exo 2',sans-serif;
  color: white;
  text-align: center;
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
  border: 2px solid green;
  bottom: 10%;
  left: 5%;
  font-size: 200%;
  margin-top: 10%;
  padding-bottom: 4%;
}

.right-button{
  margin-top: 10%;
  border: 2px solid red;
  padding-bottom: 4%;
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

@media (min-width: 1900px) {
  .left-button{
    padding-top: 7%;
  }
  .right-button{
    padding-top: 7%;
  }
}

@media (min-width: 1680px) {
  .left-button{
    padding-top: 6%;
  }
  .right-button{
    padding-top: 6%;
  }
}

@media (min-width: 1600px) {
  .left-button{
    padding-top: 5%;
  }
  .right-button{
    padding-top: 5%;
  }
}

@media (min-width: 1440px) {
  .left-button{
    padding-top: 5%;
  }
  .right-button{
    padding-top: 5%;
  }
}

@media (min-width: 1280px) {
  .left-button{
    padding-top: 5%;
  }
  .right-button{
    padding-top: 5%;
  }
  h1{
    font-size: 225%;
  }
}

@media (min-width: 1024px) {
  .left-button{
    padding-top: 4%;
  }
  .right-button{
    padding-top: 4%;
  }
  h1{
    font-size: 190%;
  }
}

@media (max-width: 420px) {
  .left-button{
    right: 2%;
    width: 90%;
  }

  .right-button{
    left: 5%;
    width: 90%;
  }

  .time-line{
    left: 0;
  }

  h1{
    font-size: 150%;
  }
}
</style>
