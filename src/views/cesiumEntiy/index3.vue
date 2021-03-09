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
      viewer: '',
      entities: ''
    }
  },
  mounted() {
    // var viewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    this.viewer = new Cesium.Viewer('cesiumContainer')

    this.entities = this.viewer.entities
    // 条带材质属性
    let stripeMaterial = new Cesium.StripeMaterialProperty({
      evenColor: Cesium.Color.WHITE.withAlpha(0.5),
      oddColor: Cesium.Color.RED.withAlpha(0.5),
      repeat: 10
    })

    // 矩形，使用 条带材质属性
    let rectangleEntity = {
      // 与此实体关联的矩形。
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(-92.0, 20.0, -86.0, 27.0),
        outline: true,
        outlineColor: Cesium.Color.RED,
        outlineWidth: 140,
        // 相对于正北方向的逆时针旋转角
        rotation: Cesium.Math.toRadians(45),
        // 相对于正北方向的纹理的逆时针旋转角。
        stRotation: Cesium.Math.toRadians(45),
        material: stripeMaterial
      }
    }
    this.entities.add(rectangleEntity)

    // 立方体
    let rectangleEntity2 = {
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(
          -118.0,
          38.0,
          -116.0,
          40.0
        ),
        // 相对于球面的高度
        height: 100000.0,
        // 相对于球面的挤出高度
        extrudedHeight: 500000.0,
        outline: true,
        outlineColor: Cesium.Color.RED,
        outlineWidth: 4,
        stRotation: Cesium.Math.toRadians(60),
        material: Cesium.Color.fromRandom({alpha: 0.5})
      }
    }
    this.entities.add(rectangleEntity2)

    // 多边形
    let polygonEntity = {
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy( Cesium.Cartesian3.fromDegreesArray([
          -107.0,
          27.0,
          -107.0,
          22.0,
          -102.0,
          23.0,
          -97.0,
          21.0,
          -97.0,
          25.0,
        ])),
        // 相对于球面的挤出高度, 注释掉 extrudedHeight ，就是多边形
        extrudedHeight: 500000,
        perPositionHeight: true,
        stRotation: Cesium.Math.toRadians(60),
        outline: true,
        outlineColor: Cesium.Color.RED,
        outlineWidth: 20,
        material: stripeMaterial
      }
    }
    this.entities.add(polygonEntity)

    // 椭圆
    let ellipseEntity = {
      position: Cesium.Cartesian3.fromDegrees(-80.0, 25.0),
      ellipse: {
        semiMinorAxis: 300000.0,
        semiMajorAxis: 500000.0,
        // 相对于球面的高度
        height: 500000.0,
        // 相对于球面的挤出高度, 注释掉 extrudedHeight ，就是椭圆
        extrudedHeight: 700000.0,
        rotation: Cesium.Math.toRadians(-30),
        stRotation: Cesium.Math.toRadians(40),
        outline: true,
        outlineWidth: 10,
        outlineColor: Cesium.Color.RED,
        material: stripeMaterial
      }
    }
    this.entities.add(ellipseEntity)


    // eslint-disable-next-line no-console
    console.log(this.viewer)
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
