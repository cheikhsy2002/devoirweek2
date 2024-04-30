import { Component, OnInit } from '@angular/core';
import { addc, classe } from './intclasse';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrl: '../bootstrap-5.1.3/dist/css/bootstrap.min.css'
})
export class AddclassComponent{

  public classes: classe[] = [];
  public classe!:classe;
  public libelle! : string;
  public niveau! : string;
  public filiere! : string;
  msg: string =  "bonjour";
  constructor() {
  }
  onSubmit(){
    this.classe = addc(this.libelle, this.niveau, this.filiere); 
    console.log("Form submitted",this.classe);
    this.classes.push(this.classe);
   

  }
  

    
    }
  
  
