var express = require('express');
var http = require('http');
var path = require('path');
var swig = require('swig');
var mongoose = require('mongoose');

var mongoURI = "mongodb://faryar88:t1g3r88@ds035703.mongolab.com:35703/todolist_faryar";
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) {
    console.log(err.message);
});
MongoDB.once('open', function() {
    console.log("mongodb connection open");
});

var Item = require('./models/items'); 
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    Item.find({}, function(err, docs) {
      console.log(docs); 
      res.render("index", {items: docs})
    });
});



app.get('/saveItem/:text', function(req, res) {
    console.log(req.params);
    var item_data = {    
        text: req.params.text
    };

    var item = new Item(item_data);

    item.save(function(error, data) {    
        if (error) {        
            res.json(error);    
        }    
        else {        
            res.json(data);    
        }
    });
});

var server = http.createServer(app);

server.listen(8000);
