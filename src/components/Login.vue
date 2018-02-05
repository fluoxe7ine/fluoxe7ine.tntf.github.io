<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-3 hidden-sm">

      </div>
      <div class="content col-lg-6 col-md-6 col-xs-12 col-sm-10">
        <h1>Type your name here:</h1>
        <input v-model="value" type="text" name="" value="">
        <router-link to="/game">
          <div class="submit-button" @click="addingName()">
            <p>SUBMIT</p>
          </div>
        </router-link>
      </div>
      <div class="col-lg-3 col-md-3 hidden-sm">

      </div>
    </div>
    <div class="start-menu-opacity"></div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'Guest'
    }
  },
  methods: {
    addingName () {
      this.$root.name = this.value
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  color: white;
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  margin-top: 30%;
}

input{
  background: transparent;
  color:white;
  height: 20%;
  margin-top: 5%;
  margin-left: 25%;
  width: 35%;
  font-size: 200%;
  padding-left: 5%;
  padding-bottom: 2%;
  font-family: 'Exo 2', sans-serif;
  outline: none;
  float: left;
}

input:hover{
  border: green 1px solid;
}

input:focus{
  border: green 2px solid;
}

.submit-button {
  height: 20%;
  width: 20%;
  border: solid 2px white;
  float:left;
  margin-top: 5%;
  margin-left: 2%;
  font-family: 'Exo 2';
  text-align: center;
  padding-top: 2%;
  font-size: 130%;
}

.submit-button:hover {
  border: solid 2px green;
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

@media (max-width: 940px) {
  .submit-button {
    font-size: 100%;
  }
}
</style>
