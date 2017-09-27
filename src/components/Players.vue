<template>
  <div class="players">
    <h5>The players</h5>
  </div>
</template>

<script>
export default {
  name: 'players'
}
</script>

<style lang="stylus">
@import '~variables'

.players
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
