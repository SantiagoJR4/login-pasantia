import { Component, OnInit } from '@angular/core';
import { FormacionAcademica, modalidad, ModalidadAcademica } from '../../interfaces/formacionAcademica-interface';


@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  modalidadAcademicaList:modalidad[];
  selectedModalidad!:modalidad;

  datos:FormacionAcademica[]=[];

  data={
    fechaGrado:new Date(),
    nombreTitulo:'',
    institucion:'',
    tituloConvalidado:false,
  }

  constructor() {
    this.modalidadAcademicaList=[
      {codigo:'AU', nombre: 'Auxiliar'},
      {codigo: 'TP', nombre: 'Técnico Profesional'},
      {codigo: 'TC', nombre: 'Tecnólogo'},
      {codigo: 'TCE', nombre: 'Tecnólogo Especializado'},
      {codigo: 'UN', nombre: 'Universitario'},
      {codigo: 'ESP', nombre: 'Especialización'},
      {codigo: 'MG', nombre: 'Maestría o Magíster'},
      {codigo: 'DOC', nombre: 'Doctorado o PHD'},
      {codigo:'PDO', nombre:'Post Doctorado'}
    ]

   }

  ngOnInit(): void {

  }

  isChecked(){
    this.data.tituloConvalidado=!this.data.tituloConvalidado;
  }

  save(){
    this.datos.push(this.data);
    this.data={
      fechaGrado:new Date(),
      nombreTitulo:'',
      institucion:'',
      tituloConvalidado:false,
    }
  }

}
