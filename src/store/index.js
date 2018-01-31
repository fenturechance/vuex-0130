import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        some: {
            namespaced: true,
            modules: {
                nested: {
                    namespaced: true,
                    modules: {
                        module: {
                            namespaced: true,
                            state: {
                                a:'5566',
                                b:'7788',
                            },
                            actions: {
                                foo() {
                                    console.log('999');
                                },
                                bar() {
                                    console.log('111');
                                },
                            }
                        }
                    }
                }
            }
        }
    }

})

export default store;

