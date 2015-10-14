define([
	'dojo/_base/declare'
	], function(declare){
	return declare('Filter', null, {
		_selectedUsers: [],
		_selectedTags: [],
		addTo: function(value, element){
			if(element == 'user_list'){
				this._selectedUsers.push(value);
			}
			else{
				this._selectedTags.push(value);
			}
		},
		removeFrom: function(value, element){
			console.log(_.without(this._selectedUsers, value), value);
			if(element == 'user_list'){
				this._selectedUsers = _.without(this._selectedUsers, value);
			}
			else{
				this._selectedTags = _.without(this._selectedTags, value);
			}
		},
		filterByUser: function(tweetlist){
			var self = this;
			_.each(tweetlist, function(tweets, handle){
				_.each(tweets, function(tweet){
					if(((_.intersection(tweet.getTags(),self._selectedTags)).length == 0 && self._selectedTags.length > 0) || !_.contains(self._selectedUsers, handle)){
						tweet.hide();
					}
					else{
						tweet.show();
					}
				})
			})
		}
	});
});