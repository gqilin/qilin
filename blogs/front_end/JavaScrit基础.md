---
title: JavaScript基础
top: false
cover: false
toc: true
mathjax: true
date: 2021-05-18 14:23:48
password:
summary: JavaScript 是 Web 的编程语言
tags: 前端基础
categories: 前端

---

> 摘要：JavaScript 是 Web 的编程语言

<!--more-->

### 1.初识JavaScript

>**1.JavaScript是什么**
>
>* JavaScript是世界上最流行的语言之一，是运行在==客户端的脚本语言==
>* 脚本语言：不需要编译，运行过程中由js解释器（js引擎)==逐行进行解释并执行==
>* 现在也可以基于Node.js技术进行服务器端编程
>
>**2.JavaScript的作用**
>
>* 表单动态校验（密码强度检测）
>* 网页特效
>* 服务端开发（Node.js)
>* 桌面程序（Electron)
>* App(Cordova)
>* 控制硬件-物联网(Ruff)
>* 游戏开发(cocos2d-js)
>
>**3.浏览器执行js 简介**
>
>浏览器分为两部分：渲染引擎和JS引擎
>
>* **==渲染引擎：==**用来解析HTML与CSS，俗称内核
>* **==JS引擎：==**也称为Js解释器，用来读取网页中的JavaScript代码，对其处理后运行
>
>==浏览器并不会执行JS代码，而是通过内置JavaScript引擎来执行js代码，JS引擎执行代码时**逐行解释**每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行解释执行==
>
>**4.JavaScript组成**
>
>* JavaSctipt语法（ECMAScript)
>* 页面文档对象模型（DOM）
>* 浏览器对象模型（BOM)



### 2.JavaScript基本用法

##### 1.JavaScript输出

>* **window.onload = function ()**创建一个窗口
>* 使用 **window.alert()** 弹出警告框。
>* 使用**window.prompt()**询问框
>* 使用 **document.write()** 方法将内容写到 HTML 文档中。
>* 使用 **innerHTML** 写入到 HTML 元素。
>* 使用 **console.log()** 写入到浏览器的控制台。

##### 2.转义符

>* \n  换行 
>* \t  缩进 
>* \ " 双引号  
>* \ ' 单引号 

### 3.变量和数据类型 

##### 1.变量

>**1.1** **简介**
>
>在程序运行过程中其值可以改变的量，是一个数据存储空间的表示，即给内存空间起别名
>
>JavaScript是弱变量类型的语言，声明变量只需要使用 
>
>var 关键字 
>
>语法： var 变量名=变量值; 
>
>**1.2** **命名规则 **
>
>规则：
>
>只能由数字，英文字母，下划线以及$符号组成，但不能以数字开头 
>
>区分大小写 
>
>通常第一个单词首字母小写，其他单词首字母大写 
>
>驼峰命名法 
>
>第一个单词首字母小写，其他单词首字母大写，如变量名、方法名、函数名等 
>
>**1.3** **加号的作用 **
>
>作用：
>
>两个字符串用加号连接： 
>
>连接这两个字符串 
>
>两个数值用加号连接： 进行加法运算 
>
>字符串和其他值用加号连接： 
>
>连接 
>
>**1.4** **字面量 **
>
>字面量（直接量）表示如何表达这个值，一般除去表达式外，给变量赋值时等号右边都可以认为是字面量。
>
>简单来说就是字面上就能明白代码含义。 
>
>分类：
>
>字符串字面量(string literal )，如var name=“tom”; 
>
>数组字面量(array literal)，如var array=[12,32]; 
>
>对象字面量(object literal)，如var stu={name:”tom”,age:20} 
>
>函数字面量(function literal)运算符 

##### 2.数据类型

> **2.1** **简介**
>
> 变量中存储的是什么样的数据，那么这个变量就是什么样类型。 
>
> 数据类型： 
>
> string 存储一串字符,用双引号或单引号括起来 
>
> number 表示整数或浮点数 
>
> boolean 表示真假, true或false 
>
> undefined 变量被声明了，但未被赋值 
>
> null 空 
>
> **2.2** **判断数据类型 **
>
> 使用==typeof()==判断数据类型 
>
> 用法： typeof(变量) 或 typeof 变量 
>
> 返回值：string、number、boolean、undefined、object 
>
> **2.3** 获取用户输入 
>
> 使用==prompt()==提示用户输入数据 
>
> 语法： prompt(“提示信息”, “输入框的默认信息”); 

### 4.运算符

##### 1.1 用法运算符 

>*  ++    自增，对原值加1 
>*  --自减，对原值减1 
>*  \>  大于 
>*  <  小于 
>
>前缀自增自减和后缀自增自减的区别： 
>
>前缀自增自减 
>
>先进行自增或自减运算，然后再执行表达式 
>
>后缀自增自减 
>
>先执行表达式，然后再进行自增或自减运算 
>
>![](E:\notes\image\Snipaste_2021-04-11_14-16-25.png)

##### 1.2运算符优先级 

>从高到低的顺序： 
>
>\1. 小括号( ) 
>
>\2. 一元运算：自增++、自减­­、非!3. 乘*、除/、取余% 
>
>\4. 加+、减­ 
>
>\5. 关系运算：>、<、>=、<= 
>
>\6. 相等运算： ==、!= 
>
>\7. 逻辑与&& 
>
>\8. 逻辑或|| 
>
>\9. 赋值运算：=、+=等 
>
>注：当运算符较多时，建议使用 
>
>()小括号 控制运算的顺序 

