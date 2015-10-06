function tweet(author, message)
{
	this.message = message;
	this.author = author;

	this.hashtags = [];

	this.detectTags = function (){
		var re = /(?:^|\W)#(\w+)(?!\w)/g, match = [];
		while (match = re.exec(message)) {
  			this.hashtags.push(match[1]);
		}
	}
}
