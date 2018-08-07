<template>

	<ul class="list">
		<li class="item" 
		v-for="item of letters"
		:key="item"
		@click="handleLetterClick"
		@touchstart="handletouchstart"
		@touchmove="handletouchmove"
		@touchend="handletouchend"
		:ref="item"
		>{{item}}</li>
	</ul>

</template>

<script>
	
	export default{
		name:'CityAlphabet',
		data(){
			return{
				touchStatus:false,
				startY:0,
				timer:null
			}
		},
		props:{
			cities:Object,

		},
		computed:{
			letters(){
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		methods:{
			handleLetterClick(e){
				//兄弟组件间得传值--先传递给父组件，再转发给兄弟组件

				//向父组件发射一个事件并携带参数
				this.$emit('change',e.target.innerText)
				// console.log(e.target.innerText)
			},
			handletouchstart(){
				this.touchStatus = true

			},
			handletouchmove(e){
				if (this.touchStatus) {

					//函数截流？？
					if (this.timer) {
						clearTimeout(this.timer)
					}

					this.timer  = setTimeout(()=>{
						const starty1 = this.startY
						const starty2 = this.$refs['B'][0].offsetTop

					// 每个字母的高度
					const height = starty2 - starty1
					//
					const starty = e.touches[0].clientY-74

					let index = Math.floor((starty - starty1)/height)

					this.$emit('change',this.letters[index])
				},16)
					
					

				}
			},
			handletouchend(){
				this.touchStatus = false

			}
		},

//当页面数据更新时触发
		updated(){
			this.startY = this.$refs['A'][0].offsetTop
		}
	}
</script>

<style lang="stylus" scoped="">
	.list
		display flex
		text-align center
		flex-direction column
		justify-content center
		position absolute
		right 0px
		top 1.58rem
		bottom 0
		width .4rem
		
		.item
			line-height .44rem
			color #00bcd4
</style>