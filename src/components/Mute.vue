<template lang="pug">
  div( @click="isMute = !isMute" )
    icon( v-if="isMute" name="volume_off" )
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
    right: 40px
    top: 40px
    outline: none
    
  }

</style>
