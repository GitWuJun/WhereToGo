<template>
	
<div class="header">
	城市选择
	<router-link to="/">
	 <div class="iconfont header-back">&#xe624</div>
	</router-link>

</div>
</template>

<script>
	
	export default{
		name:'CityHeader'
	}
</script>

<style lang="stylus" scoped="">
	.header
		position relative
		height .86rem
		overflow hidden
		line-height .86rem
		text-align center
		color #fff
		background #00bcd4
		font-size .32rem
		
		.header-back
			color:#fff
			position absolute
			left 0px
			top 0px
			bottom 0px
			width .64rem
			text-align center
			font-size .4rem
			
</style>