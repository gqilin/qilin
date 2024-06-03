---
title: 初识JSON
top: false
cover: false
toc: true
mathjax: true
date: 2021-05-13 16:35:29
password:
summary: JSON 是存储和交换文本信息的语法，类似 XML
tags: 前端基础
categories: 前端
---
> 摘要：JSON 是存储和交换文本信息的语法，类似 XML

<!--more-->

### 1.JSON简介

> 1.1什么是JSON?
>
> JSON就是存储和交换文本信息的js的对象表示法（用JSON来表示对象）。
>
> 
>
> **1.2****作用： 用于储存和交换文本信息的语法=>进行数据的传输**    
>
> 
>
> **JSON详解：**
>
> 1.JSON（JavaScript Object Notation）是一种**轻量级的数据交换格式**，以文字为基础，且易于让人阅读，同时也方便了机器进行解析和生成。
>
> 
>
> 2.JSON采用完全独立于程序语言的文本格式，但是也使用了类C语言的习惯（包括C、C++、C#、Java、JavaScript、Perl、Python等）。这些特性使JSON成为理想的数据交换语言。
>
> 
>
> 3.JSON简单说**就是javascript中的对象和数组**，所以**这两种结构就是对象和数组两种结构**，通过这两种结构可以表示各种复杂的结构，其可以将JavaScript 对象中表示的一组数据转换为字符串，然后就可以在函数之间轻松地传递这个字符串，或者在异步应用程序中将字符串从Web客户机传递给服务器端程序。

 

### 2．构建JSON的两种结构---（对象，数组）

> **2.1.补充：三种常见的js创建对象的方式**
>
> 1.利用 new Object() 创建对象
>
> ~~~javascript
> var p = new Person()
>      p.userName = "张三"
>      p.userId = 1
>      p.password = "000"
> 
> ~~~
>
> 2.利用对象字面量创建对象
>
> ~~~javascript
> var person = {
>          name:'张三',
>          id:1,
>          pwd:"000"
>      }
> 
> ~~~
>
> 3.利用构造函数创建对象
>
> ~~~javascript
> function People(uname,age){
>      this.uname = uname;
>      this.age = age;
>  }
>  var user = new People('yuzhibo',18)
> 
> ~~~
>
> **2.2语法规则(JSON 语法是 JavaScript 对象表示法语法的子集)**
>
> 数据在名称/值对中: **JSON数据是由键值对构成的**
>
> 注意：1.键用引号（单双引都行）引起来，也可以不使用引号
>
> **2.值的取值类型:**
>
> * 数字（整数或浮点数）
> * 字符串（在双引号中）
> * 逻辑值（true 或 false）
> * 数组（在方括号中）{“persons”:[{},{}]}
> * 对象（在花括号中）{"address":{"province":"山东","municipality":"济南"...}}
> * 也就是说json可以嵌套null
>
> * 数据由逗号分隔: 多个键值对由逗号分隔
> * 花括号保存对象:使用{}(花括号)来定义json格式
> * 方括号保存数组
>
> 
>
> **2.3如何定义json对象**
>
> 1.定义基本格
>
> ~~~javascript
> //对象
> <div id="objectDiv"></div>
> <script>
> //1、定义JSON格式的user对象，并在id为objectDiv的div中输出
>         $(document).ready(function () {
>             //1.定义成json对象，用{}拓起来
>             var user = { "id": 1, "name": "zhangsan", "pwd": "000" }
>             $("#objectDiv").append("ID：" + user.id + "<br>")
>                 .append("用户名：" + user.name + "<br>")
>                 .append("密码：" + user.pwd + "<br>");
>         })
>     </script>
> 
> ~~~
>
> ~~~javascript
> //数组
> <div id="objectDiv"></div>
>     <script>
>         $(document).ready(function () {
>             //2.定义JSON格式的字符串数组，并在id为objectDiv的div中输出
>             var user = ["张三", "李四", "王五"];
>             for (var i = 0; i < user.length; i++) {
>                 $("#objectDiv").append(user[i] + "  ");
>             }
>         })
>     </script>
> 
> ~~~
>
> 
>
> 2.嵌套格式
>
> { }--[ ](对象嵌套数组)
>
> ~~~javascript
> <div id="objectDiv"></div>
>     <script>
>         $(document).ready(function () {
>             //3.定义JSON格式的user对象，并在id为objectDiv的div中使用<table>输出
>             var user = {
>                 "persons": [
>                     { "name": "张三", "age": 18, "pwd": "000" },
>                     { "name": "李四", "age": 20, "pwd": "111" },
>                     { "name": "王五", "age": 21, "pwd": "222" },
>                 ]
>             }
>             $("#objectDiv").append("<table>")
>                 .append("<tr>")
>                 .append("<td>年龄</td>")
>                 .append("<td>用户名</td>")
>                 .append("<td>密码</td>")
>                 .append("</tr>");
>             for (var i = 0; i < user.persons.length; i++) {
>                 $("#objectDiv").append("<tr>")
>                     .append("<td>" + user.persons[i].age + "&nbsp;</td>")
>                     .append("<td>" + user.persons[i].name + "&nbsp;</td>")
>                     .append("<td>" + user.persons[i].pwd + "</td>")
>                     .append("</tr>");
>             }
>             $("#objectArrayDiv").append("</table>");
>         })
>     </script>
> 
> ~~~
>
> [ ]--{ }(数组嵌套对象)
>
> ~~~javascript
>     <script>
>         $(document).ready(function () {
>             //4.定义JSON格式的user对象数组，并在id为objectDiv的div中使用<table>输出
>             var userArray = [
>                 { "id": 2, "name": "张三", "pwd": "123" },
>                 { "id": 3, "name": "李四", "pwd": "11111" },
>                 { "id": 4, "name": "王五", "pwd": "6666" }
>             ];
>             $("#objectDiv").append("<table>")
>                   .append("<tr>")
>                 .append("<td>ID</td>")
>                 .append("<td>用户名</td>")
>                 .append("<td>密码</td>")
>                 .append("</tr>");
>             for (var i = 0; i < userArray.length; i++) {
>                 $("#objectDiv").append("<tr>")
>                     .append("<td>" + userArray[i].id + "&nbsp;</td>")
>                     .append("<td>" + userArray[i].name + "&nbsp;</td>")
>                     .append("<td>" + userArray[i].pwd + "</td>")
>                     .append("</tr>");
>             }
>             $("#objectDiv").append("</table>");
>         })
>     </script>
> 
> ~~~

