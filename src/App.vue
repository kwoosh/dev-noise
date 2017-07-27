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
    components: { Bon, Icon, Mute, Sounds },
    mounted() {
      setInterval(() => {
        document.body.style.backgroundColor = randColor()
      }, 10000)
    }
  }

  function randColor() {
    let hash = '#'
    const letters = '1234567890abcdef'
    // todo reafctor this func later
    for (var i = 0; i < 6; i++) {
      hash += letters[Math.floor(Math.random() * 16)]
    }

    return hash
  }
</script>

<style lang="stylus">
body {
  background: #7C3982
  color: #fff
  font-family: Raleway
  transition: all 4s
}

.cont {
  width: 800px
  margin: 0 auto
  text-align: center
}

.main-head {
  margin: 60px 0
}

.op {
  opacity: 0.7
}


</style>
