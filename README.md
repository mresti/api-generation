
#The project
This project, generate the backend Full API REST depending to models describe you in the config gile API_config.json
This file is a json list of object wich contain three atributes, name of model, atributtes list of model and type list of the atributes. Each object is defined by the following code.
```json
{"name":"usuario", 
 "atributtes":["name","LastName","Country"],
 "type":["string","string","string"]
}
```
Only you need add the next lines in your server.js 
``````js
var express = require('express');
var mongoose = require('mongoose');

var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var generateApis= require('APITemplate');
var route = require('./route.js');

var app= express();



mongoose.connect('mongodb://localhost/project', function(err) {  
    
        if(!err) 
            console.log('BD Connect');    
});

app.use(express.static(__dirname + '/app')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());

generateApis(app);
route(app);

app.listen(3000);```
And the module generate the all code for the API's of the models declared you in the file confing API_config.json

  [MIT](LICENSE)
