function DOMUtils(){

	this.appendList = function(message, user, index){
		var li = document.createElement('li');
        li.setAttribute('class','userclass');
        li.setAttribute('id', 'tweet_' + user + '_' + index);	
        document.getElementById('tweetlist').appendChild(li);
        li.innerHTML =  message;
	}

	this.updateCheckList = function(value, elementId){
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

	this.getSelectedUsers = function(){
		var inputElements = document.getElementsByClassName("chk_user_list");
		var usernames = [];
		for(var j = 0; inputElements[j]; ++j){
			if(inputElements[j].checked)
				usernames.push(inputElements[j].value);
		}
		// console.log("selected users: " + usernames);
		return usernames;
	}

	this.getSelectedTags = function(){
		var tagElements = document.querySelectorAll('input[class="chk_tag_list"]:checked');
		var tags = [];
		for(var j = 0; tagElements[j]; ++j){
			tags.push(tagElements[j].value);
		}		
		// console.log("selected tags: " + tags);
		return tags;
	}

	this.show = function(elementId){
		document.getElementById(elementId).style.display = 'block';
	}
}