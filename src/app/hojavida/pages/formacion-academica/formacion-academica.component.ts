import { Component, OnInit } from '@angular/core';
import { formacionAcademica } from '../../interfaces/formacionAcademica-interface';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  informacionAcademica:formacionAcademica[]=[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  // nextPage() {
  //   if (this.informacionAcademica.firstname && this.informacionAcademica.lastname && this.informacionAcademica.age) {
  //       this.ticketService.ticketInformation.informacionAcademica = this.informacionAcademica;
  //       this.router.navigate(['steps/seat']);

  //       return;
  //   }

  //   this.submitted = true;
  // }

}
