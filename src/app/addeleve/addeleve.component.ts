import { Component } from '@angular/core';
import { affiche, eleve } from './eleve';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addeleve',
  templateUrl: './addeleve.component.html',
  styleUrl: '../bootstrap-5.1.3/dist/css/bootstrap.min.css'
})
export class AddeleveComponent {
  public eleve! : eleve[];
  
  constructor() {
  }

  onsubmit(form: any){
    this.eleve= form.value;
    console.log("Form submitted",this.eleve);
    }
    
    }

  

