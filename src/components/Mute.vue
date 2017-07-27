<template lang="pug">
  div( @click="muteAll" )
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
    components: { Icon },
    methods: {
      muteAll() {
        this.isMute = !this.isMute
        const audios = document.querySelectorAll('audio')

        audios.forEach(item => {
          item.muted = this.isMute
        })
        console.log(audios)
      }
    }
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
