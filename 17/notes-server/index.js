var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var notes = [
  {
    "id": 1,
    "title": "First Note",
    "text": "My first note."
  },
  {
    "id": 2,
    "title": "Second Note",
    "text": "Another note text."
  }
];

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/build'));

app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/build/index.html')
});

app.get('/notes.json', function(request, response) {
  response.json(notes)
});

app.post('/notes.json', function(request, response) {
  var note = request.params;
  note.id = (new Date()).getTime();
  notes.push(note);
  response.json(note);
});

app.put('/notes.json/:id', function(request, response) {
  notes = notes.map(function(note) {
    if(note.id == request.body.id) {
      return request.body;
    } else {
      return note;
    }
  });
  response.json(notes)
});

app.delete('/notes.json/:id', function(request, response) {
  notes = notes.filter(function(note) { 
    return note.id != request.params.id;
  });
  response.json({id: request.params.id});
});


app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});
