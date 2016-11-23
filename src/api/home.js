const apiUrl = 'https://apitest.quantumhealth.cn/customer/repos/subject/items';

import HttpService from '../service/HttpService'
import ApiUrl from '../service/ApiUrl'

export default {
    getProducts(cb, errorCb){
    	let apiObj = ApiUrl.getProducts;
    	let pGet = HttpService.accessAPI({
    		apiObj: apiObj,
    		noAuth: true,
    		path:{
    			id: '12345'
    		}
    	});
    	pGet.then(function(result){
            console.log( 'get product success', result );
            cb(result);
    	}, function(reason){
			errorCb(reason);
    	})
    }
}