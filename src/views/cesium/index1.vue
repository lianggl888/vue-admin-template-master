<template>
  <div class="map-box">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
    // var viewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    var viewer = new Cesium.Viewer('cesiumContainer', {
      geocoder: false, // 是否显示地名查找控件
      homeButton: false, // 返回默认视图 是否显示
      sceneModePicker: false, // 是否显示投影方式控件
      baseLayerPicker: true, // 是否显示图层选择控件
      animation: false, // 是否显示动画控件
      timeline: false, // 是否显示时间线控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: false, // 是否显示点击要素之后显示的信息
      fullscreenButton: true, // 是否显示全屏按钮
    })
     // 设置初始位置
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0)
    })
    viewer.scene.debugShowFramesPerSecond = true // 是否显示帧数

    // 通过entities探究形状
    viewer.entities.add({
      name: 'Red box with black outline',
      position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
      box: {
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 50000.0),
        material: Cesium.Color.RED.withAlpha(0.5),
        outline: true,
        outlineColor: Cesium.Color.BLACK
      }
    })

    // eslint-disable-next-line no-console
    console.log(viewer)
  }
}
</script>
<style scoped>
  .map-box{
    width: 100%;
    height: 100%;
  }
  #cesiumContainer{
    width: 100%;
    height: 100%;
  }
</style>
