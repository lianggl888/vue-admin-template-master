<template>
  <div class="app-container" style="display: flex;justify-content: flex-start;flex-wrap: wrap;">
    <div class="div1">文本效果，文本溢出属性</div>
    <div class="text-shadow">文本阴影text-shadow,水平阴影，垂直阴影，模糊的距离，以及阴影的颜色</div>
    <div class="box-shadow">盒子阴影box-shadow</div>
    <div class="box-shadow-1">
      <img src="../../assets/img_t.gif" alt="pic">
    </div>
    <div>
      box-shadow 属性用来可以创建纸质样式卡片:
      <div class="card">
        <div class="header">1</div>
        <!--        <div class="header"><img src="../../assets/img_t.gif"></div>-->
        <div class="container">2021年1月1日</div>
      </div>
    </div>
    <div class="text-overflow">
      文本溢出属性text-overflow指定应向用户如何显示溢出内容
    </div>
    <div class="word-wrap">
      word-wrap属性如果某个单词太长，不适合在一个区域内，它扩展到外面：
      CSS3中，自动换行属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字：
      This paragraph contains a very long word: thisisaveryveryveryvery
    </div>
    <div class="word-break">
      单词拆分换行word-break: keep-all; This paragraph contains some text. This line will-break-at-hyphenates.
    </div>
    <div class="word-break-1">
      单词拆分换行word-break: break-all; This paragraph contains some text. This line will-break-at-hyphenates.
    </div>
    <div class="text-align-last">
      最后一行对齐方式
      You can use the text-align-last property to align the last line of a text, if the text has the text-align property
      set to justify. This text is where you will see the result of the text-align-last property. You can use the
      text-align-last property to align the last line of a text, if the text has the text-align property set to justify.
      This text is where you will see the result of the text-align-last property.
      You can use the text-align-last property to align the last line of a text, if the text has the text-align property
      set to justify. This text is where you will see the result of the text-align-last property.
      You can use the text-align-last property to align the last line of a text, if the text has the text-align property
      set to justify. This text is where you will see the result of the text-align-last property.
      You can use the text-align-last property to align the last line of a text, if the text has the text-align property
      set to justify. This text is where you will see the result of the text-align-last property.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index2'
}
</script>

<style scoped>

</style>
<style>
.div1 {
  width: 300px;
  height: 75px;
  background-color: red;
  border: 1px solid black;
}

.text-shadow {
  width: 200px;
  height: 75px;
  border: 2px solid black;
  margin: 5px;
  padding: 2px;
  font-size: 15px;
  text-shadow: 5px 5px 4px #FF0000;
}

.box-shadow {
  width: 200px;
  height: 75px;
  margin: 5px;
  padding: 2px;
  font-size: 15px;
  background-color: yellow;
  box-shadow: 5px 5px 10px #888888;
  /*box-shadow: 1px 2px 20px #888888;*/
}

.box-shadow-1 {
  width: 200px;
  height: 175px;
  margin: 10px;
  -moz-box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 2px 20px rgba(0, 0, 0, .8);
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .5);
  /*box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);*/
  padding: 10px;
  /*background: white;*/
}

.box-shadow-1 img {
  width: 180px;
  height: 155px;
  border: 3px inset #8a4419;
}

.card {
  margin: 5px;
  width: 200px;
  height: 170px;
  /*border: 2px solid #0f100e;*/
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.7);
  text-align: center;
}

.header {
  background-color: #4CAF50;
  color: white;
  padding: 30px;
  font-size: 40px;
}

.header img {
  width: 180px;
  height: 105px;
}

.container {
  padding: 20px;
  font-size: 20px;
}

.text-overflow {
  white-space: nowrap;
  width: 12em;
  overflow: hidden;
  /*text-overflow: clip;*/
  text-overflow: ellipsis;
  border: 1px solid #000000;
}

.word-wrap {
  width: 180px;
  height: 165px;
  margin: 5px;
  border: 2px solid #000000;
  word-wrap: break-word;
}

.word-break {
  width: 180px;
  height: 165px;
  margin: 5px;
  border: 2px solid #000000;
  word-break: keep-all;
}

.word-break-1 {
  width: 180px;
  height: 165px;
  margin: 5px;
  border: 2px solid #000000;
  word-break: break-all;
}

.text-align-last {
  width: 470px;
  height: 365px;
  margin: 5px;
  border: 2px solid #000000;
  text-align: justify;
  /*text-align-last: justify;*/
  /*text-align-last: left;*/
  text-align-last: right;
  -moz-text-align-last: right; /* 针对 Firefox 的代码 */
}

</style>
