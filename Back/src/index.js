const express = require('express');
var bodyparser = require('body-parser');
const db = require('./db');
const cors = require('cors');
const {default: axios } = require ("axios");
const utilisateurRoute = require('./Route/eleve');
const sessionRoute = require('./Route/classe');
const path = require('path');
require('dotenv').config();




//initialisation de express
const app = express();
//conf body parser
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


// conf route
app.use('/eleve', utilisateurRoute);
app.use('/classe', sessionRoute);

app.listen(process.env.PORT)
console.log("server start on port 3000")