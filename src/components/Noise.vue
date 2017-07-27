<template lang="pug">

  li( @click="muteThis")
    img( :src="'../../static/imgs/' + img" )
    audio( :src="'../../static/sounds/' + file" controls )
    range-input( @change.native="changeVolume")
    
</template>
<script>
import RangeInput from './RangeInput'

export default {
  name: 'noise',
  props: ['file', 'img'],
  components: { RangeInput },
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
    },
    muteThis() {
      
    }
  },
  mounted() {
    // todo default vulome no 50
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

