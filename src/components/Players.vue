<template>
  <div class="players">
    <h5>The players</h5>

    <q-list highlight class="col-auto">
      <q-list-header>People</q-list-header>
      <q-item v-for="user in users" :key="user.id">
        <q-item-side :avatar="user.avatar" />
        <q-item-main>
          <q-item-tile label>{{user.email}}</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile />
        </q-item-side>
      </q-item>
    </q-list>

  </div>
</template>

<script>
import {
  // QInput,
  //   QChatMessage
  QList,
  QListHeader,
  QItem,
  QItemTile,
  QItemMain,
  QItemSide,
  Toast
} from 'quasar'
import api from 'src/api'
export default {
  name: 'players',
  components: {
    QList,
    QListHeader,
    QItem,
    QItemTile,
    QItemMain,
    QItemSide
  },
  props: ['user'],
  data() {
    return {
      message: '',
      messages: [],
      users: []
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    const users = api.service('users')
    // Authenticate
    api.authenticate({
      strategy: 'local',
      email: 'wouter@tuvok.nl',
      password: 'secret'
    }).then(_ => {
      Toast.create.positive('Authenticated')
    })
    // Get all users
    users.find().then((response) => {
      this.$data.users = response.data
    })
    // Listen to user events
    users.on('created', user => {
      this.$data.users = this.$data.users.concat(user)
    })
  },
  beforeDestroy() { }
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
