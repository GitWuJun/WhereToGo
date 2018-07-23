<template>
	<div>
		<div class="recommend-title">热销</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommednList">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>

		</ul>
	</div>
</template>
<script >
	export default{
		name:'HomeRecommend',
		data(){
			return {
				recommednList:[
				{
					imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
					title:'成都海昌极地海洋公园',
					desc:'在如梦如幻般海洋公园，美人鱼和色彩斑斓的鱼儿翩翩起舞，美轮美奂'
				}
				,
				{
					imgUrl:'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
					title:'成都熊猫基地',
					desc:'这是专门为保护大熊猫修建的，你可以近距离和憨态可掬的熊猫们接触啦！'
				},
				{
					imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
					title:'成都海昌极地海洋公园',
					desc:'在如梦如幻般海洋公园，美人鱼和色彩斑斓的鱼儿翩翩起舞，美轮美奂'
				}
				,
				{
					imgUrl:'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
					title:'成都熊猫基地',
					desc:'这是专门为保护大熊猫修建的，你可以近距离和憨态可掬的熊猫们接触啦！'
				},
				{
					imgUrl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
					title:'成都海昌极地海洋公园',
					desc:'在如梦如幻般海洋公园，美人鱼和色彩斑斓的鱼儿翩翩起舞，美轮美奂'
				}
				,
				{
					imgUrl:'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
					title:'成都熊猫基地',
					desc:'这是专门为保护大熊猫修建的，你可以近距离和憨态可掬的熊猫们接触啦！'
				},
				],
			}
		}
	}

</script>

<style lang="stylus" scoped>
	.recommend-title
		background #eee
		margin-top .2rem
		line-height :.8rem
		text-indent .2rem
		
	.item
		overflow hidden
		display flex
		height 1.9rem
		
		.item-img
			width 1.7rem
			height 1.7rem
			padding .1rem
			
		.item-info
			flex 1
			padding .1rem
			overflow hidden

			
			
			.item-title
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				line-height .54rem
				font-size .32rem
			.item-desc
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				line-height .4rem
				color #ccc
				
		.item-button
			line-height .44rem
			color white
			margin-top .16rem
			background #ff9300
			padding 0 .2rem
			border-radius .06rem
			
</style>