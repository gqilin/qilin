---
title: html属性及标签
top: false
cover: false
toc: true
mathjax: true
date: 2021-03-03 19:39:28
password:
summary: 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言
tags: 前端基础
categories: 前端
---
> 摘要：超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言

<!--more-->

### 一、标签

> ~~~html
> <html>…</html>      定义 HTML 文档
> 
> <head>…</head>   文档的信息
> 
> <meta>                    HTML 文档的元信息
> 
> 
> <title>…</title>        文档的标题
> 
> <link>                      文档与外部资源的关系
> 
> <style>…</style>    文档的样式信息
> 
> <body>…</body>   可见的页面内容
> 
> <!--…-->                 注释
> ~~~
>
> 

### 二、文本

> ~~~html
> <h1>...</h1>               标题字大小（h1~h6）
> 
> <b>...</b>                   粗体字
> 
> <strong>...</strong>   粗体字(强调) 
> 
> <i>...</i>                      斜体字 
> 
> <em>...</em>              斜体字(强调)
> 
> <center>…</center>   居中文本
> 
> <ul>…</ul>                 无序列表 
> 
> <ol>…</ol>                 有序列表
> 
> <li>…</li>                    列表项目
> 
> <a href=”…”>…</a>    超链接
> 
> <font>                         定义文本字体尺寸、颜色、大小
> 
> <sub>                         下标
> 
> <sup>                         上标
> 
> <br>                           换行
> 
> <p>                            段落
> ~~~
>
> 

### 三、图形

> ~~~html
> <img src=’”…”>   定义图像
> 
> <hr>                   水平线
> 
> <del>                  加删除线
> ~~~
>
> 

### 四、表格

> ~~~html
> <table>…</table>   定义表格
> 
> <th>…</th>            定义表格中的表头单元格
> 
> <tr>…</tr>             定义表格中的行
> 
> <td>…</td>           定义表格中的单元
> ~~~
>
> 

### 五、Form表单

> ~~~html
> <form>…</form>    定义供用户输入的 HTML 表单
> <form action="跳转的路径">	<input/></form>
> 输入框<input type=""/>	
> ~~~
>
> * type属性值	
>
> ~~~html
> text       文本类型 	<input type="text" placeholder="请输入旅游景点或城市"/>初始文字
> 						css样式：outline: none; /清楚鼠标在文本框时的边框/
> 
> <form action="www.123" method="GET">
>     用户名： <input type="text" placeholder="请输入" name="username"><br>
>     密码： <input type="password" name="password"><br>
>     性别： <input type="radio" name="sex" value="男" checked>男
>     <input type="radio" name="sex" value="女">女<br>
>     爱好： 美女<input type="checkbox" name="hobby" value="meinv">
>     赛车<input type="checkbox" name="hoby" value="saiche"><br>
>     国籍：<select name="country">
>         <option value="china">中国</option>
>         <option value="germany">德国</option>
>         <option value="japan">日本</option>
>     </select><br>
>     出生日期：
>     年：<input type="month" name="month">
>     周：<input type="week" name="week">
>     日：<input type="date" name="date"><br>
>     分秒：<input type="time" name="time">
>     网址：<input type="url" name="url"><br>
>     邮箱：<input type="email" name="email"><br>
>     数字类型：<input type="number" name="number"><br>
>     手机号：<input type="tel" name="tel"><br>
>     搜索框：<input type="search" name="search"><br>
>     颜色选择表单：<input type="color" name="color"><br>
>     文本框：<textarea name="textarea" cols="30" rows="10"></textarea><br>
>     按钮：<input type="button" name="button" value="确定">
>     <input type="reset" name="reset" value="重置">
>     <input type="submit" name="submit" value="登录">
> </form>
> ~~~
>
> * 下拉框
>
> ~~~html
> 	<select>	
>         <option>内容</option>	
>         <option>内容</option>	
>         ....	
> 	</select>
> 
> ~~~
>
> ![](E:\notes\image\QQ图片20210307114850.jpg)
>
> ![](E:\notes\image\QQ图片20210307115125.png)
>
> 

### 六、表格

> ~~~html
> <table width="" height="" border="表格边框的宽度"> ====》
> 表格标签	
> <tr>=====>行标签		
> <td>....</td>===>单元格标签（列标签）	</tr></table>	
> ~~~
>
> * align=“left/center\right”
>   * 在table标签中添加align属性，表格在页面中的位置发生改变，内容没有变化
>   * 在tr标签中添加align属性，整行的内容位置发生改变
>   * 在td标签中添加align属性，单元格里面内容位置发生改变合并单元格
>
> * 跨行合并
>
> 方向：上下合并		属性：rowspan=“N”  在最上面的单元格添加属性		删：删下边的单元格，删N-1
>
> * 跨列合并
>
> 方向：左右合并		属性：colspan="N"  在最 左边的单元格中添加属性		删：删右边的单元格，删N-1个

### 七、转义字符

> ~~~html
> < &lt; 
> > &gt; 
> 空格 &nbsp; 
> © &copy; 
> ® &reg; 
> ™ &trade;
> ~~~

### 八、canvas

> ##### 什么是 canvas?
>
> HTML5 <canvas> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.
>
> <canvas> 标签只是图形容器，您必须使用脚本来绘制图形。
>
>
> 你可以通过多种方法使用 canvas 绘制路径,盒、圆、字符以及添加图像。