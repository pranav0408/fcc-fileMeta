'use strict';

var express = require('express');
var file = require('./file.js');
var multer = require('multer')
var cors = require('cors');

// require and use "multer"...
var upload = multer({dest: 'uploads/'});

var app = express();
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
    var out = file(req.file)
    res.json(out)
})

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
