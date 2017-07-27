<template lang="pug">

  li( :class="{ op: isMute }" )
    img( :src="'../../static/imgs/' + img" @click="muteThis" )
    audio( :src="'../../static/sounds/' + file" autoplay loop )
    range-input( @input.native="changeVolume" v-if="!isMute")
    
</template>
<script>
import RangeInput from './RangeInput'

export default {
  name: 'noise',
  props: ['file', 'img', 'noise'],
  components: { RangeInput },
  methods: {
    changeVolume(e) {
      const audio = document.querySelector('audio')
      audio.volume = (e.target.value / 100)
      //console.log(e.target.value, audio)
    },
    muteThis(e) {
      this.isMute = !this.isMute
      
      const audio = document.querySelector('audio')
      audio.muted = this.isMute
    }
  },
  mounted() {
    const audio = document.querySelector('audio')
    audio.volume = 0.2
  },
  data() {
    return {
      isMute: false
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

