<template lang="pug">
  div
    icon( :name="icon" )

    audio( :src="file" controls)
</template>
<script>
import Icon from './Icon'

export default {
  name: 'noise',
  props: ['file', 'icon'],
  components: { Icon }
}
</script>
