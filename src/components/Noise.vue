<template lang="pug">

  li
    icon( :name="icon" )
    audio( :src="file" controls )
    range-input( @change.native="changeVolume")
    

</template>
<script>
import Icon from './Icon'
import RangeInput from './RangeInput'

export default {
  name: 'noise',
  props: ['file', 'icon'],
  components: { Icon, RangeInput },
  data() {
    return {
      volume: 50
    }
  },
  methods: {
    changeVolume(e) {
      const audio = document.querySelector('audio')
      audio.volume = (e.target.value / 100)
      //console.log(e.target.value, audio)
    }
  }
}
</script>
  
<style lang="stylus" scoped>
  li {
    display: flex
    flex-direction: column
    align-items: center
    margin: 20px 0
  }
</style>

