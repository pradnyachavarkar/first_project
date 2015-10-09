# Twitter Client project

This is a twitter client which lets user search for last 10 tweets for any public twitter user.
There is also a filtering mechanism for the tweets that have been fetched already in which user can filter based on combination of handles and hashtags in the tweets fetched. 

server.js - node.js http server which will connect to twitter using app credentials. 

tweet.js - stores reach tweet 

tweetlist.js - stores a map of tweets by user with key as the user handle

xhr.js - has functionality to connect to server and fetch uesr tweets

domUtils.js - Has functions to modify the DOM which is refered by all

filter.js - functionality to read the checked boxes by help of domUtil.js and filtering tweets.

tweetController.js - controller which has init() function for creating event listeners and functions for fetching tweets by help of xhr.js and filtering tweets by help of filter.js
