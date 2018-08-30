
<template>
	<div>
		<detail-banner></detail-banner>
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'

	export default{
		components:{
			DetailBanner
		},

		mounted(){
		// console.log(this.$route.params.item.desc)
	}
		
	}
</script>

<style>

</style>
