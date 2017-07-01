
var axios = require('axios');

module.exports = function(server){
	server.get('/', function(req, res){
		
		res.sendFile(__dirname + "/public/index.html");
	});
}