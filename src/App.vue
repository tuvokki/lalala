<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <a href="#/">
        <img src="~assets/soccer_field-logo.svg" alt="The ELO beggers PWA" height="200px">
      </a><br>
      <a href="#/leaderboard">leaderboard</a> |
      <a href="#/games">games</a> |
      <a href="#/players">players</a> |
      <a href="#/signin">signin</a>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
}
</script>

<style lang="stylus">
@import '~variables'

main
  text-align center
  margin-top 40px

header
  margin 0
  height 10px
  background-color $primary
</style>
