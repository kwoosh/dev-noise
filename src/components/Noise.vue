<template lang="pug">

  li( :class="{ op: isMute }" )
    img( 
      :src="'../../static/imgs/' + img" 
      @click="muteThis" )
    audio( 
      :src="'../../static/sounds/' + file" 
      autoplay 
      loop 
      ref="ad")
    range-input( 
      @input.native="changeVolume" 
      v-show="!isMute" )
    
</template>
<script>
import RangeInput from './RangeInput'

export default {
  name: 'noise',
  props: ['file', 'img'],
  components: { RangeInput },
  methods: {
    changeVolume(e) {
      const ad = this.$refs.ad
      ad.volume = (e.target.value / 100)
      //console.log(ad)
    },
    muteThis(e) {
      this.isMute = !this.isMute
      
      const audio = this.$refs.ad
      audio.muted = this.isMute
    }
  },
  mounted() {
    this.muteThis()
  },
  data() {
    return {
      isMute: false
    }
  }
}
</script>
  
<style lang="stylus" scoped>
  img {
    width: 140px
    margin-bottom: 15px
  }

  li {
    width: 250px
    height: 100px
    transform: scale(0.6)
    display: flex
    flex-direction: column
    align-items: center
    margin: 30px
    flex: 2 300px
  }
</style>

