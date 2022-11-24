import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formacionAcademica } from '../../interfaces/formacionAcademica-interface';


@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  informacionAcademica:any;
  selectedCategory:any=null;
  submitted: boolean = false;

  categories:any[]=[{name:'Universidad', key:'U'},{name:'Doctorado', key:'D'}];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.selectedCategory=this.categories[1];
  }

  // nextPage() {
  //   if (this.informacionAcademica.nombreTitulo) {
  //       this.router.navigate(['formComp']);

  //       return;
  //   }

  //   this.submitted = true;
  // }

}
