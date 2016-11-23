/**
 * @author Flower
 * @description Http Service 
 */
import Util from './Util'
import Auth from './UserAuth'
import Vue from 'vue'

export default {
	accessAPI: ( opts, cb, errorCb ) => {
        let apiObj = opts.apiObj || {},
        apiUrl = apiObj.url,
        _method = apiObj.method,
        _noAuth = apiObj.noAuth || '',
        _body = opts.body || {},
        _path = opts.path,
        _query = opts.query || {};
        if( Util.isObject(_path) ){
            Object.keys(_path).forEach(key => {
                apiUrl = apiUrl.replace( ':'+key, _path[key] );
            })
        }
        // add query params
        if( _query && !Util.isEmptyObj(_query) ){
            if( apiUrl.indexOf('?')<0 ){
                apiUrl += '?'
            }else{
                let urlQuery = apiUrl.split('?')[1];
                if( urlQuery ){
                    let queryArr = urlQuery.split('&');
                    queryArr.map( value => {
                        if( value.indexOf('=')>=0 ){
                            let tempArr = value.split('=');
                            if( tempArr[0] && tempArr[1] ){
                                _query[tempArr[0]] = tempArr[1];
                            }
                        }
                    })
                }
                apiUrl = apiUrl.split('?')[0] + '?';
            }
            let queryCount = 0;
            Object.keys(_query).forEach(key => {
                let value = _query[key];
                if( queryCount>0 ){
                    apiUrl += '&';
                }
                apiUrl += (key+'='+value);
                queryCount ++;
            })
        }
        let ajaxFun = (token)=>{
            let userAuth = Auth.getUserAuth();//获取当前的userAuth信息
        	let options = {
                url: apiUrl,
        		method: _method,
        		timemout: '5000',
                headers:{}
        	};
            Vue.http( options ).then( response => cb(response.body.data), response => errorCb(response.body) )
        };
        ajaxFun();
	}
}

    // !_noAuth? options.headers["Authorization"] = 'Bearer ' + (token || userAuth.token) : '';
 //    fetch(apiUrl, options).then(function(res) {
//           alert()
       //  if (res.ok) {
       //      res.json().then(function(obj) {

       //          // 这样数据就转换成json格式的了
//                   cb(obj.data)
       //      })
       //  }else{
       //   defer.reject(obj)
//               errorCb(obj)
       //  }
    // }, function(ex) {
       //  console.log(ex)
//           errorCb(ex)
    // }) 


