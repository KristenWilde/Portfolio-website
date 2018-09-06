const express = require('express'); // returns a function
const app = express();
const path = require('path')
const projects = require('./projects');
const PORT = process.env.PORT || 3100

app.set('view engine', 'ejs');

app.use('/images', express.static(path.join(__dirname,'assets/images')));
app.use('/stylesheets', express.static(path.join(__dirname,'assets/stylesheets')));
app.use('/js', express.static(path.join(__dirname,'assets/js')));

app.get('/', function(req, res) {
  res.render('index', { projects: projects });
});

app.get('/profile/:name', function(req, res) {
  res.render('profile', { person: req.params.name });
})

app.get('/guess', function(req, res) {
  res.render('guess');
})

app.get('/this', function(req, res) {
  res.render('presentation')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
