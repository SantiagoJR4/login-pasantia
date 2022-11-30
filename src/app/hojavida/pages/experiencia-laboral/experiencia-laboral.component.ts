import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../interfaces/departamentos-interface';
import { ExperienciaLaboral } from '../../interfaces/formacionAcademica-interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  selectedDepartamento: Departamento|null = null;
  experienciaLaboral:ExperienciaLaboral[]=[];

  departamentos:Departamento[]=[];

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


  ngOnInit(): void {
    this.datosService.buscarDepartamento().  
    subscribe(departamentos => {this.departamentos = departamentos
      .filter(item => item.dpto !== undefined && item.dpto !== null)
   });
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
