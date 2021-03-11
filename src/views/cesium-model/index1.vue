<template>
  <div class="map-box">
    <el-button @click="createModel('/Apps/SampleData/models/CesiumAir/Cesium_Air.glb', 5000)">aircraft</el-button>
    <div id="cesiumContainer"/>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tdViewer: null
    }
  },
  mounted() {
    // var tdViewer = new Cesium.CesiumWidget('cesiumContainer')

    // eslint-disable-next-line no-undef
    let v = this.tdViewer = new Cesium.Viewer('cesiumContainer', {
      geocoder: false, // 是否显示地名查找控件
      homeButton: false, // 返回默认视图 是否显示
      sceneModePicker: false, // 是否显示投影方式控件
      baseLayerPicker: true, // 是否显示图层选择控件
      animation: true, // 是否显示动画控件
      timeline: false, // 是否显示时间线控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      infoBox: false, // 是否显示点击要素之后显示的信息
      fullscreenButton: true, // 是否显示全屏按钮
      shadows: true // 阴影
    })
    // 设置初始位置
    // v.camera.setView({
    //   // eslint-disable-next-line no-undef
    //   destination: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0)
    // })
    v.scene.debugShowFramesPerSecond = true // 是否显示帧数

    // eslint-disable-next-line no-console
    console.log(v)
  },
  methods: {
    createModel: function (url, height) {
      let that = this
      that.tdViewer.entities.removeAll()

      let position = Cesium.Cartesian3.fromDegrees( // 经纬度转换为笛卡尔坐标
        -123.0744619,
        44.0503706,
        height)

      let heading = Cesium.Math.toRadians(135) // 弧度
      let pitch = 0
      let roll = 0
      let hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll) // 航向

      let orientation = Cesium.Transforms.headingPitchRollQuaternion( // 方位 根据参考系计算四元数
        position, hpr
      )

      let entity = that.tdViewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          minimumPixelSize: 128,
          maximumScal: 20000
        }
      })
      // that.tdViewer.trackedEntity = entity

      // 首先构造一个存放弹框的div,方便设置
      let infoDiv = '<div id="trackPopUp" style="display:none;">'+
        '<div id="trackPopUpContent" class="leaflet-popup" style="top:5px;left:0;">'+
        '<a class="leaflet-popup-close-button" href="#">×</a>'+
        '<div class="leaflet-popup-content-wrapper">'+
        '<div id="trackPopUpLink" class="leaflet-popup-content" style="max-width:100%;"></div>'+
        '</div>'+
        '<div class="leaflet-popup-tip-container">'+
        '<div class="leaflet-popup-tip"></div>'+
        '</div>'+
        '</div>'+
        '</div>';

      // 在cesiumContainer后插入弹框div
      $("#cesiumContainer").append(infoDiv);

      // 添加屏幕监听事件
      let handler = new Cesium.ScreenSpaceEventHandler(that.tdViewer.canvas);
      handler.setInputAction((movement) => {
        console.log('0000=', movement.position)
        //  监听鼠标的当前位置坐标，然后根据当前坐标去动态更新气泡窗口div的显示位置；
        let pick = that.tdViewer.scene.pick(movement.position)
        // movement.position是获取屏幕坐标 // pick 记录当前屏幕位置
        // 如果选择的是一个模型
        if(pick && pick.id && pick.id._position) {
          console.log('如果选择的是一个模型=', pick)
          // 这里的判断条件还是蛮有用的,比如你点击某些点的时候想弹出自定义弹窗,其他点弹出原生弹窗,就需要在这里进行判断了
          $("#trackPopUp").show();
          // 显示弹窗容器
          console.log('000-获取点的经纬度-pick.primitive=', pick.primitive)
          var cartographic = Cesium.Cartographic.fromCartesian(pick.primitive.id._position._value);
          // var cartographic = Cesium.Cartographic.fromCartesian(pick.primitive._actualPosition);
          console.log('111-获取点的经纬度')
          // 获取点的经纬度
          var point=[cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
          // 转换坐标
          var destination=Cesium.Cartesian3.fromDegrees(point[0], point[1], 3000.0);
          console.log('destination是我们点击之后,flyto的位置', destination)
          // destination是我们点击之后,flyto的位置
          let content =
            '<table  border="1" width="400px" colspan="4">'+
            '    <thead ><th colspan="4" style="text-align: center">' + '灾害点名称' + '</th></thead>'+
            '    <tbody>'+
            '    <tr >'+
            '        <th align="left">地理位置:' + '灾害点位置' + '<br/>管道桩号:' + '桩号' + '<br/>灾害类型:' + '地质灾害类型' + '<br/>风险等级:' + '风险等级' + '</th>'+
            '        <th align="center"><img src="' + '凯尔特人.jpg' + ' " alt="灾害点图片加载失败" width="100px" height="100px"></th>'+
            '    </tr>'+
            '    </tbody>'+
            '    <tfoot >'+
            '    <td colspan="4" align="center">'+
            '        <button style="color: #003da8">基本特征</button>'+
            '        <button style="color: #003da8" οnclick="this">勘察设计</button>'+
            '        <button style="color: #003da8">巡检卡</button>'+
            '        <button style="color: #003da8">历年对比</button>'+
            '        <button style="color: #003da8">巡查上报</button></td>'+
            '    </tfoot>'+
            '</table>';
          // content是核心,你想弹出的东西,就全部放在这里面
          var obj = {position:movement.position,destination:destination,content:content};
          // 构造一个参数,包括事件、 位置、已经弹框
          infoWindow(obj);
          function infoWindow(obj) {
            let back_position = ''
            var picked = that.tdViewer.scene.pick(obj.position);
            // 首先获取点击点的信息
            if (Cesium.defined(picked)) {
              // 判断 如果点被定义了
              var id = Cesium.defaultValue(picked.id, picked.primitive.id);
              // 获取id(id就是原生弹窗的标题)
              if(id ){
                if (obj.destination) {
                  back_position = new Cesium.Cartesian3.fromDegrees(getCenterPosition().x, getCenterPosition().y, getCenterPosition().z);
                  // 我在这里用back_position记录的点击之前的位置,便于×掉弹窗后返回
                  that.tdViewer.camera.flyTo({
                    // 跳转到我们刚才定义的位置
                    destination: obj.destination
                  });
                }
                // 填充内容
                $(".cesium-selection-wrapper").show();
                // cesium-selection-wrapper是cesium内置的东西
                $('#trackPopUpLink').empty();
                // empty() 方法从被选元素移除所有内容，包括所有文本和子节点。
                $('#trackPopUpLink').append(obj.content);
                // append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
                function positionPopUp(c) {
                  var x = c.x - ($('#trackPopUpContent').width()) / 2;
                  var y = c.y - ($('#trackPopUpContent').height());
                  // 为所有匹配元素(#trackPopUpContent)设置transform的值为 'translate3d(' + x + 'px, ' + y + 'px, 0)'
                  $('#trackPopUpContent').css('transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');
                }
                var c = new Cesium.Cartesian2(obj.position.x, obj.position.y);
                $('#trackPopUp').show();
                positionPopUp(c);
                //实时更新位置
                var removeHandler = that.tdViewer.scene.postRender.addEventListener(function () {
                  var changedC = Cesium.SceneTransforms.wgs84ToWindowCoordinates(that.tdViewer.scene, pick.primitive._actualPosition);
                  // 我们转动地球,也会实时更新弹窗的位置.并不会一成不变
                  if (c && changedC && c.x && changedC.x && c.y && changedC.y) {
                    if ((c.x !== changedC.x) || (c.y !== changedC.y)) {
                      positionPopUp(changedC);
                      c = changedC;
                    }
                  }
                });
                // PopUp close button event handler
                $('.leaflet-popup-close-button').click(function () {
                  $('#trackPopUp').hide();
                  $('#trackPopUpLink').empty();
                  $(".cesium-selection-wrapper").hide();
                  removeHandler.call();
                  that.tdViewer.camera.flyTo({
                    // 回到我们点击前的位置
                    destination: back_position
                  });
                  return false;
                });

              }
            }
          }
        }else{
          $('#trackPopUp').hide();
        }
        function getCenterPosition() {
          //获取当前位置
          console.log('that.tdViewer.canvas===000000')
          var result = that.tdViewer.camera.pickEllipsoid(new Cesium.Cartesian2(that.tdViewer.canvas.clientWidth / 2, that.canvas
            .clientHeight / 2));
          console.log('that.tdViewer.canvas===11111')
          var curPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(result);
          var lon = curPosition.longitude * 180 / Math.PI;
          var lat = curPosition.latitude * 180 / Math.PI;
          var height = getHeight();
          return {
            x: lon,
            y: lat,
            z: height
          };
        }
        function getHeight() {
          console.log('that.tdViewer.canvas===222222')
          //获取当前高度
          if (that.tdViewer) {
            var scene = that.tdViewer.scene;
            var ellipsoid = scene.globe.ellipsoid;
            var height = ellipsoid.cartesianToCartographic(that.tdViewer.camera.position).height;
            return height;
          }
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }
  }
}
</script>
<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
<style>
.leaflet-popup {
  position: absolute;
  text-align: center;
}
.leaflet-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 4px 0 0;
  text-align: center;
  width: 18px;
  height: 14px;
  font: 16px/14px Tahoma, Verdana, sans-serif;
  color: #c3c3c3;
  text-decoration: none;
  font-weight: bold;
  background: transparent;
}
.leaflet-popup-content-wrapper {
  text-align: center;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  box-shadow: 0 3px 14px rgba(0,0,0,0.4);
  padding: 1px;
  text-align: left;
  border-radius: 12px;
}
.leaflet-popup-content {
  margin: 13px 19px;
  line-height: 1.4;
}
.leaflet-popup-tip-container {
  /*修改弹窗位置*/
  margin: 0 auto;
  width: 200px;
  height: 50px;
  position: relative;
  overflow: hidden;
}
.leaflet-popup-tip {
  background: white;
  box-shadow: 0 3px 14px rgba(0,0,0,0.4);
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
</style>
