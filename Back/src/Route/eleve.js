const express = require('express');
const usercontroller = require('../Controller/etudiantcontroller');
const route = express.Router();
const db = require('../db');

route.post('/', usercontroller);

route.get("/", usercontroller);

route.put('/:id',usercontroller);

route.delete("/:id",usercontroller);

module.exports = route;