import { Component } from '@angular/core';
import { adde, eleve } from './eleve';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addeleve',
  templateUrl: './addeleve.component.html',
  styleUrl: '../bootstrap-5.1.3/dist/css/bootstrap.min.css'
})
export class AddeleveComponent {
  public eleves : eleve[] = [];
  public eleve! :eleve;
  public matricule! : string;
  public nom! : string;
  public prenom! : string;
  public dateNaissance! : Date;
  public sexe! : string;
  public classe! : string;

  
  constructor() {
  }

  onSubmit(){
    this.eleve = adde(this.matricule, this.nom, this.prenom, this.dateNaissance, this.sexe, this.classe)
    console.log("Form submitted",this.eleve);
    this.eleves.push(this.eleve);
    console.log(this.eleves);
    }
    
    }

  

