---
title: Css常用属性
top: false
cover: false
toc: true
mathjax: true
date: 2021-03-12 09:23:19
password:
summary: css是一种用来为结构化文档（如 HTML 文档或 XML 应用）添加样式（字体、间距和颜色等）的计算机语言
tags: 前端基础
categories: 前端
---
> 摘要：css是一种用来为结构化文档（如 HTML 文档或 XML 应用）添加样式（字体、间距和颜色等）的计算机语言

<!--more-->

### 新特性

>**伪元素选择器**
>
>伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构
>
>* a::before 在元素内部的前面插入内容
>* a:after在 元素内部的后面插入内容
>
>**==注意：==**
>
>* 语法 element::before()
>* 必须有content属性
>
>
>
>**vertical-align属性应用**
>
>CSS的==vertical-align==实行使用场景：经常用于图片和表单（行内块元素）和文字垂直对齐
>
>~~~
>语法：vertical-align:baseline;
>~~~
>
>* baseline 默认，元素放在父元素的基线上
>* top 把元素的顶端与行中最高元素的顶端对齐
>* middle 把此元素放在父元素的中部
>* bottom 把元素的顶端与行中最低的元素顶端对齐
>
>图片、表单都属于行内块元素，默认基线对齐
>
><img src="E:\notes\image\QQ图片20210328171837.png" style="zoom:67%;" />
>
>此时可以给图片、表单这些行内块元素的==vertical-align属性设置为middle==就可以让图片文字居中对齐了



### 一 CSS文字属性：

###### 1、字体

> color : #999999; /*文字颜色*/
>
> font-family : 宋体,sans-serif; /*文字字体*/
>
> font-size : 9pt; /*文字大小*/
>
> font-style:itelic; normal; /*文字斜体*/ /标准字体/
>
> font-variant:small-caps; /*小字体*/
>
> 简写方式：font:  font-style  font-weight  font-size/line-height  font-family;
>
> letter-spacing : 1pt; /*字间距离*/
>
> line-height : 200%; /*设置行高*/
>
> text-indent:数值|inherit;/段首空格/
>
> font-weight:bold; /*文字粗体*/
>
> vertical-align:sub; /*下标字*/
>
> vertical-align:super; /*上标字*/

###### 2、下划线

> text-decoration:line-through; /*加删除线*/
>
> text-decoration: overline; /*加顶线*/
>
> text-decoration:underline; /*加下划线*/
>
> text-decoration:none; /*删除链接下划线*/

###### 3、文本

> text-transform : capitalize; /*首字大写*/
>
> text-transform : uppercase; /*英文大写*/
>
> text-transform : lowercase; /*英文小写*/
>
> text-align:right; /*文字右对齐*/
>
> text-align:left; /*文字左对齐*/
>
> text-align:center; /*文字居中对齐*/
>
> text-align:justify; /*文字分散对齐*/
>
> text-indent:2em;/首行缩进
>
> vertical-align属性
>
> vertical-align:top; /*垂直向上对齐*/
>
> vertical-align:bottom; /*垂直向下对齐*/
>
> vertical-align:middle; /*垂直居中对齐*/
>
> vertical-align:text-top; /*文字垂直向上对齐*/
>
> vertical-align:text-bottom; /*文字垂直向下对齐*/

### 二、定位及显示隐藏

##### 1、定位

