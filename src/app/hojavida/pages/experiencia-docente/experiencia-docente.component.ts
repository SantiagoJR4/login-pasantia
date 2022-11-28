import { Component, OnInit } from '@angular/core';
import { ExperienciaDocente, modalidad, ModalidadAcademica } from '../../interfaces/formacionAcademica-interface';

@Component({
  selector: 'app-experiencia-docente',
  templateUrl: './experiencia-docente.component.html',
  styleUrls: ['./experiencia-docente.component.css']
})
export class ExperienciaDocenteComponent implements OnInit {

  experienciaDocente:ExperienciaDocente[]=[];

  modalidadContratoList!:modalidad[];
  selectedModalidad!:modalidad;

  data={
    codigoSnies:'',
    fechaIngreso:new Date(),
    fechaRetiro:new Date(),
    facultad:'',
    programa:''
  }

  constructor() { 
    this.modalidadContratoList=[
      {codigo:'TC',nombre:'Tiempo Completo'},
      {codigo:'MT',nombre:'Medio Tiempo'},
      {codigo:'HC',nombre:'Hora Cátedra'}
    ]
  }

  ngOnInit(): void {

  }
  save(){
    this.experienciaDocente.push(this.data);
  }

}
