import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import home from './modules/home'
import * as getters from './getters'
import createLogger from '../../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