##### 1.3 Math对象常用方法

>常用方法： 
>
>* Math.abs(a); // 得到a的绝对值 
>* Math.pow(a,b); // 得到a的b次方 
>* Math.round(a); // 四舍五入 
>* Math.ceil(a); // 向上取整 
>* Math.floor(a); // 向下取整 
>* Math.random(); // 产生随机数，范围[0.0,1.0) 
>* Math.floor(Math.random() * 100 + 1)//1~100随机数
>* Math.max(a,b…); // 返回最大值 
>* Math.min(a,b…); // 返回最小值 
>* Math.PI; // 返回圆周率π的值，不能加小括号运算符
>* Math.sqrt(9)//返回3，返回一个数的平方根
>* toFixed(2)  //保留两位小数

### 5.数据类型转换

##### 1.强制类型转换 

> **1.1 转换为number** 
>
> 三种方式： 
>
> \1. 使用==Number()==   
>
> \2. 使用==parseInt()== 
>
> 将内容转换成整数（直接去掉小数） 
>
> 会从第一个字符开始解析，直到遇到非数字符号停止，并返回已解析的部分数值 
>
> \3. 使用==parseFloat()==
>
> 将内容转换成小数 
>
> **1.2** **转换为string** 
>
> 三种方式： 
>
> \1. 拼接空字符串 
>
> "" +要转换的内容 
>
> \2. 使用==String()== 
>
> 将要转换的内容放在String后的小括号中 
>
> \3. 使用==toString()==
>
> 直接调用变量的toString()方法
>
> **1.3 转换为boolean** 
>
> 两种方式： 
>
> \1. 使用Boolean() 
>
> false、0、空字符串、Undefined、null、NaN会被转换成false 
>
> 其它的都会被转成true 
>
> \2. 使用 !! 转换 
>
> \2. 自动类型转换 
>
> 也称为隐式转换 
>
> 自动转换为number的两种方式： 
>
> \1. 在参与 ­、*、/、% 等运算时会自动转换为number 
>
> \2. 直接在要转换的内容前添加 
>
> \+ 

### 6.循环

###### 1.if判断

> ![](E:\notes\image\Snipaste_2021-04-09_19-26-50.png)

###### 1.2三目运算符

> ~~~java
> //三目运算符语法：条件？ 表达式1：表达式2 
> var a = Number(prompt("请输入a的值"));
> 
> var b = Number(prompt("请输入b的值"));
> 
> var c = a > b ? a : b;
> 
> console.log(c); 
> ~~~
>
> 

###### 2.switch

