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
