import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      // 模块内容（module assets）
      state: {
          text:'5566'
      }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin(state) {
            return state.text;
        } // -> getters['account/isAdmin']
      },
      actions: {
        login() {
            console.log('7788');
        } // -> dispatch('account/login')
      },
      mutations: {
        login() {
            console.log('9999');
        } // -> commit('account/login')
      },
      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: {
              text:'1111'
          },
          getters: {
            profile(state) {
                return state.text;
              } // -> getters['account/profile'] 有沒namespaced: true就不用加'myPage'
          }
        },
        // 进一步嵌套命名空间
        posts: {
          namespaced: true,
          state: {
              text: '6666'
          },
          getters: {
            popular(state) {
                return state.text;
            } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})

export default store;

