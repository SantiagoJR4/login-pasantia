import { Component, OnInit } from '@angular/core';
import { departamentos, ExperienciaLaboral } from '../../interfaces/formacionAcademica-interface';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  departamentos:departamentos[]=[];
  selectedDepartamento!:departamentos;
  experienciaLaboral:ExperienciaLaboral[]=[];

  data={
    cargo:'',
    nombreEmpresa:'',
    fechaIngreso:new Date(),
    fechaRetiro:new Date()
  }


  constructor() { }

  ngOnInit(): void {
    this.departamentos=[
      {nombre:'Nariño' },
      {nombre:'Antioquia'},
      {nombre:'Cauca'},
      {nombre:'Chocó'}]
  }


  save(){
    this.experienciaLaboral.push(this.data);
    
    this.data={
      cargo:'',
      nombreEmpresa:'',
      fechaIngreso:new Date(),
      fechaRetiro:new Date()
    }
  }

}
