import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 1
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
        incrementBy(state, payload) {
            state.count += payload.amount
        },
    }
  })

export default store;
