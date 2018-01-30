import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        increment2(state,payload) {
            state.count += payload.amount;
        },
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        incrementBy({ commit },payload) {
            commit('increment',payload)
        },
    }
  })

export default store;
