<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="add">+</button>
    <button @click="add2">+</button>
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
      add() {
          this.$store.dispatch('actionA').then(() => {
              console.log('9999');//一定是最後處理
          });
      },
      add2() {
          this.$store.dispatch('actionB').then(() => {
              console.log('1111');//一定是最後處理
          });
      }
  }
}
</script>

<style>
</style>
