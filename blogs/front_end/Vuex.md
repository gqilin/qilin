---
title: Vuex安装以及使用
top: false
cover: false
author: 柒林
toc: true
mathjax: true
date: 2021-10-22 14:46:40
password:
summary: 记录学习Vuex的安装使用，和模块化封装
tags: Vue
categories: 前端
---
> 摘要：记录学习Vuex的安装使用，和模块化封装

<!--more-->
### 1.安装Vuex

> 前言： 在2022年2月7日，Vue3成为了默认版本，npm i vue,安装的直接就是Vue3了，Vue3成为默认版本的同时，Vuex也更新到了4版本，
>
> 所有直接运行 npm i vuex,安装的是Vuex4版本，Vuex的4版本，只能在Vue3中使用，Vue2 安装Vuex3版本，Vue3安装Vuex4版本

~~~apl
安装命令：npm i vuex
vue2版本执行：npm i vuex@3
~~~



### 2.创建store文件夹

> 在根目录创建一个store文件夹，文件夹中创建index.js文件

~~~~js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建并暴露Store
const store = new Vuex.Store({

	//定义状态
	state: {
		userId: '',
		name: '张三',
		age: 18
	},

	//用于处理异步操作getprodById
	actions: {
		// 一秒后清除用户Id
		removeUserId(context) {
			setTimeout(() => {
				context.commit('RemoveUserId')
			}, 1000)
		}
	},

	//修改状态
	mutations: {
		// 保存用户Id
		SaveUserId(state, userId) {
			state.userId = userId
			uni.setStorageSync('userId', userId)
		},

		// 删除用户Id
		RemoveUserId(state) {
			state.userId = ''
			uni.removeStorageSync('userId')
		}
	},

	//用于计算属性
	getters: {
		//计算商品总价
		totalPrice(state, getter) {
			return getter.selectList.reduce((price, prod) => {
				return price + prod.count * prod.price
			}, 0)
		},
	}
})

export default store

~~~~



### 3.全局引用store

~~~js
//main.js文件中

import store from './store'

const app = new Vue({
	store,
    ...App
})
~~~



### 4.组件中使用Vuex

~~~vue
<template>
  <view id="app">
	<view id="demo">
		<text>姓名:{{$store.state.name}}</text>
		<text>{{$store.getters.processing}}</text>
		<text>ID:{{$store.state.userId}}</text>
	</view>
	<view class="bnt">
		<button type="default" @click="SaveUserId">保存用户ID</button>
		<button type="default" @click="removeUserId">1秒后清除用户ID</button>
	</view>
  </view>
</template>
<script>
  export default {
    name: 'App',
	data() {
	  return {
	  };
	},
	mounted() {
		
	},
	methods:{
		
		// 保存用户ID
		SaveUserId(){
			this.$store.commit('SaveUserId','我是用户的ID')
		},
		
		// 1秒后清除用户ID
		removeUserId(){
			this.$store.dispatch('removeUserId')
		}
	}
  }
</script>

~~~



### 5.Vuex模块化

> 在根目录创建一个store文件夹，文件夹中创建index.js文件和methods文件夹， 接着在methods文件夹中创建user.js 用户模块、order.js 订单模块...

~~~js
//index.js文件

import Vue from 'vue'
import Vuex from 'vuex'
// 引入用户模块的数据
import user from './methods/user'

Vue.use(Vuex)

// 创建并暴露Store
export default new Vuex.Store({
	modules: {
		user
	}
})
~~~



###### user.js文件

~~~js
// 用户相关的配置
export default {
	namespaced: true,

	// 储存数据
	state: {
		userId: uni.getStorageSync('userId'),
		name: '张三',
		age: 18
	},

	// 响应组件中的动作(异步处理)
	actions: {
		removeUserId(context) {
			setTimeout(() => {
				context.commit('RemoveUserId')
			}, 1000)
		}
	},

	// 操作数据
	mutations: {

		// 保存用户Id
		SaveUserId(state, userId) {
			state.userId = userId
			uni.setStorageSync('userId', userId)
		},

		// 删除用户Id
		RemoveUserId(state) {
			state.userId = ''
			uni.removeStorageSync('userId')
		}
	},

	// 加工State中的数据
	getters: {
		// 处理年龄数据格式
		processing(state) {
			return '今年' + state.age + '岁'
		}
	}
}

~~~



###### 使用方式

~~~vue
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<view class="">
                <text class="title">{{name}}</text>
				<text class="title">{{processing}}</text>
				<text class="title">{{userId}}</text>
			</view>
			<view class="">
				<button type="default" @click="SaveUserId('我是用户Idddd')">保存用户ID</button>
				<button type="default" @click="removeUserId()">1秒后清除用户ID</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetClassList
	} from '../api/index.js'
	import {
		mapState,
		mapActions,
		mapMutations,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
			...mapState('user', ['userId']),
			...mapGetters('user', ['processing'])
		},
		mounted() {
			console.log(this.$store)
		},
		methods: {
			...mapMutations('user', ['SaveUserId']),
			...mapActions('user', ['removeUserId'])
		}
	}
</script>
~~~





















