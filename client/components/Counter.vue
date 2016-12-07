<template>
  <div class="counter-wrapper">
    <div class="counter">
      {{ count }}
    </div>
    <button @click="$store.commit('INCREMENT')">Increment</button>
    <button @click="$store.commit('DECREMENT')">Decrement</button>
    <button @click="$store.dispatch('incrementAsync')">Increment Async</button>
    <button @click="getIndexData">get data</button>
  </div>
</template>

<script>

import API from '../api'

export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    getIndexData(){
      API.indexPage.get({id: 1}).then( (res) => {
        console.log(res)
      }, (err) => {
        console.warn(err)
      })
    }
  }
}
</script>

<style lang="stylus">
.counter
  cursor: pointer
  margin: 100px auto
  border-radius: 3px
  width: 200px
  height: 200px
  text-align: center
  line-height: 200px
  font-size: 5rem
  background-color: #f0f0f0
  user-select: none
</style>
