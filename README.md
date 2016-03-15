
#The project
This project, generate the backend Full API REST depending to models describe you in the config gile API_config.json
This file is a json list of object wich contain three atributes, name of model, atributtes list of model and type list of the atributes. Each object is defined by the following code.
```json
{"name":"usuario", 
 "atributtes":["name","LastName","Country"],
 "type":["string","string","string"]
}

Only you need add the next lines in your server.js 
``````js
var express = require('express');
var app = express();

var apisGen = require('APITemplate');
apisGen(app);
var route = require(./route.js);
route(app);

app.listen(3000)
```
And the module generate the all code for the API's of the models declared you in the file confing API_config.json

  [MIT](LICENSE)
