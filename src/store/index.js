import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //   username: '',
      username: '李双双'
  },
  mutations: {
      saveName (state, val) {
        this.state.username = val;
      }
  },
  actions: {
  },
  modules: {
  }
})
