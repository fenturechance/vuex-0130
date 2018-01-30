import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
    state: { count: 0 },
    getters: {
        sumWithRootCount(state, getters, rootState) {
            return state.count + rootState.count
        }
    }
}

const moduleB = {
    state: {  },
    mutations: {  },
    actions: {  }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count:1
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})


export default store;
