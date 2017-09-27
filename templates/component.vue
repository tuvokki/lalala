<template>
  <div class="component">
    <h5>Component</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  name: 'players'
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
