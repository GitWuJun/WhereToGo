<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list 
		:hotCities="hotCities" 
		:cities="cities"
		:letter="letter"></city-list>
		<city-alphabet 
		:cities="cities"
		@change="handleLetterChange"
		></city-alphabet>
	</div>
	
</template>

<script >
import axios from 'axios'


import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default{
	name:"City",
	components:{
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data(){
		return{
			cities:{},
			hotCities:[],
			letter:''
		}
	},
	methods:{
		getCityData(){
			axios.get('/static/mock/city.json')
			.then(this.getCityDataSucc)
		},
		getCityDataSucc(res){
			res = res.data
			if (res.ret&&res.data) {
				let data =  res.data
				this.cities =data.cities
				this.hotCities = data.hotCities

			}
		},
		handleLetterChange(letter){
			this.letter = letter
		}
	},
	mounted(){
		this.getCityData()
	}
}

</script>

<style lang="stylus" scoped="">

</style>