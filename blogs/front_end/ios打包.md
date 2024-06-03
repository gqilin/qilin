---
title: ios证书和描述文件申请
top: false
cover: false
author: 柒林
toc: true
mathjax: true
date: 2021-08-21 15:39:47
password:
summary: 记录自己在ios证书和描述文件申请过程中的步骤和遇到的一些问题
tags: uniApp
categories: 前端

---

> 摘要：记录自己在ios证书和描述文件申请过程中的步骤和遇到的一些问题

<!--more-->

# ios证书和描述文件申请



### 1.文件介绍

ios有两种证书(.p12)和描述文件(mobileprovision)：

| 证书类型                         | 使用场景                                                     |
| -------------------------------- | ------------------------------------------------------------ |
| 开发(Development)证书和描述文件  | 用于开发测试，在 HBuilderX 中打包后可在真机环境调试          |
| 发布(Distribution)证书和描述文件 | 用于提交 AppStore，在 HBuilderX 中提交云打包后提交到 AppStore 审核发布 |



### 2.准备环境

* 必需要有苹果开发者账号，并且加入了 “iOS Developer Program”
* Mac OS 10.9以上系统（如果已经申请p12证书则不需要

##### 登陆ios Dev Center

打开网站:https://developer.apple.com/enroll/app































