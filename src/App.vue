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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

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
    ...mapState({
        a: state => state.a,
        b: state => state.b
    })
  },
  methods: {
    ...mapActions([
        'foo',
        'bar'
    ])
  }
}
</script>

<style>
</style>
