var xmlhttp = new XMLHttpRequest();
// var xmlhttp = new createCORSRequest("GET", 'http://localhost:8080', true);
var searchedUsers = [];

function loadTweets(){
	var author = document.getElementById('search_box').value;

	searchedUsers += author;
	
	xmlhttp.open("GET", 'http://localhost:8080?author='+author, true);

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var result = xmlhttp.responseText;
	        console.log(result);
	        if(result.search("Not authorized") != -1 || result.length <= 2){
	        	alert("Not authorized to fetch this user's tweets");
	        }
	        else{
		        display(JSON.parse(result), author);
		    }
	    }
	}
	
	xmlhttp.send();

	function display(arr, user) {
		var ul = document.createElement('ul');
		ul.setAttribute('id', 'user_' + user);
		document.getElementById('tweetlist').appendChild(ul);

	    var out = "";
	    for(var i = 0; i < arr.length; i++) {
		    // out += arr[i]['user']['name'] + ":  " + arr[i]['text'] + "<br/><br/>";
	        var li = document.createElement('li');
            li.setAttribute('class','tweet');
            ul.appendChild(li);
            // t = document.createTextNode(element);
            li.innerHTML =  arr[i]['user']['name'] + ":  " + arr[i]['text'];
	    }
	   // document.getElementById('tweetlist').innerHTML  = out;
	}
}
