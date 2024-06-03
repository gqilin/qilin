---
title: Ajax介绍
top: false
cover: false
toc: true
mathjax: true
date: 2021-09-05 14:37:28
password:
summary: 什么是Ajax
tags: 前端基础
categories: 前端
---
> 摘要：Ajax是浏览器提供的一套方法，通过调用这些方法实现客户端向服务器端发送请求

<!--more-->

### 1.Ajax简介

> #### 1.什么是Ajax
>
> 先了解在传统的网站中存在的一些问题：
>
> \1. 在传统的网站应用中,如果用户想要看到网站中的最新数据，只能刷新页面并等待(网速慢的情况下)
>
> \2. 提交表单后，如果有一项内容不合格，需要回到原先页面重新填写内容
>
> \3. 页面跳转，重新加载页面，造成资源浪费，增加用户等待时间
>
> 
>
> **Ajax**是==浏览器提供的一套方法，通过调用这些方法实现客户端向服务器端发送请求，可以实现页面无刷新更新数据，由于页面不需要更新，所以在服务器端没有做出响应之前，浏览网站的用户是不需要等待的，用户可以继续浏览页面中的其他数据;==
>
> **==简单来说Ajax技术可以实现在用户浏览网页的过程中局部更新页面的数据，提高用户浏览网站应用的体验.==**
>
> #### 2.Ajax应用场景
>
> 1.页面上拉加载更多数据 (网易新闻)
>
> 2.列表数据无刷新分页
>
> 3.表单项离开焦点数据验证
>
> <img src="E:\notes\image\zhihu.png" style="zoom: 67%;" />
>
> \4. 搜索框提示文字下拉列表(百度、谷歌搜索)
>
> #### 3.Ajax运行环境
>
> **Ajax虽然是客户端JavaScript代码但是需要在网站环境中才能生效，也就是说运行Ajax的HTML页面需要放在网站服务器下运行**

### 2.Ajax运行原理

> **2.1 Ajax运行原理**
>
> **Ajax**相当于浏览器发送请求与接收响应的代理人，以不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户体验
>
> ![](E:\notes\image\Ajax.png)
>
> 由Ajax帮助浏览器向服务器端发送请求，再由Ajax帮助浏览器接收服务器端响应到客户端的数据（数据一般是json格式），当Ajax接收到服务器端发送的数据之后，我们前端人员再通过dom的方法将数据渲染到页面
>
> 相对于传统方式，Ajax请求是可控的，可以在请求发送和加载数据过程中，为用户做加载提示

### 3.Ajax 的实现步骤

> ##### 1.创建Ajax对象
>
> ~~~javascript
> var xmlhttp = new XMLHttpRequest();   //声明一个变量xmlhttp接收Ajax对象
> ~~~
>
> **XMLHttpRequest()**是JavaScript中内置的构造函数，
>
> **创建此构造函数的实例对象===创建Ajax对象**
>
> ##### 2.告诉Ajax请求地址以及请求方式
>
> ~~~javascript
> xmlhttp.open('GET','http://www.liulongbin.top:3005/api/getnewslist',false);
> ~~~
>
> **通过Ajax对象（xmlhttp）里的open()方法实现**
>
> **Ajax****的open()方法有3个参数：method；url；boolean**
>
> **1.** **method:****请求方式;有get和post两个取值**
>
> **2.** **url:****请求地址；就是服务器端对应的路由请求地址**
>
> **3.** **boolean:****有true和false两个取值**
>
> 当该boolean值为**true**时，服务器请求是**异步**进行的，也就是脚本执行send（）方法后不等待服务器的执行结果，而是继续执行脚本代码
>
> 当boolean值为**false**时，服务器请求是**同步**进行的，也就是脚本执行send（）方法后等待服务器的执行结果的返回，若在等待过程中超时，则不再等待，继续执行后面的脚本代码
>
> **补充：同步和异步**
>
> 同步：一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，在执行后面一个任务，以此类推。
>
> 异步：每个任务有一个或多个回调函数(callback)，前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的
>
> ##### 3.发送请求
>
> ~~~javascript
> mlhttp.send(); //调用send()请求,不调用则不发送请求
> ~~~
>
> ##### 4.获取服务器端返回给客户端的响应数据
>
> ~~~javascript
> xmlhttp.onload = function(){
>           console.log(xmlhttp.responseText); //responseText属性获取响应数据
>          }
> 
> ~~~
>
> 由于请求受网络速度快慢的影响,所以需要一定时间才能完成，而这个时间并不确定
>
> 所以不能在send()方法的后面直接获取请求结果
>
> 处理方法就是在xmlhttp下的onload事件添加事件处理函数，当服务器端对客户端做出了响应，浏览器端会自动调用xmlhttp下的onload事件对应的事件处
>
> 理函数，在事件处理函数中获取服务器端响应给客户端的数据
>
> #### 5.原生JavaScript发送Ajax请求
>
> ~~~javascript
> <div id="box"></div>
>  <button id="getData">点击获取数据</button>
>  <script>
>      var getData = document.getElementById("getData");
>      var box = document.getElementById("box");
>      getData.onclick=function(){
>          var xmlhttp = new XMLHttpRequest();
>          xmlhttp.open('GET','http://www.liulongbin.top:3005/api/getnewslist',false);
>          //发送请求
>          xmlhttp.send();
>          xmlhttp.onload = function(){
>              console.log(xmlhttp.responseText);
>          }
>          var data = xmlhttp.responseText;
>           //字符串转换为JSON对象
>          var dataJson = JSON.parse(data);
>          var datasMsg = dataJson.message;
>          var html = "";
>          for(var i=0; i<datasMsg.length;i++){
>              html+="<div id='content' class='content'><img src='"+datasMsg[i].img_url+"'><h3>"+datasMsg[i].title+"</h3><div>时间:<span>"+datasMsg[i].add_time+"</span></div><div class='zy'>"+datasMsg[i].zhaiyao+"</div></div>"
>          }
>          box.innerHTML = html;
>      }
>  </script>
> 
> ~~~

