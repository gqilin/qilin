---
title: vue3+vite+ts搭建框架
top: false
cover: false
toc: true
mathjax: true
date: 2022-12-23 10:21:16
password:
summary: 前端架构核心工作是定制一套适合当前业务需求的解决方案，从而降低需求的增加而带来的技术实现的复杂度
tags: Vue
categories: 前端

---

> 摘要：前端架构核心工作是定制一套适合当前业务需求的解决方案，从而降低需求的增加而带来的技术实现的复杂度

<!--more-->

~~~
前端架构核心工作是定制一套适合当前业务需求的解决方案，从而降低需求的增加而带来的技术实现的复杂度。下面我将从 12 个方向，逐渐带领大家搭建一套属于你自己的脚手架，制定一套合理的解决方案，为项目打下良好的基础，让团队形成合适的开发习惯。
~~~



### 搭建脚手架

> 现在 vite 生态已经比较完善了，所以重构脚手架，由 webpack 转向 vite，这一步极大的提升了开发体验

**使用的环境版本**

~~~
>node -v
v16.18.0

>npm -v
8.19.2
~~~

**创建项目基础模板**

~~~bash
npm init vite@latest
yarn create vite
pnpm create vite
~~~

然后按照提示操作即可，vite 提供的选项很少，只有 vue 或 vue + ts,我们选择vue + ts

在src根目录新建vite-env.d.ts 文件

~~~javascript
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module '*'
~~~





项目目录

~~~
├── public/
└── src/
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── style/                     // 通用 CSS 目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── vite-env.d.ts
├── .env.development               //开发环境配置
├── .env.production                //生产环境配置
├── .env.test                      //测试环境配置
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json                  // TypeScript 配置文件
├── tsconfig.node.json
└── vite.config.ts                 // Vite 配置文件
~~~





### 配置环境变量

> 开发环境：也就是编码时运行的环境，即我们使用npm run dev或者npm run serve运行项目到本地时，项目处于的环境。
>
> 测试环境：项目部署到服务器上后处于的环境，我们使用npm run build:test将项目打包以后，项目就运行在测试环境中了。
>
> 生产环境：项目部署到服务器上后处于的环境，我们使用npm run build:prod将项目打包以后，项目就运行在生产环境中了。
>
> 对于不同的环境，我们可以配置不同的环境变量，来实现开发和生产的兼容。

**新建配置文件**

在项目根目录新建三个配置文件：.env.development 、.env.staging、.env.production

.env.development文件：

~~~
# 开发环境配置

ENV = 'development'

APP_BASE_URL='http://development/api/'
~~~

.env.test文件：

~~~
# 测试环境配置

ENV = 'test'

APP_BASE_URL='http://test/api/'
~~~

.env.production文件

~~~
# 生产环境配置

ENV = 'production'

APP_BASE_URL = 'http://production/api/'
~~~

环境变量，需要在 `vite-env.d.ts` 中声明变量类型

~~~js
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module '*'
interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly APP_BASE_URL: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
~~~



在package.json文件中指定模式

~~~json
//--mode 一般在其他特殊自定义下指定使用
"scripts": {
    "dev": "vite",  //npm run dev 自动指定development
    "build:prod": "vue-tsc && vite build",  //npm run dev 自动指定production
    "build:test": "vue-tsc && vite build --mode test",
    "preview": "vite preview"
  }
~~~



**使用环境变量**

vite与vue-cli引用方式不同

~~~basic
// vue-cli
process.env.变量名

// vite
import.meta.env.变量名
~~~

在配置axios时使用全局baseUrl:

~~~javascript
const service = axios.create({
    baseURL: import.meta.env.APP_BASE_URL,
    timeout: 5000
})
~~~



### 配置Prettier 和Eslint

#### Prettier

> Prettier 是一个强大的代码格式化程序，支持：`JavaScript`、`JSX`、`Angular`、`Vue`、`Flow`、`TypeScript`、`HTML`、`JSON`、`YAML`...等。它删除所有原始样式并确保所有输出的代码符合一致的样式。

安装prettier

~~~javascript
npm install prettier -D              //版本 @2.8.3
~~~

创建配置文件 在项目根目录下面创建`.prettierrc`文件。（具体配置，可以查看[官网Options](https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Foptions.html)）

~~~json
{
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾不需要有分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 尾随逗号
    trailingComma: 'all',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf',
}
~~~

vscode中使用需要安装插件Prettier Code Formatter ，`ctrl+s`时就会读取`.prettierrc`文件中的配置

