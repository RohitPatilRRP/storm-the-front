const MongoClient = require('mongodb').MongoClient;
let Url = 'mongodb://localhost:27017/';

MongoClient.connect(Url, function(err, db) {
  if (err) 
  {
    throw err; 
  }
  else {
    //Add your logic here
  }
});
