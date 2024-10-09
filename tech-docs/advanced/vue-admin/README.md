# `vue-pure-admin`学习

在[awesome-vite](https://github.com/vitejs/awesome-vite)中发现了后台项目[vue-pure-admin](https://github.com/pure-admin/vue-pure-admin)，看了一下，功能很全面，小记一下。

## UI设计

### 素材

一些免费svg矢量图：[https://undraw.co/illustrations](https://undraw.co/illustrations)

便捷的vue3动画效果库：[@vueuse/motion](https://motion.vueuse.org/)

### 全屏原理

点击按钮，网页就全屏。本质上是用了`@vueuse/core`中的`useFullscreen`，底层通过`document.fullscreenElement`判断是否全屏，通过`document.documentElement.requestFullscreen`和`document.documentElement.exitFullscreen`实现全屏。主要处理了兼容性问题。

### 主题色

全局通过CSS变量`--el-color-primary-xx`设置主题色，切换主题时，动态更改`--el-color-primary-xx`的值。

## 登录设计

前端划分为静态路由和动态路由，静态路由在页面加载时就初始化完毕，然后`router.beforeEach`中获取`localStorage`中的用户信息，如果没有跳转登录；如果有，就加载后端动态路由，通过`addRoute`动态添加路由。

> 这里并不是每次beforeEach都调接口获取后端路由，会判断没有`from.name`才会走到这个路径，正常页面内跳转是有`from.name`的。

路由权限方案感觉可以参考nuxt等等。