**.prettierignore 配置 prettier 忽略文件**

~~~json
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
~~~



#### Eslint

安装eslint 

~~~javascript
npm install eslint -D             //版本 @8.33.0
~~~

自动生成`Eslint`配置文件，详细见[官网自动生成配置](https://link.juejin.cn?target=http%3A%2F%2Feslint.cn%2Fdocs%2Fuser-guide%2Fgetting-started)。

在根目录执行npm脚本命令：

```js
//使用npx
npx eslint --init
//或者按照官网来
./node_modules/.bin/eslint --init
复制代码
```

根据命令提示，完成操作：

- How would you like to use ESLint? （你想如何使用eslint？）

  > To check syntax only（`只检查语法检查语法并发现问题`）
  > To check syntax and find problems（`检查语法并发现问题`）
  > **To check syntax, find problems, and enforce code style**（`检查语法，发现问题，并强制代码样式`） 我们选择 **To check syntax, find problems, and enforce code style**（检查语法、发现问题并强制执行代码风格）。

- What type of modules does your project use?（您的项目使用什么类型的模块?）

  > **JavaScript modules** (import/export)
  > CommonJS (require/exports)
  > None of these 我们选择 **JavaScript modules (import/export)**。

- Which framework does your project use? （你的项目使用什么框架？）

  > React
  > **Vue.js**
  > None of these（`这些中没有任何一个`） 我们选择**Vue.js**。

- Does your project use TypeScript?（你的项目中使用Typescript吗？）

  > **Yes**/No 我们选择**Yes**。

- Where does your code run?（你的代码运行在？）

  > Browser（`浏览器`）
  > Node（`Node`） 我们选择**Browser**

- How would you like to define a style for your project?（`你想给你的项目定义什么风格？`）

  > **Use a popular style guide**（`使用一个流行的风格指南`）
  > Answer questions about your style（`回答你关于风格的问题`）
  > Inspect your JavaScript file（`检查你的javascript文件`） 我们选择 **Use a popular style guide**（`使用一个流行的风格指南`）

- Which style guide do you want to follow? （`你想遵循是么样的风格指南？`）

  >  Airbnb: [github.com/airbnb/java…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript)
  >  **Standard: [github.com/standard/st…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstandard%2Fstandard) **
  >  Google: [github.com/google/esli…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fgoogle%2Feslint-config-google) 
  >  XO: [github.com/xojs/eslint…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fxojs%2Feslint-config-xo) 上面四种风格都是社区流行的javascript风格指南，我们选择 **Standard: [github.com/standard/st…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstandard%2Fstandard) ** 这个在github上面star最多的。

- What format do you want your config file to be in?（`你希望配置文件的格式是什么？`）

  > **JavaScript**
  > YAML
  > JSON 我们选择**javascript**格式的配置文件

- 最后一步就是，eslint根据上面我们选择的配置，来告诉我们：按照你这个配置，你需要安装哪些npm包，选择`Yes`就可以。

创建配置文件 在项目根目录下面创建`eslintrc.js`文件。

~~~
// 需要安装依赖:  npm i eslint-define-config
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    root: true,
    /* 指定如何解析语法。*/
    parser: 'vue-eslint-parser',
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
    globals: {
        Nullable: true,
    },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        // 'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.

        'plugin:vue/vue3-recommended',
        // 此条内容开启会导致 全局定义的 ts 类型报  no-undef 错误，因为
        // https://cn.eslint.org/docs/rules/
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        // 'no-undef': 'off',
        // 禁止使用 var
        'no-var': 'error',
        semi: 'off',
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        // 关闭此规则 使用 prettier 的格式化规则， 感觉prettier 更加合理，
        // 而且一起使用会有冲突
        'vue/max-attributes-per-line': ['off'],
        // 强制使用驼峰命名
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
    },
})
~~~



VSCode中使用Eslint需要安装Eslint插件

在项目的.vscode文件夹中的settings.json 添加局部配置

~~~json
{
    "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
    },
}
~~~

**.eslintignore 配置 eslint 忽略文件**

