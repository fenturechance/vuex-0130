import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        increment2({ commit }) {
            commit('increment')
        },
        increment3({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000);
        },

    }
  })

export default store;
