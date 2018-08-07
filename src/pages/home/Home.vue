
<template>
	<div>
		<!-- 父组件向子组件传递city -->
		<home-header ></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
		<!-- <home-weekend></home-weekend> -->
	</div>
</template>

<script>
	import axios from 'axios'


    //引用得都是局部组件
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons2'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import {mapState} from 'vuex'

	export default{
		name:'Home',
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data(){
			return{
				lastCity:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[],
			}
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			getHomeInfo(){
				axios.get('/static/mock/index.json?city='+this.city)
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				res = res.data
				if (res.ret&&res.data) {
					let data =  res.data
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}

				// console.log('====',this.swiperList)
			}
		},
		mounted(){
			this.getHomeInfo()
			this.lastCity = this.city
		},
		//当页面重新被显示时会被执行---使用keepalive前提
		activated(){
			if (this.lastCity !== this.city) {
				this.lastCity = this.city
				this.getHomeInfo()
			}
		}
	}
</script>

<style>

</style>
