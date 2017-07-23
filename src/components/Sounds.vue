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
            src: '../assets/sounds/rain',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'fireplace',
            src: '../assets/sounds/fireplace',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'forest',
            src: '../assets/sounds/forest',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'thunder',
            src: '../assets/sounds/thunder',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'summer-night',
            src: '../assets/sounds/summer-night',
            icon: 'train'
          },
          {
            isNoise: false,
            title: 'whater-stream',
            src: '../assets/sounds/whater-stream',
            icon: 'train'
          },

        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>

