import { QItem, QItemMain, QItemSide, QItemTile, QList, QListHeader } from 'quasar'
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
  computed: {},
  methods: {},
  mounted() {
    const users = api.service('users')
    // Authenticate
    api.authenticate({
      strategy: 'local',
      email: 'wouter@tuvok.nl',
      password: 'secret'
    }).then(_ => {
      // Toast.create({
      //   html: 'Authenticated',
      //   timeout: 2500,
      //   color: '#000',
      //   bgColor: 'white'
      // })
      console.log('User is logged in')
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
  beforeDestroy() {}
}
