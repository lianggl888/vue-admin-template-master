<template>
  <div class="app-container" style="display: flex;justify-content: flex-start;flex-wrap: wrap;">
    <div style="width: 500px;margin: 10px;border: 2px solid;">
      要创建 CSS3 动画，你需要了解 @keyframes 规则。
      @keyframes 规则是创建动画。
      @keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。<br>
      当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。
      指定至少这两个CSS3的动画属性绑定向一个选择器：
      规定动画的名称
      规定动画的时长.<br>
      CSS3动画是什么？
      动画是使元素从一种样式逐渐变化为另一种样式的效果。
      您可以改变任意多的样式任意多的次数。
      请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
      0% 是动画的开始，100% 是动画的完成。
      为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。
    </div>
    <div class="div-1">
      当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变.animation-iteration-count属性定义动画应该播放多少次。 infinite 指定动画应该播放无限次（永远）
    </div>
    <div class="div-2">
      为了更好地理解不同的定时函数值，这里提供了设置五个不同值的五个不同的 div 元素
      <div class="div1">animation-timing-function:linear</div>
      <div class="div2">animation-timing-function:ease</div>
      <div class="div3">animation-timing-function:ease-in</div>
      <div class="div4">animation-timing-function:ease-out</div>
      <div class="div5">animation-timing-function:ease-in-out</div>

    </div>
    <div class="wave" />
  </div>
</template>

<script>
export default {
  name: 'Index6'
}
</script>

<style scoped>

</style>
<style>
.div-1 {
  width: 100px;
  height: 100px;
  background: red;
  animation: myfirst 5s;
  -moz-animation: myfirst 5s; /* Firefox */
  -webkit-animation: myfirst 5s; /* Safari and Chrome */
  -o-animation: myfirst 5s; /* Opera */
  animation-iteration-count: infinite; /* animation-iteration-count属性定义动画应该播放多少次。 infinite	指定动画应该播放无限次（永远）*/
}

@keyframes myfirst {
  0% {
    background: red
  }
  25% {
    background: yellow
  }
  50% {
    background: blue
  }
  100% {
    background: green
  }
}

@-moz-keyframes myfirst /* Firefox */
{
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}

@-o-keyframes myfirst /* Opera */
{
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}

.div1 {
  margin: 10px;
  width: 300px;
  height: 50px;
  background: red;
  color: white;
  font-weight: bold;
  position: relative;
  animation: mymove 5s infinite;
  -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
  animation-timing-function: linear;
}

.div2 {
  margin: 10px;
  width: 300px;
  height: 50px;
  background: red;
  color: white;
  font-weight: bold;
  position: relative;
  animation: mymove 5s infinite;
  -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
  animation-timing-function: ease;
}

.div3 {
  margin: 10px;
  width: 300px;
  height: 50px;
  background: red;
  color: white;
  font-weight: bold;
  position: relative;
  animation: mymove 5s infinite;
  -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
  animation-timing-function: ease-in;
}

.div4 {
  margin: 10px;
  width: 300px;
  height: 50px;
  background: red;
  color: white;
  font-weight: bold;
  position: relative;
  animation: mymove 5s infinite;
  -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
  animation-timing-function: ease-out;
}

.div5 {
  margin: 10px;
  width: 300px;
  height: 50px;
  background: red;
  color: white;
  font-weight: bold;
  position: relative;
  animation: mymove 5s infinite;
  -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
  animation-timing-function: ease-in-out;
}

@keyframes mymove {
  from {
    left: 0px;
  }
  to {
    left: 300px;
  }
}

@-webkit-keyframes mymove /* Safari and Chrome */
{
  from {
    left: 0px;
  }
  to {
    left: 300px;
  }
}

.wave {
  margin: 130px;
  width: 20px;
  height: 20px;
  background: #4CAF50;
  border-radius: 50%;
  animation: wave_info 5s linear;
  animation-iteration-count: infinite;
}

@keyframes wave_info {
  0% {
    transform: scale(1, 1);
    background: rgba(6, 198, 255, 0);
  }
  50% {
    transform: scale(3.5, 3.5);
    background: rgba(6, 198, 255, 0.5);
  }
  100% {
    transform: scale(7, 7);
    background: rgba(6, 198, 255, 0);
  }
}
</style>
