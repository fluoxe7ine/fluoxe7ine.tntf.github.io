<template lang="html">
  <div class="highscore">
    <h1>HIGHSCORES</h1>
    <div v-for="score in scores" class="scores">
      <p>{{ score.name }}: {{score.value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scores: [],
      table: [],
      highscore: {
        name: this.$root.name,
        value: this.$root.score
      }
    }
  },
  created () {
    this.importTable()
  },
  methods: {
    async importTable () {
      try {
        let uri = '/highscore'
        await this.axios.post(uri, this.highscore)
          .then(response => console.log(response))
        await this.axios.get(uri)
          .then(response => {
            this.scores = response.data
            console.log(this.scores)
          })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="css">
p {
  color: white;
}

h1 {
  color: white;
  text-align: center;
  font-family: 'Exo 2', sans-serif;
}

.scores{
  margin-top: 10%;
  text-align: center;
}

</style>
