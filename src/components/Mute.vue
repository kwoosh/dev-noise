<template lang="pug">
  div( @click="isMute = !isMute" )
    icon( v-if="isMute" name="volume_off" class="op" )
    icon( v-else name="volume_up" )
</template>
<script>
  import Icon from './Icon'

  export default {
    name: 'mute',
    data() {
      return {
        isMute: false
      }
    },
    components: { Icon }
  }
</script>
<style lang="stylus" scoped>
  div {
    position: fixed
    right: 50px
    top: 50px
    outline: none
    cursor: pointer
    transform: scale(1.3)
  }

  .op {
    opacity: 0.8
  }
</style>
