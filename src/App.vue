<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="increase">+</button>
    <p>{{ count }}</p>
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
  computed:mapState([
  // 映射 this.count 为 store.state.count
  'count'
]),
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
