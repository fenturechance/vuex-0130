import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 1
    },
    mutations: {
        // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
        [SOME_MUTATION](state) {
            state.count += 1 ;
        }
    }
  })

export default store;
