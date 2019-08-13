import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		loginphone: '',
		content: ""
	},
	mutations: {
		setToken(state, val) {
			state.loginphone = val
			//console.log(val)
		},
		content(state, arr) {
			//console.log(arr)
		}
	}
})