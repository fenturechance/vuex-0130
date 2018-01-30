<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>{{ doneTodosCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {}
  },
  created() {},
  computed:{
    doneTodosCount () {
        return this.$store.getters.getTodoById(2);
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
