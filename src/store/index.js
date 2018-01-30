import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
    state: {  },
    mutations: {  },
    actions: { },
    getters: {  }
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
    }
})


export default store;
