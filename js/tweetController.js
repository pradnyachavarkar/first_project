var tweetList = new TweetList();
var xhr = new Xhr();
var filter = new Filter();

window.onload = init();

function init(){
	document.getElementById('search').addEventListener('click', displayTweets);
	document.getElementById('filter').addEventListener('click', filterTweets);
	
	document.getElementById('search_box').addEventListener('keypress', function (e) {
	    var key = e.which || e.keyCode;
	    if (key === 13) {
	    	displayTweets();
	    }
	});

	// var taglist = document.querySelectorAll('input[class="chk_tag_list"]');
	// [].forEach.call(taglist, function(div) {
	// 	div.addEventListener('onchange', filterTweets);
	// })

	// var userlist = document.querySelectorAll('input[class="chk_user_list"]');
	// [].forEach.call(userlist, function(div) {
	// 	div.addEventListener('onchange', filterTweets);
	// })
}

function displayTweets(){
	var handle = document.getElementById('search_box').value;

	if(!(tweetList.handleExists(handle))){
		var tweets = xhr.getTweets(handle);
        if(tweets['error'] == "Not authorized."){
        	alert("Not authorized to fetch this user's tweets");
        }
        else{
			tweets.forEach(function(val){
				tweetList.newTweet(val['text'], handle);
			})

			tweetList.updateFilterValues(handle);
	    }
	}
	else{
		alert('Tweets for this user are aleady displayed');
	}
}

function filterTweets(){
	filter.filterByUser(tweetList);
}

