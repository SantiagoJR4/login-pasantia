import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AcademicModality} from '../../interfaces/hv-interface';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  @Input() formHV!:FormGroup;
  @Output() data = new EventEmitter<FormGroup>();

  modalidadAcademicaList:AcademicModality[];
  selectedModalidad!:AcademicModality;

  tituloConvalidado=true;
  
  constructor() {
    this.modalidadAcademicaList=[
      
    ]
   }

  ngOnInit(): void {

  }

  // isChecked(){
  //   this.data.tituloConvalidado=!this.data.tituloConvalidado;
  // }

  save(){
    this.data.emit(this.formHV);
  }

}
