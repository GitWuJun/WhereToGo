<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg"/>
			<div class="banner-info">
				<div class="banner-title">
					故宫XXXXX
				</div>

				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe692;</span>
					39
				</div>
			</div>
		</div>
		<common-gallary
		v-show="showGallary"
		:imgs="bannerImgs"
		@close="handleGallaryClose">
			
		</common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		name:'DetailBanner',
		props:{
			sightName:String,
			bannerImg:String,
			bannerImgs:Array
		},
		data(){
			return{
				showGallary:false,
				// imgs:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535629888077&di=3181d28709fb3fc41f1ff0c7dc720234&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0157ba55457ea80000019ae99c9974.jpg%401280w_1l_2o_100sh.jpg',
				// 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535629888077&di=ad77fa02e4220921660eecb23acd92af&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014dbb5a204c17a80120ba387e45a5.jpg%401280w_1l_2o_100sh.jpg',
				// 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535629888077&di=3186ebde5eea4e0508d25c63df0f5dc0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcc11728b4710b912fcc749f6c9fdfc03924522b7.jpg']
			}
		},
		components:{
			CommonGallary
		},
		methods:{
			handleBannerClick:function(){
				this.showGallary = true
			},
			handleGallaryClose:function(){
				this.showGallary = false

			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	.banner
		color white
		position relative
		overflow hidden
		height 0
		padding-bottom 55%
		
		.banner-img
			width:100%
			
		.banner-info
			display flex 
			position absolute
			align-items:center
			left 0
			right 0px
			bottom 0px
			line-height .6rem
			background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.9))
			.banner-title
				font-size .32rem
				padding 0 .2rem
				flex 1
			.banner-number
				
				font-size .24rem
				padding 0 .4rem
				height .32rem
				line-height .32rem
				border-radius .2rem
				background rgba(0,0,0,0.8)
				
				.banner-icon
					font-size .24rem
				

</style>