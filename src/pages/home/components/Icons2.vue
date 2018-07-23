<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">

				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-imgcontent" :src="item.imgUrl"></img>
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>

</template>

<script >
	export default{
		name:'HomeIcons',
		data() {
			return {
				// iconList:[],
				swiperOption:{
					autoplay:false
				}
			}
		},
		props:{
			iconList:Array
		},
		computed:{
			pages(){
				// 将一个一维数组计算变成了二维数组，这个二维数组的第一层控制了swiper的循环，第二层的每个元素控制了swiper中icon的展示
				const pages = []
				this.iconList.forEach((item,index)=>{
					// page---轮播图的页码
					const page = Math.floor(index / 8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
	
</script>

<style lang="stylus">
		.icons 
			height:0
			padding-bottom 50%
		
			.icon
				position relative
				overflow hidden
				width 25%
				height 0	
				float:left
				padding-bottom 25%
			
				.icon-img
					box-sizing border-box
					text-align center
					position absolute
					top 0px
					left 0px
					right 0px
					bottom .44rem
					padding .1rem
			
					.icon-imgcontent
						height 100%	
			
				

				.icon-desc
					position absolute
					right 0
					left 0
					bottom 0
					text-align center
					height .44rem
					line-height .44rem
					color #333
					overflow hidden
					white-space nowrap
					text-overflow ellipsis
		
</style>