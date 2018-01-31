import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        text:'5566'
    }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
    getters: {
        someOtherGetter:(state)=> {
            return state.text;
        } // -> getters['account/isAdmin']
    },
    actions: {
        someOtherAction() {
            console.log('R 7788');
        } // -> dispatch('account/login')
    },
    mutations: {
        someMutation() {
            console.log('R 9999');
        } // -> commit('account/login')
    },
    modules: {
        foo: {
            namespaced: true,
            state:{
                text:'7788'
            },
            getters: {
                // 在这个模块的 getter 中，`getters` 被局部化了
                // 你可以使用 getter 的第四个参数来调用 `rootGetters`
                someGetter(state, getters, rootState, rootGetters) {
                    return getters.someOtherGetter + rootGetters.someOtherGetter;
                    // -> 'foo/someOtherGetter'  // -> 'someOtherGetter'
                },
                someOtherGetter: state => {
                    return state.text;
                }
            },
            mutations: {
                someMutation() {
                    console.log('foo 9999');
                }
            },
            actions: {
                // 在这个模块中， dispatch 和 commit 也被局部化了
                // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
                someAction({ dispatch, commit, getters, rootGetters }) {
                    getters.someGetter // -> 'foo/someGetter'
                    rootGetters.someGetter // -> 'someGetter'

                    dispatch('someOtherAction') // -> 'foo/someOtherAction'
                    dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

                    commit('someMutation') // -> 'foo/someMutation'
                    commit('someMutation', null, { root: true }) // -> 'someMutation'
                },
                someOtherAction(ctx, payload) {
                    console.log('foo 1111');
                }
            }
        }
    }

})

export default store;

