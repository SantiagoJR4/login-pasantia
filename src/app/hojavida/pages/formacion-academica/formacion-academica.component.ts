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

  checked: boolean = false;
  date1: Date = new Date();

  columns = [
    {field: 'titulo', name: 'Titulo'},
    {field: 'institucion', name: 'Institución'},
    {field: 'fecha', name: 'Fecha'},
  ]

  data = [
    {titulo: 'Enfermería Auxiliar', institucion: 'Universidad Mariana', fecha: '2020-09-01'},
    {titulo: 'Enfermería tipo C', institucion: 'Universidad de Nariño', fecha: '2017-09-01'}
  ]

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

    console.log(this.data);

   }

  ngOnInit(): void {

  }

  isChecked(){
    this.checked=!this.checked;
    console.log(this.checked);

  }

}
