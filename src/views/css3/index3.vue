<template>
  <div class="app-container" style="display: flex;justify-content: flex-start;flex-wrap: wrap;">
    <div style="width: 200px;margin: 10px;border: 2px solid;">
      CSS3 2D 转换,可以对元素进行移动、缩放、转动、拉长或拉伸。转换的效果是让某个元素改变形状，大小和位置。<br>
      2D变换方法：translate(), rotate(), scale(), skew(), matrix()<br>
    </div>
    <div class="rotate">
      rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。
    </div>
    <div class="translate">
      translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。
    </div>
    <div class="scale">
      scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：scale（2,3）转变宽度为原来的大小的2倍，和其原始大小3倍的高度。
    </div>
    <div class="skew">
      包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。
      skewX();表示只在X轴(水平方向)倾斜。
      skewY();表示只在Y轴(垂直方向)倾斜。
    </div>
    <div class="matrix">
      matrix()方法和2D变换方法合并成一个。
      matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。
    </div>
    <div class="transform-origin">
      transform-origin 属性设置旋转元素的基点位置：
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index3'
}
</script>

<style scoped>

</style>
<style>
.rotate {
  width: 200px;
  height: 100px;
  margin: 10px;
  background-color: yellow;
  /* Rotate div */
  transform: rotate(60deg);
  -ms-transform: rotate(30deg); /* IE 9 */
  -webkit-transform: rotate(10deg); /* Safari and Chrome */
}

.translate {
  width: 200px;
  height: 100px;
  background-color:red;
  border:1px solid black;
}

.scale {
  width: 200px;
  height: 100px;
  margin: 100px;
  background-color: yellow;
  -ms-transform: scale(2,3); /* IE 9 */
  -webkit-transform: scale(2,3); /* Safari */
  transform: scale(2,3); /* 标准语法 */
}

.skew {
  width: 200px;
  height: 100px;
  background-color: yellow;
  transform:skew(30deg,20deg);
  -ms-transform:skew(30deg,20deg); /* IE 9 */
  -webkit-transform:skew(30deg,20deg); /* Safari and Chrome */
}

.matrix {
  width: 200px;
  height: 100px;
  background-color: yellow;
  transform:matrix(0.866,0.5,-0.5,0.866,0,0);
  -ms-transform:matrix(0.866,0.5,-0.5,0.866,0,0); /* IE 9 */
  -webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0); /* Safari and Chrome */
}

.transform-origin {
  width: 200px;
  height: 100px;
  background-color: yellow;
  transform: rotate(45deg);
  transform-origin:30% 40%;
  -ms-transform: rotate(45deg); /* IE 9 */
  -ms-transform-origin:20% 40%; /* IE 9 */
  -webkit-transform: rotate(65deg); /* Safari and Chrome */
  -webkit-transform-origin:50% 90%; /* Safari and Chrome */
}

</style>
