---
title: React入门
top: false
cover: false
author: 柒林
toc: true
mathjax: true
date: 2021-11-18 14:37:40
password:
summary: react框架的简介，脚手架搭建、项目结构分析
tags: react
categories: 前端

---

> 摘要：react框架的简介，脚手架搭建、项目结构分析

<!--more-->


## 1.React简介

### 1.1React官网

> 1. 英文官网:[ https://reactjs.org/](https://reactjs.org/)
> 2. 中文官网: https://react.docschina.org/



### 1.2介绍描述

> * 用于动态构建用户界面的 JavaScript 库(只关注于视图)
> * 由Facebook开源



### 1.3React的特点

> * 声明式编码
> *  组件化编码
> * React Native 编写原生应用
> * 高效（优秀的Diffing算法）



### 1.4React高效的原因

> * 使用虚拟(virtual)DOM, 不总是直接操作页面真实DOM。
> * DOM Diffing算法, 最小化页面重绘。



## 2.React脚手架的使用



### 2.1什么是脚手架？

> * 脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
> * 包含了所有需要的配置（语法检查、jsx编译、devServer…）
> * 下载好了所有相关的依赖
> * 可以直接运行一个简单效果
>
> * React提供了一个用于创建react项目的脚手架库: create-react-app
>
> * 项目的整体技术架构为:  react + webpack + es6 + eslint
>
> * 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化



### 2.2创建脚手架并启动

> * 全局安装：npm i -g create-react-app
> * 切换到想创项目的目录，使用命令：create-react-app hello-react
> * 进入项目文件夹：cd hello-react
> * 启动项目：npm start



### 2.3React脚手架项目结构

> * public ---- 静态资源文件夹
>   * favicon.icon ------ 网站页签图标
>   * ==index.html--------主页面==
>   * logo192.png ------- logo图
>   * logo512.png ------- logo图
>   * manifest.json ----- 应用加壳的配置文件
>   * robots.txt -------- 爬虫协议文件
>
> * src ---- 源码文件夹
>
>   * App.css -------- App组件的样式
>
>   * ==App.js---------App组件==
>
>   * App.test.js ---- 用于给App做测试
>
>   * index.css ------ 样式
>
>   * ==index.js------入口文件==
>
>   * logo.svg ------- logo图
>
>   * reportWebVitals.js
>
>     --- 页面性能分析文件(需要web-vitals库的支持)
>
>   *  setupTests.js
>
> ​			 ---- 组件单元测试的文件(需要jest-dom库的支持)



### 2.4功能界面的组件化编码流程(通用)

> * 拆分组件: 拆分界面,抽取组件
>
> * 实现动态组件
>
>   * 动态显示初始化数据
>     * 数据类型
>     * 数据名称
>     * 保存在哪个组件?
>
>   * 交互(从绑定事件监听开始)































