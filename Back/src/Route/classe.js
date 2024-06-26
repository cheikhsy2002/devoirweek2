const express = require('express');
const route = express.Router();
const sessioncontroller = require('../Controller/classcontroller');
const db = require('../db');


route.post('/',sessioncontroller);

route.put('/',sessioncontroller);

route.get('/', sessioncontroller);

route.get('/:id',sessioncontroller);

route.delete('/:id', sessioncontroller);

module.exports = route;