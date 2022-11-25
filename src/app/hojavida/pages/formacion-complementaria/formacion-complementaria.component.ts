import { Component, OnInit } from '@angular/core';
import { modalidad } from '../../interfaces/formacionAcademica-interface';

@Component({
  selector: 'app-formacion-complementaria',
  templateUrl: './formacion-complementaria.component.html',
  styleUrls: ['./formacion-complementaria.component.css']
})
export class FormacionComplementariaComponent implements OnInit {

  modalidadComplementariaList:modalidad[]=[];
  selectedModalidad!:modalidad;
  
  constructor() { }

  ngOnInit(): void {
    this.modalidadComplementariaList=[
      {codigo:'CL', nombre:'Curso Presencial'},
      {codigo:'CV', nombre:'Curso Virtual'},
      {codigo:'DI', nombre:'Diplomado'},
      {codigo:'SM', nombre:'Seminario'},
      {codigo:'CG', nombre:'Congreso'},
      {codigo:'PR', nombre:'Premio'},
      {codigo:'RE', nombre:'Reconocimiento'},
    ]
  }

}
