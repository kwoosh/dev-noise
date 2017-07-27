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
      items: [
        {
          src: 'rain.mp3',
          img: 'rain.png'
        },
        {
          src: 'forest.mp3',
          img: 'rain.png'
        },
        {
          src: 'rain.mp3',
          img: 'rain.png'
        },
        {
          src: 'forest.mp3',
          img: 'rain.png'
        },
        {
          src: 'rain.mp3',
          img: 'rain.png'
        },
        {
          src: 'forest.mp3',
          img: 'rain.png'
        }
      ]
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

