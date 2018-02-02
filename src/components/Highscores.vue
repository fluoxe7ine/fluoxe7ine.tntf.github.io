<template lang="html">
  <div class="">
    <p v-for="score in table">{{ score }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scores: [],
      table: [],
      highscore:{
        name: 'Sasha',
        value: this.$root.score
      }
    }
  },
  created () {
    this.createScore()
    this.importTable()
  },
  methods: {
    importTable () {
      let uri = 'http://localhost:3000/highscore'
      this.axios.get(uri)
        .then(response => {
          this.scores = response.data
          this.table = this.scores.map((score) => `${score.name}: ${score.value}`)
          console.log(this.table);
        })
        .catch(err => console.log(err))
    },
    createScore () {
      let uri = 'http://localhost:3000/highscore'
      this.axios.post(uri, this.highscore)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="css">
p {
  color: white
}
</style>
