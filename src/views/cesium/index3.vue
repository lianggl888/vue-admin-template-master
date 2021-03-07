<template>
  <div class="map-box">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      vehicleEntity: null,
      czmlPath: ''
    }
  },
  mounted() {
    // var viewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    var viewer = new Cesium.Viewer('cesiumContainer', {
      geocoder: false, // 是否显示地名查找控件
      homeButton: false, // 返回默认视图 是否显示
      sceneModePicker: false, // 是否显示投影方式控件
      baseLayerPicker: true, // 是否显示图层选择控件
      animation: true, // 是否显示动画控件
      timeline: false, // 是否显示时间线控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: false, // 是否显示点击要素之后显示的信息
      fullscreenButton: true // 是否显示全屏按钮
    })
    // 创建相机初始位置和朝向
var initialPosition = new Cesium.Cartesian3.fromDegrees(-73.998114468289017509, 40.674512895646692812, 2631.082799425431);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
var homeCameraView = {
    destination : initialPosition,
    orientation : {
        heading : initialOrientation.heading,
        pitch : initialOrientation.pitch,
        roll : initialOrientation.roll
    }
};
    // 设置初始位置
    viewer.camera.setView(homeCameraView);
// 是否显示帧数
    viewer.scene.debugShowFramesPerSecond = true 
    // eslint-disable-next-line no-undef
    
    // Load Cesium World Terrain
viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask : true, // required for water effects
    requestVertexNormals : true // required for terrain lighting
});
// 打开深度检测，那么在地形以下的对象不可见
viewer.scene.globe.depthTestAgainstTerrain = true;
  // 开启全球光照
viewer.scene.globe.enableLighting = true;








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
