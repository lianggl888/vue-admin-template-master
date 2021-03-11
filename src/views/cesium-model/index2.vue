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
    var viewer = new Cesium.Viewer('cesiumContainer')

    var content;
    var scene = viewer.scene;
    var infoDiv = '<div id="trackPopUp" class="trackPopUp">' +
      '<div id="trackPopUpContent" class="leaflet-popup" style="top:5px;left:0;">' +
      '<a class="leaflet-popup-close-button" href="#">×</a>' +
      '<div class="leaflet-popup-content-wrapper">' +
      '<div id="trackPopUpLink" class="leaflet-popup-content"></div>' +
      '</div>' +
      '<div class="leaflet-popup-tip-container">'+
      '<div class="leaflet-popup-tip"></div>'+
      '</div>'+
      '</div>' +
      '</div>';

    $("#cesiumContainer").append(infoDiv);

    var movePositionEventListener = undefined; // 位置跟随的事件监听

    var handler3D = new Cesium.ScreenSpaceEventHandler(scene.canvas);

// 左键开始添加
    handler3D.setInputAction(function(movement) {
      var cartesian = viewer.scene.pickPosition(movement.position); // 可以拾取球皮和模型 不在球上则无拾取点
      if (!cartesian) return;

      $('#trackPopUp').show();

      var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
      var point = [cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
      var destination = Cesium.Cartesian3.fromDegrees(point[0], point[1], 3000.0);
      content = '<table><tbody>' +
        '<tr><th>经度：</th><td><input class="dtInput" value=' + point[0].toFixed(6) + '></td></tr>' +
        '<tr><th>纬度：</th><td><input class="dtInput" value=' + point[1].toFixed(6) + '></td></tr>' +
        '<tr><th>高度：</th><td><input class="dtInput" value=' + cartographic.height.toFixed(6) +'></td></tr>' +
        '</tbody></table>';

      var obj = { position:movement.position, destination:destination, content:content };

      infoWindow(obj);
      function infoWindow(obj) {
        $(".cesium-selection-wrapper").show();
        $('#trackPopUpLink').empty();
        $('#trackPopUpLink').append(obj.content);

        function positionPopUp (c) {
          var x = c.x - ($('#trackPopUpContent').width()) / 2;
          var y = c.y - ($('#trackPopUpContent').height());
          $('#trackPopUpContent').css('transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');
        }

        $('#trackPopUp').show();

        positionPopUp(obj.position);

        if (movePositionEventListener) { // 先销毁上次的监听
          movePositionEventListener = movePositionEventListener && movePositionEventListener();
        }
        // 每一帧渲染结束后，对位置进行更新
        movePositionEventListener = viewer.scene.postRender.addEventListener(function () {
          var screen = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian);
          if ((obj.position.x !== screen.x) || (obj.position.y !== screen.y)) {
            positionPopUp(screen);
            obj.position = screen;
          }
        });

        $('.leaflet-popup-close-button').click(function() {
          $('#trackPopUp').hide();
          $('#trackPopUpLink').empty();
          $(".cesium-selection-wrapper").hide();
          if (!handler3D) { // 如果无handler3D操作，移除当前的trackPopUp
            $("#trackPopUp").remove();
          }
          if (movePositionEventListener) {
            movePositionEventListener = movePositionEventListener && movePositionEventListener();
          }
        });
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

// 右键停止
    handler3D.setInputAction(function(movement) {
      handler3D = handler3D && handler3D.destroy(); // 销毁整个鼠标事件
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
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
<style>
.trackPopUp {
  display: none;
  color: rgb(255, 255, 255);
  height: 50px;
  /* 禁止文本选中 */
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.leaflet-popup {
  position: absolute;
}
.leaflet-popup-close-button {
  position: absolute;
  right: 0;
  padding: 0px 4px 0 0;
  text-align: center;
  font: 18px/25px Tahoma, Verdana, sans-serif;
  color: rgb(0, 69, 142);
  text-decoration: none;
  background: transparent;
}
.leaflet-popup-content-wrapper-bubble {
  max-height: 200px;
  overflow-y: auto;
  height: 133px;
  padding: 1px;
  text-align: left;
  border-radius: 0px;
  /*background-image: url("../img/bubble.png");*/
  /*background-repeat: no-repeat;*/
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  /*background: "";*/
}
.leaflet-popup-content {
  margin: 5px 20px;
  line-height: 1.4;
}
.leaflet-popup-content div {
  text-align: center;
}
.leaflet-popup-content div {
  font-size: 18px;
}
.leaflet-popup-content table {
  margin-top: 15px;
}
.leaflet-popup-content table tr {
  height: 25px;
}
.leaflet-popup-content table th {
  color: white;
  font-size: small;
}
.leaflet-popup-tip-container {
  margin: 0 auto;
  width: 30px;
  height: 18px;
  overflow: hidden;
}
.leaflet-popup-tip {
  background: rgba(0, 69, 142, 0.5);
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);
  width: 17px;
  height: 17px;
  padding: 1px;
  margin: -10px auto 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.dtBubbleInput {
  border-radius: 6vh;
  background-color: transparent;
  color: white;
  text-align: center;
  border: 0.1vh solid white;
  font-size: small;
  width: 95%;
}
</style>
