<template>
  <div class="app-container" style="display: flex;justify-content: flex-start;flex-wrap: wrap;">
    <div class="div1">本例包含-边框-圆角-背景-渐变</div>
    <div class="rotate2">transform: rotate 属性，允许您旋转DIV</div>
    <div class="radius-1">border-radius: 15px 50px 30px 5px 四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角</div>
    <div class="radius-2">border-radius: 15px 50px 30px 三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角</div>
    <div class="radius-3">border-radius: 15px 50px 两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角</div>
    <div class="radius">border-radius:25px 一个值： 四个圆角值相同</div>
    <div class="radius-4">椭圆边框 - border-radius: 50px/15px:</div>
    <div class="radius-5">椭圆边框 - border-radius: 15px/50px:</div>
    <div class="radius-6">椭圆边框 - border-radius: 50%:</div>
    <div class="shadow">CSS3 中的 box-shadow 属性被用来添加阴影</div>
    <div class="background">不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张</div>
    <div class="background-1">不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张,,可以给不同的图片设置多个不同的属性</div>
    <div class="background-2">background-origin 属性指定了背景图像的位置区域。content-box, padding-box,和 border-box区域内可以放置背景图像。</div>
    <div class="background-3">background-clip背景剪裁属性是从指定位置开始绘制。content-box, padding-box,和 border-box区域内可以放置背景图像。</div>
    <div class="linear-gradient">线性渐变 - 从上到下（默认情况下） --起点是红色，慢慢过渡到蓝色</div>
    <div class="linear-gradient-1">线性渐变 - 从左到右的线性渐变</div>
    <div class="linear-gradient-2">线性渐变 - 从左上角开始（到右下角）的线性渐变。起点是红色，慢慢过渡到黄色</div>
    <div class="linear-gradient-3">线性渐变 - 如果你想要在渐变的方向上做更多的控制，你可以定义一个角度，而不用预定义方向
      （to bottom、to top、to right、to left、to bottom right，等等）。角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，
      0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变
    </div>
    <div class="linear-gradient-4">线性渐变 - 带有多个颜色节点的从上到下的线性渐变</div>
    <div class="linear-gradient-5">线性渐变 - 演示如何创建一个带有彩虹颜色和文本的线性渐变</div>
    <div class="transparent">透明度（transparent），可用于创建减弱变淡的效果.使用 rgba() 函数来定义颜色节点。
      rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。
    </div>
    <div class="repeating-linear-gradient">repeating-linear-gradient() 函数用于重复线性渐变：</div>
    <div class="radial-gradient">径向渐变由它的中心定义-为了创建一个径向渐变，你也必须至少定义两种颜色节点。颜色节点即你想要呈现平稳过渡的颜色。
      同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。 默认情况下，渐变的中心是 center（表示在中心点），
      渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。
    </div>
    <div class="radial-gradient-1">
      shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。
    </div>
    <div class="radial-gradient-size">不同尺寸大小关键字的使用
      size 参数定义了渐变的大小。它可以是以下四个值：closest-side farthest-side closest-corner farthest-corner
    </div>
    <div class="repeating-radial-gradient">
      repeating-radial-gradient() 函数用于重复径向渐变：
    </div>
    <div style="display: flex;flex-direction: column;align-items: center;">
      <div
        style="background: rgba(0,0,0,0.7);padding: 10px 5px;color: #fff;font-size: 12px;width: 120px;display: flex;justify-content: center;align-items: center;"
      >
        asdf
      </div>
      <div style="width: 0;height: 0;border: 10px solid transparent;border-top-color: rgba(0,0,0,0.9);" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rotate'
}
</script>

<style scoped>

</style>
<style>
.div1 {
  width: 100px;
  height: 75px;
  background-color: red;
  border: 1px solid black;
}

.rotate2 {
  width: 100px;
  height: 75px;
  background-color: #d71b1b;
  border: 1px solid black;
  margin-left: 15px;

  transform: rotate(30deg);
  -ms-transform: rotate(30deg); /* IE 9 */
  -webkit-transform: rotate(30deg); /* Safari and Chrome */
}

.radius {
  margin-left: 15px; /* 左边距 */
  border: 5px solid #a1a1a1; /* 边框 */
  padding: 5px 20px; /* 内边距 */
  background: #1a44c3; /* 背景颜色 */
  width: 150px;
  border-radius: 25px; /* 圆角 */
}