~~~json
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
.eslintrc.js
prettier.config.js
/src/mock/*
~~~



### 组件库

* **element-plus**

  * [element-plus.gitee.io/#/zh-CN](https://link.juejin.cn/?target=https%3A%2F%2Felement-plus.gitee.io%2F%23%2Fzh-CN)
  * Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库

  

* **vant**

  * [vant-contrib.gitee.io/vant/v3/#/z…](https://link.juejin.cn/?target=https%3A%2F%2Fvant-contrib.gitee.io%2Fvant%2Fv3%2F%23%2Fzh-CN)
  * 轻量、可靠的移动端 Vue 组件库
  * Vant 是有赞前端团队开源的移动端组件库，目前 Vant 已完成了对 Vue 3.0 的适配工作，并发布了 Vant 3.0 版本

  

* **VueUse**

  * [vueuse.org](https://link.juejin.cn/?target=https%3A%2F%2Fvueuse.org)/

  * 基于composition组合api的常用集合

    

* **nutui-bingo**

  * https://nutui.jd.com/bingo/#/
  * 由京东 NutUI 前端团队出品的一款基于 NutUI + Vue 3 的抽奖组件库，用于快速开发营销活动和小游戏场景的抽奖玩法。

### 组件的封装

#### 1.组件传值父传子

* 父组件的 `setup` 函数里面定义响应式数据 `prop`,并 `return` 出来
* 父组件的模板中通过 `:prop="prop"` 传递变量给子组件
* 子组件 通过 `props` 接收，可以直接在子组件模板中使用
* 子组件从父组件获取的值是只读的，不能直接修改

~~~js
<template>
  <div>
    <p>我是父组件</p>
    <button @click="fn">按钮</button>
    <!-- 使用子组件 -->
    <Son :msg="msg"></Son>
  </div>
</template>

<script lang="ts">
// 导入子组件
import Son from './components/Son.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  // 注册子组件
  components: {
    Son
  },
  setup () {
    // 设置父传子的值
    const msg = ref('')
    const fn = () => {
      msg.value = '这是父组件传给子组件的'
    }
    return { msg, fn }
  }
})
</script>
~~~

~~~js
<template>
  <div>
    <p>我是子组件----{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { watch,defineComponent } from 'vue'
export default defineComponent ({
  // 通过 props 接收父组件传过来的值(可以直接在模板中使用)
  // props 也可以是对象接收 建议用 可以设置数据的类型
  props：['msg'],  
  props: {
        msg: {
            type: String,
            default: '',
        },
    },
  setup (props，context) {
      //监听值的变化
       watch(
            () => props.msg,
            (newValue, oldValue) => {
                console.log('msg', newValue, oldValue)
            },
        )
      //子组件在特定时期，通过 context.emit('update:modelValue'，实参)，更新父组件的 prop
    return {}
  }
})
</script>
~~~

#### 2.组件传值子传父

- 父组件绑定自定义事件 ：@自定义事件名=“事件处理函数”
- 子组件在 `setup` 函数中，在特定时间通过 `context.emit('自定义事件名'，实参)` 触发父组件的自定义函数
- 父组件收到子组件传递过来的信号后，进行相应处理

~~~js
<template>
  <div>
    <p>我是子组件</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  // 里面是子传父的事件名，传多个值一定要写，不然会有警告
  emits:['sonHandler']
  // 子传父
  setup (props, context) { // context 这里也可以解构
    const fn = () => {
      context.emit('sonHandler', '这是子组件传给父组件的')
    }
    return { fn }
  }
})
</script>
~~~

~~~js
<template>
  <div>
    <p>我是父组件---{{ message }}</p>
    <!-- 使用子组件 Son -->
    <Son @sonHandler="sonHandlerFn"></Son>
  </div>
</template>

<script lang="ts">
// 导入子组件
import Son from './components/Son.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  // 注册子组件
  components: {
    Son
  },
  setup () {
    const message = ref('')
    const sonHandlerFn = (payload) => {
      message.value = payload
    }
    return { sonHandlerFn, message }
  }
})
</script>

~~~

#### 3.导入式组件

~~~js
import BButton from '@/components/import/BButton.vue'
<b-button text="最简单的导入组件"></b-button>
~~~

#### 4.全局组件

~~~js
import d from "@/config/d";
app.use(d)
//在页面中直接使用，不需要导入
<d-back-button text="这是全局导入的自定义组件，不需要在页面中单独导入"></d-back-button>
~~~



### 开发规范

> 引自《阿里规约》的开头片段：
>
> ​		现代软件架构的复杂性需要协同开发完成，如何高效地协同呢？无规矩不成方圆，无规范难以协同，比如，制订交通法规表面上是要限制行车权，实际上是保障公众的人身安全，试想如果没有限速，没有红绿灯，谁还敢上路行驶。对软件来说，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。

#### 1.命名约定

> ###### 1.1项目命名
>
> 采用==小写字母，以中划线分隔==命名方式，如：` mall-management-system`
>
> 
>
> ###### 1.2目录命名和文件命名
>
> 全部采用小驼峰方式，有复数结构时，要采用复数命名法， 缩写不用复数
>
> 如：`scripts / styles / components / images / utils / layouts / demoStyles / demoScripts / img / doc
>
> 
>
> ###### 1.4 id和class命名
>
> - 类名使用小写字母，以中划线分隔
>
> - id 采用==小驼峰==式命名
>
> - scss 中的变量、函数、混合、placeholder 采用小驼峰式命名
>
> 
>
> ###### 1.5Javascript 命名
>
> * 方法名、参数名、成员变量、局部变量都统一使用==小驼峰==，如： lowerCamelCase 风格。
>
> * method 方法命名应尽量使用 动词 或者 动词+名词 形式（文件最后附常用动词）
>
> * ==特此说明，增删查改、详情，统一使用如下 5 个单词==
>
> * `add / delete / update / get / detail `
>
> * api封装统一使用大驼峰命名，如GetGoodsInfo
>
> 
>
> ###### 1.6命名严谨性
>
> 代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 说明：正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式也要避免采用



#### 2.书写规范

> ##### 1.HTML
>
> * 在每一个块状元素，列表元素和表格元素后，加上对 HTML 注释,良好的代码注释能够传达上下文关系和代码目的，并且易于他人理解。
> * 在页面中尽量避免使用style属性，即style="…"。
> * 书写链接地址时，必须避免重定向，例如：href="http：//myVue.com/"，即须在URL地址后面加上“/”；
> * 重要图片必须加上alt属性。给重要的元素和截断的元素加上title。
>
> * HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标签
>
> 示例：
>
> ~~~html
> <header></header>
> <nav></nav>
> <footer></footer>
> ~~~
>
> ##### 2.CSS
>
> * id 和 class 的命名基本原则: 内容优先，表现为辅。首先根据内容来命名，如:#header,#footer,.main-nav.如根据内容无法找到合适的命名，可以再结合表现进行命名，如：col-main, col-sub, col-extra,blue-box 
>
> * id 和 class 的选择，如果只使用一次，使用id，如果使用多次使用class，如果需要和js交互，使用id。
>
> * 避免class与id重名 
>
> * ###### 尽量使用缩写格式
>
> ~~~css
> //推荐
> border-top: 0;
> font: 100%/1.6 palatino, georgia, serif;
> padding: 0 1em 2em;
> //不推荐
> border-top-style: none;
> font-family: palatino, georgia, serif;
> font-size: 100%;
> line-height: 1.6;
> padding-bottom: 2em;
> padding-left: 1em;
> padding-right: 1em;
> padding-top: 0;
> ~~~
>
> * ###### 每个选择器及属性独占一行
>
> ~~~css
> //推荐
> button{
>   width:100px;
>   height:50px;
>   color:#fff;
>   background:#00a0e9;
> }
> //不推荐
> button{
>   width:100px;height:50px;color:#fff;background:#00a0e9;
> }
> ~~~
>
> * ###### 省略0后面的单位
>
> ~~~css
> //推荐
> div{
>   padding-bottom: 0;
>   margin: 0;
> }
> ~~~
>
> ##### 3.javaScaript
>
> * 声明变量尽量使用 let 关键字.尽量不使用 var
> * 优先使用箭头函数
> * 回调函数规范
>   * 回调函数统一使用 Promise 函数,回调成功的参数统一为 res,错误参数为 err
>   * 私有函数以及回调函数统一放置在生命周期函数后,每个函数之间用一个空行分离结构,删除 js 文件中未用到的生命周期函数,保持代码的整洁,精简
>
> * 字符串统一使用单引号(‘)，不使用双引号(“)。这在创建 HTML 字符串非常有好处：
>
> 示例：
>
> ~~~js
> let str = 'foo';
> let testDiv = '<div id="test"></div>';
> ~~~
>
> * 使用字面值创建对象
>
> 示例：
>
> ~~~js
> let user = {};
> ~~~
>
> * 使用字面量来代替对象构造器
>
> 示例：
>
> ~~~js
> var user = {
>   age: 0,
>   name: 1,
>   city: 3
> };
> ~~~
>
> * 优先使用 ES6,7 中新增的语法糖和函数。这将简化你的程序，并让你的代码更加灵活和可复用。
> * 不要直接使用 undefined 进行变量判断；使用 typeof 和字符串’undefined’对变量进行判断。
>
> 示例：
>
> ~~~js
> if (typeof person === 'undefined') {
>     ...
> }
> ~~~
>
> * 条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断。



#### 3.CSS书写顺序

> 由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。
>
> * 布局定位属性：display / possitin / float / clear / visibility / overflow
> * 自身属性：width / height / margin / padding / border /background
> * 文本属性：color / font / text-decoration / text-align / vertical-align / white-space / break-word
> * 其他属性：content / cursor / border-radius / box-shadow / text-shadow ...

#### 4命名参考

##### 1.文件命名参考

###### (1)HTML

> * 首页：index.html
> * 搜索页面：search.html
> * 产品列表：productList.html
> * 产品详细页面：productDetail.html
> * 新闻列表：newsList.html
> * 新闻详细页面：newsDetail.html
> * 评论列表：commentList.html
> * 关于我们：about.html

###### (2)CSS

> * 主要的 master.css
>
> * 模块 module.css
>
> * 基本共用 base.css
>
> * 布局，版面 layout.css
>
> * 主题 themes.css
>
> * 专栏 columns.css
>
> * 文字 font.css
>
> * 表单 forms.css
>
> * 补丁 mend.css
>
> * 打印 print.css

##### 2.class命名参考

> * 页面外围控制整体布局宽度：wrapper
> * 容器：container
> * 头：header
> * 登录条：loginbar
> * 注册：register
> * 标志：logo
> * 内容：content/container
> * 尾：footer
> * 导航：nav
> * 子导航：subnav
> * 下载：download
> * 菜单：menu
> * 子菜单：submenu
> * 搜索：search
> * 搜索框：search_box
> * 侧栏：sidebar
> * 栏目：column
> * 左右中：left right center
> * 广告：banner
> * 页面主体：main
> * 热点：hot
> * 新闻：news
> * 友情链接：friendlink
> * 页脚：footer
> * 版权：copyright
> * 滚动：scroll
> * 内容：content
> * 标签页：tab
> * 文章列表：list
> * 提示信息：msg
> * 小技巧：tips
> * 栏目标题：title
> * 加入：joinus
> * 指南：guide
> * 服务：service
> * 状态：status
> * 投票：vote
> * 合作伙伴：partner

##### 3.id命名参考

###### (1) 页面结构

> * 容器: container
>
> * 页头：header
>
> * 内容：content/container
>
> * 页面主体：main
>
> * 页尾：footer
>
> * 导航：nav
>
> * 侧栏：sidebar
>
> * 栏目：column
>
> * 页面外围控制整体布局宽度：wrapper
>
> * 左右中：left right center

###### (2) 导航

> * 导航：nav
>
> * 主导航：mainnav
>
> * 子导航：subnav
>
> * 顶导航：topnav
>
> * 边导航：sidebar
>
> * 左导航：leftsidebar
>
> * 右导航：rightsidebar
>
> * 菜单：menu
>
> * 子菜单：submenu
>
> * 标题: title
>
> * 摘要: summary

###### (3) 功能

> * 标志：logo
> * 广告：banner
> * 登陆：login
> * 购物车：shopcar
> * 登录条：loginbar
> * 注册：regsiter
> * 搜索：search
> * 功能区：shop
> * 标题：title
> * 加入：joinus
> * 状态：status
> * 按钮：btn
> * 滚动：scroll
> * 标签页：tab
> * 文章列表：list
> * 提示信息：msg
> * 当前的: current
> * 小技巧：tips
> * 图标: icon
> * 注释：note
> * 指南：guide
> * 服务：service
> * 热点：hot
> * 热点词：hotwrods
> * 新闻：news
> * 下载：download
> * 投票：vote
> * 合作伙伴：partner
> * 友情链接：link
> * 版权：copyright

##### 4.函数方法常用词

> get 获取/set 设置,
> add 增加/remove 删除
> create 创建/destory 移除
> start 启动/stop 停止
> open 打开/close 关闭,
> read 读取/write 写入
> load 载入/save 保存,
> create 创建/destroy 销毁
> begin 开始/end 结束,
> backup 备份/restore 恢复
> import 导入/export 导出,
> split 分割/merge 合并
> inject 注入/extract 提取,
> attach 附着/detach 脱离
> bind 绑定/separate 分离,
> view 查看/browse 浏览
> edit 编辑/modify 修改,
> select 选取/mark 标记
> copy 复制/paste 粘贴,
> undo 撤销/redo 重做
> insert 插入/delete 移除,
> add 加入/append 添加
> clean 清理/clear 清除,
> index 索引/sort 排序
> find 查找/search 搜索,
> increase 增加/decrease 减少
> play 播放/pause 暂停,
> launch 启动/run 运行
> compile 编译/execute 执行,
> debug 调试/trace 跟踪
> observe 观察/listen 监听,
> build 构建/publish 发布
> input 输入/output 输出,
> encode 编码/decode 解码
> encrypt 加密/decrypt 解密,
> compress 压缩/decompress 解压缩
> pack 打包/unpack 解包,
> parse 解析/emit 生成
> connect 连接/disconnect 断开,
> send 发送/receive 接收
> download 下载/upload 上传,
> refresh 刷新/synchronize 同步
> update 更新/revert 复原,
> lock 锁定/unlock 解锁
> check out 签出/check in 签入,
> submit 提交/commit 交付
> push 推/pull 拉,
> expand 展开/collapse 折叠
> begin 起始/end 结束,
> start 开始/finish 完成
> enter 进入/exit 退出,
> abort 放弃/quit 离开
> obsolete 废弃/depreciate 废旧,
> collect 收集/aggregate 聚集



### 样式库

#### 1.创建样式库

新建library.scss

~~~scss
//通过指定的class命名规范进行命名，一个class代表一个css属性
.flex {
    display: flex;
}
.f-fd-r {
    flex-direction: row;
}
.f-jc-center {
    justify-content: center;
}
.f-jc-sa {
    justify-content: space-around;
}
.f-ai-c {
    align-items: center;
}
~~~

#### 2.通过scss的mixin 生成样式

新建config.scss

~~~scss
$width: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100); //宽度尺寸
$height: (10, 20, 30, 40, 50, 60, 70, 80, 90, 100); //高度尺寸
~~~

新建mixins.scss

~~~scss
@import './config.scss';

// 生成css样式
@mixin generateStyle() {
    // 内容宽度
    @each $width in $width {
        .w-#{$width} {
            width: #{$width}px;
        }
    }

    // 内容高度
    @each $height in $height {
        .h-#{$height} {
            height: #{$height}px;
        }
    }
}

@include generateStyle();
~~~

#### 3.使用方式

~~~vue
 <!-- 盒子宽：80px;盒子高：30px，需要的数值不存在时可在config.scss加入 -->
<div class="w-80 h-30">
</div>
~~~







### Pinia (vuex)

> 由于 vuex 4 对 typescript 的支持较差，所以状态管理弃用了 vuex 而采取了 pinia. pinia 的作者是 Vue 核心团队成员
>
> 相较于Vuex,Pinia上手更简单，mutations，并且actions支持同步或异步。

#### 安装

~~~
npm i pinia --save
~~~

#### 创建pinia

2.在src目录下创建store目录，并创建index.ts文件

~~~javascript
import { createPinia } from 'pinia'
const store = createPinia()
export default store
~~~

在main.ts中引入

~~~javascript
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)  //挂载pinia
app.mount('#app')
~~~

#### getters介绍

> Pinia 中的 getter 与 Vuex 中的 getter 、组件中的计算属性具有相同的功能



#### actions

> 这里与 `Vuex` 有极大的不同，`Pinia` 仅提供了一种方法来定义如何更改状态的规则，放弃 `mutations` 只依靠 `Actions`，这是一项重大的改变。

`Pinia` 让 `Actions` 更加的灵活：

- 可以通过组件或其他 `action` 调用
- 可以从其他 `store` 的 `action` 中调用
- 直接在 `store` 实例上调用
- 支持`同步`或`异步`
- 有任意数量的参数
- 可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
- 可以 `$patch` 方法直接更改状态属性



#### 新建state

在store目录中创建modules文件夹，新建user.ts配置常用的用户信息

~~~javascript
import { defineStore } from 'pinia'
export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '以和为贵',
            age: 20,
        }
    },
    getters: {
        // 计算姓名长度
        nameLength: (state) => state.name.length,
    },
    actions: {
        // 更新用户名
        updateName(name: string) {
            this.name = name
        },
        // 更新用户年龄
        updateAge(age: number) {
            this.age = age
        },
    },
})

~~~

#### vue文件中使用pinia

~~~vue
<template>
    <div>
        <div>名字:{{ userStore.name }}</div>
        <div>年纪:{{ userStore.age }}</div>
        <div>名字长度:{{ userStore.nameLength }}</div>
        <button @click="updateName()">更新用户姓名</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/store/modules/user'
export default defineComponent({
    setup() {
        const userStore = useUserStore()

        // 更新用户姓名
        function updateName() {
            // userStore.updateName('哈哈哈')  //调用actions中的方法修改用户名
            
            // 直接修改用户名
            userStore.$patch({
                name: '哈哈哈',
            })
        }

        return {
            userStore,
            updateName,
        }
    },
})
</script>
~~~



### 路由

安装vue-router

~~~javascript
npm install vue-router -S
~~~

#### 1.在src下创建router文件夹和index.ts

~~~javascript
/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        alias: '/Index',
        meta: {
            title: 'Index页面',
        },
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/menu/menu.vue'),
        alias: '/Menu',
        meta: {
            title: 'Menu页面',
            auth: true,
        },
    },
    {
        path: '/user/login',
        name: 'Login',
        component: () => import('@/views/user/login.vue'),
        alias: '/Login',
        meta: {
            title: 'Login页面',
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router

~~~

#### 2.在router文件夹创建permission.ts进行权限相关的业务处理

~~~javascript
import router from './index'

const loginRoutePath = '/user/login'
const defaultRoutePath = '/'
/**
 * 路由拦截
 * 权限验证
 */

