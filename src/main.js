// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
import 'quasar-extras/ionicons'

import Quasar from 'quasar'
import Vue from 'vue'
import Vuex from 'vuex'

import router from './router'

require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(Vuex)

if (__THEME === 'mat') {
  // require('quasar-extras/roboto-font')
}
// import 'quasar-extras/material-icons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
const store = new Vuex.Store({
  state: {
    counter: 0,
    counts: 0
  },
  getters: {
    counter: state => state.counter * 2,
    counts: state => state.counter * 2
  },
  mutations: {
    // Mutations
    increment: state => state.counter++,
    decrement: state => state.counter--
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#q-app',
  router,
  render: h => h(require('./App')),
  // Configure store
  store: store
})
