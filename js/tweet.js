function Tweet(author, message)
{
	var domUtils = new DOMUtils();

	var message = message;
	var author = author;
	var hashtags = [];

	this.detectTags = function (){
		var re = /(?:^|\W)#(\w+)(?!\w)/g, match = [];
		while (match = re.exec(message)) {
  			hashtags.push(match[1]);
		}
	}

	this.getTags = function(){
		return hashtags;
	}

	this.print =  function(){
		console.log(author + ":" + message);
	}

	this.getMessage = function(){
        return  (author + ":  " + message);
	}

	this.show = function(index){
		domUtils.show('tweet_' + author + '_' + index);
	}
}
