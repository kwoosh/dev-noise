<template>
  <ul>
     <li v-for="(item, i) in music" :key="i" > 
       <!-- {{ item.data.metadata.track }} - {{ item.data.metadata.title }}   -->
      <audio ref="audio" :src="'file:// '+ item.data.file"></audio>
      <button @click="playFile(item.filePath, i)">Play</button>
      <button @click="stopFile(item.filePath, i)">Pause</button>
    </li>
  </ul>
</template>
<script>
import Noise from './Noise'

export default {
  name: 'sounds',
  methods: {
    playFile(file, index) {
      const music = this.$refs.audio[index];
      if (music.paused) {
        music.play();
        console.log("play")
      } else {
        music.pause();
        console.log(music.currentTime);
      }
    },
    stopFile(file, index) {
      const music = this.$refs.audio[index];
      music.pause();
      music.currentTime = 0;
    }
  },
  data() {
    return {
      music: [
        {
          filePath: './assets/sounds/fireplace.mp3',
          data: {
            title: 'fireplace',
            file: './assets/sounds/fireplace.mp3'
          }
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>