> 定位模式决定元素的定位方式。它通过CSS的==position==属性来设置
>
> **静态定位 static**
>
> 静态定位是元素的==默认定位方式，无定位的意思==
>
> ~~~css
> 语法：选择器{position:static;}
> ~~~
>
> * 静态定位按照标准流特性摆放位置，它没有边偏移
> * 静态定位在不居中很少用到
>
> **相对定位 relative**
>
> 相对定位是元素在移动位置的时候，是相对于它==原来的位置==来说的
>
> ~~~css
> 语法：选择器{position:relative;}
> ~~~
>
> * 移动位置的时候参照自己原来的位置
> * 原来在标准流的位置继续占有，后面的盒子依然以标准流的方式对待它（==不脱标，继续保留原来的位置==）
>
> **绝对定位 absoluute**
>
> 绝对定位是元素在移动位置的时候，是相对于祖先元素来说的
>
> ~~~css
> 语法：选择器{position:absolute;}
> ~~~
>
> * 如果没有祖先元素或祖先元素没有定位，则以浏览器为准定位
> * 如果祖先元素有定位，则以最近一级的有定位祖先元素为参考点移动位置
> * 绝对定位==不再占有原先的位置==（脱标）
>
> **==父相子绝：==**==子级绝对定位不占有位置，可以放到父盒子里任何地方，不会影响其他兄弟盒子==
>
> **固定定位 fixed**
>
> 固定定位是元素==固定于浏览器的可视区的位置==。主要使用场景：==在浏览器页面滚动时元素的位置不会改变==
>
> ~~~css
> 语法：选择器{position:fixed;}
> ~~~
>
> * 以浏览器的可视窗口为参考点来移动元素
>   * 跟父元素没有任何关系
>   * 不随滚动条滚动
> * 固定定位==不占有原先的位置==
>
> **定位叠放次序 z-index**
>
> 定位叠放次序可以控制盒子的前后次序（z轴）
>
> ~~~css
> 语法：选择器{z-index:1;}
> ~~~
>
> * 数值可以是整数负数0，默认是auto,数值越大盒子越靠上
> * 如果属性值相同，则按照书写循序，后来居上
> * 数字后面不能加单位
> * 只有定位的盒子才有z-index属性

##### 2、显示与隐藏

> **1、display属性**
>
> * display:none;  隐藏对象
> * display:block;  除了有转换为块级元素外，还有显示元素的意思
>
> ==**display隐藏元素后，不再占有原来的位置**==
>
> **2、visibility可见性**
>
> * visibilty:visible;  元素可见
> * visibility: hidden;  元素隐藏
>
> ==**visibility隐藏元素后，继续占有原来的位置**==
>
> **3、overflow溢出***
>
> overflow属性指定了如果内容溢出一个元素的框时会发生什么
>
> 属性值：
>
> * visible;  不剪切内容也不添加滚动条
> * hidden;  不显示超过对象尺寸的内容，超出的部分隐藏掉
> * scroll;  不管超出内容否，总是显示滚动条
> * auto;  超出自动显示滚动条，不超出不显示滚动条

### 三、CSS符号属性：

> 三、CSS符号属性：
>
> list-style-type:none; /*不编号*/
>
> list-style-type:decimal; /*阿拉伯数字*/
>
> list-style-type:lower-roman; /*小写罗马数字*/
>
> list-style-type:upper-roman; /*大写罗马数字*/
>
> list-style-type:lower-alpha; /*小写英文字母*/
>
> list-style-type:upper-alpha; /*大写英文字母*/
>
> list-style-type:disc; /*实心圆形符号*/
>
> list-style-type:circle; /*空心圆形符号*/
>
> list-style-type:square; /*实心方形符号*/
>
> list-style-image:url(/dot.gif); /*图片式符号*/
>
> list-style-position: outside; /*凸排*/
>
> list-style-position:inside; /*缩进*/

### 四、CSS背景样式：

> background-color:#F5E2EC; /*背景颜色*/
>
> background:transparent; /*透视背景*/
>
> background-color: rgba(0,0,0,0.4);     透明色
>
> background-image : url(/image/bg.gif); /*背景图片*/
>
> background-attachment : fixed; /*浮水印固定背景*/
>
> background-repeat : repeat; /*重复排列-网页默认*/
>
> background-repeat : no-repeat; /*不重复排列*/
>
> background-repeat : repeat-x; /*在x轴重复排列*/
>
> background-repeat : repeat-y; /*在y轴重复排列*/
>
> * 指定背景位置
>
> background-position : 90% 90%; /*背景图片x与y轴的位置*/
>
> background-position : top; /*向上对齐*/
>
> background-position : buttom; /*向下对齐*/
>
> background-position : left; /*向左对齐*/
>
> background-position : right; /*向右对齐*/
>
> background-position : center; /*居中对齐*/

### 五、CSS连接属性：

> a /*所有超链接*/
>
> a:link /*超链接文字格式*/
>
> a:visited /*浏览过的链接文字格式*/
>
> a:active /*按下链接的格式*/
>
> a:hover /*鼠标经过链接*/
>
> text-decoration:none; /*删除链接下划线*/

### 六、鼠标光标样式：

