<template>
  <div class='list-item'>
    <span>{{title}}</span>
    -
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: ['title', 'text'],
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="stylus">
.list-item
  color: green
</style>
