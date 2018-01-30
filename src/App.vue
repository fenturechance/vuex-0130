<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>{{ doneCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
      return {}
  },
  created() {},
  computed:{
    ...mapGetters({
        // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
        doneCount: 'doneTodosCount'
    })
  },
  methods: {
  }
}
</script>

<style>
</style>
