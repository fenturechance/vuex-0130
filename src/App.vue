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
      console.log(this.$store.getters['account/isAdmin']);
      this.$store.dispatch('account/login');
      this.$store.commit('account/login');
      console.log(this.$store.getters['account/profile']);
      console.log(this.$store.getters['account/posts/popular']);
  },
  computed:{
  },
  methods: {
  }
}
</script>

<style>
</style>
