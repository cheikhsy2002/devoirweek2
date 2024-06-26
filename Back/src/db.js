const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mentorat.db');

db.serialize(()=>{
    db.exec(` 
    CREATE TABLE IF NOT EXISTS classe (
    libelle varchar(30) NOT NULL,
    niveau varchar(3) NOT NULL,
    filiere varchar(10) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS etudiant (
    matriculeE varchar(50) NOT NULL,
    nomE varchar(30) NOT NULL,
    prenomE varchar(30) NOT NULL,
    dateNaissanceE date NOT NULL,
    sexe varchar(3) NOT NULL,
    libelle varchar(30) NOT NULL,
    FOREIGN KEY (libelle) REFERENCES classe (libelle);

    `)
})
module.exports=db;