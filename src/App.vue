<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="increase">+</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {},
  computed: {
      count() {
          return this.$store.state.count;
      }
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