.radius-1 {
  margin-left: 15px;
  border-radius: 15px 50px 30px 5px;
  background: #8AC007;
  padding: 20px;
  width: 200px;
  height: 150px;
}

.radius-2 {
  margin-left: 15px;
  border-radius: 15px 50px 30px;
  background: #8AC007;
  padding: 20px;
  width: 200px;
  height: 150px;
}

.radius-3 {
  margin-left: 15px;
  border-radius: 15px 50px;
  background: #8AC007;
  padding: 20px;
  width: 200px;
  height: 150px;
}

.radius-4 {
  margin: 15px;
  border-radius: 80px/15px;
  background: #8AC007;
  padding: 20px;
  width: 200px;
  height: 150px;
}

.radius-5 {
  margin: 15px;
  border-radius: 15px/50px;
  background: #8AC007;
  padding: 20px;
  width: 200px;
  height: 150px;
}

.radius-6 {
  margin: 15px;
  border-radius: 50%;
  background: #8AC007;
  padding: 30px;
  width: 200px;
  height: 150px;
}

.shadow {
  margin: 15px;
  width: 150px;
  height: 100px;
  background-color: #ffff00;
  box-shadow: 10px 10px 10px #888888;
}

.background {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-image: url('../../assets/img_flwr.gif'), url('../../assets/paper.gif');
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
}

.background-1 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background: url('../../assets/img_flwr.gif') right bottom no-repeat, url('../../assets/paper.gif') left top repeat;
}

.background-2 {
  margin: 15px;
  width: 300px;
  height: 260px;
  border: 1px solid black;
  padding: 35px;
  background: url('../../assets/smiey.gif') no-repeat left top, url("../../assets/background_orign.gif") no-repeat right bottom;
  background-origin: border-box;
  /*background-origin:padding-box;*/
  /*background-origin:content-box;*/
}

.background-3 {
  margin: 15px;
  width: 300px;
  height: 260px;
  border: 5px dotted black;
  padding: 35px;
  background: #8AC007;
  /*background-clip:border-box;*/
  background-clip: padding-box;
  /*background-clip: content-box;*/
}

.linear-gradient {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(#e66465, #9198e5);
}

.linear-gradient-1 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(to right, red, yellow);
}

.linear-gradient-2 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(to right bottom, red, yellow);
}

.linear-gradient-3 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持时显示 */
  /*background-image: linear-gradient(-90deg, red, yellow);*/
  /*background-image: linear-gradient(0deg, red, yellow);*/
  /*background-image: linear-gradient(45deg, red, yellow);*/
  /*background-image: linear-gradient(-45deg, red, yellow);*/
  background-image: linear-gradient(80deg, red, yellow);
}

.linear-gradient-4 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持时显示 */
  /*background-image: linear-gradient(0deg, red, yellow, green);*/
  /*background-image: linear-gradient(red 10%, green 85%, blue 90%); !* 标准的语法（必须放在最后） *!*/
  background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet); /* 标准的语法（必须放在最后） */
}

.linear-gradient-5 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}

.transparent {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}

.repeating-linear-gradient {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持的时候显示 */
  /*background-image: repeating-linear-gradient(red, yellow 10%, green 20%);*/
  /*background-image: repeating-linear-gradient(45deg,red,yellow 7%,green 10%);*/
  /*background-image: repeating-linear-gradient(190deg,red,yellow 7%,green 10%);*/
  background-image: repeating-linear-gradient(90deg, red, yellow 7%, green 10%);
}

.radial-gradient {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background-image: radial-gradient(red, green, blue); /* 标准的语法（必须放在最后） */
}

.radial-gradient-1 {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background-image: radial-gradient(circle, red, yellow, green); /* 标准的语法（必须放在最后） */
}

.radial-gradient-size {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持的时候显示 */
  /*background-image: radial-gradient(closest-side at 30% 30%, red, yellow, blue);*/
  /*background-image: radial-gradient(closest-corner at 30% 30%, red, yellow, blue);*/
  /*background-image: radial-gradient(farthest-corner at 30% 30%, red, yellow, blue);*/
  background-image: radial-gradient(farthest-side at 30% 30%, red, yellow, blue);
}

.repeating-radial-gradient {
  margin: 15px;
  width: 300px;
  height: 260px;
  background-color: red; /* 浏览器不支持的时候显示 */
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}

</style>
