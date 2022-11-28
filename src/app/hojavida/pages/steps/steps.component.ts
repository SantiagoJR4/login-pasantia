import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  
  items:MenuItem[]=[];
  // subscription:Subscription; //necesaria para mensaje flotante


  constructor() { }

  ngOnInit(): void {
      this.items=[{
        label:'Formación Academica',
        routerLink:'formAcad'
      },
      {
        label:'Formación Complementaria',
        routerLink:'formComp'
      },
      {
        label:'Experiencia Laboral',
        routerLink:'expLaboral'
      },
      {
        label:'Experiencia Docente',
        routerLink:'expDocente'
      }
    ];
  }
}
