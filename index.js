

var express = require('express')
var mustacheExpress = require('mustache-express');
var app = express()
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + '/static'));


app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/about-us', function (req, res) {
    res.render('about-us.ejs');
});

app.get('/apply', function (req, res) {
    res.render('apply.ejs');
});
app.get('/big-data', function (req, res) {
    res.render('big-data.ejs');
});
app.get('/certifications', function (req, res) {
    res.render('certifications.ejs');
});
app.get('/cloud-computing', function (req, res) {
    res.render('cloud-computing.ejs');
});
app.get('/data-science', function (req, res) {
    res.render('data-science.ejs');
});
app.get('/internet-of-things', function (req, res) {
    res.render('Internet-of-things.ejs');
});
app.get('/programs', function (req, res) {
    res.render('programs.html');
});
app.get('/programs-bigdata', function (req, res) {
    res.render('programs-bigdata.ejs');
});
app.get('/programs-cloud', function (req, res) {
    res.render('programs-cloud.ejs');
});
app.get('/programs-datascience', function (req, res) {
    res.render('programs-datascience.ejs');
});
app.get('/programs-data-visualization', function (req, res) {
    res.render('programs-data-visualization.ejs');
});
app.get('/programs-devops', function (req, res) {
    res.render('programs-devops.ejs');
});
app.get('/programs-iot', function (req, res) {
    res.render('programs-iot.ejs');
});

app.listen(3000);
