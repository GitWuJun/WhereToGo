<template>
	<div class="icons">
		<swiper > 
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
				iconList:[
				{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'热门景点'
				},
				{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
					desc:'水上乐园'
				},
				{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'成都必游'
				},
				{
					id:'0004',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
					desc:'成都定制游'
				},
				{
					id:'0005',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'亲子游'
				},
				{
					id:'0006',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'海洋馆'
				},
				{
					id:'0007',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'一日游'
				},
				{
					id:'0008',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'游乐场'
				},
				{
					id:'0009',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'游乐场2'
				},
				],
			}
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
	.icons >>> .swiper-container
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
				text-align center
				position absolute
				top 0px
				left 0px
				right 0px
				bottom .44rem
				box-sizing border-box
				padding .1rem
			
				.icon-imgcontent
					
					height 100%
					
			.icon-desc
				text-align center
				position absolute
				left 0
				right 0
				bottom 0
				height .44rem
				line-height .44rem
				color #333
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				
			
				
</style>