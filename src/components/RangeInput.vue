<template lang="pug">
  div
    input( type="range" min="0" max="100")

</template>
<script>

export default {
  name: 'range-input',
  props: ['volume'],
}

</script>
<style scoped>

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 10px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #ffffff, 0px 0px 0px #ffffff;
  background: #007999;
  border-radius: 0px;
  border: 0.1px solid #ffffff;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10.1px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #008db3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #ffffff, 0px 0px 0px #ffffff;
  background: #007999;
  border-radius: 0px;
  border: 0.1px solid #ffffff;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 0px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #006580;
  border: 0.1px solid #ffffff;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #ffffff, 0px 0px 0px #ffffff;
}
input[type=range]::-ms-fill-upper {
  background: #007999;
  border: 0.1px solid #ffffff;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #ffffff, 0px 0px 0px #ffffff;
}
input[type=range]::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  height: 0px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #007999;
}
input[type=range]:focus::-ms-fill-upper {
  background: #008db3;
}

</style>
