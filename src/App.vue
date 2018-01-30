<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="increase">+</button>
    <p>{{ count }}</p>
    <p>{{ countAlias }}</p>
    <p>{{ countPlusLocalState }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
      return {
          localCount:5
      }
  },
  created() {},
  computed:mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods: {
    increase() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  }
}
</script>

<style>
</style>
