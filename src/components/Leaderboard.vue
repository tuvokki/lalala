<template>
  <div class="component">
    <h5>The Leaderboard</h5>
    <p class="counter">Counter: {{counter}} times</p>
    <p class="counts">Counts: {{counts}} counted</p>
    <div class="actions">
      <div class="actions-inner">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="savecounter">v</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from 'src/api'
export default {
  data() {
    return {
      counters: []
    }
  },
  name: 'leaderboard',
  mounted() {
    // debugger
    const counter = api.service('counter')
    counter.find().then((response) => {
      this.$data.counters = response.data
      this.$store.state.counts = response.data.length
      console.log('counters', response)
    })
    // Listen to user events
    counter.on('created', counter => {
      this.$store.state.counts++
    })
    console.log('lalaleaderboard')
  },
  computed: {
    counter: function() {
      return this.$store.state.counter
    },
    counts: function() {
      return this.$store.state.counts
    }
  },
  methods: {
    savecounter: function() {
      console.log('savecounter')
    },
    increment: function() {
      this.$store.commit('increment')
    },
    decrement: function() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.component
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
