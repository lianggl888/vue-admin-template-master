<template>
  <div class="app-container" style="display: flex;justify-content: flex-start;flex-wrap: wrap;">
    <div style="width: 200px;margin: 10px;border: 2px solid;">
      CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。
      要实现这一点，必须规定两项内容：
      指定要添加效果的CSS属性
      指定效果的持续时间。
    </div>
    <div class="transition">
      当鼠标光标移动到该元素时，它逐渐改变它原有样式,规定当鼠标指针悬浮(:hover)于 div 元素上时：
    </div>
    <div class="transition-1">
      添加了宽度，高度和转换效果
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index5'
}
</script>

<style scoped>

</style>
<style>
.transition {
  margin: 15px;
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  -webkit-transition: width 2s; /* Safari */
}

.transition:hover {
  width: 300px;
}

.transition-1 {
  margin: 15px;
  width: 100px;
  height: 100px;
  background: red;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* For Safari 3.1 to 6.0 */
  transition: width 2s, height 2s, transform 2s;
}

.transition-1:hover {
  width: 200px;
  height: 200px;
  -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
  transform: rotate(180deg);
}
</style>
