// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express'),
app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


var jsonData = {count: 12, message: 'hey'};

app.get('/data', (req, res) => {
  res.json(jsonData)
})

app.listen(3000);
