<template>
	
	<div class="list" ref="wrapper">
		<div>
			<div class = "area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
					
				</div>
			</div>
			<div class = "area border-topbottom">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hotCities" :key="item.id"
					@click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class = "area border-topbottom" v-for="(value,key,item) of cities" 
			:key="key"
			:ref="key"
			>
				<div class="title" >{{key}}</div>
				<div class="item-list">
					<div 
					v-for="ite in value" 
					class="item border-bottom"
					@click="handleCityClick(ite.name)"
					>{{ite.name}}</div>
				</div>
			
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
	name:'CityList',
	props:{
		cities:Object,
		hotCities:Array,
		letter:String
	},
	methods:{
		handleCityClick(city){
			
			// this.$store.dispatch('changeCity',city)

			// alert(city)

			this.$store.commit('changeCity',city)

			this.$router.push('/')
			// this.$router.history.go(-1)
			// this.$store.state.city=city
		}
	},
	watch:{
			//=侦听letter的改变
			letter(){
				if (this.letter) {
					// console.log(this.letter)
					const element = this.$refs[this.letter][0]
					//滚动到指定区域
					this.scroll.scrollToElement(element)
				}
			}
		},
		mounted(){
			this.scroll = new Bscroll(this.$refs.wrapper,{
				click:true
			})

		},
	}
</script>

<style lang="stylus" scoped>
	.border-topbottom
		&:before
			border-color:#ccc
		&after
			border-color:#ccc
			
	.border-bottom
		&:before
			border-color:#ccc
		&after
			border-color:#ccc	
			
	.list
		overflow hidden
		position absolute
		top 1.58rem
		left 0px
		right 0px
		bottom 0px
		.title
			line-height .54rem
			background #eee
			padding-left .2rem
			color #666
			font-size .26rem
			
		.button-list
			overflow hidden
			padding .1rem .6rem .1rem .6rem
			
			.button-wrapper
				float left
				width 33.33%
			
				.button
					padding .1rem 0
					margin .1rem
					text-align center
					border .02rem solid #ccc
					border-radius .06rem
				
		
		.item-list
			.item
				line-height .76rem
				color #666
				padding-left .2rem

</style>