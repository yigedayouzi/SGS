<template>
  <div class="container">
   
      <a href="#KaiFa" style="--x: 0"><span>开发者</span></a>
    
      <a href="#XuSheng" style="--x: 1"><span>徐盛</span></a>
  
      <a href="#GuanYu" style="--x: 2"><span>关羽</span></a>
  
      <a href="#WangJi" style="--x: 3"><span>王基</span></a>
 
      <a href="#WangYi" style="--x: 4"><span>王异</span></a>
   
      <a href="#ShenGuoJia" style="--x: 5"><span>神郭嘉</span></a>
    
  </div>
</template>

<script>

</script>

<style scoped>
* {

  margin: 0;
  padding: 0;
 box-sizing: border-box;
}
/* flex布局，让内容垂直和水平居中 */

/* flex布局，让内容垂直和水平居中，超过的部分换行显示 */
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-wrap: wrap;
  justify-content: center;
  display: flex; 
}
/* 按钮的基本样式 */
.container a {
padding: 120px;
text-align: center;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
  border: 8px solid #0f0;
  font-size: 250px;
  font-weight: 600;
  line-height: 100%;
   font-family:"宋体";
  text-decoration: none;/* */
  letter-spacing: 5px;/* 字符间距 */
  color: #fff;
  filter: hue-rotate(calc(var(--x) * 60deg)); 
   /* 使用filter(滤镜) 属性，改变颜色。
     hue-rotate(deg)  给图像应用色相旋转
     calc() 函数用于动态计算长度值
     var() 函数调用自定义的CSS属性值x*/
  transition: 0.5s;
}
/* 鼠标经过时改变按钮样式 */
.container a:hover {
  transition-delay: 1.5s;
  color: #127fc8;
  box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0, 0 0 80px #0f0,
    0 0 160px #0f0, 0 0 320px #0f0;
}
a span {
  position: relative;
  z-index: 10;
}
/* 通过伪元素::before实现按钮左边的线 */
.container a::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  background: #0f0;
  width: 60px;
  height: 10px;
  box-shadow: 12px -18px 0 #0f0, 12px 18px 0 #0f0;
  transition: width 0.5s, height 0.5s, left 0.5s, box-shadow 0.5s;
  transition-delay: 0s, 1s, 0s, 0.5s;
}
/* 鼠标经过时改变线条的样式 */
.container a:hover::before {
  width: 60%;
  height: 100%;
  left: -2px;
  box-shadow: 0 0 0 #0f0, 0 0 0 #0f0;
}
/* 通过伪元素::after实现按钮右边的线 */
.container a::after {
  content: "";
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  background: #0f0;
  width: 60px;
  height: 10px;
  box-shadow: -12px -18px 0 #0f0, -12px 18px 0 #0f0;
  transition: width 0.5s, height 0.5s, right 0.5s, box-shadow 0.5s;
  transition-delay: 0s, 1s, 0s, 0.5s;
}
/* 鼠标经过时改变线条的样式 */
.container a:hover::after {
  width: 60%;
  height: 100%;
  box-shadow: 0 0 0 #0f0, 0 0 0 #0f0;
}



</style>
