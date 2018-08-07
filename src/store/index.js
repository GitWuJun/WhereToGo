import Vue from 'vue'
import Vuex from 'vuex'

//将state拆分了出去，mutations也可以拆分出去
import state from './state.js'

Vue.use(Vuex)



export default new Vuex.Store({
	state:state,
	actions:{
		changeCity(ctx,city){
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		changeCity(state,city){
			state.city = city
			try {
			localStorage.city = city
			} catch (e){

			}
		}
	}
})