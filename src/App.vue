<template lang="pug">
  div( id="app" )
    mute
    header.cont
      h1.main-head DevNoise
      p Improve focus and boost your productivity. 
        br
        | Mix different sounds and create your perfect environment.
      bon( text='Random' )
      bon( text='Productivity' )
      bon( text='Relax' )
        
</template> 

<script>
  import Bon from './components/Bon'
  import Icon from './components/Icon'
  import Mute from './components/Mute'

  export default {
    name: 'app',
    components: { Bon, Icon, Mute }
  }
</script>

<style lang="stylus">
body {
  background: #B1E0EC
  color: #fff
  font-family: Raleway
}

.cont {
  width: 700px
  margin: 0 auto
  text-align: center
}

.main-head {
  margin: 60px 0
}


</style>
