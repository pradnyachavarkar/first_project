function filter(tlist){
	var inputElements = document.getElementsByClassName("chk_user_list");
	var usernames = [];
	for(var j = 0; inputElements[j]; ++j){
		if(inputElements[j].checked)
			usernames.push(inputElements[j].value);
	}
	console.log("selected users: " + usernames);
	var tagElements = document.querySelectorAll('input[class="chk_tag_list"]:checked');
	//var tagElements = document.getElementsByClassName("chk_tag_list"); 
	var tags = [];
	for(var j = 0; tagElements[j]; ++j){
		//if(tagElements[j].checked) 
			tags.push(tagElements[j].value);
	}		
	console.log("selected tags: " + tags);

	var users = tlist.getAllUsers();
	for(var k = 0; k < users.length; k++){
		var val = users[k];
		var elems = document.getElementsByClassName('userclass_' + val);
		console.log(elems);
		for(var l = 0; l < elems.length; l++){ elems[l].style.display = 'none'; }
		
		if(usernames.indexOf(val) != -1){
			document.getElementById('user_' + val).style.display = 'block';
			var userTweets = tlist.getTweetsByUser(val);
			if(tags.length > 0){
				for(var i = 0 ; i < userTweets.length; i++){
					for(var j = 0; j < tags.length; j++){
						if(userTweets[i].hashtags.indexOf(tags[j]) != -1){
							document.getElementById('tweet_' + val + '_' + i).style.display = 'block';
						}
					}
				}
			}
			else{
				for(var l = 0; l < elems.length; l++){ elems[l].style.display = 'block'; }		
			}
		}
	}
}