<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of weekendList">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>

		</ul>
	</div>
</template>
<script >
	export default{
		name:'HomeWeekend',
		data(){
			return {
				
			}
		},
		props:{
			weekendList:Array
		}
	}

</script>

<style lang="stylus" scoped>
	.recommend-title
		background #eee
		line-height :.8rem
		text-indent .2rem
		
	.item-img-wrapper
		overflow hidden
		height 0
		width 100%
		padding-bottom 37.9%
		
		
		.item-img
			width 100%
		
	.item-info
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
			
	
			
</style>