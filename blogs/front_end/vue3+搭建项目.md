---
title: Vue3配合TypeScript搭建项目结构
top: false
cover: false
toc: true
mathjax: true
date: 2022-09-19 09:31:36
password:
summary: vue3配合TypeScript搭建项目结构
tags: Vue
categories: 前端
---

> 摘要：vue3配合TypeScript搭建项目结构

<!--more-->

### 1.环境

* nodejs : 16.13.1
* @vue/cli : 5.0.8

### 2.使用 vue-cli 创建

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 卸载@vue/cli
npm uninstall vue-cli -g
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue3_test
## 启动
cd vue3_test
npm run serve
```

###### 1.是否使用镜像选择 （yes）

![](https://yufeng-images.oss-cn-qingdao.aliyuncs.com/image-bg/20220919100933.png)

###### 2.选择第三条手动选择功能

![](https://yufeng-images.oss-cn-qingdao.aliyuncs.com/image-bg/20220919101251.png)

###### 3.检查项目所需的功能：（按＜space＞选择，＜a＞切换全部，＜i＞反转选择

* **这里选择了1、2、4、5、6、7**

![](https://yufeng-images.oss-cn-qingdao.aliyuncs.com/image-bg/blog/2022/20220919102001.png)

*  1.Babel （是一个JavaScript编辑器）
*  2.TypeScript （这个是Ts）
* 3.Progressive Web App (PWA) Support （进步Web应用程序(PWA)支持）
* 4.Router （路由）
* 5.Vuex （vuex状态工具）
* 6.CSS Pre-processors （CSS预处理程序）
* 7.Linter / Formatter （短绒/格式化程序 换种意是就是开启严格模式）
*  8.Unit Testing （模块测试）
*  9.E2E Testing



###### 4.选择您想要开始项目的Vue.js版本 （选择：3.x）

![](https://yufeng-images.oss-cn-qingdao.aliyuncs.com/image-bg/blog/2022/20220919102703.png)

###### 5.五至十三步

~~~js
5.Use class-style component syntax? No
  使用类样式的组件语法?
  ##根据自己的情况而定，这里我选择了 No
  
6.Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
  ##根据自己的情况而定，这里我选择了 No

7.Use history mode for router? (Requires proper server setup for index fallback in production) No
  ##根据自己的情况而定，这里我选择了 No

8.Use history mode for router? (Requires proper server setup for index fallback in production) No
  路由器使用历史模式? (需要为生产中的索引回退设置适当的服务器)
  ##根据自己的情况而定，这里我选择了 No
9.Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
  选择一个CSS预处理器(默认支持PostCSS, Autoprefixer和CSS模块):(使用方向键)
  ##根据自己的情况而定，这里我选择了 Less
10.Pick a linter / formatter config: Standard
  选择一个linter / formatter配置:(使用箭头键)
  ##根据自己的情况而定，这里我选择了 ESLint + Standard config
11.Pick additional lint features: Lint on save
  选择其他lint特性:(按space选择，a切换所有，i反转选择)
  ##根据自己的情况而定，这里我选择了 Lint on save 保存时的Lint
12.Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
  你更喜欢把Babel, ESLint等配置放在哪里?
  ##根据自己的情况而定，这里我选择了 In dedicated config files 专用配置文件
13.Save this as a preset for future projects? No
  将此保存为未来项目的预设?
  ##根据自己的情况而定，这里我选择了 No
~~~

![](https://yufeng-images.oss-cn-qingdao.aliyuncs.com/image-bg/blog/2022/20220919104713.png)

### 