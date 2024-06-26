const express = require('express');
const route = express.Router();
const db = require('../db');
const cors = require('cors');
const {default: axios } = require ("axios");

function callbackgetmentor (res, req, rows){
    console.log ("rows", rows)
    res.set("Content-Type","application/json")
    res.set("server","gesschool");
    res.status(200).send(rows);
};

route.post('/',function (req, res){
    const data = req.body
    console.log(data)
    const sql = `INSERT INTO etudiant (matriculeE,nomE,prenomE,dateNaissanceE,sexe,libelle,competence,parcours,avatar) VALUES('${data.matriculeE}','${data.nomE}','${data.prenomE}','${data.dateNaissanceE}','${data.sexeE}','${data.libelle}')`
    console.log("SQL", sql);
    db.exec(sql);
    userjson={};
    res.set('Content-Type','application/json');
    res.set('server','gesschool');
    res.status(201).send(userjson);
});

route.put('/:id',function (req, res){
    const data = req.body
    console.log(data)
    const sql = `UPDATE etudiant SET nomE='${data.nomE}',prenomE='${data.prenomE}',dateNaissanceE='${data.dateNaissanceE}',sexe='${data.sexeE}',libelle='$libelle' WHERE matriculeE = '${data.matriculeE}' `
    console.log("SQL", sql);
    db.exec(sql);
    userjson={};
    res.set('Content-Type','application/json');
    res.set('server','gesschool');
    res.status(201).send(userjson);
});

route.get("/", (req, res)=> {
    db.all ("SELECT * FROM etudiant", (err, rows) => {
        callbackgetmentor(res, req, rows);
    });
});

route.get("/:id", (req, res)=> {
    const id = req.params.id;
    const sql = `SELECT * FROM etudiant WHERE matriculeE = '${id}'`
    console.log(sql, id); 
    db.all(sql,(err, rows)=>{
        callbackgetmentor(res, req, rows);
    }
    );
});

route.delete("/:id", (req, res)=> {
    const id = req.params.id;
    const sql = `DELETE FROM etudiant WHERE matriculeE = '${id}'`
    console.log(sql, id); 
    db.all(sql,(err, rows)=>{
        callbackgetmentor(res, req, rows);
    }
    );
});


module.exports = route;