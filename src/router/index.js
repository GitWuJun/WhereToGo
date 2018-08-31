import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path:'/City',
		name:'City',
		component:City
	},
	{
		path:'/detail',
		name:'Detail',
		component:Detail
	}
	],

	//修复一个bug--让路由切换时，页面始终回到最顶部
	scrollBehavior: function (to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	}
})
