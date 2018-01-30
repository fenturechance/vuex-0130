import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
    state: { count: 0 },
    mutations: {
        increment(state, rootState) {
            // 这里的 `state` 对象是模块的局部状态
            state.count += rootState.count;
            console.log(state.count);
        }
    },
    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            commit('increment', rootState);
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