> switch (表达式) { // 表达式为要判断的内容 
>
> case 常量1: 
>
> 代码块1 
>
> break; 
>
> case 常量 2: 
>
> 代码块2 
>
> break; 
>
> 代码块3
>
> default: // 当所有常量都无法匹配时会执行default语句 
>
> ![](E:\notes\image\Snipaste_2021-04-09_19-27-25.png)
>
> **2.1 while** 
>
> 语法： 
>
> 特点：先判断，再执行，只要条件成立就不停的执行 
>
> **2.2 do...while** 
>
> 语法： 
>
> 特点：先执行，再判断，循环操作至少会执行一次 

###### 2.3 for

> 语法： 
>
> **2.4 for...in** 
>
> ![](E:\notes\image\Snipaste_2021-04-09_19-48-26.png)
>
> **2.5 for...of** 
>
> 对集合数据进行迭代遍历 
>
> 语法： 
>
> ![](E:\notes\image\Snipaste_2021-04-09_19-48-49.png)
>
> 循环变量就是遍历到的数据本身 

###### 2.6总结

> 循环次数确定时一般使用for 
>
> 循环次数不确定时一般使用while和do...while 
>
> 对集合进行遍历时使用for...in和for...of 
>
> \3. 循环控制 
>
> break：跳出整个循环，执行循环之后的代码，一般与if一起使用 
>
> continue：跳出本次循环，执行下一次循环（本次尚未执行完的代码不再执行） 
>
> \4. 二重循环 
>
> 一个循环中嵌套着另一个循环，称为二重循环，各种循环可以相互嵌套 
>
> 外层循环变量变化一次，内层循环变量要变化一遍 
>
> 二重循环中的break和continue，遵循就近原则 

### 7.数组

###### 1.简介

>数组就是用来存储一组数据的 
>
>数组的三要素： 
>
>for(循环变量 of 集合){ 
>
>循环操作 
>
>}
>
>* reverse()  将数组元素==倒序==排列 
>* indexOf() 返回指定元素在数组中==第一次出现的位置== 
>* lastIndexOf() 返回指定元素在数组中==最后一次出现的位置==
>* join() 将数组==拼接为string==
>
>数组名称：用于区分不同的数组 
>
>数组元素：向数组中存放的数据 
>
>元素下标：数组元素的编号，也称为索引，从0开始，通过下标来访问数组元素 

###### 2.基本用法 

>步骤：
>
>\1. 创建数组 
>
>var 数组名=new Array(); 
>
>\2. 为数组元素赋值 
>
>数组名[索引]=元素值; 
>
>\3. 获取元素值 
>
>数组名[索引] 
>
>\3. 定义数组的方式 
>
>两种方式： 
>
>使用 new Array() 
>
>使用数组字面量 [] 
>
>\4. 字符串索引数组 
>
>默认情况下，会使用数字作为数组索引，也可以使用字符串作为数组索引，称为字符串索引数组
>
>字符串索引一般称为key键，对应的元素称为value值 
>
>key不会对length属性产生影响，所以不适合使用普通for循环，而应该使用for…in或for...of循环 

###### 3.数组常用方法 

>* var array=new Array(); // 创建一个==空数组==，长度为0 
>* var array=new Array(4); // 创建一个==长度为4的数组==（只填一个数字） 
>* var array=new Array("apple", "orange", "peach", "bananer"); // 创建一个==包含初始元素==的数组 
>* var names=[ ]; // 创建一个空数组 
>* var names= ["apple", "orange", "peach", "bananer"]; // 创建一个包含初始元素的数组方法名 
>
>**含义 **
>
>* concat() 将多个数组==拼接==成一个数组 
>* push() 向数组==末尾添加==一个或多个元素，并返回新的长度 
>* pop() 删除并返回数组的最后一个元素 
>* unshift() 向数组开头添加一个或多个元素，并返回新的长度 
>* shift() 删除并返回数组的第一个元素 
>* slice() 返回数组中指定范围内的元素 
>* splice() 删除元素，并在删除位置添加新的元素，然后返回被删除的元素 
>* toString() 将数组转换为字符串 
>* valueOf() 返回数组对象本身，一般会自动调用 
>* sort() 排序，默认按字符编码的顺序排列，非string类型会自动转换为string，也可以自定义比较规则 
>* forEach() 遍历数组中的每个元素 

### String

> | 序号 | 方法名称 & 描述                                              |
> | :--- | :----------------------------------------------------------- |
> | 1    | **public static int Compare( string strA, string strB )** 比较两个指定的 string 对象，并返回一个表示它们在排列顺序中相对位置的整数。该方法区分大小写。 |
> | 2    | **public static int Compare( string strA, string strB, bool ignoreCase )** 比较两个指定的 string 对象，并返回一个表示它们在排列顺序中相对位置的整数。但是，如果布尔参数为真时，该方法不区分大小写。 |
> | 3    | **public static string Concat( string str0, string str1 )** 连接两个 string 对象。 |
> | 4    | **public static string Concat( string str0, string str1, string str2 )** 连接三个 string 对象。 |
> | 5    | **public static string Concat( string str0, string str1, string str2, string str3 )** 连接四个 string 对象。 |
> | 6    | **public bool Contains( string value )** 返回一个表示指定 string 对象是否出现在字符串中的值。 |
> | 7    | **public static string Copy( string str )** 创建一个与指定字符串具有相同值的新的 String 对象。 |
> | 8    | **public void CopyTo( int sourceIndex, char[] destination, int destinationIndex, int count )** 从 string 对象的指定位置开始复制指定数量的字符到 Unicode 字符数组中的指定位置。 |
> | 9    | **public bool EndsWith( string value )** 判断 string 对象的结尾是否匹配指定的字符串。 |
> | 10   | **public bool Equals( string value )** 判断当前的 string 对象是否与指定的 string 对象具有相同的值。 |
> | 11   | **public static bool Equals( string a, string b )** 判断两个指定的 string 对象是否具有相同的值。 |
> | 12   | **public static string Format( string format, Object arg0 )** 把指定字符串中一个或多个格式项替换为指定对象的字符串表示形式。 |
> | 13   | **public int IndexOf( char value )** 返回指定 Unicode 字符在当前字符串中第一次出现的索引，索引从 0 开始。 |
> | 14   | **public int IndexOf( string value )** 返回指定字符串在该实例中第一次出现的索引，索引从 0 开始。 |
> | 15   | **public int IndexOf( char value, int startIndex )** 返回指定 Unicode 字符从该字符串中指定字符位置开始搜索第一次出现的索引，索引从 0 开始。 |
> | 16   | **public int IndexOf( string value, int startIndex )** 返回指定字符串从该实例中指定字符位置开始搜索第一次出现的索引，索引从 0 开始。 |
> | 17   | **public int IndexOfAny( char[] anyOf )** 返回某一个指定的 Unicode 字符数组中任意字符在该实例中第一次出现的索引，索引从 0 开始。 |
> | 18   | **public int IndexOfAny( char[] anyOf, int startIndex )** 返回某一个指定的 Unicode 字符数组中任意字符从该实例中指定字符位置开始搜索第一次出现的索引，索引从 0 开始。 |
> | 19   | **public string Insert( int startIndex, string value )** 返回一个新的字符串，其中，指定的字符串被插入在当前 string 对象的指定索引位置。 |
> | 20   | **public static bool IsNullOrEmpty( string value )** 指示指定的字符串是否为 null 或者是否为一个空的字符串。 |
> | 21   | **public static string Join( string separator, string[] value )** 连接一个字符串数组中的所有元素，使用指定的分隔符分隔每个元素。 |
> | 22   | **public static string Join( string separator, string[] value, int startIndex, int count )** 连接接一个字符串数组中的指定位置开始的指定元素，使用指定的分隔符分隔每个元素。 |
> | 23   | **public int LastIndexOf( char value )** 返回指定 Unicode 字符在当前 string 对象中最后一次出现的索引位置，索引从 0 开始。 |
> | 24   | **public int LastIndexOf( string value )** 返回指定字符串在当前 string 对象中最后一次出现的索引位置，索引从 0 开始。 |
> | 25   | **public string Remove( int startIndex )** 移除当前实例中的所有字符，从指定位置开始，一直到最后一个位置为止，并返回字符串。 |
> | 26   | **public string Remove( int startIndex, int count )** 从当前字符串的指定位置开始移除指定数量的字符，并返回字符串。 |
> | 27   | **public string Replace( char oldChar, char newChar )** 把当前 string 对象中，所有指定的 Unicode 字符替换为另一个指定的 Unicode 字符，并返回新的字符串。 |
> | 28   | **public string Replace( string oldValue, string newValue )** 把当前 string 对象中，所有指定的字符串替换为另一个指定的字符串，并返回新的字符串。 |
> | 29   | **public string[] Split( params char[] separator )** 返回一个字符串数组，包含当前的 string 对象中的子字符串，子字符串是使用指定的 Unicode 字符数组中的元素进行分隔的。 |
> | 30   | **public string[] Split( char[] separator, int count )** 返回一个字符串数组，包含当前的 string 对象中的子字符串，子字符串是使用指定的 Unicode 字符数组中的元素进行分隔的。int 参数指定要返回的子字符串的最大数目。 |
> | 31   | **public bool StartsWith( string value )** 判断字符串实例的开头是否匹配指定的字符串。 |
> | 32   | **public char[] ToCharArray()** 返回一个带有当前 string 对象中所有字符的 Unicode 字符数组。 |
> | 33   | **public char[] ToCharArray( int startIndex, int length )** 返回一个带有当前 string 对象中所有字符的 Unicode 字符数组，从指定的索引开始，直到指定的长度为止。 |
> | 34   | **public string ToLower()** 把字符串转换为小写并返回。       |
> | 35   | **public string ToUpper()** 把字符串转换为大写并返回。       |
> | 36   | **public string Trim()** 移除当前 String 对象中的所有前导空白字符和后置空白字符。 |

### 8.函数

###### 1.简介

>函数是用来完成特定功能的代码块，可以被调用执行多次，实现复用 
>
>分类：
>
>内置函数 
>
>自定义函数函数名 
>
>含义 
>
>* typeof() 判断==变量的类型== 
>* isNaN() 判断参数是==否为NaN==
>* parseInt() 将数据==转换为整数== 
>* parseFloat() 将数据==转换为小数==
>* eval() 计算字符串表达式的值，并执行其中的JavaScript代码 
>* encodeURI() 使用 ISO8859­1 对字符串进行编码，每个UTF­8的汉字编码成3个16进制字节，如下： %字节1%字 节2%字节3 
>* decodeURI() 使用 ISO8859­1 对字符串进行解码 
>* escape() 使用 Unicode 对字符串进行编码，每个UTF­8的汉字被编码成一个双字节16进制转义字 符 %uXXXX ，中文范围%u4e00­­­%u9fa5 
>* unescape() 使用 Unicode 对字符串进行解码 

###### 2.自定义函数 

>语法： 
>
>~~~javascript
>//1.1定义一个无参函数
>function f1() {
>   var sum = 0;
>   for (var i = 1; i <= 100; i++) {
>       sum += i;
>   }
>   console.log(sum);
>}
>//1.2调用函数
>f1()
>~~~
>
>~~~javascript
>//定义一个带参数的函数
>function f2(start,end){
>var sum = 0;
>for(var i = start;i<=end;i++){
>   sum += i;
>}
>console.log('从'+start+'到'+end+'的和是'+sum);
>}
>//调用函数
>f3(1,10);
>~~~
>
>

###### 3. 回调函数 

>语法：
>
>~~~javascript
>// 2.作为另一个函数的参数，即将函数作为参数传给另一个函数（函数也是一种数据类型）
>function f2(args) {
>   if (typeof (args) != "function") {
>       console.log(args);
>   } else {
>       args()//直接要用传入的函数
>   }
>}
>// var a = 123;
>var a = function () {
>   console.log("我爱学习前端");
>}
>f2(a);
>~~~

###### 4.匿名函数 

>没有名字的函数，称为匿名函数，一般用于回调 
>
>应用场景： 
>
>用于事件的回调 
>
>用于一次性执行的函数，会自动执行，称为自执行函数 
>
>将匿名函数作为另一个函数的参数 

### 9.DOM

##### 1.DOM简介 

>Document Object Model   ==文档对象模型==
>
>浏览器加载HTML文档时，会将HTML文档解析为一个树形结构，称为DOM树 
>
>HTML文档和DOM树是一一对应的关系 
>
>当DOM树被改变时，与之对应的HTML文档也会随之改变 
>
>当需要对HTML中的内容进行动态改变时，可以使用DOM来进行操作 
>
>DOM提供了一组用来操作HTML文档的API，即提供一套属性、方法和事件 
>
>树上的每一个节点都是一个DOM对象，树的顶层为 
>
>document 对象，表示整个文档 

##### 2.查询操作 

>获取DOM对象方法 
>
>含义 
>
>* document.getElementsByTagName("标签名") 根据==标签名==来查询，返回所有匹配的节点集合 
>* document.getElementsByClassName("类名") 根据==class==属性来查询，返回所有匹配的节点集合 
>* document.querySelector("选择器") 根据==css选择器==来查询，返回匹配的第一个节点 
>* document.querySelectorAll("选择器") 根据==css选择器==来查询，返回所有匹配的节点集合 
>* node.getElementsByTagName("标签名") 在当前节点的内部根据标签名来查询 
>* node.parentNode属性    //查询==当前节点的父节点== 
>* node.children属性    //查询==当前节点的所有子元素节点==
>* node.firstElementChild属性     //查询==当前节点的**第一个子元素**节点== 
>* node.lastElementChild属性    //查询==当前节点的**最后一个子元素**节点==
>* node.previousElementSibling属性    //查询==当前节点的**上一个元素**节点== 
>* node.nextElementSibling属性     //查询==当前节点的**下一个元素**节点==
>
>==节点类型分为：元素节点、文本节点、属性节点等== 

##### 3.访问操作 

>**3.1** 访问属性 
>
>获取/设置DOM对象的属性 
>
>DOM对象的属性和HTML标签的属性几乎是一样的，一般情况下DOM对象都会存在一个与对应HTML标签同名 
>
>的属性
>
>两种方式： 
>
>直接访问属性 
>
>用法： DOM对象.属性 
>
>调用setAttribute()和getAttribute()方法 
>
>用法： 
>
>* DOM对象.setAttribute("属性名","属性值")  
>* DOM对象.getAttribute("属性名") 
>
>* innerHTML ==将内容解析为HTML==
>* innerText ==将内容作为纯文本==，出现转义符时会进行解析方法
>* document.createElement("标签名")   //创建一个==元素节点==，即标签 
>* document.createTextNode("文本内容")   //创建一个==文本节点==，即标签中的文本内容 
>* node.appendChild(newNode)   //将一个新的节点newNode==添加==到指定的节点node中子节点的末
>* node.insertBefore(newNode,refNode)   //将一个新的节点newNode==插入==到node节点的子节点refNode之前 
>* node.replaceChild(newNode,refNode)   //用一个新的节点newNode==替换==原有的node节点中的子节点refNode 
>* node.removeChild(refNode)    //删除当前节点中指定的==子节点== 
>* node.remove()    //==删除当前节点== 
>* 使用textContent 
>* DOM对象.textContent 将内容作为纯文本，出现转义符时会直接保留特性
>
>**3.3** 访问**CSS** 
>
>获取/设置CSS样式 
>
>三种方式： 
>
>使用style属性 
>
>用法： DOM对象.style.样式属性 
>
>如果CSS属性中有短横线­，需要去掉短横线，然后将其后的单词首字母改成大写，如 
>
>fontSize 
>
>使用className属性 
>
>用法： DOM对象.className 
>
>使用classList属性 
>
>用法： DOM对象.classList 
>
>通过classList的 add() 、 remove() 进行类样式的添加和删除 
>
>\4. 更新操作 
>
>节点的创建、添加、修改、删除等 
>
>

### 10.事件处理

##### 1.简介

> 事件：发生在HTML元素上的事情，可以是用户的行为，也可以是浏览器的行为，如 
>
> 用户==点击==了某个HTML元素 
>
> 用户将==鼠标移动==到某个HTML元素上 
>
> 用户输入数据时==光标离开==
>
> 页面加载完成事件源：事件触发的源头，即触发事件的元素，如按钮、输入框、超链接等
>
> 事件对象：当一个事件发生时，这个事件相关的详细信息会被保存到一个对象中，称为 event 
>
> 对象 
>
> 事件监听：监听事件的发生，绑定事件函数，当事件被触发后执行该事件函数，即回调函数
>
> \2. 绑定事件 
>
> 三种方式： 
>
> 静态绑定，通过为标签的 
>
> 事件属性 赋值 
>
> 动态绑定，通过为DOM对象的 事件属性 赋值 
>
> 动态绑定，通过为DOM对象进行 事件监听 ，使用 addEventListene("事件名",回调函数) 
>
> 注意： 
>
> 可以通过事件回调函数的第一个参数获取事件对象event，属性含义： 
>
> 在事件回调函数中， 
>
> this 表示事件源，即发生事件的元素 

> ~~~javascript
> <input type="button" value="按钮" onclick="fn()"> //点击事件
> 
> 
> <script> 
> 
> var btn = document.getElementById("btn"); 
> 
> btn.onclick=function(){ 
> 
> console.log("动态绑定"); 
> 
> } 
> 
> </script> 
> 
> <script> 
> 
> var btn = document.getElementById("btn"); 
> 
> btn.addEventListener('click',function(){ 
> 
> console.log("动态绑定"); 
> 
> }); 
> 
> </script> 
> ~~~
>
> * target 事件的目标元素，即事件源 
> * type 事件类型 
> * timeStamp 事件生成的日期和时间 
> * clientX 当事件被触发时，鼠标指针的水平坐标 
> * clientY 当事件被触发时，鼠标指针的垂直坐标事件名 

##### 2.常用事件

> **1.鼠标事件**
>
>     * onclick 鼠标==单击== 
>
> * ondblclick 鼠标==双击== 
> * onmouseover 鼠标==移到==某元素之上 
> * onmouseout 鼠标从某元素上==移开== 
> * onmousedown 鼠标按钮==被按下== 
> * onmouseup 鼠标按键==被松开== 
> * onmousemove ==鼠标被移动== 
> * oncontextmenu 鼠标==右键单击== 
>
> **2.键盘事件**
>
> * onkeydown 某个键盘的键被按下去 
> * onkeypress 某个键盘的键被按下去且松开 
> * onkeyup 某个键盘的键被松开 
> * 事件名 
>
> **3.表单事件**
>
> * onfocus 元素==获得焦点== 
> * onblur 元素==失去焦点== 
> * onchange ==域的内容发生改变==，一般用于文件选择器和下拉列表 
> * onselect ==文本内容被选中== 
> * onsubmit 表单提交前触发，回调函数返回true表示允许表单提交，返回false表示阻止表单提交 
>
> 
>
> 表单元素的方法：focus()、blur()、select()、click() 

##### 3.事件操作 

> **4.1** 事件流 
>
> 概念：当一个HTML元素产生事件时，该事件会在当前元素与根元素之间按特定的顺序传播，所有经过的节点 
>
> 都会收到该事件并执行，这个传播过程就是DOM事件流。 
>
> 分类：事件冒泡、事件捕获**4.2** 事件冒泡**/**事件捕获 
>
> 事件冒泡：当一个元素上的事件被触发时，事件从事件源开始，往上冒泡直到页面的根元素，这一过程被称为
>
> 事件冒泡（默认方式） 
>
> 事件捕获：当一个元素上的事件被触发时，事件从页面的根元素开始，往下直到事件目标元素，这一过程被称为
>
> 事件捕获
>
> 阻止事件冒泡 ： ==event.stopPropagation()== 
>
> **4.3** 事件代理**/**事件委托 
>
> 概念：利用事件冒泡/事件捕获机制，通过给父元素绑定事件，从而实现对所有子元素的事件管理，无需为每 
>
> 个子元素绑定事件 
>
> 优点：1.减少事件注册，降低内存占用 
>
> 2.新增元素时实现动态绑定事件 
>
> **4.4** 事件默认行为 
>
> 概念：当一个事件发生时浏览器自己会默认做的事情，如：点击链接时默认会跳转，右键点击时默认会弹出菜
>
> 单 
>
> 阻止事件的默认行为： 
>
> ==e.preventDefault();==

### 11.BOM

##### 1.BOM简介 

> JavaScript由三部分组成： 
>
> ECMAScript 核心语法 
>
> DOM 文档对象模型，核心对象是document，用来操作页面文档 
>
> BOM 浏览器对象模型，核心对象是window，用来操作浏览器名称 
>
> 含义 
>
> * history 有关客户访问过的URL的信息 
> * location 有关当前 URL 的信息，子级DOM对象 
> * document 表示浏览器窗口中的HTML文档，子级DOM对象 
>
> 方法名 
>
> 含义 

#####  2.window对象 

> * alert(text) 显示一个带有提示信息和确定按钮的==警告框==
> * prompt(text) 显示一个==带有提示信息==、文本输入框、确定和取消按钮的输入框，返回值为输入的数据
> * confirm(text) 显示一个带有提示信息、==确定和取消按钮的确认框== ，确定返回true，取消返回false 
> * open(url,name, options) ==开具有指定名称的新窗口==，并加载给定url所指定的文档 
> * setTimeout(fn,delay) 设置==一次性定时器==，在指定毫秒值后执行某个函数 
> * setInterval(fn,delay) 设置==周期性定时器==，周期性循环执行某个函数 
> * clearTimeout(timer) ==清除一次性定时器== 
> * clearInterval(timer) ==清除周期性定时器==
> * scrollTo(xpos,ypos) 把内容滚动到指定的坐标，即设置滚动条的 偏移位置 
> * scrollBy(xnum,ynum) 把内容滚动指定的像素数，即设置滚动条的 偏移量 
>
> * onload 页面加载完成 
> * onscroll 窗口滚动条滑动 
>
> 方法名 
>
> 含义 
>
> * back( ) ==后退==，加载History列表中的上一个url 
> * forward( ) ==前进==，加载History列表中的下一个url 
> * go(number) 浏览器移动指定的页面数 
>
> 注：由于window对象是BOM结构的顶层对象，所以在调用window的属性和方法可以省略 
>
> window. 
>
> \3. location对象 
>
> * href 设置或返回地址栏中的url 
> * reload() 重新加载当前页 ： 

### 12.自定义对象 

> 什么是对象 
>
> 万物皆对象，如手机、电脑、汽车、桌子、学生、狗、游戏等 
>
> 现实世界中充满着对象，符合人们的思维习惯 
>
> 对象具有特征和行为 
>
> 特征：对象具有的属性，如学生的姓名、年龄等 
>
> 行为 ：对象具有的能力，如学生可以学习、跑步、做自我介绍等 
>
> JavaScript是基于对象的语言 
>
> 对象具有的特征，称为属性 
>
> 对象具有的行为，称为方法 

##### 1.创建对象 

> 三种方式：使用Object 
>
> 使用构造函数 
>
> 用来创建对象的函数，称为构造函数或构造器，相当于自定义了一个类型 
>
> 使用对象字面量 
>
> 多个属性之间以逗号隔开，属性名和属性值之间以冒号隔开 

##### 2.this关键字 

> this表示当前对象 
>
> 函数中的this，表示调用函数的当前对象 
>
> 事件绑定的匿名回调函数中的this，表示事件源 
>
> 构造函数中的this，表示将来new出来的当前对象 

##### 3.引用数据类型

> // 1.**创建对象 **
>
> var 对象名=new Object(); 
>
> // 2.**为对象添加属性 **
>
> 对象名.属性名=属性值; 
>
> // 3.**为对象添加方法 **
>
> 对象名.方法名=function(){ 
>
> 方法体 
>
> }
>
> // 4.**调用属性和方法** 
>
> 对象名.属性名; 或 对象名['属性名']; 
>
> 对象名.方法名() 或 对象名['方法名'](); 
>
> function 构造函数名(形参1,形参2…) { // 为了区别于普通函数，构造函数名建议首字母大写 
>
> this.属性名=形参1; 
>
> this.属性名=形参2; 
>
> this.方法名=function(){ 
>
> 方法体 
>
> }; 
>
> }
>
> var 对象名=new 构造函数名(实参1,实参2…); 
>
> var 对象名={ 
>
> 属性名:属性值, 
>
> 属性名:属性值, 
>
> 方法名:function(){ 
>
> 方法体 
>
> } 
>
> };数据类型分为两种： 
>
> 基本数据类型，也称为简单数据类型，共5种 
>
> string、number、boolean、undefined、null 
>
> 引用数据类型，也称为复杂数据类型 
>
> Object、Array、Student、Person.... 
>
> 内存分为两种： 
>
> 栈内存 
>
> 基本数据类型的变量和引用数据类型的变量的引用，会存储在栈内存中，存取速度比较快
>
> 堆内存 
>
> 引用数据类型的变量，会存储在堆内存中，存取速度较慢 
>
> 注：在创建引用数据类型变量时，首先会在栈内存上为其引用分配一块空间，而其具体数据会存储在堆
>
> 内存中，然后由栈上的引用指向堆中的地址。即引用变量的引用是存储在栈中，真实数据是存储在堆中
>
> 基本数据类型和引用数据类型作为函数参数 
>
> 基本类型作为方法的参数（按值传递） 
>
> 传递的是参数的值 
>
> 在函数内部修改参数的值，不会影响外部变量 
>
> 引用类型作为方法的参数（按引用传递） 
>
> 传递的是参数的引用 
>
> 在函数内部修改参数的值，会影响外部变量 

##### 4.闭包

> 闭包是JS中特有的现象，如何理解闭包？ 
>
> 在一个函数内部又定义了一个函数，这个定义在内部的函数，就是闭包 
>
> 闭包就是能够读取其他函数内部变量的函数 
>
> 闭包是在某个作用域内定义的函数，该函数可以访问这个作用域内的所有变量 
>
> 从作用上来说，闭包就是将函数内部和函数外部连接起来的一座桥梁 
>
> 闭包的用途
>
> 在函数的外部，可以读取到函数内部的变量 
>
> 让变量的值始终保存在内存中（不会被垃圾回收器回收） 
>
> 如果内部函数使用外部函数的变量，在外部函数执行完成之前变量会有改变时，内部只能获取最后改变
>
> 的值，无法获取定义时的值，就会产生闭包 
>
> **==解决方式==**
>
> * 不在函数内部定义函数，将函数定义在外面，在函数内部调用 
> * 为元素附加属性，用来存储变量 
> * 使用let来定义变量 

##### 5.JSON简介 

> JavaScript Object Notation 是一种轻量级的数据交换格式，用于表示JavaScript对象的一种方式 
>
> 采用与编程语言无关的文本格式，易于阅读和编写，同时也易于解析和生成。 
>
> **6.2** 基本用法 
>
> 语法： {"属性名":属性值,"属性名":属性值....} 
>
> 注意：
>
> JSON结构是由一系列的键值对所组成，称为JSON对象 
>
> 属性名使用双引号引起来 
>
> JSON和对象字面量的区别：JSON的属性必须加双引号，而对象字面量可以不加 
>
> 使用： 
>
> 简单的JSON对象 
>
> 复合属性，属性的值为JSON对象 
>
> JSON对象的集合 
>
> **6.3 JSON**转换 
>
> JSON转换为字符串 
>
> 字符串转换为JSON 

### 13.内置对象

##### 1.2常用方法 

> 使用length属性==获取字符串的长度== 
>
> var str = 'welcome'; // 基本数据类型string 
>
> var str = new String('welcome'); // 引用数据类型String方法 
>
> 描述 
>
> * fromCharCode() 将字符编码转换为字符串，静态方法 
> * getFullYear() 以四位数字返回年份 
> * getMonth() 返回月份(0~11)，0表示1月 
> * getDate() 返回一个月中的某一天(1~31) 
> * getHours() 返回小时 (0 ~ 23) 
> * getMinutes() 返回分钟 (0 ~ 59) 
> * getSeconds() 返回秒数 (0 ~ 59) 
> * getMilliseconds() 返回毫秒(0 ~ 999) 
> * getDay() 返回一周中的某一天(0~6)，0表示周日 
> * getTime() 返回从1970­01­01 00:00:00至今的毫秒数 
> * toUTCString() 把Date对象转换为世界标准时间的字符串 
> * toLocaleString() 把Date对象转换为本地时间的字符串 
>
> **1.3** 基本包装类型 
>
> 即基本类型的包装类型 
>
> 为了便于操作基本类型，提供了三个特殊的引用类型： String 、Number和Boolean，用来对基本类型进 
>
> 行包装，称为基本包装类型 
>
> 当访问基本类型值时，会自动创建一个对应的基本包装类型的对象，从而能够调用一些方法来操作这些
>
> 数据
>
> 当操作基本类型值的语句一经执行完毕，就会立即销毁创建的包装对象 
>
> 因为有了基本包装类型，所以JavaScript中的基本类型值可以被当作对象来访问 
>
> \2. Date 
>
> **2.1** 定义方式 
>
> 语法： 
>
> **2.2** 常用方法 
>
> setXxx方法与getXxx方法类似，用于设置对应的值 
>
> var date = new Date(); // 定义一个日期对象，表示当前时间 
>
> var date = new Date(year,month,day,hour,minute,second) // 参数为指定的年、月、日、时、分、秒 
>
> var date = new Date(millSeconds); //参数为与1970­01­01相差的毫秒数符号 
>
> 描述 
>
> \s 
>
> 匹配任何的空白字符 
>
> \S 
>
> 任何非空白字符 
>
> \d 
>
> 匹配一个数字字符，等价于[0­9] 
>
> \D 
>
> 除了数字之外的任何字符 
>
> \w 
>
> 匹配一个数字、下划线或字母字符 
>
> \W 
>
> 任何非单字字符 
>
> . 
>
> 匹配除了换行符之外的任意字符 
>
> 符号 
>
> 描述 
>
> \3. RegExp 
>
> **3.1** 简介
>
> 正则表达式是一门独立的语言，有自己的语法，用于检测指定字符串是否符合特定规则
>
> 正则表达式就是用来定义规则的，称为Regular Expression 
>
> 在JavaScript中提供了RegExp对象，表示正则表达式 
>
> **3.2** 定义方式 
>
> 创建正则表达式对象，两种方式： 
>
> 使用字面量 
>
> 使用构造函数 
>
> 说明：
>
> pattern 表示匹配模式，用于指定匹配规则，由元字符、量词、特殊符号组成 
>
> attribute 表示匹配特征，取值：i 忽略大小写、g 全局匹配、m 多行匹配 
>
> **3.3** 匹配规则 
>
> 元字符：具有特殊含义的字符 
>
> 量词：指定字符出现的次数 
>
> var reg = /pattern/attribute; 
>
> var reg = new RegExp(pattern,attribute);{n} 
>
> 匹配前一项n次 
>
> {n,} 
>
> 匹配前一项n次，或者多次 
>
> {n,m} 
>
> 匹配前一项至少n次，但是不能超过m次 
>
> \* 
>
> 匹配前一项0次或多次，等价于{0,} 
>
> \+ 
>
> 匹配前一项1次或多次，等价于{1,} 
>
> ? 
>
> 匹配前一项0次或1次，也就是说前一项是可选的，等价于{0,1} 
>
> 符号 
>
> 描述 
>
> /…/ 
>
> 代表一个模式的开始和结束 
>
> ^ 
>
> 匹配字符串的开始，即表示行的开始 
>
> $ 
>
> 匹配字符串的结束，即表示行的结束 
>
> [ ] 
>
> 表示可匹配的列表 
>
> ( ) 
>
> 用于分组 
>
> | 
>
> 表示或者 
>
> [ ^ ] 
>
> 在[ ]中的尖括号表示非 
>
> 方法 
>
> 描述 
>
> test() 
>
> 测试方法，用于测试字符串是否符合正则表达式对象所指定的模式规则，返回true或false 
>
> exec() 
>
> 搜索方法，用于在字符串中查找符合正则表达式对象所指定的模式的子字符串，返回找到的结果，若找不
>
> 到则返回null 
>
> 方法 
>
> 描述 
>
> search() 
>
> 检索与正则表达式相匹配的子字符串，返回第一个匹配的子串的起始位置，若找不到则返回­1 
>
> match() 
>
> 检索与正则表达式相匹配的子字符串，返回第一个匹配结果(无全局标志g)或存放所有匹配结果的数组 
>
> (有全局标志g) 
>
> replace() 
>
> 检索与正则表达式相匹配的子字符串，然后用第二个参数来替换这些子串，全局标志g有效 
>
> split() 
>
> 按照与正则表达式匹配的字符作为分隔符 
>
> 特殊符号：具有特殊含义的符号 
>
> 注： [\u4E00­\u9FA5] 
>
> 用来匹配中文字符 
>
> **3.4** 基本用法 
>
> 正则表达式对象的方法： 
>
> String对象的以下方法，支持使用正则表达式： 
>
> **3.5** 表单校验客户端表单校验的目的： 
>
> 保证输入的数据符合要求 
>
> 减轻服务器的压力 
>
> 通过onsubmit事件绑定回调函数，判断表单数据是否符合要求 
>
> 如果不符合要求，则返回false 
>
> 如果符合要求，则返回true 
>
> \5. 下拉列表 
>
> Select对象：表示HTML表单中的一个下拉列表 
>
> 属性
>
> length 
>
> 设置或返回下拉列表中选项的数量 
>
> selectedIndex 设置或返回下拉列表中被选中项的索引 
>
> value 
>
> 返回下拉列表中被选项项的值 
>
> options 
>
> 返回下拉列表中所有的选项，值为Option对象数组（当该数组改变时对应下拉列表中选项也会 
>
> 跟着改变） 
>
> 方法
>
> add() 向下拉列表中添加一个选项 
>
> 事件
>
> onchange 下拉列表的选项改变时触发 
>
> Option对象：表示HTML表单中下拉列表的一个选项 
>
> 属性
>
> text 设置或返回在页面中显示的文本值 
>
> value 
>
> 设置或返回传递给服务器的值 
>
> 构造函数 
>
> Option(文本值,服务器值) 
>
> 创建一个选项 