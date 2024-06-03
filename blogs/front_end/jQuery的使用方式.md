---
title: jQuery的使用方式
top: false
cover: false
toc: true
mathjax: true
date: 2021-06-14 18:51:27
password:
summary: jQuery 是一个 JavaScript 库
tags: 前端基础
categories: 前端
---
> 摘要：jQuery 是一个 JavaScript 库

<!--more-->

### 1.初识jQuery

> ## 为什么要学jquery 更少的代码 更多的功能
>
> 使用javascript开发过程中，有许多的缺点：
>
> \1.   查找元素的方法单一，麻烦。document
>
> \2.   遍历数组很麻烦，通常要嵌套一大堆的for循环。
>
> \3.   有兼容性问题。
>
> \4.   想要实现简单的动画效果，也很麻烦
>
> \5.   代码冗余。写得多
>
> 
>
> ## jquery到底是什么
>
> jQuery的官网 http://jquery.com/
> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。
>
> 
>
> 
>
> js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。
>
> 我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，
>
> **其实我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法**
>
> 
>
> **jQuery****的特点** 
>
> 　　1）jQuery是一种框架，对于浏览器的兼容问题，95％不用再去考虑了。
>
> 2）jQuery利用选择器（借鉴了CSS选择器的语法）查找要操作的节点（DOM对象），然后将这些节点封装成一个jQuery对象（封装的目的有两个：①是为了兼容不同的浏览器。②也为了简化代码）。
>
> 通过调用jQuery对象的方法或者属性来实现对底层的DOM对象的操作。
>
> 3）jQuery特点简单概括就是：选择器 + 调方法。
>
> 
>
> ## jquery的版本问题
>
> 官网下载地址：http://jquery.com/download/
> jQuery版本有很多，分为1.x 2.x 3.x
> 1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。
>
> 
>
> 关于压缩版和未压缩版：
>
> jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有可阅读性。
>
> jquery-.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。

### 2.jQuery的使用

#### 1.jquery的入口函数

> ## jquery的入口函数
>
> 使用jQuery的三个步骤：
>
> **1.引入jQuery文件**
>
> ~~~html
> <head>
> 
>  <script src="jquery-1.10.2.min.js"></script> 
> 
> </head>
> ~~~
>
> 
>
> **2.入口函数**
>
> ~~~javascript
> //第一种写法
> $(document).ready(function() {
> 
> });
> ~~~
>
> ~~~javascript
> //第二种写法
> $(function() {	
> 
> });
> 
> ~~~
>
> **jQuery入口函数与js入口函数的对比：**
>
> \1.   JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
>
> \2.   jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。

#### 2.jquery选择器

