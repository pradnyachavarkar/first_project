define([
	'dojo/_base/declare',
	'dojo/request'
	],	function (declare, request){
	return declare('xhr', null, {
		getTweets: function(handle, callFunction){
			request.get('http://localhost:8080?author='+ handle, {
				handleAs: 'json'
			}).then(function(result){
					if(result['error'] == "Not authorized."){
						alert("Not authorized to fetch this user's tweets");
					}
					else {
						callFunction(result, handle);
					}
				},
				function err(){
					alert('Something went wrong!');
				}
			);
		}
	});
});