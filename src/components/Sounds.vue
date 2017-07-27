<template lang="pug">
  ul
    noise(
      v-for="(item, i) in items"
      :key="i"
      :file="item.src"
      :img="item.img" )

</template>
<script>
import Noise from './Noise'

export default {
  name: 'sounds',
  components: { Noise },
  methods: {

  },
  data() {
    return {
      items: [
        {
          isNoise: false,
          src: 'rain.mp3',
          img: 'rain.png'
        }
      ]
    }
  } 
}

</script>
<style lang="stylus" scoped>

</style>

