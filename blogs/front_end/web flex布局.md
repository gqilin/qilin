---
title: web flex布局
top: false
cover: false
toc: true
mathjax: true
date: 2021-03-27 15:36:54
password:
summary: Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力
tags: 前端基础
categories: 前端

---

> 摘要：Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力

<!--more-->

#### 1.flex布局原理

>**1.flex布局原理**
>
>采用Flex布局的元素，成为Flex容器(flex container),简称“容器”。它的所有子元素自动成为容器成员，成为Flex项目(flex ite)，
>
>简称”项目“。
>
>* 体验中div 就是Flex父容器
>* 体验中span就是子容器flex项目
>* 子容器可以横向排列也可以纵向排列
>
>**==总结Flex布局原理：==**
>
>==就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式==





#### 2.父盒子常见属性

>**==1.flex-direction==**设置主轴方向
>
>flex-direction属性决定主轴的方向，即排列方向
>
>==注意：==主轴和侧轴是会变化的，就看flex设置谁为主轴，城下的就是侧轴，子元素是跟着主轴来排列的
>
>* row 默认值从左到右
>* column 从上到下
>
>**==2.justify-content==**设置主轴上的子元素排列方式
>
>==注意：==使用这个属性之前一定要确定好主轴是哪个
>
>* flex-start 默认值从头开始，如果主轴是X轴，则从左到右
>* flex-end从尾部开始排列
>* center 在主轴居中对齐
>* space-around 平分剩余空间
>* space-between 先两边贴边再平分剩余空间
>
>**==3.flex-wrap==**设置子元素是否换行
>
>默认情况下，项目都排列在同一条线上，默认不换行
>
>* nowrap 不换行
>* wrap 换行
>
>**==4.align-items==**设置侧轴上的子元素排列方式
>
>* flex-start 从上到下
>* flex-end 从下到上
>* center 垂直居中
>* stretch 拉伸（默认）
>
>**==4.flex-flow==**设置主轴方向和是否换行
>
>

#### 3.子盒子常见属性

>*  flex 子项目占的份数 
>*  lalign-self 控制子项自己在侧轴的排列方式 
>*  order属性定义子项的排列顺序（前后顺序）