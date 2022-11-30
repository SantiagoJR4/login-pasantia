import { Component, OnInit } from '@angular/core';
import { Departamentos } from '../../interfaces/departamentos-interface';
import { ExperienciaLaboral } from '../../interfaces/formacionAcademica-interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  selectedDepartamento!:Departamentos[];
  experienciaLaboral:ExperienciaLaboral[]=[];

  departamentos:Departamentos[]=[];

  data={
    cargo:'',
    nombreEmpresa:'',
    nombreJefe:'',
    dependencia:'',
    departamento:'',
    direccionEntidad:'',
    telefono:'',
    fechaIngreso:new Date(),
    fechaRetiro:new Date()
  }

  constructor(private datosService:DatosService) { }

  obtenerDepartamentos(){
    return this.datosService.buscarDepartamento().  
        subscribe(resp => {this.departamentos=resp
        console.log(this.departamentos)});

  }

  ngOnInit(): void {
    // this.departamentos=[
    //   {nombre:'Nariño' },
    //   {nombre:'Antioquia'},
    //   {nombre:'Cauca'},
    //   {nombre:'Chocó'}]
  }


  save(){
    this.experienciaLaboral.push(this.data);
    
    this.data={
      cargo:'',
      nombreEmpresa:'',
      nombreJefe:'',
      dependencia:'',
      departamento:'',
      direccionEntidad:'',
      telefono:'',
      fechaIngreso:new Date(),
      fechaRetiro:new Date(),
    }
  }

}