### 4.$.ajax()方法使用

> **1.1** **$.ajax()****方法概述**
>
> 在使用jQuery开发时,使用已经封装好的$.ajax()方法发送Ajax请求
>
> 
>
> **1.2** **$ajax()****方法的使用 ---- 直接调用**
>
> ~~~javascript
> <div class="warp"></div>
>  <script>
>      $(function () {
>          $.ajax({
>              type: "get", //请求方式 get/post
>              async: true, //同步异步
>              contentType: "application/json;charset=UTF-8",
>              url: "http://www.liulongbin.top:3005/api/getnewslist",
>              dataType: "json", //预判数据格式
>                data:{}, //向服务器端发送的请求参数
> beforeSend:function(){
>                   return false  
>              },
>              success: function (res) {
>                  console.log(res);
>                  // for(var i=0; i<data.message.length;i++){
>                  //     $(".warp").append(data.message[i].title +'-----' +data.message[i].id)
>                  // }
>              },
>              error: function (e) {
>                  console.log("数据请求失败");
>              }
>          })
>  })
>  </script>
> 
> ~~~
>
> **1.****调用$.ajax()方法时要传一个对象作为请求参数**
>
> **2.****对象中的属性以及其含义**
>
> **Type:****请求方式 post/get**
>
> **Url:****请求地址**
>
> **Data:****向服务器端发送的请求参数 可以是对象也可以是字符串**
>
> **contentType****：向服务器端传递的参数类型**
>
> | 值                                | 描述                                                         |
> | --------------------------------- | ------------------------------------------------------------ |
> | application/x-www-form-urlencoded | 在发送前编码所有字符（默认）                                 |
> | multipart/form-data               | 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。 |
> | application/json                  | 作为请求头告诉服务端**消息主体是序列化的JSON字符串**。除低版本的IE，基本都支持。 |
> | text/plain                        | 空格转换为 “+” 加号，但不对特殊字符编码                      |
>
> **==注：使用application/json类型时，需要在data属性中传递一个json对象字符串==**
>
> ~~~javascript
> data:JSON.stringify({name:'zhangsan',age:'20'}),
> ~~~
>
> **dataType****：预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断，比如 XML MIME 类型就被识别为 XML**
>
> ·    "xml": 返回 XML 文档，可用 jQuery 处理。
>
> ·    "html": 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
>
> ·    "script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
>
> ·    "json": 返回 JSON 数据 。
>
> ·    "jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
>
> ·    "text": 返回纯文本字符串
>
> 
>
> **beforeSend()****：在请求发送之前调用**

