define([
	'dojo/_base/declare',
	'app/domUtils',
	'app/TweetList',
	'app/filter',
	'app/xhr'
	], function(declare, domUtils, TweetList, Filter, Xhr){
	return declare('tweetController', null, {
		constructor: function(){
			this._domUtil = new domUtils();
			this._domUtil.init(dojo.hitch(this, this.displayTweets));

			this.tweetList = new TweetList();
			this.filter = new Filter();
			this.xhr = new Xhr();
		},
		displayTweets: function(handle){
			if(!(this.tweetList.handleExists(handle))){
				this.xhr.getTweets(handle, dojo.hitch(this, this.appendTweets));
			}
			else{
				alert('Tweets for this user are already displayed');
			}
		},
		appendTweets: function(result, handle){
			for(var i = 0; i < result.length; i++){
				this.tweetList.newTweet(result[i]['text'], handle);
			}
			this.updateFilters(handle);
		},
		updateList: function(chkbox, element){
			if(chkbox.checked){
				this.filter.addTo(chkbox.get('Cvalue'), element);
			}
			else{
				this.filter.removeFrom(chkbox.get('Cvalue'), element);
			}
			this.filter.filterByUser(this.tweetList.tweets);
		},
		updateFilters: function(handle) {
			this._domUtil.updateCheckBox('user_list', handle, dojo.hitch(this, this.updateList));
			var tags = [];
			var self = this;
			_.each(this.tweetList.getTweets(handle), function (val) {
				_.each(val.getTags(), function (tag) {
					if(tags.indexOf(tag) == -1) {
						self._domUtil.updateCheckBox('tag_list', tag, dojo.hitch(self, self.updateList));
						tags.push(tag);
					}
				})
			})
		}
	});
});