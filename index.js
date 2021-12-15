//Einstieg in die Applikation 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('MYPIZZA'));   //public
app.use(bodyParser.json());
const router = require('./router'); //
router(app);

app.listen(8080, function(){
    console.log('Application is listening on http://localhost:8080');
});