<template lang="pug">
  li
</template>
<script>
import Icon from './Icon'

function createAudio(file) {
    const audio = new Audio(file)
    
    audio.loop = true
    audio.autoplay = true
    audio.controls = true

    return audio
}

export default {
  name: 'noise',
  props: ['file', 'icon'],
  components: { Icon },
  data() {
    return {
      val: ''
    }
  },
  mounted() {
    document.querySelector('li').appendChild(createAudio(this.file))
  },
  methods: {},
}
</script>
  
<style lang="stylus" scoped>
  div {
    display: flex
    flex-direction: column
    align-items: center
    margin: 20px 0
  }
</style>

