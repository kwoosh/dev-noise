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
      isMute: false,
      mVol: {}
    }
  },
  components: { Icon },
  methods: {
    muteAll() {
      this.isMute = !this.isMute
      const audios = document.querySelectorAll('audio')

      if (this.isMute) {
        audios.forEach(item => {
          item.pause()
        })
      } else {
        audios.forEach(item => {
          item.play()
        })
      }
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
</style>