> 小手指 cursor: pointer;
>
> 十字体 cursor:crosshair
>
> 箭头朝下 cursor:s-resize
>
> 十字箭头 cursor:move
>
> 箭头朝右 cursor:move
>
> 加一问号 cursor:help
>
> 箭头朝左 cursor:w-resize
>
> 箭头朝上 cursor:n-resize
>
> 箭头朝右上 cursor:ne-resize
>
> 箭头朝左上 cursor:nw-resize
>
> 文字I型 cursor:text
>
> 箭头斜右下 cursor:se-resize
>
> 箭头斜左下 cursor:sw-resize
>
> 漏斗 cursor:wait
>
> 光标图案(IE6) p {cursor:url("光标文件名.cur"),text;}

### 七、CSS框线一览表：

> border-top : 1px solid #6699cc; /*上框线*/
>
> border-bottom : 1px solid #6699cc; /*下框线*/
>
> border-left : 1px solid #6699cc; /*左框线*/
>
> border-right : 1px solid #6699cc; /*右框线*/
>
> border-radius: 50%;  /画圆/
>
> border: none; /清除边框/
> outline: none; /清楚鼠标在文本框时的边框/
>
> 以上是建议书写方式,但也可以使用常规的方式 如下:
>
> border-top-color : #369 /*设置上框线top颜色*/
>
> border-top-width :1px /*设置上框线top宽度*/
>
> border-top-style : solid/*设置上框线top样式*/
>
> border-collapse: collapse;/合并相邻边框/
>
> * 框线样式
>
> solid /*实线框*/
>
> dotted /*虚线框*/
>
> double /*双线框*/
>
> groove /*立体内凸框*/
>
> ridge /*立体浮雕框*/
>
> inset /*凹框*/
>
> outset /*凸框*/

### 八、选择器

>###### 1、：focus伪类选择器
>
>![](E:\notes\image\imageS10307-11265381(1).png)
>
>###### 2、后代选择器
>
>![](E:\notes\image\imageS10307-11284060(1).png)
>
>###### 3、子元素选择器
>
>![](E:\notes\image\imageS10307-11285550(1).png)
>
>###### 4、并集选择器
>
>![](E:\notes\image\imageS10307-11302043(1).png)
>
>5.
>
>* div:nth-child(1)  选择第一个
>* div:nth-child(even)  选择所有偶数块
>* div:nth-child(odd)  选择所有奇数块

### 九、元素模式与阴影

> **1、元素模式**
>
> ==块级元素：==一行只能放一个，可以设置宽高，默认宽度为容器的100%，可以包含任何标签
>
> ==行内元素：==一行可以放多个，不可以直接设置宽高，默认宽度为它本身内容的宽度，容纳文本或行内元素
>
> ==行内块元素：==一行可以放多个，可以设置宽高，默认宽度为它本身内容的宽度
>
> ###### 2、元素显示模式转换
>
> * 转换为块元素：display:block;
> * 转换为行内元素：display:inline;
> * 转换为行内块元素：display:;inline-block
> * 删除元素块:display: none;
>
> **盒子阴影**
>
> 我们可以用box-shadow属性为盒子添加阴影
>
> ~~~css
> 语法：box-shadow:h-shadow v-shadow blur spread color inset;
> ~~~
>
> * h-shadow:必须，水平阴影的位置，允许负值
> * v-shadow：必须，垂直阴影的位置，允许负值
> * blur：  可选，模糊距离
> * spread： 可选，阴影的尺寸
> * color：可选，阴影的颜色
> * inset: 可选，将外部阴影（outset)改为内部阴影
>
> **文字阴影**
>
> 使用text-shadow 属性将阴影应用于文本
>
> ~~~css
> 语法：text-shadow:h-shadow v-shadow blur color;
> ~~~
>
> * h-shadow:必须，水平阴影的位置，允许负值
> * v-shadow：必须，垂直阴影的位置，允许负值
> * blur：  可选，模糊距离
> * color：可选，阴影的颜色
>
> 

### 十、2D转换与动画

###### 1、2D转换transform

