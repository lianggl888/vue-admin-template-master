<template>
  <div class="map-box">
    <el-button @click="createModel('/Apps/SampleData/models/CesiumAir/Cesium_Air.glb', 5000)">aircraft</el-button>
    <div id="cesiumContainer"/>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tdViewer: null
    }
  },
  mounted() {
    // var tdViewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    let v = this.tdViewer = new Cesium.Viewer('cesiumContainer', {
      geocoder: false, // 是否显示地名查找控件
      homeButton: false, // 返回默认视图 是否显示
      sceneModePicker: false, // 是否显示投影方式控件
      baseLayerPicker: true, // 是否显示图层选择控件
      animation: true, // 是否显示动画控件
      timeline: false, // 是否显示时间线控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: false, // 是否显示点击要素之后显示的信息
      fullscreenButton: true, // 是否显示全屏按钮
      shadows: true // 阴影
    })
    // 设置初始位置
    // v.camera.setView({
    //   // eslint-disable-next-line no-undef
    //   destination: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0)
    // })
    v.scene.debugShowFramesPerSecond = true // 是否显示帧数

    // eslint-disable-next-line no-console
    console.log(v)
  },
  methods: {
    createModel: function (url, height) {
      let that = this
      that.tdViewer.entities.removeAll()

      let position = Cesium.Cartesian3.fromDegrees( // 经纬度转换为笛卡尔坐标
        -123.0744619,
        44.0503706,
        height)

      let heading = Cesium.Math.toRadians(135) // 弧度
      let pitch = 0
      let roll = 0
      let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll) // 航向

      let orientation = Cesium.Transforms.headingPitchRollQuaternion( // 方位 根据参考系计算四元数
        position, hpr
      )

      let entity = that.tdViewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          minimumPixelSize: 128,
          maximumScal: 20000
        }
      })
      that.tdViewer.trackedEntity = entity

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
<style>

</style>
