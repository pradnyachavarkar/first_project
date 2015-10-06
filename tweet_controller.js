


var xmlhttp = new XMLHttpRequest();

var searchedUsers = [];
var searchedTags = [];
var tlist = new tweetList();

function loadTweets(){
	var author = document.getElementById('search_box').value;

	if(searchedUsers.indexOf(author) == -1){

		xmlhttp.open("GET", 'http://localhost:8080?author='+ author, true);

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var result = xmlhttp.responseText;
		        //console.log(result);
		        if(result.search("Not authorized") != -1 || result.length <= 2){
		        	alert("Not authorized to fetch this user's tweets");
		        }
		        else{
			        display(JSON.parse(result), author);
			    }
		    }
		}
		
		xmlhttp.send();
	}
	else{
		alert('Tweets for this user already displayed');
	}


}

function filterTweets(){
	filter(tlist);
}

function display(arr, user) {	
	var ul = document.createElement('ul');
	ul.setAttribute('id', 'user_' + user);	
	ul.setAttribute('class','userclass_' + user);
	document.getElementById('tweetlist').appendChild(ul);
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        //var t = new tweet(arr[i]['user']['name'], arr[i]['text']);
        var t = new tweet(user, arr[i]['text']);
        tlist.addTweet(t);

        var li = document.createElement('li');
        li.setAttribute('class','userclass_' + user);
        li.setAttribute('id', 'tweet_' + user + '_' + i);	
        ul.appendChild(li);
        li.innerHTML =  t.author + ":  " + t.message;
    }

    //Update users filter list
	var allUsers = tlist.getAllUsers();
	for(var j = 0; j < allUsers.length; j++){
		if(searchedUsers.indexOf(allUsers[j]) == -1){
			updateList(allUsers[j], 'user_list');
			searchedUsers.push(user);
		}
	}
	
	//Update hashtag filter list
	var allTags = tlist.getAllTags();
	console.log(allTags);
	console.log(searchedTags);
	for(var j = 0; j < allTags.length; j++){
		if(searchedTags.indexOf(allTags[j]) == -1){
			updateList(allTags[j], 'tag_list');
			searchedTags.push(allTags[j]);
		}
	}
}

function updateList(value, elementId){
	if(value.length > 0){
		var label = document.createElement("label");
		var desc = document.createTextNode(value);
		var checkbox = document.createElement("input");

		checkbox.type = "checkbox";
		checkbox.className = "chk_" + elementId;
		checkbox.name = "chk_" +  value;
		checkbox.value = value;

		label.appendChild(checkbox);
		label.appendChild(desc);

		document.getElementById(elementId).appendChild(label);
		document.getElementById(elementId).appendChild(document.createElement("br"));
	}
}