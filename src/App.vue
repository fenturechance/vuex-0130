<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="increase">+</button>
    <p>{{ count }}</p>
    <p>{{ localComputed }}</p>
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
  computed:{
    localComputed () {
        return 5566
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
        count: state =>state.count
    })
  },
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
