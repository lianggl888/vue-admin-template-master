<template>
  <div class="map-box">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
    // 创建弹窗对象的方法
    let Popup = function (info) {
      this.constructor(info);
    };
    Popup.prototype.id=0;
    Popup.prototype.constructor = function(info){
      const _this = this;
      _this.viewer = info.viewer;//弹窗创建的viewer
      _this.geometry = info.geometry;//弹窗挂载的位置
      _this.id ="popup_" +_this.__proto__.id++ ;
      _this.ctn = $("<div class='bx-popup-ctn' id =  '"+_this.id+"'>");
      $(_this.viewer.container).append( _this.ctn);
      //测试弹窗内容
      const testConfig = {
        header: "测试数据",
        content: "<div>测试窗口</div>",
      };
      _this.ctn.append(_this.createHtml(testConfig.header,testConfig.content));

      _this.render(_this.geometry);
      _this.eventListener = _this.viewer.clock.onTick.addEventListener(function(clock) {
        _this.render(_this.geometry);
      })
    }
    // 实时刷新
    Popup.prototype.render = function(geometry){
      const _this = this;
      const position = Cesium.SceneTransforms.wgs84ToWindowCoordinates(_this.viewer.scene, geometry);
      _this.ctn.css("left",position.x- _this.ctn.get(0).offsetWidth/2);
      _this.ctn.css("top",position.y- _this.ctn.get(0).offsetHeight - 10);
    }
    // 动态生成内容
    Popup.prototype.createHtml = function(header,content){
      const html = '<div class="bx-popup-header-ctn">' +
        header +
        '</div>' +
        '<div class="bx-popup-content-ctn" >' +
        '<div class="bx-popup-content" >' +
        content +
        '</div>' +
        '</div>' +
        '<div class="bx-popup-tip-container" >' +
        '<div class="bx-popup-tip" >' +
        '</div>' +
        '</div>' +
        '<a class="leaflet-popup-close-button" >X</a>';
      return html;
    }
    // 关闭弹窗按钮
    Popup.prototype.close=function(){
      const _this = this;
      _this.ctn.remove();
      _this.viewer.clock.onTick.removeEventListener( _this.eventListener );
    }
    // 测试代码,点击地图后，在点击的位置创建弹窗
    const viewer = new Cesium.Viewer('cesiumContainer');
    const handler3D = new Cesium.ScreenSpaceEventHandler(
      viewer.scene.canvas);
    handler3D.setInputAction(function(click){
      console.log("click")
      const pick = new Cesium.Cartesian2(click.position.x, click.position.y);
      if(pick){
        // 获取点击位置坐标
        const cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick), viewer.scene);
        if(cartesian){
          // 调用弹窗方法
          const popup = new Popup({
            viewer: viewer,
            geometry: cartesian
          });
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK )
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
.bx-popup-ctn{
  position: absolute;
  z-index: 999;
  background: #fff;
}
.bx-popup-tip-container {
  width: 40px;
  height: 20px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  overflow: hidden;
  pointer-events: none;
}
.bx-popup-tip {
  width: 17px;
  background: #fff;
  height: 17px;
  padding: 1px;
  margin: -10px auto 0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.bx-popup-header-ctn{
  background: #090302;
  color: #fff;
  font-size: 15px;
  padding: 4px;
}
.bx-popup-content-ctn{
  padding:15px ;
}
.leaflet-popup-close-button{
  user-select: auto;
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  cursor: pointer;
}
</style>
