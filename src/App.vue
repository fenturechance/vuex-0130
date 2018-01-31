<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>{{ a }}</p>
    <p>{{ b }}</p>
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
      this.$store.dispatch('some/nested/module/foo');
      this.$store.dispatch('some/nested/module/bar');
  },
  computed:{
    ...mapState('some/nested/module', {
        a: state => state.a,
        b: state => state.b
    })
  },
  methods: {
    ...mapActions('some/nested/module', [
        'foo',
        'bar'
    ])
  }
}
</script>

<style>
</style>
