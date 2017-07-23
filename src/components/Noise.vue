<template lang="pug">
  div(  )
    icon( :name="icon" )

    audio#noise( :src="file" type="audio/mp3" controls autoplay loop)

    input( type="range" @click="switchNoise" v-model="val")
    p {{ val }}
</template>
<script>
import Icon from './Icon'

export default {
  name: 'noise',
  props: ['file', 'icon'],
  components: { Icon },
  data() {
    return {
      val: ''
    }
  },
  methods: {
    switchNoise(e) {
      console.log(e.target.value)
    }
  },
}
</script>
  
<style lang="stylus" scoped>
  div {
    display: flex
    flex-direction: column
    align-items: center
    margin: 20px 0
  }
</style>

