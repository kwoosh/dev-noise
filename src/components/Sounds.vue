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
          src: '../../static/sounds/rain.mp3',
          icon: 'train'
        }
      ]
    }
  } 
}




</script>
<style lang="stylus" scoped>

</style>

