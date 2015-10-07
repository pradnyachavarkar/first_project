var http = require('http');
var url = require("url");
var Twitter = require('mtwitter');

var T = new Twitter({
          consumer_key: 'K9F6xHoyZlFLwTZfOeevoB5Kg',
          consumer_secret: 'yN1JIdaWgO9BwojzX1YdbK4Ihb9q3vS6Y9DRMkYEoIN1lzSaTU',
          // application_only: true
          access_token_key: '61820707-8B1CNm4fU7A5pR8wSZJbbpQOzpdMfNIBl6ijirdDN',
          access_token_secret: 'bSdRy7bsQryc5Hf6r11rxdKoQ4cL1TEsVDDYdq358EDMB'
  })

http.createServer(function(request, response){
  response.writeHead(200, { "Content-Type" : "application/json" ,
                             "Access-Control-Allow-Origin": "*",
                             "Access-Control-Allow-Method": "POST, GET, OPTIONS",
                             "Access-Control-Allow-Headers": "origin, content-type, content-length, accept"
                           });
  var parsedUrl = url.parse(request.url, true);
  console.log(parsedUrl.query);
  if(parsedUrl.query['author'] != 'undefined'){
    console.log('url = ' + parsedUrl.query['author']);
    
    T.get('statuses/user_timeline.json', {screen_name: parsedUrl.query['author'], count: 10},  function(err, item, res) {  
      response.end(JSON.stringify(item));
    });
  }
}).listen(8080);

console.log('Server running on http://localhost:8080');