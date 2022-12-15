import { Component, OnInit } from '@angular/core';
import { Departamento, Divipola } from '../../interfaces/departamentos-interface';
import { WorkExperience } from '../../interfaces/hv-interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  departamentos:Departamento[]=[];
  selectedDepartamento: Departamento|null = null;
  previewDepartamento: Departamento|null = null;

  experienciaLaboral:WorkExperience[]=[];


  municipios:Divipola[]=[];
  selectedMunicipio:Divipola|null=null;

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
    // this.experienciaLaboral.push(this.data);
    
    // this.data={
    //   cargo:'',
    //   nombreEmpresa:'',
    //   nombreJefe:'',
    //   dependencia:'',
    //   departamento:'',
    //   direccionEntidad:'',
    //   telefono:'',
    //   fechaIngreso:new Date(),
    //   fechaRetiro:new Date(),
    // }
  }

  changeDepto(){
    if (this.previewDepartamento !== this.selectedDepartamento){
      this.previewDepartamento = this.selectedDepartamento
      return this.datosService.buscarMunicipio(this.selectedDepartamento?.dpto ?? '').
      subscribe(municipios =>this.municipios=municipios);
    }
    return null
  }

}
