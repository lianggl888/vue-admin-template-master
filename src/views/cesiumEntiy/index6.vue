<template>
  <div class="map-box">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
    var viewer = new Cesium.Viewer('cesiumContainer', {
      infoBox : false,
      selectionIndicator : false,
      shadows : true,
      shouldAnimate : true
    });
    var czml = [{
      "id": "document",
      "name":"CZML Path",
      "version": "1.0",
      "clock": {
        "interval": "2012-08-04T10:00:00Z/2012-08-04T15:00:00Z",
        "currentTime": "2012-08-04T10:00:00Z",
        "multiplier": 10
      }
    }, {
      "id": "path",
      "name": "path with GPS flight data",
      "description": "<p>Hang gliding flight log data from Daniel H. Friedman.<br>Icon created by Larisa Skosyrska from the Noun Project</p>",
      "availability": "2012-08-04T10:00:00Z/2012-08-04T15:00:00Z",
      "path": {
        "material": {
          "polylineOutline": {
            "color": {
              "rgba": [255, 0, 255, 255]
            },
            "outlineColor": {
              "rgba": [0, 255, 255, 255]
            },
            "outlineWidth": 5
          }
        },
        "width": 8,
        "leadTime": 0, // 路线提前执行时间
        "trailTime": 100000, // 路线跟踪时间
        "resolution": 5,
        //"arcType" : "RHUMB",
      },
      "ellipse": { // 椭圆
        "semiMinorAxis": 10.0, // 椭圆大小
        "semiMajorAxis": 20.0,
        "height": 0,
        "material": {
          "solidColor": {
            "color": {
              "rgba": [255, 0, 0, 127]
            }
          }
        },
        "outline": true, // height must be set for outlines to display
        "outlineColor": { // 边框颜色
          "rgba": [255, 255, 255, 255]
        }
      },
      "position": {
        "epoch": "2012-08-04T10:00:00Z",
        "cartographicDegrees": [
          0.0, 118.87841653400005, 30.956798, 0.0,
          10.0, 118.87826541800007, 30.956799, 0.0,

        ]
      }
    }];


    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjM4NjkxNi04Nzc0LTQ1ODYtYjFmMC0yOTQyZjNmYzIyYmMiLCJpZCI6MTQ5OTQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjY4NzE1Mjl9.LH4ubGV8dmhYDByXr33yhHpKApkL2k6cTzkOSqEqtRc';
    viewer.dataSources.add(Cesium.CzmlDataSource.load(czml)).then(function (ds) {
      viewer.trackedEntity = ds.entities.getById('path');//追踪实体
      console.log('viewer.trackedEntity=====', viewer.trackedEntity)
    });

// 动态赋值
    var i = 30.956800;
    var a = 20;
    var b=118.8774481050001;
    setInterval(function() {
      i += 0.001*Math.random();
      b+=0.001*Math.random();
      a += 10;
      //路径最后添加节点
      czml[1].position.cartographicDegrees.push(a, b, i, 0);// 赋值当前最新行驶路线
      czml[0].clock.currentTime = viewer.clock.currentTime.toString(); // 修改当前时间，防止从头重新开始执行
      //清空之前数据，否则数据越来越多
      viewer.entities.removeAll();
      //重新添加修改后的数据
      viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
    }, 1000);
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
