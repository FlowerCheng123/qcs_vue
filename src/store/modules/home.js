
import HttpService from '../../service/HttpService'
import ApiUrl from '../../service/ApiUrl'

// mutations-type config
const Types = {
	GET_PRODUCT_REQUEST: 'GET_PRODUCT_REQUEST',
	GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
	GET_PRODUCTS_FAILED: 'GET_PRODUCTS_FAILED'
}

// init state
const state = {
	productList: []
}

// get filter data from state
const getters = {
    productList: state => state.productList
}

// init actions 
const actions = {
	getProducts ({ commit, state }){
		commit(Types.GET_PRODUCT_REQUEST)
		let apiObj = ApiUrl.getProducts;
		let options = {
    		apiObj: apiObj,
    		path: {
    			mmm:2
    		}
    	};
		HttpService.accessAPI( options, result => { commit( Types.GET_PRODUCTS_SUCCESS, { result } ) }, reason => commit( Types.GET_PRODUCTS_FAILED, { reason } ));
	}
}

// init mutations 
const mutations = {
	[Types.GET_PRODUCT_REQUEST] ( state ){
		state.productList = [];
	},
	[Types.GET_PRODUCTS_SUCCESS] ( state, { result } ){
		state.productList = result;
		console.log( 'mutations success', result );
	},
	[Types.GET_PRODUCTS_FAILED] ( state, { result } ){
		state.productList = result;
		console.log( 'mutations success', reason );
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}
