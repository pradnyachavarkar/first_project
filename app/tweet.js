define([
	'dojo/_base/declare',
	'dojo/dom',
	'app/widgets/ListWidget'
	], function(declare, dom, ListWidget){
	return declare('Tweet', null, {
		constructor: function(message, author){
			this.message = message,
			this.author = author;
			this.hashtags = [];
			var re = /(?:^|\W)#(\w+)(?!\w)/g, match = [];
			while (match = re.exec(this.message)) {
				if(this.hashtags.indexOf(match[1]) == -1) {
					this.hashtags.push(match[1]);
				}
			}
		},
		print: function(){
			console.log(this.author + ':' + this.message, this.hashtags);
		},
		addToDOM: function(){
			this._listWidget = new ListWidget({handle:this.author, text:this.message}).placeAt(dom.byId('tweetlist'));
		},
		show: function(){
			if(!this._listWidget)
				this._listWidget = new ListWidget({handle:this.author, text:this.message}).placeAt(dom.byId('tweetlist'));
			else
				this._listWidget.show();
		},
		hide: function() {
			this._listWidget.hide();
		},
		getTags: function(){
			return this.hashtags;
		}
	});
});