router.beforeEach(
    async (
        to: { matched: any[]; path: string; fullPath: any; name: any },
        from: any,
        next: (
            arg0?: { path?: string; name?: string; query?: { redirect: any } } | undefined,
        ) => void,
    ) => {
        const token = localStorage.getItem('ACCESS_TOKEN')

        // 验证当前路由所有的匹配中是否需要有登录验证的
        if (to.matched.some((r) => r.meta.auth)) {
            // 是否存有token作为验证是否登录的条件
            if (token && token !== 'undefined') {
                if (to.path === loginRoutePath) {
                    next({ path: defaultRoutePath })
                } else {
                    next()
                }
            } else {
                // 没有登录的时候跳转到登录界面
                // 携带上登录成功之后需要跳转的页面完整路径
                next({
                    name: 'Login',
                    query: {
                        redirect: to.fullPath,
                    },
                })
            }
        } else {
            // 不需要身份校验 直接通过
            next()
        }
    },
)

// router.afterEach((to: { meta: { title: string } }) => {
//     setTitle(to.meta.title as string)
// })

~~~

#### 3.使用router

在main.ts中引用router

~~~javascript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import './router/permission'

const app = createApp(App)
app.use(router)
app.mount('#app')

~~~

App.vue

~~~vue
<script setup lang="ts"></script>

