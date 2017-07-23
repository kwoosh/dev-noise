<template lang="pug">
  div( id="app" )
    
    mute 

    header.cont
      h2.main-head DevNoise
      p Improve focus and boost your productivity. 
        br
        | Mix different sounds and create your perfect environment.
      bon( text='Random' )
      bon( text='Productivity' )
      bon( text='Relax' )
    
    main.cont
      sounds
        
</template> 

<script>
  import Sounds from './components/Sounds'
  import Bon from './components/Bon'
  import Icon from './components/Icon'
  import Mute from './components/Mute'

  export default {
    name: 'app',
    components: { Bon, Icon, Mute, Sounds }
  }
</script>

<style lang="stylus">
body {
  background: #7C3982
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
