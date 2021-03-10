<template>
  <div class="map-box">
    <div id="cesiumContainer" style="height:100%"></div>
  </div>
</template>

<script>
export default {
  name: 'Index4',
  mounted() {
    let viewer = new Cesium.Viewer("cesiumContainer", {
      animation: false,  //是否显示动画控件
      baseLayerPicker: false, //是否显示图层选择控件
      geocoder: true, //是否显示地名查找控件
      timeline: false, //是否显示时间线控件
      sceneModePicker: true, //是否显示投影方式控件
      navigationHelpButton: false, //是否显示帮助信息控件
      infoBox: true,  //是否显示点击要素之后显示的信息
      imageryProvider : new Cesium.UrlTemplateImageryProvider({
        url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      })
    });
    viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
    }));
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
