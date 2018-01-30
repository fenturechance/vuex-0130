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
      return {}
  },
  created() {},
  computed:{
      ...mapState(['count'])
  },
  methods: {
      increase() {
          this.$store.commit('increment',{ amount: 10 });
      }
  }
}
</script>

<style>
</style>
