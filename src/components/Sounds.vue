<template lang="pug">
  ul()
    noise(
      v-for="(item, i) in items"
      :key="i"
      :file="item.src"
      :img="item.img")

</template>
<script>
import Noise from './Noise'
import tunes from './tunes'

export default {
  name: 'sounds',
  components: { Noise },
  methods: {
    initialVolume() {
      const audios = document.querySelectorAll('audio')

      audios.forEach(item => {
        item.volume = 0.5
      })
      //console.log(audios)
    }
  },
  mounted() {
    this.initialVolume()
  },
  data() {
    return {
      items: tunes
    }
  } 
}

</script>
<style lang="stylus" scoped>

ul {
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
}

</style>

