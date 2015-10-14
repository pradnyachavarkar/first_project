define([
	'dojo/_base/declare',
	'app/tweet'
	], function(declare, Tweet){
	return declare('TweetList', null, {
		tweets: {},
		handleExists: function(handle){
			return (handle in this.tweets)?true:false;
		},
		newTweet: function(message, handle){
			var tweet = new Tweet(message, handle);
			if(!(handle in this.tweets)){
				this.tweets[handle] = [];
			}
			this.tweets[handle].push(tweet);
			tweet.show();
		},
		getTweets: function(handle){
			return this.tweets[handle];
		}
	});
});