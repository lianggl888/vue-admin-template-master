<template>
  <div>
    <div id="container" style="height:500px" tabindex="0" />
  </div>

</template>

<script>
import AMap from 'AMap'
export default {
  name: 'Index1',
  data() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 10,
        lang: 'en'
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })
    }
  }
}
</script>

<style scoped>

</style>