<template>
    <router-view />
</template>

<style scoped></style>
~~~

vue文件中使用router

~~~vue
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'  //引入router

export default defineComponent({
    setup() {
        const router = useRouter()
        
        //跳转到菜单
        function toMenu() {
            router.push({ path: '/menu', query: { a: 1, b: 2, c: 3 } })
        }
        return {
            toMenu,
        }
    },
})
</script>

<template>
    <div>
        <!-- 首页 -->
        <button @click="toMenu()">菜单</button>
    </div>
</template>

<style scoped>
</style>
~~~



### request请求

> 目前，关于vue中使用axios作为前端和后端接口交互的主流工具,axios整合vite+vue3.0+ts的具体封装步骤。

#### 1.安裝axios

~~~javascript
npm i axios         //版本 @1.3.1
~~~

#### 2.封装请求错误代码提示error-code-type.ts

~~~js
export const errorCodeType = function(code:string):string{
    let errMessage:string = "未知错误"
    switch (code) {
        case 400: 
        errMessage = '错误的请求' 
        break 
        case 401: 
        errMessage = '未授权，请重新登录' 
        break
        case 403: 
        errMessage = '拒绝访问' 
        break 
        case 404: 
        errMessage = '请求错误,未找到该资源' 
        break 
        case 405: 
        errMessage = '请求方法未允许' 
        break 
        case 408: 
        errMessage = '请求超时' 
        break 
        case 500: 
        errMessage = '服务器端出错' 
        break 
        case 501: 
        errMessage = '网络未实现' 
        break 
        case 502: 
        errMessage = '网络错误' 
        break 
        case 503: 
        errMessage = '服务不可用' 
        break 
        case 504: 
        errMessage = '网络超时' 
        break 
        case 505: 
        errMessage = 'http版本不支持该请求' 
        break 
        default: 
        errMessage = `其他连接错误 --${code}`
    }
    return errMessage
}
~~~

