
<template>
	<div>
		<detail-banner
		:sightName = "sightName"
		:bannerImg = "bannerImg"
		:bannerImgs = "bannerImgs"
		></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import axios from 'axios'

	export default{
		name:'Detail',
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return{
				sightName:'',
				bannerImg:'',
				bannerImgs:'',
				list:[{
					title:'成人票',
					children:[{
						title:'成人三馆联票',
						children:[{
							title:'成人三馆联票 - 某一连锁店销售'
						}]
					},{
						title:'成人五馆联票'
					}]
				},
				{
					title:'学生票'
				},
				{
					title:'儿童票'
				},{
					title:'特惠票'
				}]
			}
		},

		mounted(){
		// console.log(this.$route.params.item.desc)
		this.getDetailInfo()
	},
	methods:{
		getDetailInfo(){
			// console.log(this.$route.params.item.id)
			// axios.get('api/detail.json')
			//进行axios请求
			axios.get('/static/mock/detail.json',{
				params:{
					id:this.$route.params.item.id
				}
			}).then(this.handleGetDataSucc)

		},
		handleGetDataSucc(res){
			// console.log(res)
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.bannerImgs = data.gallaryImgs
				this.list = data.categoryList
			}

		}
		
	}
}
</script>

<style lang="stylus" scoped>
.content
	height 50rem

</style>
