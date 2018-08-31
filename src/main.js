// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决300ms点击延迟的问题    需要先安装模块--npm install fastclick --save
import fastClick from 'fastclick'
//重置浏览器标签的样式表--让项目在不同浏览器中的样式一致
import 'styles/reset.css'
//解决在部分手机上由于浏览器版本过低不支持es6语法而导致页面白屏的问题
import "babel-polyfill"
//解决1像素边框问题
import 'styles/border.css'
//引用iconfont文件
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */

//挂载点就是index.html中的app div
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
