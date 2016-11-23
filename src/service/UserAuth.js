/**
 * @author Flower
 * @description this is an Auth tool
 */

export default {
	getUserAuth: () => {
        let userAuth = localStorage.getItem( 'userAuth' ) || JSON.stringify( { userName: '', userId: '', token: ''} );
            userAuth = JSON.parse(userAuth);
		return userAuth;
	},
	setUserAuth: ( userObj ) => {
	    if( typeof userObj !== 'object' || userObj instanceof Array ) 
	    	return console.error( 'the user auth must be an object' );
	    let _userAuth = this.getUserAuth();
	    for(let pro in _userAuth){
	    	if( userObj.hasOwnProperty(pro) ){
	    		_userAuth[pro] = userObj[pro];
	    	}
	    }
	    localStorage.setItem( 'userAuth', JSON.stringify( _userAuth ) ) ;
	    return _userAuth;
	}
}