var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.set('views', __dirname + '/views');


app.get('/', function(req, res){
  res.render('index.ejs', {
        title: 'My Site',
    nav: ['Home','About','Contact'] 
  });
});

app.get('/home', function(req, res){
  res.render('index.ejs', {
        title: 'My Site',
    nav: ['Home','About','Contact'] 
  });
});

app.get('/about', function(req, res){
  res.render('about.ejs', {
    title: 'About',
     nav: ['Home','About','Contact']
  });
});

app.get('/contact', function(req, res){
  res.render('contact.ejs', {
    title: 'Contact',
     nav: ['Home','About','Contact']
  });
});


app.listen(3000);
