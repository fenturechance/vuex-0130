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
        //state裡面done的資料只有一筆
        return this.$store.state.todos.filter(todo => todo.done).length
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
