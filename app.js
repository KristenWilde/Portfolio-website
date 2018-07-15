var express = require('express'); // returns a function
var app = express();

var projects = require('./projects');

app.set('view engine', 'ejs');
app.use('/images', express.static('assets/images'))
app.use('/stylesheets', express.static('assets/stylesheets'))
app.use('/js', express.static('assets/js'))

app.get('/', function(req, res) {
  res.render('index', { projects: projects });
});

app.get('/profile/:name', function(req, res) {
  res.render('profile', { person: req.params.name });
})

app.get('/guess', function(req, res) {
  res.render('guess');
})

app.listen(process.env.PORT || 3100, () => console.log('Server running') );
