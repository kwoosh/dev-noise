<template lang="pug">
  div
    input( type="range" min="0" max="100" v-model="volume" )
    p {{ volume }}

</template>
<script>

export default {
  name: 'range-input',
  data() {
    return {
      volume: 50
    }
  },
}

</script>
<style scoped>

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 7.2px 0;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5.6px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ffffff;
  border-radius: 2.2px;
  border: 0px solid #ffffff;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0.1px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.2px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 5.6px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ffffff;
  border-radius: 2.2px;
  border: 0px solid #ffffff;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0.1px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 5.6px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #c9c9c9;
  border: 0px solid #ffffff;
  border-radius: 4.4px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}

input[type=range]::-ms-fill-upper {
  background: #ffffff;
  border: 0px solid #ffffff;
  border-radius: 4.4px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}

input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0.1px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  height: 5.6px;
}

input[type=range]:focus::-ms-fill-lower {
  background: #ffffff;
}

input[type=range]:focus::-ms-fill-upper {
  background: #ffffff;
}
</style>
