<template>
  <div class="component">
    <h5>The Leaderboard</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  name: 'leaderboard'
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
