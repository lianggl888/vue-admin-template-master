import Vue from 'vue'
import VueCesium from 'vue-cesium'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './assets/iconfont/iconfont.css'// 阿里字体图标库
import '@/icons' // icon
import '@/permission' // permission control
import 'cesium/Widgets/widgets.css'

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyY2NmOWE3MS00Y2VhLTQ0YTYtYTU5Yy1iY2JlMjY0MTIwMzMiLCJpZCI6NDQ4NDMsImlhdCI6MTYxNDQ3ODQwNn0.WjkwFeef-TYDWtysNlTkFhOABthMGgpDMoowV6vQ8X8'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
  // cesiumPath: /static/Cesium/Cesium.js
  // 个人在线Cesium Build包：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // 官方在线Cesium Build包，有CDN加速，推荐用这个：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致Cesium在线影像加载不了
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyY2NmOWE3MS00Y2VhLTQ0YTYtYTU5Yy1iY2JlMjY0MTIwMzMiLCJpZCI6NDQ4NDMsImlhdCI6MTYxNDQ3ODQwNn0.WjkwFeef-TYDWtysNlTkFhOABthMGgpDMoowV6vQ8X8'
})
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
