<template>
  <div className="map-box">
    <el-button @click="createModel('/Apps/SampleData/models/GroundVehicle/GroundVehicle.glb', 0)">
      GroundVehicle
    </el-button>
    <div id="cesiumContainer"/>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      viewer: ''
    }
  },
  mounted() {
    // var viewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    this.viewer = new Cesium.Viewer('cesiumContainer')

    // eslint-disable-next-line no-console
    console.log(this.viewer)
  },
  methods: {
    createModel(url, height) {
      this.viewer.entities.removeAll()

      const position = Cesium.Cartesian3.fromDegrees(
        -123.0744619,
        44.0503706,
        height)

      const heading = Cesium.Math.toRadians(135)
      const pitch = Cesium.Math.toRadians(0)
      const roll = Cesium.Math.toRadians(0)
      const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)

      const orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr)

      const entity = this.viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          minimumPixelSize: 128,
          maximumScale: 20000
        }
      })
      this.viewer.trackedEntity = entity
    }
  }
}
</script>
<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