#### 3、封装request.ts

~~~javascript
import axios from 'axios'
import { errorCodeType } from './error-code-type'
// import { ElMessage, ElLoading } from 'element-plus';

// 创建axios实例
const service = axios.create({
    // 服务接口请求
    baseURL: import.meta.env.VITE_API_URL,
    // 超时设置
    timeout: 20000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

let loading: any
//正在请求的数量
let requestCount: number = 0
//显示loading
const showLoading = () => {
    if (requestCount === 0 && !loading) {
        //加载中显示样式可以自行修改
        // loading = ElLoading.service({
        //     text: '拼命加载中，请稍后...',
        //     background: 'rgba(0, 0, 0, 0.7)',
        //     spinner: 'el-icon-loading',
        // })
    }
    requestCount++
}
//隐藏loading
const hideLoading = () => {
    requestCount--
    if (requestCount == 0) {
        // loading.close()
    }
}

// 请求拦截
service.interceptors.request.use(
    (config) => {
        // showLoading()  //显示loading
        // 是否需要设置 token放在请求头
        // config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        // get请求映射params参数
        if (config.method === 'get' && config.params) {
            let url = config.url + '?'
            for (const propName of Object.keys(config.params)) {
                const value = config.params[propName]
                var part = encodeURIComponent(propName) + '='
                if (value !== null && typeof value !== 'undefined') {
                    // 对象处理
                    if (typeof value === 'object') {
                        for (const key of Object.keys(value)) {
                            let params = propName + '[' + key + ']'
                            var subPart = encodeURIComponent(params) + '='
                            url += subPart + encodeURIComponent(value[key]) + '&'
                        }
                    } else {
                        url += part + encodeURIComponent(value) + '&'
                    }
                }
            }
            url = url.slice(0, -1)
            config.params = {}
            config.url = url
        }
        return config
    },
    (error) => {
        console.log(error)
        Promise.reject(error)
    },
)

// 响应拦截器
service.interceptors.response.use(
    (res: any) => {
        hideLoading()
        // 未设置状态码则默认成功状态
        const code = res.data['code'] || 200
        // 获取错误信息
        const msg = errorCodeType(code) || res.data['msg'] || errorCodeType(0)
        if (code === 200) {
            return Promise.resolve(res.data)
        } else {
            // ElMessage.error(msg)
            return Promise.reject(res.data)
        }
    },
    (error) => {
        console.log('err' + error)
        hideLoading()
        let { message } = error
        if (message == 'Network Error') {
            message = '后端接口连接异常'
        } else if (message.includes('timeout')) {
            message = '系统接口请求超时'
        } else if (message.includes('Request failed with status code')) {
            message = '系统接口' + message.substr(message.length - 3) + '异常'
        }
        // ElMessage.error({
        //     message: message,
        //     duration: 5 * 1000,
        // })
        return Promise.reject(error)
    },
)

export default service
~~~

#### 4.api封装

在src目录下的api文件夹中新建index.ts

~~~js
import request from '@/utils/request'

// 获取商品信息
export function GetGoodsInfo(params: { goodsId: string }) {
    return request({
        url: '/ouchn-customapi/device/goods/selGoodsById',
        method: 'get',
        params,
    })
}
~~~

#### 5.vue文件中使用api

~~~vue
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { GetGoodsInfo } from '@/api/index'
export default defineComponent({
    setup() {
        // 获取商品信息
        function getGoodsInfo() {
            GetGoodsInfo({ goodsId: '1627500930050166784' }).then((res) => {
                console.log(res)
            })
        }

        onMounted(() => {
            getGoodsInfo()
        })
    },
})
</script>
~~~



### 插件

#### Prettier Code Formatter

![](E:\project_template\doc\images\Snipaste_2023-02-24_11-40-59.png)

#### Eslint

![](E:\project_template\doc\images\Snipaste_2023-02-24_14-04-09.png)

#### x-translator

![](E:\project_template\doc\images\Snipaste_2023-02-24_14-05-57.png)

#### Auto Close Tag

![](E:\project_template\doc\images\Snipaste_2023-02-24_14-08-21.png)

#### Auto Rename Tag

![](E:\project_template\doc\images\Snipaste_2023-02-24_14-09-17.png)

#### Vue3 Snippets

![](E:\project_template\doc\images\Snipaste_2023-02-24_14-14-50.png)

