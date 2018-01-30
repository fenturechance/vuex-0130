import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
    state: {
        count:1
    },
    mutations: {},
    actions: {}
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

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
})


export default store;
