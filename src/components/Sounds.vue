<template lang="pug">
  div(  ) 
    noise( 
      v-for="(item, i) in items" 
      :key="i" 
      :file="item.src" 
      :icon="item.icon"
      :working="item.isNoise" )
</template>
<script>
  import Noise from './Noise'

  export default {
    name: 'sounds',
    components: { Noise },

    data() {
      return {
        items: [
          {
            isNoise: false,
            title: 'rain',
            src: '../assets/sounds/rain.mp3',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'fireplace',
            src: '../assets/sounds/fireplace.mp3',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'forest',
            src: '../assets/sounds/forest.mp3',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'thunder',
            src: '../assets/sounds/thunder.mp3',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'summer-night',
            src: '../assets/sounds/summer-night.mp3',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'whater-stream',
            src: '../assets/sounds/whater-stream.mp3',
            icon: 'train'
          },

        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>