> * translate(px) 移动
> * rotate(deg)旋转
> * scale(2) 大小
> * skew(deg) 倾斜
>
> **1、过渡 transition**
>
> ~~~css
> 语法：transition:要过度的属性 花费的时间 运动曲线 何时开始
> ~~~
>
> * **属性**：想要变化的CSS属性，宽度高度背景颜色 内外边距都可以，如果想要所有的属性都变化过渡，写一个all就可以
> * **花费时间**：单位是秒，如：0.5s
> * **运动曲线**：默认是ease(可以省略)
> * **何时开始**：单位是秒，设置的是延迟出发条件默认是  0s（可以省略）
>
> ==过度的使用口诀：谁过渡给谁加==
>
> **2、2D转换中心点 transform-origin**
>
> 我们可以设置元素转换的中心点
>
> ~~~css
> 语法：transform-origin: x y;
> ~~~
>
> * 注意后面的x y 用空格隔开
> * x y 默认转换的中心点是元素的中心点(50% 50%)
> * 还可以给x y 设置像素或者放位名词（ top \ bottmo \ left \ right \ center )
>
> **3、2D转换综合写法**
>
> 同时使用多个转换，七格式为：transform:translate()  rotate()  scale()...等
>
> * 其顺序会影响转换的效果。（先旋转会改变坐标轴方向）
> * ==当我们同时有位移和其他属性的时候，记得要将位移放到最前面==

###### 2、动画

> **动画常用属性**
>
> * @keyframes:规定动画
> * animation:所有动画属性的简写属性，除了animation-play-state属性
> * animation-name:规定@keyframes动画的名称
> * animation-duration:规定动画完成一个周期所花费的秒或毫秒，默认是0
> * animation-timing-function:规定动画的速度曲线，默认是"ease"
> * animation-iteration-count:规定动画别播放的次数，默认是1， "infinite"表示重复播放
> * animation-direction:规定动画是否在下一周期你想播放，默认是"normal"，"alternate"表示逆播放
> * animation-fill-mode:规定动画结束后状态，"forwards"表示停在结束位置
> * 暂停动画：animation-play-state:puased;  经常和鼠标经过等其他配合使用
>
> **速度曲线细节**
>
> * linear:匀速运动
> * ease：默认，以低速开始
> * ease-in：以低速开始
> * ease-out：以低速结束
> * ease-in-out：以低速开始和结束
> * steps()：指定了时间函数中的间隔数量（步长）
>
> 
>
> 
>
> **动画简写属性**
>
> animation:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态
>
> ~~~css
> 语法：animation:myname 5s linear 2s infinite alternate;
> 
> @keyframes name{
>     0%{
>         初始状态
>     }
>     50%{
>         中间状态
>     }
>     100%{
>         结束状态
>     }
> }
> 
> ~~~
>
> 

### 十一、响应式


```css
手机端优先：<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<style>
		/*当页面大于1200px时， 大屏幕，主要是pc端 */
		@media(min-width:1200px) {
		.box{background: lightcoral; width:90%;}
		}	
/* 在992和1190像素之间的屏幕里,中等屏幕,分辨率低的 pc */
	@media(min-width:991px) and (max-width:1199px){
		.box{background:rebeccapurple; width:100%;}
	}

	/*在 768和991像素之间的屏幕里，小屏幕主要是 pad */
	@media(min-width:768px) and (max-width:991px){
		.box{background:rgb(172, 18, 102); width:100%;}
	}

	/* 在480和767像素之间的屏幕里 超小屏幕只要是手机 */
	@media(min-width:480px) and (max-width:767px){
		.box{background:rgb(172, 18, 102); width:100%;}
	}

	/* 在小于480px像素的屏幕，微小屏幕，更低分辨率的手机 */
	 @media(max-width:480px) {
		.box{background:rgb(144, 102, 125); width:100%;}
	 }
		</style>
```



dis






### 规范

> ~~~~css
> /* 字体单位设置为rem */
> html{font-size: 62.5%;} 
> html,body,div,p,ul,ol,li,header,footer{
> 	/* 去除内外边距 */
> margin:0px;
> padding:0px;
> 	/* 去除小圆点 */
> list-style: none;
> }
> 
> /* div边框内嵌 */
> div{box-sizing: border-box;}
> /* 去除超链接下划线 */
> a{text-decoration: none;}
> 
> /* 所有图片块化 */
> img{display: block;}
> ~~~~
>
> ==css3新属性==
>
> * -ms-    IE浏览器
> * -moz-   火狐浏览器
> * -webkit-   谷歌/苹果浏览器
> * -O-    open浏览器

