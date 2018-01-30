<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
      return {}
  },
  created() {
      console.log(this.$store.state.a.count);
  },
  computed:{
  },
  methods: {
  }
}
</script>

<style>
</style>
