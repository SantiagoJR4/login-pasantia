import { Component, OnInit } from '@angular/core';
import { ContractModality, TeachingExperience} from '../../interfaces/hv-interface';
import { Snies } from '../../interfaces/snies-interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-experiencia-docente',
  templateUrl: './experiencia-docente.component.html',
  styleUrls: ['./experiencia-docente.component.css']
})
export class ExperienciaDocenteComponent implements OnInit {

  experienciaDocente:TeachingExperience[]=[];

  modalidadContratoList:ContractModality[];
  selectedModalidad!:ContractModality;

  universidades:Snies[]=[];
  selectedUniversidad:Snies|null=null;

  data={
    universidad:'',
    fechaIngreso:new Date(),
    fechaRetiro:new Date(),
    facultad:'',
    programa:''
  }

  constructor(private datosService:DatosService) { 
    this.modalidadContratoList=[
    ]
  }

  ngOnInit(): void {
    this.datosService.buscarSnies()
      .subscribe(universidades=>{(this.universidades=universidades)});
  }
  save(){
    //
  }

}
