<template>
  <div class="map-box">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
    var czml = [{
      "id" : "document",
      "name" : "CZML Point - Time Dynamic",
      "version" : "1.0"
    },{
      "id" : "point",
      "availability" :"2012-08-04T16:00:00Z/2012-08-04T16:05:00Z",
      "position" : {
        "epoch" : "2012-08-04T16:00:00Z",
        "cartographicDegrees" : [
          0,   70, 20, 150000,
          100, -80, 44, 150000,
          200, -90, 18, 150000,
          300, -98, 52, 150000,
        ]
      },
      "model": {
        "gltf" : "/Apps/SampleData/models/CesiumAir/Cesium_Air.glb",
        "scale" : 2.0,
        "minimumPixelSize": 128
      },
      path : {
        resolution : 1,
        material : new Cesium.PolylineGlowMaterialProperty({
          glowPower : 0.1,
          color : Cesium.Color.YELLOW
        }),
        width :3
      },
    }];

    var viewer = new Cesium.Viewer('cesiumContainer', {
      shouldAnimate : true,
      sceneMode: 2,
    });

    viewer.dataSources.add(Cesium.CzmlDataSource.load(czml)).then(function(ds){
      var s = ds.entities.getById("point");
      s.orientation =new Cesium.VelocityOrientationProperty(s.position);
    });
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
