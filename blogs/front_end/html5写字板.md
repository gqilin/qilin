---
title: html5写字板
top: false
cover: false
author: 柒林
toc: false
mathjax: fasle
date: 2021-07-12 11:46:40
password:
summary: 
tags: 前端基础
categories: 前端
---

> 摘要：利用html5的canvas，写一个移动端手绘板

<!--more-->

##### 代码块html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我来写</title>
</head>

<body>
    <!-- 点击弹出手写板 -->
    <span id="write">手写</span>
    <div id="write-wrapper">
        <div class="writing-wrapper">
            <div class="canvas" ontouchstart="canvasTouchEvent(event,'canvasStart')"
                ontouchmove="canvasTouchEvent(event,'canvasMove')" ontouchend="canvasTouchEvent(event,'canvasEnd')">
                <span class="title">写字<br />区域</span>
            </div>
            <button onclick="saveOrClear('clear')">清楚画布</button>
            <div id="get-back">
                <img src="./x.png" alt="">
            </div>
        </div>
    </div>
</body>
<style>
    div {
        box-sizing: border-box;
    }

    #write {
        padding: 10px 20px;
        background: rgb(0, 234, 255);
    }

    /*  */
    #write-wrapper {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        z-index: 2001;
        background-color: rgba(0, 0, 0, 0.3);
    }

    /* 手写板弹出框 */
    .writing-wrapper {
        position: relative;
        margin: 13vh auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-radius: 10px;
        width: 280px;
        height: 280px;
        background: #fff;
    }

    /* 手写板 */
    .canvas {
        width: 204px;
        height: 204px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fca664;
    }

    #get-back {
        position: absolute;
        bottom: -40px;
        width: 30px;
        height: 30px;
    }

    #get-back img {
        width: 100%;
    }

    .title {
        color: #999;
        font-size: 60px;
        position: absolute;
    }

    button {
        background: #fca664;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        color: #eeee;
    }
</style>
<script src="./writing.js"></script>

</html>

```

##### 代码块javaScript

```js
window.onload = function () {
    let write = document.getElementById("write")
    let writeWrapper = document.getElementById("write-wrapper")
    let getBack = document.getElementById("get-back")
    // 打开写字板弹框
    write.onclick = function () {
        writeWrapper.style.display = 'block'
    }
    // 关闭写字板弹框并清楚内容
    getBack.onclick = function () {
        writeWrapper.style.display = 'none'
        data.cxt.clearRect(0, 0, data.canvas.width, data.canvas.height);
        data.isSign = false;
        lineation();
        return false;
    }
}
const temp = {
    canvas: null, // 画布el对象
    cxt: null, // 上下文
    stageInfo: null, // 返回canvas的大小及位置
    isSign: false //未签名提示
}

const data = new Proxy(temp, {
    set(target, property, value, receiver) {
        if (property === 'isSign') {
            document.querySelector('.title').style.display = value ? 'none' : 'block'
            // console.log(value);
        }
        return Reflect.set(target, property, value);

    },
    get(target, key) {
        return Reflect.get(target, key);
    },
})

/*
*   画布初始化事件
*/
function initCanvas(obj) {
    data.canvas = document.createElement('canvas'); // 指定canvas
    obj.el.appendChild(data.canvas);
    data.cxt = data.canvas.getContext('2d'); // 设置2D渲染区域
    data.cxt.fillRect(0, 0, data.canvas.width, data.canvas.width);
    data.stageInfo = data.canvas.getBoundingClientRect();
    data.canvas.width = 200;
    data.canvas.height = 200;
    data.cxt.fillStyle = '#ffffff';
    data.cxt.lineCap = 'round';
    data.cxt.lineJoin = 'round';
    lineation()
}
// 画虚线
function lineation() {
    data.cxt.strokeStyle = 'red';
    data.cxt.lineWidth = 1;  // 设置线的宽度
    drawDashLine(data.cxt, 0, 0, 200, 200, 6);
    drawDashLine(data.cxt, 0, 200, 200, 0, 6);
    drawDashLine(data.cxt, 100, 0, 100, 200, 6);
    drawDashLine(data.cxt, 0, 100, 200, 100, 6);
}
//求斜边长度
function getBeveling(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function drawDashLine(context, x1, y1, x2, y2, dashLen) {
    dashLen = dashLen === undefined ? 5 : dashLen;
    //得到斜边的总长度
    var beveling = getBeveling(x2 - x1, y2 - y1);
    //计算有多少个线段
    var num = Math.floor(beveling / dashLen);

    for (var i = 0; i < num; i++) {
        context[i % 2 == 0 ? 'moveTo' : 'lineTo'](x1 + (x2 - x1) / num * i, y1 + (y2 - y1) / num * i);
    }
    context.stroke();
    context.strokeStyle = 'red';
}
/*
*   画布touch相关事件处理
*/
function canvasTouchEvent(e, type) {
    data.cxt.strokeStyle = '#222222';
    data.cxt.lineWidth = 9;  // 设置线的宽度

    const cxt = data.cxt;
    const postion = [e.changedTouches[0].pageX - 110, e.changedTouches[0].pageY - 120]
    const handle = {
        canvasStart: () => {
            cxt.beginPath();
            cxt.moveTo(...postion);
            // console.log(...postion);
        },
        canvasMove: () => {
            if (!e && !e.preventDefault) return;
            e.preventDefault();
            cxt.lineTo(...postion);
            cxt.stroke();
            data.isSign = true;
        },
        canvasEnd: () => cxt.closePath
    }
    handle[type]();
}

/*
*  清除和保存事件
*/
function saveOrClear(type) {
    if (type === 'clear') {
        data.cxt.clearRect(0, 0, data.canvas.width, data.canvas.height);
        data.isSign = false;
        lineation()
        return false;
    }

}

const p = new Proxy(data, {
    set(target, property, value, receiver) {
        console.log(key);
        if (property === 'isSign') {
            console.log('isSign');
        }
        return Reflect.set(target, key, value);

    }
})

setTimeout(() => {
    initCanvas({ el: document.querySelector('.canvas') });
})

```

