<template>
  <div class="map-box">
    <el-button @click="createModel('/Apps/SampleData/models/GroundVehicle/GroundVehicle.glb', 0)">
      GroundVehicle
    </el-button>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'Index2',
  data() {
    return {
      viewer: ''
    }
  },
  mounted() {
    this.viewer = new Cesium.Viewer('container', {

    })
  },
  methods: {
    createModel(url, height) {
      this.viewer.entities.removeAll()

      const data = []
      data[0] = [{ longitude: 116.405419, dimension: 39.918034, height: 0, time: 0 }, { longitude: 116.2821, dimension: 39.918145, height: 0, time: 40 }, { longitude: 115.497402, dimension: 39.344641, height: 70000, time: 100 }, { longitude: 107.942392, dimension: 29.559967, height: 70000, time: 280 }, { longitude: 106.549265, dimension: 29.559967, height: 0, time: 360 }]

      //起始时间
      let start = Cesium.JulianDate.fromDate(new Date(2017, 7, 11))
      //结束时间
      let stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())

      // 设置开始的时钟
      this.viewer.clock.startTime = start.clone()
      // 设置结束时间
      this.viewer.clock.stopTime = stop.clone()
      // 设置当前时间
      this.viewer.clock.currentTime = start.clone()
      // 设置速率
      this.viewer.clock.multiplier = 40
      //设置时间轴
      this.viewer.timeline.zoomTo(start, stop)
      // 循环执行
      this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP

      //添加模型
      let property = this.computeFlight(start, stop, data[0])
      let entity = this.viewer.entities.add({
        name: url,
        // 和时间轴关联
        availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
          start: start,
          stop: stop
        })]),
        position: property,
        // 根据所提供的速度计算模型的朝向
        orientation: new Cesium.VelocityOrientationProperty(property),
        // 模型数据
        model: {
          uri: url,
          minimumPixelSize: 128,
          maximumScale: 20000
        },
        // 绘制路径
        path: {
          resolution: 1,
          material: new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.25,
            color: Cesium.Color.YELLOW
          }),
          width: 10
        }
      })
      // 获取或设置相机当前跟踪的实体实例
      this.viewer.trackedEntity = entity
    },
    /**
     * 计算飞行
     * @param source 数据坐标
     * @returns {SampledPositionProperty|*}
     */
    computeFlight(start, stop, source) {
      let property = new Cesium.SampledPositionProperty()
      for(let i = 0; i < source.length; i++) {
        let time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate)
        let position = Cesium.Cartesian3.fromDegrees(source[i].longitude, source[i].dimension, source[i].height)
        // 添加位置，和时间对应
        property.addSample(time, position)
      }
      return property
    }
  }
}
</script>

<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}
</style>
