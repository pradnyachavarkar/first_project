
function TweetList(){
	var tweets = {};
	var domUtils = new DOMUtils();

	this.handleExists = function(handle){
		var result = (handle in tweets)?true:false;
		return result;
	}

	this.newTweet = function(message, handle){
		var tweet = new Tweet(handle, message);
		tweet.detectTags();

		if(!(handle in tweets)){
			tweets[handle] = [];
		}
		tweets[handle].push(tweet);
		domUtils.appendList(tweet.getMessage(), handle, (tweets[handle].length-1));
	}	

	this.print = function(){
		for(handle in tweets){
			for(var i = 0; i < tweets[handle]; i++){
				tweets[handle][i].print();
			}
		}
	}

	this.updateFilterValues =  function(user){
	    //Update users filter list
		domUtils.updateCheckList(user, 'user_list');
		
		//Update hashtag filter list
		var tags = [];
		for(handle in tweets){
			_.each(tweets[handle], function(val){
				tags = _.union(tags, val.getTags());
			});
		}

		//var tags = this.getUniqueTags(user);
		for(var j = 0; j < tags.length; j++){
			domUtils.updateCheckList(tags[j], 'tag_list');
		}
	}

	this.show = function(user, tags){
		for(var i = 0; i < tweets[user].length; i++){
			if(tags.length == 0){
				tweets[user][i].show(i);
			}
			else{
				var tmp = tweets[user][i].getTags();
				for(var j = 0; j < tmp.length; j++){
					if(tags.indexOf(tmp[j]) != -1){
						tweets[user][i].show(i);
					}
				}	
			}
		}
	}
}