> ##### 1.什么是选择器
>
> *  jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。
>
> 注意：jQuery选择器返回的是jQuery对象。
>
> * jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多扩展性的选择器。
> * jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。
> * 所以我们平时真正能用到的只是少数的最常用的选择器。
>
> ##### 基本选择器
>
> | 名称       | 用法              | 描述                               |
> | ---------- | ----------------- | ---------------------------------- |
> | ID选择器   | $("#id")          | 获取指定的ID元素                   |
> | 类选择器   | $(".class")       | 获取同一类的class元素              |
> | 表签选择器 | $("div")          | 获取同一类标签的所有元素           |
> | 并集选择器 | $("div,p,li")     | 使用逗号分隔，只要符合条件之一即可 |
> | 交集选择器 | $("div.redClass") | 获取clss为redClass的div元素        |
>
> ##### 层级选择器
>
> | 名称       | 用法       | 描述                                                |
> | ---------- | ---------- | --------------------------------------------------- |
> | 子代选择器 | $("ul>li") | 使用>号，获得儿子层级的元素，不会获取孙子层级的元素 |
> | 后代选择器 | $("ul li") | 使用空格，代表后代选择器，包括孙子                  |
>
> ##### 过滤选择器
>
> | 名称       | 用法                             | 描述                                     |
> | ---------- | -------------------------------- | ---------------------------------------- |
> | :eq(index) | $("li:eq(2)").css("color","red") | 获取下标为2的li元素，字体颜色改为红色    |
> | ：odd      | $("li:odd").css("color","red"    | 获取下标为奇数的li元素，字体颜色改为红色 |
> | :evev      | $("li:even").css("color","red"   | 获取下标为偶数的li元素，字体颜色改为红色 |
> | ：first    | $("li:first")                    | 获取第一个li元素                         |
> | :last      | $("li:last")                     | 获取最后一个li元素                       |
>
> ##### 筛选选择器（方法）
>
> | 名称               | 用法                           | 描述                                               |
> | ------------------ | ------------------------------ | -------------------------------------------------- |
> | children(selector) | $("ul").children("li")         | 相当于$("ul>li"),子类选择器，最近一级              |
> | find("selector")   | $("ul").find("li")             | 相当于$("ul li"),后代选择器                        |
> | siblings(selector) | $("ul").siblings("li")         | 查找兄弟节点，不包括自己本身                       |
> | parent()           | $("#id")                       | 查找父亲                                           |
> | eq(index)          | $("li").eq(2)                  | 相当于$("li:eq(2)")                                |
> | next()             | $("li").next()                 | 找下一个兄弟                                       |
> | prev()             | $("li").prev()                 | 找上一个兄弟                                       |
> | nextAll([expr])    | $(".class").nextAll()          | 查找当前元素之后的同辈元素                         |
> | prevtAll           | $(".class").prevtAll           | 查找当前元素之前的同辈元素                         |
> | hasClass(class)    | $("div").hasClass("protected") | 查找当前元素是否含有某个特定的类，如有，则返回true |
>
> 

### 3.事件

> ##### 鼠标事件
>
> * click   点击
> * dbliclick    双击
> * mouseenter     移入
> * mouseleave     移出
> * hover    悬停
>
> ##### 键盘事件
>
> * keypress   键按下的过程
> * keydown   键被按下
> * keyup    键被松开
>
> ##### 表单事件
>
> * submit
> * change
> * focus
> * blur
>
> ##### 文档窗口事件
>
> * load
> * resize
> * scroll
> * unload



### 4.jQuery 效果

#### 1.显示隐藏

> ###### 显示语法规范
>
> ~~~javascript
> show([speed,[easing],[fn]])
> ~~~
>
> ###### 隐藏语法规范
>
> ~~~javascript
> hide([speed,[easing],[fn]])
> ~~~
>
> ###### 显示隐藏切换
>
> ~~~javascript
> toggle([speed],[easing],[fn])
> ~~~
>
> ######  显示隐藏参数
>
> （1）参数都可以省略， 无动画直接显示。
>
> （2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
>
> （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
>
> （4）fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 2.滑动

> ###### 上滑效果语法规范
>
> ~~~javascript
> slideDown([speed,[easing],[fn]])
> ~~~
>
> ###### 下滑效果语法规范
>
> ~~~javascript
> slideUp([speed,[easing],[fn]])
> ~~~
>
> ###### 滑动效果切换
>
> ~~~javascript
> slideToggle([speed],[easing],[fn])
> ~~~
>
> ######  显示隐藏参数
>
> （1）参数都可以省略， 无动画直接显示。
>
> （2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
>
> （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
>
> （4）fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 3.淡入淡出

> ###### 淡入语法规范
>
> ~~~javascript
> fadeIn([speed,[easing],[fn]])
> ~~~
>
> ###### 淡出语法规范
>
> ~~~javascript
> fadeOut([speed,[easing],[fn]])
> ~~~
>
> ###### 淡入淡出切换
>
> ~~~javascript
> fadeToggle([speed],[easing],[fn])
> ~~~
>
> ######  指定不透明度语法规范
>
> ~~~javascript
> fadeTo([speed,[opacity],[easing],[fn]])
> ~~~
>
> * ==opacity透明度 必须写，取值0~1之间==
> * ==speed 必须写==
>
> ###### 淡入淡出参数
>
> （1）参数都可以省略， 无动画直接显示。
>
> （2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
>
> （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
>
> （4）fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 4.添加样式

> ~~~javascript
> //添加class
> $("div").addClass("current");
> //移除class
> $("div").addClass("current");
> //切换class
> $("div").addClass("current");
> ~~~

#### 5.自定义动画

> ~~~javascript
> 语法：animate{params,[speed],[easing],[fn]}
> ~~~
>
> ###### 淡入淡出参数
>
> （1）==params:想要更改的样式属性，以对象形式传递，必须写，属性名可以不用带引号，如果是副歌属性则需要采用==
>
> ==驼峰命名法 如：borderLefl.==其余参数都可以省略
>
> （2）speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
>
> （3）easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
>
> （4）fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

### 5.jQuery 内容文本值

> ##### 普通元素内容thml()
>
> * html()    //获取元素的内容
> * html("内容")    //设置元素的内容
>
> ##### 普通元素内容text()
>
> * text()   //获取元素的文本内容
> * text("内容")    //设置元素的文本内容
>
> ##### 表单的值val()
>
> * val()    //获取表单的值
> * val("内容")    //设置表单的值

### 7.jQuery 元素操作

> ##### 1.创建元素
>
> * 动态创建一个<li>
>
> ~~~javascript
> 语法:$("<li></li>")
> ~~~
>
> ##### 2.添加元素
>
> ~~~javascript
> //1.内部添加
> //把内容放入匹配元素内部最 后面
> element.append("内容")
> //把内容放入匹配元素内部最 前面
> element.prepend("内容")
> ~~~
>
> ~~~javascript
> //2.外部添加
> //把内容放入目标元素最 后面
> element.after("内容")
> //把内容放入目标元素最 前面
> element.before("内容")
> ~~~
>
> * ==内部添加元素,生成之后,他们是父子关系==
> * ==外部添加元素,生成之后,他们是兄弟关系==
>
> ##### 3.删除元素
>
> ~~~javascript
> //1.删除匹配的元素(本身)
> element.remove()
> //2.删除匹配的元素集合中所有的子节点
> element.empty()
> //3.清空匹配的元素内容
> element.html("")
> ~~~

### 8.事件委托

> ~~~javascript
> //on()给创建的li绑定事件/事件委托 通过触发a才执行函数
> 
> $('ul').on('click','a',function(){
>              $(this).parent().animate({
>                  "margin-left":'50px'
>              },300).animate({
>                  "margin-left":"-100px",
>                  "opacity":0
>              },300,function(){
>                  $(this).remove()
>              })
>          })
> ~~~

### 9.jQuery位置

> ![](E:\notes\image\QQ图片20210415124603.png)
>
> 案例：带有动画的返回顶部
>
> 核心原理： 使用animate动画返回顶部。
>
> animate动画函数里面有个scrollTop 属性，可以设置位置
>
> 但是是元素做动画，因此 $(“body,html”).animate({scrollTop: 0})
>
> 
>
> jQuery 插件
>
> jQuery 功能比较有限，想要更复杂的特效效果，可以借助于 jQuery 插件完成。 
>
> 注意: 这些插件也是依赖于jQuery来完成的，所以必须要先引入jQuery文件，因此也称为 jQuery 插件。
>
> jQuery 插件常用的网站：
>
> \1. jQuery 插件库 http://www.jq22.com/   
>
> \2. jQuery 之家  http://www.htmleaf.com/ 
>
> jQuery 插件使用步骤：
>
> \1. 引入相关文件。（jQuery 文件 和 插件文件）  
>
> \2. 复制相关html、css、js (调用插件)。