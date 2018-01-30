<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="increment">+</button>
    <button @click="increment({amount:5})">+</button>
    <button @click="add">+</button>
    <p>{{ count }}</p>
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
  created() {},
  computed:{
      ...mapState(['count'])
  },
  methods: {
    ...mapActions([
        'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

        // `mapActions` 也支持载荷：
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
        add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
</script>

<style>
</style>
