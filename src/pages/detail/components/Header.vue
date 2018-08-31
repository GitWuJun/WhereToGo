<template>
	<div>
		<router-link
		tag="div"
		to="/"
		class="header-abs"
		v-show="showAbs">
			<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
		<div
		 class="header-fixed"
		  v-show="!showAbs"
		  :style="opacityStyle"
		  >
			景点详情
			<router-link to="/">
				<div class="iconfont header-back">&#xe624</div>
			</router-link>

		</div>
	</div>
</template>

<script>
	export default {
		name:"DetailHeader",
		data(){
			return{
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handleScroll(){
				//输出距离顶部滚动的距离
				// console.log(document.documentElement.scrollTop)
				const top = document.documentElement.scrollTop
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1?1:opacity
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				}else{
					this.showAbs = true
				}
			}
		},
		computed:{

		},

		//页面被展示时执行(keep-alive组件激活时调用)
		activated(){
			//对window全局事件的绑定，对其他界面也会影响
			window.addEventListener('scroll',this.handleScroll)
		},
		//页面将被隐藏时执行(keep-alive组件停用时调用)
		deactivated(){
			//将windows绑定的事件进行解绑
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
.header-abs
	position absolute
	left .2rem
	top .2rem
	width .8rem
	height .8rem
	line-height .8rem
	border-radius .4rem
	text-align center
	background rgba(0,0,0,0.8)
	
	.back-icon
		color #fff
		font-size .4rem
		
.header-fixed
	position fixed
	top 0
	left 0
	right 0
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
