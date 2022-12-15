import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  
  items:MenuItem[]=[];
  position:number=0;
  
  formHV:FormGroup = this.fb.group({
    selectedModalidad:['',[Validators.required]],
    nombreTitulo:['',[Validators.required]],
    institucion:['', [Validators.required]],
    fechaGrado:[Date,[Validators.required]],
    tituloConvalidado:[false,[Validators.required]],

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
      this.items=[{
        label:'Formación Academica',
        routerLink:'hojavida'
      },
      {
        label:'Formación Complementaria',
        routerLink:'hojavida'
      },
      {
        label:'Experiencia Laboral',
        routerLink:'hojavida'
      },
      {
        label:'Experiencia Docente',
        routerLink:'hojavida'
      }
    ];
  }
}
