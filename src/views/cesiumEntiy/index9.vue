<template>
  <div class="map-box">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
export default {
  name: '',
  mounted() {
    var viewer = new Cesium.Viewer("cesiumContainer", {
      shouldAnimate: true,
    });
    var i = 30.956799;
    var a = 20;
    var b=118.87826541800007;
    var position=[b,i,0];
    var CircleLineBox=[];
    var realTimeClData=setInterval(function() {
      if(CircleLineBox){
        CircleLineBox.forEach(item=>{
          viewer.entities.remove(item)
        })
        CircleLineBox=[]
      }
      for (var i = 0 ; i < 5; i++){
        position[0]+=10.001*Math.random();
        position[1]+=10.001*Math.random();
        //viewer.entities.removeAll();
        var circle=viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(position[0],position[1]),//以度为单位
          ellipse : {
            semiMinorAxis :300000,//椭圆的短长轴的长度 以米为单位
            semiMajorAxis :300000,
            // height: itemParam.Circle.Altitude,//椭球上方的高度（以米为单位)
            material : Cesium.Color.RED.withAlpha(0.5)
          }
        });
        CircleLineBox.push(circle)
      };
    }, 2500);
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
