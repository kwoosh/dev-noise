<template lang="pug">
  button {{ text }}
</template>
<script>
  export default {
    name: 'bon',
    props: ['text']
  }
</script>
<style lang="stylus" scoped>
  button {
    margin: 7px
    border-radius: 25px
    border: none
    padding: 5px 20px
    background: rgba(#fff, 0.3)
    color: #fff
    transition: all 0.3s
    outline: none

    &:hover {
      background: rgba(#fff, 0.6)
    }
  }
</style>
