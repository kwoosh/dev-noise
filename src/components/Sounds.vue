<template lang="pug">
  div 
    noise( v-for="(item, i) in items" :key="i" :file="item.src" :icon="item.icon")
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
            src: '../assets/sounds/rain',
            icon: 'rain'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" scoped>

</style>

