const express = require('express');
const route = express.Router();
const db = require('../db');

function callbackgetsession (res, req, rows){
    console.log ("rows", rows)
    res.set("Content-Type","application/json")
    res.set("server","gesschool");
    res.status(200).send(rows);
};

route.post('/',function (req, res){
    const data = req.body
    const sql = `INSERT INTO classe (libelle, niveau,filiere) VALUES('${data.libelle}','${data.niveau}','${data.filiere}')`
    console.log("SQL", sql);
    db.exec(sql);
    userjson={};
    res.set('Content-Type','application/json');
    res.set('server','gesschool');
    res.status(201).send(userjson);
});

route.put('/',function (req, res){
    const data = req.body
    const sql = `UPDATE classe SET niveau='${data.niveau}', filiere ='${data.filiere}' WHERE libelle = '${data.libelle}'`
    console.log("SQL", sql);
    db.exec(sql);
    userjson={};
    res.set('Content-Type','application/json');
    res.set('server','gesschool');
    res.status(201).send(userjson);
});

route.get("/", (req, res)=> {
    db.all ("SELECT * FROM classe", (err, rows) => {
        callbackgetsession(res, req, rows);
    });
});


route.get("/:id", (req, res)=> {
    const id = req.params.id;
    const sql = `SELECT * FROM classe WHERE libelle ='${id}'`
    console.log(sql, id); 
    db.all(sql,(err, rows)=>{
        callbackgetsession(res, req, rows);
    }
    );
});

route.delete("/:id", (req, res)=> {
    const id = req.params.id;
    const sql = `DELETE FROM Session WHERE idUtilisateur = '${id}'`
    console.log(sql, id); 
    db.all(sql,(err, rows)=>{
        callbackgetsession(res, req, rows);
    }
    );
});

module.exports = route;