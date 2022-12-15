import { Component, OnInit } from '@angular/core';
import { ComplementaryModality, FurtherTraining } from '../../interfaces/hv-interface';

@Component({
  selector: 'app-formacion-complementaria',
  templateUrl: './formacion-complementaria.component.html',
  styleUrls: ['./formacion-complementaria.component.css']
})
export class FormacionComplementariaComponent implements OnInit {

  modalidadComplementariaList:ComplementaryModality[]=[];
  selectedModalidad!:ComplementaryModality;
  datos:FurtherTraining[]=[];

  guardado:boolean=false;

  data={
    nombreTitulo:'',
    institucion:'',
    totalHoras:0,
    fechaGrado:new Date(),
  }
  constructor() { }

  ngOnInit(): void {
    this.modalidadComplementariaList=[

    ]
  }

  save(){
    // this.datos.push(this.data);
    
    // this.data={
    // nombreTitulo:'',
    // institucion:'',
    // fechaGrado:new Date(),
    // totalHoras:0
  }

}
