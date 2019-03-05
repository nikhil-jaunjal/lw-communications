const app = require('./app');
const http = require('http');
const config = require('./config');

const port = process.env.PORT || config.app.port;  //saving 3000 to env variable & using it OR default-hardcoded port number

const server = http.createServer(app);

//------------connect mongo without mongoose-------------
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://"+config.db.host+":"+config.db.port+"/"+config.db.name;

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("--------------------------------------------------------------");
//   console.log("started!");
//   console.log("--------------------------------------------------------------");
// });

server.listen(port);