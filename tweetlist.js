
function tweetList(){
	var tweets = {};

	this.addTweet = function(tweet){
		tweet.detectTags();
		if(!(tweet.author in tweets)){
			tweets[tweet.author] = [];
		}
		tweets[tweet.author].push(tweet);
	}

	this.print = function(){
		console.log(tweets);
	}

	this.getAllUsers = function(){
		var users = [];
		for(val in tweets){
			users.push(val);
		}
		return users;
	}

	this.getAllTags = function(){
		var tags = [];
		for(user in tweets){
			var userTweets = tweets[user];
			for(var i = 0; i < userTweets.length; i++){
				var userTags = userTweets[i].hashtags;
				for(var j = 0; j < userTags.length; j++){
					if(tags.indexOf(userTags[j]) == -1)
					{
						tags.push(userTags[j]);
					}
				}
			}
		}
		return tags;	
	}

	this.getTweetsByUser = function(user){
		return tweets[user];
	}
}