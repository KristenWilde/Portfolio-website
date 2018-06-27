var express = require('express'); // returns a function
var app = express();

var projects = require('./projects');

app.set('view engine', 'ejs');
app.use('/images', express.static('public/images'))
app.use('/stylesheets', express.static('public/stylesheets'))

app.get('/', function(req, res) {
  res.render('index', { projects: projects });
});

app.get('/profile/:name', function(req, res) {
  res.render('profile', { person: req.params.name });
})

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/about.html')
})

app.listen(3100);
