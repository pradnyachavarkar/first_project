function Xhr(){

	this.getTweets = function(handle){
		var xmlhttp = new XMLHttpRequest();
		var result = [];
		xmlhttp.open("GET", 'http://localhost:8080?author='+ handle, false);

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        result = JSON.parse(xmlhttp.responseText);
		    }
		}
		xmlhttp.send();
		return result;
	}
}