<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="add">+</button>
    <button @click="add2">+</button>
    <button @click="add3">+</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
      add() {
          this.$store.dispatch('increment');
      },
      add2() {
          this.$store.dispatch('increment2');
      },
      add3() {
          this.$store.dispatch('increment3');
      },
  }
}
</script>

<style>
</style>