###  3．获取数据

> **1.json对象.键名**
>
> **2.json对象[“键名”]**
>
> **3.数组对象[索引]**
>
> ~~~javascript
> <div id="objectDiv"></div>
>  <script>
>      $(document).ready(function () {
>          var user = {"id":1,"name":"张三","pwd":"000" };
>          var ary = ["张三","李四","王五"];
>          //获取name的值
>          var name = user.name; 
>          var name = user["name"]; 
>          var name = ary[2]
>          //打印name值查看结果
>          // console.log(name);
>      })
>  </script>
> 
> ~~~

###  4．JSON字符串和JSON对象的相互转换

> **4.1为什么要转换**
>
> 在真实的项目中，服务器端大多数是以JSON对象作为响应数据的格式。当客户端拿到数据时，要将JSON数据和HTML字符串进行拼接，之后将结果渲染到页面中
>
> 
>
> 所以在http请求和响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最终都是以字符串的方式进行传输
>
> **4.2** **转换方式**
>
> 1.JSON.parse() //将JSON字符串转换为JSON对象
>
> 2.JSON.stringify(); //将JSON对象转换成JSON字符串 

### 5．JSON字符串和JS对象的相互转换

> **5.1为什么要转换**
>
> 前端开发中，数据传输格式中有一部分以JSON格式进行传递，比如Ajax，需要JSON和JS对象的相互转换。
>
> 
>
> **5.2** **如何转换**
>
> **1.JSON转JS对象**
>
> 两种方式：
>
> 1、JS自带的eval()函数; //var obj = eval ("(" + jsontxt + ")");
>
> 
>
> 2、JSON.parse(str); //str为变量，即json字符串;
>
> ### 2. JS对象转JSON
>
> 1.JSON.stringify(obj)

### 6．JSON数据和Java对象的相互转换

> **6.1为什么要转换？**
>
> **Json要作为载体在网络中进行传输**
>
> **json解析器:jsonlib,gson,,,**
>
> 
>
> **6.2两种转换方式**
>
> **1.** **json转为Java对象**
>
> **2.** **Java对象转换json（常用）**