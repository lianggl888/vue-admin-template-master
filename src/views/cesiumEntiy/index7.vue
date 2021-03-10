<template>
  <div class="map-box">
    <div>用定时器模拟实时获取后台数据 当取到数据后实体同时移动到目标位置 这种方式不再与Cesium时间关联 

      实现效果：每秒新增一个坐标；每秒实体运动到相应正确位置且实现实体转向功能

      PS：该方法实体经纬度超过正负180，90时需进行坐标计算转为正负180,90范围内的坐标后实体转向才正常；本文未进行处理</div>
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
      sceneMode: 2, // 初始场景模式
      shouldAnimate : true
    });
    var positions = [];
    var poly = undefined;
    var entityArr=[];
    var PolyLinePrimitive = (function(){
      function _(positions){
        this.options = {
          polyline : {
            show : true,
            positions : [],
            material : Cesium.Color.CORNFLOWERBLUE,
            width : 1,
            arcType : Cesium.ArcType.RHUMB,
          }
        };
        this.positions = positions;
        this._init();
      }
      _.prototype._init = function(){
        var _self = this;
        var _update = function(){
          return _self.positions;
        };
        //实时更新polyline.positions
        this.options.polyline.positions = new Cesium.CallbackProperty(_update,false);
        viewer.entities.add(this.options);
        entityArr.push(this.options);
      };
      return _;
    })();
// 模型转向-经纬度求与正北方向的夹角（方向角）
    function getAngel(A, B) {
      var dx = (B.m_RadLo - A.m_RadLo) * A.Ed;
      var dy = (B.m_RadLa - A.m_RadLa) * A.Ec;
      var angle = 0.0;
      angle = Math.atan(Math.abs(dx / dy)) * 180. / Math.PI;
      var dLo = B.m_Longitude - A.m_Longitude;
      var dLa = B.m_Latitude - A.m_Latitude;
      if (dLo > 0 && dLa <= 0) {
        angle = (90 - angle) + 90;
      } else if (dLo <= 0 && dLa < 0) {
        angle = angle + 180;
      } else if (dLo < 0 && dLa >= 0) {
        angle = (90 - angle) + 270;
      }
      return angle;
    }
    function MyLatLng(longitude, latitude) {
      var Rc = 6378137;
      var Rj = 6356725;
      var m_LoDeg, m_LoMin, m_LoSec;
      var m_LaDeg, m_LaMin, m_LaSec;
      var m_Longitude, m_Latitude;
      var m_RadLo, m_RadLa;
      var Ec;
      var Ed;
      m_LoDeg = longitude;
      m_LoMin = Number.parseInt((longitude - m_LoDeg) * 60);
      m_LoSec = (longitude - m_LoDeg - m_LoMin / 60.) * 3600;
      m_LaDeg = latitude;
      m_LaMin = Number.parseInt((latitude - m_LaDeg) * 60);
      m_LaSec = (latitude - m_LaDeg - m_LaMin / 60.) * 3600;
      m_Longitude = longitude;
      m_Latitude = latitude;
      m_RadLo = longitude * Math.PI / 180.;
      m_RadLa = latitude * Math.PI / 180.;
      Ec = Rj + (Rc - Rj) * (90. - m_Latitude) / 90.;
      Ed = Ec * Math.cos(m_RadLa);
      return {
        m_RadLo: m_RadLo,
        m_RadLa: m_RadLa,
        m_Longitude: m_Longitude,
        m_Latitude: m_Latitude,
        Ed: Ed,
        Ec: Ec
      }
    }
    var czml2 = [{
      "id": "document",
      "name":"CZML Path",
      "version": "1.0",
    }, {
      "id": "path1",
      "name": "path with GPS flight data",
      "description": "<p>Hang gliding flight log data from Daniel H. Friedman.<br>Icon created by Larisa Skosyrska from the Noun Project</p>",
      "availability": "2012-08-04T10:00:00Z/2012-08-04T15:00:00Z",
      "billboard":{
        "image":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zyw56m65a+85by5XzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe3N0cm9rZTojMDAwMEZGO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDBGRjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNS41LDUuMDQgMTIuNSwxMC4yMyAxOC41LDEwLjIzICIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjE1LjUiIHkxPSIxMC41IiB4Mj0iMTUuNSIgeTI9IjI2LjUiLz4NCjxsaW5lIGNsYXNzPSJzdDEiIHgxPSIxMi41IiB5MT0iMjYuNSIgeDI9IjE4LjUiIHkyPSIyNi41Ii8+DQo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTUuNSIgeTE9IjIwLjUiIHgyPSIxMi41IiB5Mj0iMjMuNSIvPg0KPGxpbmUgY2xhc3M9InN0MSIgeDE9IjE4LjUiIHkxPSIyMy41IiB4Mj0iMTUuNSIgeTI9IjIwLjUiLz4NCjwvc3ZnPg0K",
        "scale":0.2,
        rotation:0, //获取或设置以弧度为单位的旋转角度。
  },
    "position": {
      "cartographicDegrees": [ 2.87826541800007, 3.956799, 0.0,]
    }
  }];
    var c2 = new Cesium.CzmlDataSource();
    viewer.dataSources.add(c2.load(czml2));
// 动态赋值
    var i = 3.956799;
    var a = 20;
    var b=2.87826541800007;
    var rotationArr=[2.87826541800007,3.956799];
    var realTimeClData=setInterval(function() {
      i+= 10.001*Math.random();
      b+=10.001*Math.random();
      a+= 10;
      //图标：更新czml坐标
      czml2[1].position.cartographicDegrees = [b,i,0];
      rotationArr.push(b, i);
      if(rotationArr.length>4){
        rotationArr.splice(0,2);
      }
      if(rotationArr.length==4){
        var ag = getAngel(MyLatLng(rotationArr[0],rotationArr[1]), MyLatLng(rotationArr[2],rotationArr[3]));
        czml2[1].billboard.rotation = -ag * Math.PI / 180;
      }
      c2.process(czml2);
      //线：更新entities坐标
      var cartesian =Cesium.Cartesian3.fromDegrees( b, i, 0);
      if(positions.length == 0) {
        positions.push(cartesian.clone());
        positions.push(cartesian);
      }
      if(positions.length >= 2){
        if (!Cesium.defined(poly)) {
          poly = new PolyLinePrimitive(positions);
        }else{
          positions.push(cartesian);
        }
      }
    },2000);
    // Sandcastle.addToolbarButton('清除计时器', function() {
    //   clearInterval(realTimeClData);
    // });
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
