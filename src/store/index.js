import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        someMutation(state) {
            state.count++;
            console.log('5566');
        },
        someOtherMutation(state) {
            state.count += 5;
            console.log('7788');
        },
    },
    actions: {
        actionA({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('someMutation')
                    resolve()
                }, 1000)
            })
        },
        actionB({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        }
    }
  })

export default store;
